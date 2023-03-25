import { useEffect, useRef, useState, useMemo } from "react";

function useParticlesArray({ canvas, isWarpSpeed, ctx, arrLength = 10 }) {
  const countUpdate = useRef(1);
  const isClose = useRef(Math.random() < 0.35);
  const [x, setX] = useState(canvas.width / 2);
  const [y, setY] = useState(canvas.height / 2);
  const size = useRef(Math.random() * 0.5 + 1);

  const speedX = useRef(Math.random() * 3 - 1.5);
  const speedY = useRef(Math.random() * 3 - 1.5);
  const isSlowest = useRef(Math.abs(speedX) < 0.5 && Math.abs(speedY) < 0.5);
  const isSlow = useRef(Math.abs(speedX) < 1.2 && Math.abs(speedY) < 1.2);
  const [opacityValue, setOpacityValue] = useState(0);
  const [particlesArray, setParticlesArray] = useState([]);

  function update() {
    countUpdate.current = countUpdate.current += 1;
    calculateSpeed();
    setOpacityValue(calculateOpacity());
  }

  function calculateSpeed() {
    if (isClose) {
      const countCalc = countUpdate / 50;
      const increaseBy = countCalc > 1 ? countCalc : 1;
      if (isWarpSpeed) {
        setX((x) => (x += speedX * increaseBy * 2));
        setY((y) => (y += speedY * increaseBy * 2));
      } else {
        setX((x) => (x += speedX * increaseBy));
        setY((y) => (y += speedY * increaseBy));
      }
    } else {
      if (isWarpSpeed) {
        setX((x) => (x += speedX * 2));
        setY((y) => (y += speedY * 2));
      } else {
        setX((x) => (x += speedX));
        setY((y) => (y += speedY));
      }
    }
  }

  function calculateOpacity() {
    const threshold = 50;
    const diff = {
      x: Math.abs(x - canvas.width / 2),
      y: Math.abs(y - canvas.height / 2),
    };
    if (isSlowest) {
      if (diff.x < threshold && diff.y < threshold) {
        return 0;
      } else if (diff.x > threshold * 2 || diff.y > threshold * 2) {
        return 0.2;
      } else if (diff.x > threshold || diff.y > threshold) {
        return 0.1;
      } else {
        return 0.3;
      }
    } else if (isSlow) {
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

  function draw() {
    ctx.fillStyle = `rgb(100,255,218, ${parseFloat(opacityValue)})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  function init() {
    const particlesArray = [];
    for (let i = 0; i < parseFloat(arrLength); i++) {
      particlesArray.push(useParticle(canvas, isWarpSpeed, ctx));
    }
    setParticlesArray((particlesArray) => {
      return [...particlesArray, ...particlesArray];
    });
  }

  return {
    // countUpdate,
    // isClose,
    // x,
    // y,
    // size,
    // speedX,
    // speedY,
    // isSlowest,
    // isSlow,
    // opacityValue,
    // update,
    // draw,
    particlesArray,
  };
}

function CanvasBackground() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  const runCount = useRef(0);
  useEffect(() => {
    if (!runCount.current > 0 && canvasRef != null) {
      runCount.current = runCount.current += 1;
      setCanvas({
        ...canvasRef,
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setCtx(() => canvasRef.current.getContext("2d"));
    }
  }, [canvasRef]);

  const [isWarpSpeed] = useState(false);

  const particlesArray = useParticlesArray({ canvasRef, ctx, isWarpSpeed });

  // useEffect(() => {

  // window.addEventListener("resize", () => {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // });

  // function init() {
  //   const particlesArray = [];
  //   for (let i = 0; i < 1000; i++) {
  //     particlesArray.push(useParticle(canvas, isWarpSpeed, ctx));
  //   }
  //   setParticlesArray((particlesArray) => {
  //     return [...particlesArray, ...particlesArray];
  //   });
  // }

  //     function handleParticles() {
  //       for (let i = 0; i < particlesArray.length; i++) {
  //         const particle = particlesArray[i];
  //         particlesArray[i].update();
  //         particlesArray[i].draw();
  //         if (
  //           particle.x > canvas.width ||
  //           particle.x < 0 ||
  //           particle.y > canvas.height ||
  //           particle.y < 0
  //         ) {
  //           particlesArray.push(new Particle());
  //           particlesArray.splice(i, 1);
  //           i--;
  //         }
  //       }
  //     }

  //     function animate() {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       handleParticles();
  //       requestAnimationFrame(animate);
  //     }

  //   animate();

  // }, [particlesArray]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="canvas" id="canvas-1"></canvas>
    </div>
  );
}

export default CanvasBackground;
