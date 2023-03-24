import { useEffect, useRef, useState } from "react";

function CanvasBackground() {
  const canvasRef = useRef(null);
  const runCount = useRef(0);
  // const [isWarpSpeed, setIsWarpSpeed] = useState(false);
  // const [particlesArray, setParticlesArray] = useState([]);

  useEffect(() => {
    if (!runCount.current > 0 && canvasRef != null) {
      runCount.current = runCount.current += 1;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particlesArray = [];
      let isWarpSpeed = false;

      class Particle {
        constructor() {
          this.countUpdate = 1;
          this.isClose = Math.random() < 0.35;
          this.x = canvas.width / 2;
          this.y = canvas.height / 2;
          this.size = Math.random() * 0.5 + 1;

          this.speedX = Math.random() * 3 - 1.5;
          this.speedY = Math.random() * 3 - 1.5;
          this.isSlowest =
            Math.abs(this.speedX) < 0.5 && Math.abs(this.speedY) < 0.5;
          this.isSlow =
            Math.abs(this.speedX) < 1.2 && Math.abs(this.speedY) < 1.2;
          this.opacityValue = 0;
        }

        update() {
          this.countUpdate += 1;
          this.calculateSpeed();
          this.opacityValue = this.calculateOpacity();
        }

        calculateSpeed() {
          if (this.isClose) {
            const countCalc = this.countUpdate / 50;
            const increaseBy = countCalc > 1 ? countCalc : 1;
            if (isWarpSpeed) {
              this.x += this.speedX * increaseBy * 2;
              this.y += this.speedY * increaseBy * 2;
            } else {
              this.x += this.speedX * increaseBy;
              this.y += this.speedY * increaseBy;
            }
          } else {
            if (isWarpSpeed) {
              this.x += this.speedX * 2;
              this.y += this.speedY * 2;
            } else {
              this.x += this.speedX;
              this.y += this.speedY;
            }
          }
        }

        calculateOpacity() {
          const threshold = 50;
          const diff = {
            x: Math.abs(this.x - canvas.width / 2),
            y: Math.abs(this.y - canvas.height / 2),
          };
          if (this.isSlowest) {
            if (diff.x < threshold && diff.y < threshold) {
              return 0;
            } else if (diff.x > threshold * 2 || diff.y > threshold * 2) {
              return 0.2;
            } else if (diff.x > threshold || diff.y > threshold) {
              return 0.1;
            } else {
              return 0.3;
            }
          } else if (this.isSlow) {
            if (diff.x < threshold && diff.y < threshold) {
              return 0;
            } else if (diff.x > threshold * 3 || diff.y > threshold * 3) {
              return 0.3;
            } else if (diff.x > threshold * 2 || diff.y > threshold * 2) {
              return 0.2;
            } else if (diff.x > threshold || diff.y > threshold) {
              return 0.1;
            } else {
              return 0.4;
            }
          }
          if (diff.x < threshold && diff.y < threshold) {
            return 0;
          } else if (diff.x > threshold * 9 || diff.y > threshold * 9) {
            return 0.9;
          } else if (diff.x > threshold * 8 || diff.y > threshold * 8) {
            return 0.8;
          } else if (diff.x > threshold * 7 || diff.y > threshold * 7) {
            return 0.7;
          } else if (diff.x > threshold * 6 || diff.y > threshold * 6) {
            return 0.6;
          } else if (diff.x > threshold * 5 || diff.y > threshold * 5) {
            return 0.5;
          } else if (diff.x > threshold * 4 || diff.y > threshold * 4) {
            return 0.4;
          } else if (diff.x > threshold * 3 || diff.y > threshold * 3) {
            return 0.3;
          } else if (diff.x > threshold * 2 || diff.y > threshold * 2) {
            return 0.2;
          } else if (diff.x > threshold || diff.y > threshold) {
            return 0.1;
          } else {
            return 1;
          }
        }

        draw() {
          ctx.fillStyle = `rgb(100,255,218, ${parseFloat(this.opacityValue)})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      window.addEventListener("click", () => {
        // setIsWarpSpeed(!isWarpSpeed);
        isWarpSpeed = !isWarpSpeed;
      });

      function init() {
        for (let i = 0; i < 1000; i++) {
          // setParticlesArray((particlesArray) => {
          //   return [...particlesArray, new Particle()];
          // });
          particlesArray.push(new Particle());
        }
      }

      function handleParticles() {
        // console.log(particlesArray.length);
        for (let i = 0; i < particlesArray.length; i++) {
          const particle = particlesArray[i];
          particlesArray[i].update();
          particlesArray[i].draw();
          if (
            particle.x > canvas.width ||
            particle.x < 0 ||
            particle.y > canvas.height ||
            particle.y < 0
          ) {
            particlesArray.push(new Particle());
            particlesArray.splice(i, 1);
            i--;
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
      }

      init();
      animate();
    }
  }, [canvasRef]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="canvas" id="canvas-1"></canvas>
    </div>
  );
}

export default CanvasBackground;
