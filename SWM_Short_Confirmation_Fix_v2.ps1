$ErrorActionPreference = "Stop"

$file = ".\components\ai\VoicePanel.tsx"

if (!(Test-Path $file)) {
    Write-Host "VoicePanel.tsx was not found." -ForegroundColor Red
    exit 1
}

$backup = ".\components\ai\VoicePanel.tsx.backup-before-short-confirmation-fix-v2"
Copy-Item $file $backup -Force

$text = Get-Content $file -Raw

$needle = '        console.log(`n          "SWM Voice Interim:",`n          interim`n        );`n        return;'

# PowerShell here-string version of the actual block, avoiding dependence on
# whitespace outside the block.
$pattern = '(?ms)(\s*console\.log\(\s*"SWM Voice Interim:",\s*interim\s*\);\s*)(return;)'

$replacement = @'
        console.log(
          "SWM Voice Interim:",
          interim
        );

        /*
         * Chrome can end very short confirmations such as
         * "yes", "no", "yeah", or "yep" after delivering
         * only an interim result. Process those words now.
         * The existing processing guard prevents a duplicate
         * response if Chrome later delivers a final result.
         */
        const normalizedInterim =
          interim
            .toLowerCase()
            .replace(/[.,!?]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        if (
          /^(yes|yeah|yep|no|nope|ok|okay|sure)$/i.test(
            normalizedInterim
          ) &&
          !processingRef.current &&
          !manuallyStoppedRef.current
        ) {
          interimTranscriptRef.current = "";
          console.log(
            "SWM VOICE: processing short interim confirmation:",
            interim
          );
          void sendToConcierge(interim.trim());
        }

        return;
'@

if (-not [regex]::IsMatch($text, $pattern)) {
    Write-Host "The expected interim-result block was not found." -ForegroundColor Red
    Write-Host "No changes were made. Backup created at:" $backup
    exit 2
}

$text = [regex]::Replace($text, $pattern, $replacement, 1)

Set-Content $file $text -Encoding UTF8

Write-Host ""
Write-Host "DONE - Short confirmation fix v2 applied." -ForegroundColor Green
Write-Host "Backup:" $backup
Write-Host ""
Write-Host "Refresh the app and test YES first."
