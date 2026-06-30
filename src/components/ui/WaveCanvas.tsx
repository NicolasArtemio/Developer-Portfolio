import { useEffect, useRef } from "react";

const WaveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const waves: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
    }[] = [];
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (waves.length < 12) {
        waves.push({ x: mouseX, y: mouseY, radius: 0, alpha: 0.25, speed: 1.8 });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Ondas automáticas cada cierto tiempo
    const autoWave = setInterval(() => {
      waves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0,
        alpha: 0.10,
        speed: 1.0,
      });
    }, 2000);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 229, 160, ${w.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        w.radius += w.speed;
        w.alpha -= 0.006;

        if (w.alpha <= 0) waves.splice(i, 1);
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(autoWave);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ pointerEvents: "auto", zIndex: 0 }}
    />
  );
};

export default WaveCanvas;
