export const calculateOpacity = (particle, canvas) => {
  const threshold = 50;
  const diff = {
    x: Math.abs(particle.x - canvas.width / 2),
    y: Math.abs(particle.y - canvas.height / 2),
  };
  if (particle.isSlowest) {
    if (diff.x < threshold && diff.y < threshold) {
      return 0;
    } else if (diff.x > threshold * 2 || diff.y > threshold * 2) {
      return 0.2;
    } else if (diff.x > threshold || diff.y > threshold) {
      return 0.1;
    } else {
      return 0.3;
    }
  } else if (particle.isSlow) {
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
};

export const calculateSpeed = (particle, isWarpSpeed) => {
  if (particle.isClose) {
    const countCalc = particle.countUpdate / 50;
    const increaseBy = countCalc > 1 ? countCalc : 1;
    if (isWarpSpeed) {
      particle.x += particle.speedX * increaseBy * 2;
      particle.y += particle.speedY * increaseBy * 2;
    } else {
      particle.x += particle.speedX * increaseBy;
      particle.y += particle.speedY * increaseBy;
    }
  } else {
    if (isWarpSpeed) {
      particle.x += particle.speedX * 2;
      particle.y += particle.speedY * 2;
    } else {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
    }
  }
};
