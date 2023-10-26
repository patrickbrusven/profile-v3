import { useState } from "react";
import { calculateOpacity, calculateSpeed } from "./canvasHelper";
import CanvasBase from "./CanvasBase";

class Particle {
  constructor(ctx) {
    this.countUpdate = 1;
    this.x = ctx.canvas.width / 2;
    this.y = ctx.canvas.height / 2;
    this.size = Math.random() * 0.5 + 0.3;
    // this.size = Math.random() * 0.5 + 0.5;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.isClose = Math.random() < 0.35;
    this.isSlowest = Math.abs(this.speedX) < 0.5 && Math.abs(this.speedY) < 0.5;
    this.isSlow = Math.abs(this.speedX) < 1.2 && Math.abs(this.speedY) < 1.2;
    this.opacityValue = 0;
  }
}

function CanvasBackground({ isWarpSpeed, speed, isInitailLoad }) {
  const PARTICLES_LENGTH = 500;
  const [particlesArray, setParticlesArray] = useState([]);

  function buildParticlesArray(ctx) {
    let arr = [];
    for (let i = 0; i < PARTICLES_LENGTH; i++) {
      arr.push(new Particle(ctx));
    }
    setParticlesArray((oldArr) => {
      return [...oldArr, ...arr];
    });
  }

  function update(particle, ctx) {
    particle.countUpdate += 1;
    calculateSpeed(particle, isWarpSpeed, speed);
    particle.opacityValue = isInitailLoad ? 0 : calculateOpacity(particle, ctx);
  }

  function draw(ctx, particle) {
    ctx.fillStyle = `rgb(230, 241, 255, ${parseFloat(particle.opacityValue)})`;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      const particle = particlesArray[i];
      update(particle, canvas);
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
      <CanvasBase
        animate={animate}
        buildParticlesArray={buildParticlesArray}
        isInitailLoad={isInitailLoad}
      />
    </div>
  );
}

export default CanvasBackground;
