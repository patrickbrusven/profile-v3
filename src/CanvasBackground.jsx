import { useEffect, useRef, useState } from "react";

class Particle {
  constructor(ctx) {
    this.x = ctx.canvas.width / 2;
    this.y = ctx.canvas.height / 2;
    this.size = Math.random() * 0.5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.opacity = 0.5;
  }
}

function Canvas({ animate, buildParticlesArray }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    buildParticlesArray(ctx);
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

function CanvasBackground() {
  const [particlesArray, setParticlesArray] = useState([]);

  function buildParticlesArray(ctx) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(new Particle(ctx));
    }
    setParticlesArray((oldArr) => {
      return [...oldArr, ...arr];
    });
  }

  function update(particle) {
    particle.x += particle.speedX;
    particle.y += particle.speedY;
  }

  function draw(ctx, particle) {
    ctx.fillStyle = `rgb(100,255,218, ${particle.opacity})`;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      const particle = particlesArray[i];
      update(particle);
      draw(ctx, particle);
      if (
        particle.x > canvas.width ||
        particle.x < 0 ||
        particle.y > canvas.height ||
        particle.y < 0
      ) {
        particlesArray.push(new Particle(ctx));
        particlesArray.splice(i, 1);
        i--;
      }
    }
  }
  return (
    <div className="canvas-container">
      <Canvas animate={animate} buildParticlesArray={buildParticlesArray} />
    </div>
  );
}

export default CanvasBackground;
