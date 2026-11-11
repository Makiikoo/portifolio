import { useEffect, useRef } from "react";

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const characters =
      "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];
    let animationFrame = 0;
    let lastFrame = 0;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function resizeCanvas() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas!.width = window.innerWidth * pixelRatio;
      canvas!.height = window.innerHeight * pixelRatio;

      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;

      context!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.ceil(window.innerWidth / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    }

    function draw(timestamp: number) {
      if (timestamp - lastFrame < 45) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      lastFrame = timestamp;

      context!.fillStyle = "rgba(5, 5, 8, 0.08)";
      context!.fillRect(0, 0, window.innerWidth, window.innerHeight);

      context!.font = `${fontSize}px monospace`;

      drops.forEach((drop, index) => {
        const character =
          characters[Math.floor(Math.random() * characters.length)];

        const x = index * fontSize;
        const y = drop * fontSize;

        context!.fillStyle = "#00ff66";
        context!.fillText(character, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[index] = 0;
        } else {
          drops[index]++;
        }
      });

      animationFrame = requestAnimationFrame(draw);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (!reducedMotion.matches) {
      animationFrame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.6]"
    />
  );
}

export default MatrixRain;
