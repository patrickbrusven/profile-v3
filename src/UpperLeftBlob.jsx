import { useEffect, forwardRef, useImperativeHandle, useRef } from "react";

const UpperLeftBlob = forwardRef(({ wrapperClass }, ref) => {
  const collectionRef = useRef();
  const animateIn = () => {
    let arr;
    arr = Array.from(collectionRef.current.children);
    arr.reverse().forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove(`disappear`);
      }, `${i + 1}00`);
    });
  };
  useImperativeHandle(ref, () => ({
    animateOut() {
      let arr;
      arr = Array.from(collectionRef.current.children);
      arr.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add(`disappear`);
        }, `${i + 1}00`);
      });
    },
    animateIn,
  }));

  useEffect(() => {
    animateIn(collectionRef.current.children);
  }, []);

  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className={wrapperClass}
    >
      <g ref={collectionRef} className="animate-me" transform="translate(0, 0)">
        <path
          className="disappear"
          d="M407 0C401.9 29.5 396.7 59 390.9 89.2C385.2 119.5 378.7 150.4 359.5 173.1C340.3 195.8 308.3 210.2 286.9 228.8C265.6 247.5 254.9 270.4 242.5 304.1C230.1 337.9 216 382.5 187.7 389.8C159.4 397.1 116.9 367.1 83.2 364.6C49.6 362.1 24.8 387.1 0 412L0 0Z"
          fill="var(--darkist)"
        ></path>
        <path
          className="disappear"
          d="M325.6 0C321.5 23.6 317.4 47.2 312.8 71.4C308.1 95.6 303 120.4 287.6 138.5C272.2 156.6 246.6 168.1 229.5 183.1C212.5 198 203.9 216.3 194 243.3C184.1 270.3 172.8 306 150.2 311.9C127.5 317.7 93.5 293.7 66.6 291.7C39.7 289.7 19.8 309.6 0 329.6L0 0Z"
          fill="var(--darker)"
        ></path>
        <path
          className="disappear"
          d="M244.2 0C241.1 17.7 238 35.4 234.6 53.5C231.1 71.7 227.2 90.3 215.7 103.9C204.2 117.5 185 126.1 172.2 137.3C159.4 148.5 153 162.2 145.5 182.5C138.1 202.7 129.6 229.5 112.6 233.9C95.6 238.3 70.1 220.3 49.9 218.8C29.7 217.3 14.9 232.2 0 247.2L0 0Z"
          fill="var(--dark)"
        ></path>
        <path
          className="disappear"
          d="M162.8 0C160.7 11.8 158.7 23.6 156.4 35.7C154.1 47.8 151.5 60.2 143.8 69.2C136.1 78.3 123.3 84.1 114.8 91.5C106.2 99 102 108.1 97 121.7C92.1 135.2 86.4 153 75.1 155.9C63.8 158.9 46.8 146.9 33.3 145.8C19.8 144.8 9.9 154.8 0 164.8L0 0Z"
          fill="var(--light)"
        ></path>
        <path
          className="disappear"
          d="M81.4 0C80.4 5.9 79.3 11.8 78.2 17.8C77 23.9 75.7 30.1 71.9 34.6C68.1 39.2 61.7 42 57.4 45.8C53.1 49.5 51 54.1 48.5 60.8C46 67.6 43.2 76.5 37.5 78C31.9 79.4 23.4 73.4 16.6 72.9C9.9 72.4 5 77.4 0 82.4L0 0Z"
          fill="var(--lighter)"
        ></path>
      </g>
    </svg>
  );
});

export default UpperLeftBlob;
