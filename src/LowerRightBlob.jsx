import { useEffect } from "react";

function addClass(htmlObj, className) {
  let arr;
  arr = Array.from(htmlObj);
  arr.forEach((el) => {
    el.classList.add(`${className}`);
  });
  arr.reverse().forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove(`${className}`);
    }, `${i + 1}00`);
  });
}

function LowerRightBLob({ wrapperClass }) {
  useEffect(() => {
    const collection = document.querySelectorAll(".animate-me");
    collection.forEach((htmlObj) => {
      const children = htmlObj.children;
      addClass(children, "disappear");
    });
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
      <g className="animate-me" transform="translate(900, 600)">
        <path
          className="disappear"
          d="M-432.7 0C-427.6 -32.5 -422.5 -65 -406.5 -92.8C-390.6 -120.5 -363.7 -143.5 -341.5 -164.4C-319.2 -185.4 -301.7 -204.2 -290.1 -231.3C-278.4 -258.4 -272.7 -293.9 -256.3 -321.3C-239.8 -348.8 -212.6 -368.3 -183.5 -381.1C-154.5 -394 -123.5 -400.2 -92.6 -405.6C-61.7 -410.9 -30.8 -415.5 0 -420L0 0Z"
          fill="var(--darkist)"
        ></path>
        <path
          className="disappear"
          d="M-346.1 0C-342.1 -26 -338 -52 -325.2 -74.2C-312.5 -96.4 -290.9 -114.8 -273.2 -131.6C-255.4 -148.3 -241.4 -163.3 -232 -185.1C-222.7 -206.8 -218.2 -235.1 -205 -257.1C-191.8 -279 -170.1 -294.6 -146.8 -304.9C-123.6 -315.2 -98.8 -320.2 -74.1 -324.5C-49.3 -328.8 -24.7 -332.4 0 -336L0 0Z"
          fill="var(--darker)"
        ></path>
        <path
          className="disappear"
          d="M-259.6 0C-256.6 -19.5 -253.5 -39 -243.9 -55.7C-234.3 -72.3 -218.2 -86.1 -204.9 -98.7C-191.5 -111.2 -181 -122.5 -174 -138.8C-167.1 -155.1 -163.6 -176.3 -153.8 -192.8C-143.9 -209.3 -127.6 -221 -110.1 -228.7C-92.7 -236.4 -74.1 -240.1 -55.5 -243.3C-37 -246.6 -18.5 -249.3 0 -252L0 0Z"
          fill="var(--dark)"
        ></path>
        <path
          className="disappear"
          d="M-173.1 0C-171 -13 -169 -26 -162.6 -37.1C-156.2 -48.2 -145.5 -57.4 -136.6 -65.8C-127.7 -74.1 -120.7 -81.7 -116 -92.5C-111.4 -103.4 -109.1 -117.6 -102.5 -128.5C-95.9 -139.5 -85 -147.3 -73.4 -152.4C-61.8 -157.6 -49.4 -160.1 -37 -162.2C-24.7 -164.4 -12.3 -166.2 0 -168L0 0Z"
          fill="var(--light)"
        ></path>
        <path
          className="disappear"
          d="M-86.5 0C-85.5 -6.5 -84.5 -13 -81.3 -18.6C-78.1 -24.1 -72.7 -28.7 -68.3 -32.9C-63.8 -37.1 -60.3 -40.8 -58 -46.3C-55.7 -51.7 -54.5 -58.8 -51.3 -64.3C-48 -69.8 -42.5 -73.7 -36.7 -76.2C-30.9 -78.8 -24.7 -80 -18.5 -81.1C-12.3 -82.2 -6.2 -83.1 0 -84L0 0Z"
          fill="var(--lighter)"
        ></path>
      </g>
    </svg>
  );
}

export default LowerRightBLob;
