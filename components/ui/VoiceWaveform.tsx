"use client";

import { useEffect, useRef } from "react";

/*
  SWM — SHARP SPEECH WAVEFORM

  IMPORTANT:
  This is NOT an equalizer.
  This is NOT a sine wave.

  The waveform is deliberately constructed as a
  continuous jagged audio trace with:
  - large upward spikes
  - large downward spikes
  - quiet passages
  - dense speech clusters
  - irregular peak spacing
*/

const WAVE = [
  // quiet
  0.02, -0.03, 0.05, -0.04, 0.08,
  -0.06, 0.03, -0.09, 0.06, -0.04,
  0.10, -0.08, 0.04, -0.06,

  // small speech
  0.16, -0.12, 0.22, -0.18, 0.12,
  -0.25, 0.18, -0.14, 0.28, -0.20,
  0.34, -0.17, 0.22, -0.31,

  // sharp burst
  0.12, -0.42, 0.20, -0.68, 0.31,
  -0.92, 0.18, 0.74, -0.35, 0.24,
  -0.58, 0.16, 0.88, -0.26, 0.42,
  -0.76, 0.20, 0.51, -0.17,

  // valley
  0.08, -0.10, 0.05, -0.13, 0.07,
  -0.06, 0.11, -0.08, 0.05,

  // dense cluster
  0.20, -0.28, 0.34, -0.19, 0.44,
  -0.37, 0.58, -0.25, 0.72, -0.31,
  0.91, -0.42, 0.63, -0.24, 0.47,
  -0.82, 0.29, -0.56, 0.17, -0.73,
  0.24, -0.44, 0.12, -0.62, 0.19,

  // deep quiet
  0.05, -0.08, 0.04, -0.06, 0.09,
  -0.05, 0.07, -0.10, 0.05,

  // MAJOR CENTRAL BURST
  0.22, -0.38, 0.16, -0.57, 0.32,
  -0.84, 0.24, -1.00, 0.18, 0.76,
  -0.29, 0.42, -0.67, 0.21, -0.94,
  0.16, -0.52, 0.34, -0.73, 0.20,
  -0.46, 0.15, -0.82, 0.26, -0.57,

  // quiet
  0.08, -0.12, 0.06, -0.09, 0.11,
  -0.07, 0.05, -0.13, 0.08,

  // final burst
  0.18, -0.26, 0.39, -0.18, 0.54,
  -0.32, 0.78, -0.21, 0.93, -0.37,
  0.62, -0.28, 0.84, -0.16, 0.49,
  -0.72, 0.23, -0.91, 0.18, 0.57,
  -0.30, 0.38, -0.64, 0.16, -0.45,

  // taper
  0.12, -0.08, 0.15, -0.10, 0.08,
  -0.06, 0.11, -0.07, 0.05, -0.03,
];

/*
  Add very fine irregular fluctuations between
  the deliberately designed large peaks.
*/

function fineNoise(
  index: number,
  time: number
) {
  return (
    Math.sin(index * 4.73 + time * 0.006) *
      0.035 +
    Math.sin(index * 9.17 - time * 0.004) *
      0.022 +
    Math.sin(index * 15.31 + time * 0.008) *
      0.014
  );
}

export default function VoiceWaveform() {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;

    const resize = () => {
      const rect =
        canvas.getBoundingClientRect();

      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );

      canvas.width =
        Math.round(rect.width * dpr);

      canvas.height =
        Math.round(rect.height * dpr);

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    const draw = (time: number) => {
      const rect =
        canvas.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
        The centre line.

        Large amplitude is intentional.
      */

      const centerY =
        height * 0.50;

      const amplitude =
        height * 0.47;

      /*
        -----------------------------------------
        BUILD THE ACTUAL SHARP TRACE
        -----------------------------------------
      */

      const points: {
        x: number;
        y: number;
      }[] = [];

      /*
        Interpolate the hand-designed waveform
        into many points so the final result is
        one continuous razor-sharp line.
      */

      const subdivisions = 7;

      for (
        let i = 0;
        i < WAVE.length - 1;
        i++
      ) {
        const a = WAVE[i];
        const b = WAVE[i + 1];

        for (
          let j = 0;
          j < subdivisions;
          j++
        ) {
          const t =
            j / subdivisions;

          /*
            Linear interpolation is deliberate.
            It preserves sharp peaks and valleys.
          */

          const value =
            a * (1 - t) +
            b * t;

          const globalIndex =
            i * subdivisions + j;

          const micro =
            fineNoise(
              globalIndex,
              time
            );

          /*
            Very small vertical motion.
            The dramatic shape does NOT disappear.
          */

          const animatedValue =
            value + micro;

          const normalizedX =
            globalIndex /
            ((WAVE.length - 1) *
              subdivisions);

          points.push({
            x:
              normalizedX *
              width,

            y:
              centerY +
              animatedValue *
                amplitude,
          });
        }
      }

      /*
        Add final point.
      */

      points.push({
        x: width,
        y:
          centerY +
          WAVE[WAVE.length - 1] *
            amplitude,
      });

      /*
        =========================================
        DRAW FUNCTION
        =========================================
      */

      const drawWave = (
        strokeStyle: string,
        lineWidth: number,
        shadowBlur: number
      ) => {
        ctx.beginPath();

        ctx.moveTo(
          points[0].x,
          points[0].y
        );

        for (
          let i = 1;
          i < points.length;
          i++
        ) {
          ctx.lineTo(
            points[i].x,
            points[i].y
          );
        }

        ctx.strokeStyle =
          strokeStyle;

        ctx.lineWidth =
          lineWidth;

        ctx.lineCap =
          "butt";

        ctx.lineJoin =
          "miter";

        ctx.shadowColor =
          "#FF5A00";

        ctx.shadowBlur =
          shadowBlur;

        ctx.stroke();
      };

      /*
        =========================================
        BIG ORANGE ATMOSPHERE
        =========================================
      */

      ctx.save();

      drawWave(
        "rgba(255,70,0,0.20)",
        15,
        32
      );

      ctx.restore();

      /*
        =========================================
        STRONG NEON GLOW
        =========================================
      */

      ctx.save();

      drawWave(
        "rgba(255,75,0,0.68)",
        6,
        18
      );

      ctx.restore();

      /*
        =========================================
        SHARP ORANGE CORE
        =========================================
      */

      ctx.save();

      drawWave(
        "#FF5A00",
        2.1,
        8
      );

      ctx.restore();

      /*
        =========================================
        HOT INNER EDGE
        =========================================
      */

      ctx.save();

      drawWave(
        "rgba(255,242,225,0.95)",
        0.65,
        0
      );

      ctx.restore();

      /*
        =========================================
        SUBTLE BASELINE
        =========================================
      */

      ctx.save();

      ctx.beginPath();

      ctx.moveTo(
        0,
        centerY
      );

      ctx.lineTo(
        width,
        centerY
      );

      ctx.strokeStyle =
        "rgba(255,90,0,0.25)";

      ctx.lineWidth =
        0.35;

      ctx.shadowColor =
        "#FF5A00";

      ctx.shadowBlur = 5;

      ctx.stroke();

      ctx.restore();

      animationFrame =
        requestAnimationFrame(
          draw
        );
    };

    animationFrame =
      requestAnimationFrame(
        draw
      );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <div
      className="relative w-full"
      style={{
        height: "180px",
      }}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
      />
    </div>
  );
}