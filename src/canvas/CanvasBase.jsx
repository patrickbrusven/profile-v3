import { useRef, useEffect } from "react";

function CanvasBase({ animate, buildParticlesArray }) {
  const canvasRef = useRef(null);
  const buildParticlesCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    if (buildParticlesCount.current === 0) {
      buildParticlesArray(ctx);
      buildParticlesCount.current += buildParticlesCount.current += 1;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const render = () => {
      animate(ctx, canvas);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [animate]);

  return <canvas ref={canvasRef} className="canvas" id="canvas-1"></canvas>;
}

export default CanvasBase;
