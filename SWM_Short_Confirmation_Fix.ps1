# SWM Short Confirmation Fix
# Run from: C:\Users\lenovo\Documents\SWM-MVP-WORKING
# This creates a backup and patches VoicePanel.tsx.

$ErrorActionPreference = "Stop"

$file = ".\components\ai\VoicePanel.tsx"

if (!(Test-Path $file)) {
    Write-Host "VoicePanel.tsx was not found." -ForegroundColor Red
    exit 1
}

$backup = ".\components\ai\VoicePanel.tsx.backup-before-short-confirmation-fix"
Copy-Item $file $backup -Force

$text = Get-Content $file -Raw

$old = @'
      if (!event.results[lastResultIndex].isFinal) {
        interimTranscriptRef.current = interim;
        console.log(
          "SWM Voice Interim:",
          interim
        );
        return;
      }
'@

$new = @'
      if (!event.results[lastResultIndex].isFinal) {
        interimTranscriptRef.current = interim;
        console.log(
          "SWM Voice Interim:",
          interim
        );

        /*
         * Chrome can deliver very short confirmations such as
         * "yes", "no", "yeah", "yep", "okay", or "sure"
         * only as an interim result and then immediately end
         * recognition without producing a final result.
         *
         * Process the short confirmation immediately. The
         * interim buffer is cleared so the later onend handler
         * cannot process the same word twice.
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
      }
'@

if (!$text.Contains($old)) {
    Write-Host "The expected recognition block was not found." -ForegroundColor Yellow
    Write-Host "No changes were made. Your backup is at:" $backup
    exit 2
}

$text = $text.Replace($old, $new)

Set-Content $file $text -Encoding UTF8

Write-Host ""
Write-Host "DONE - Short confirmation fix applied." -ForegroundColor Green
Write-Host "Backup created:" $backup
Write-Host ""
Write-Host "Now refresh the SWM app and test:"
Write-Host "  YES"
Write-Host "  NO"
Write-Host "  YEAH"
Write-Host "  YEP"
Write-Host "  OKAY"
