import { useEffect, useState } from "react";
let starterStyle = {
  width: "92px",
  left: "0px",
  bottom: "-1px",
};
function ExperienceSection() {
  const [slide, setSlide] = useState(0);
  const [navStyle, setNavStyle] = useState(starterStyle);

  useEffect(() => {
    const tabRect = document
      .getElementById(`tab-${slide}`)
      .getBoundingClientRect();
    const navRect = document.getElementById("tab-nav").getBoundingClientRect();
    updateUnderline(tabRect, navRect);
  }, [slide]);

  const updateUnderline = (tabRect, navRect) => {
    const clacLeft = tabRect.left - navRect.left;
    const styleUpdate = {
      width: `${tabRect.width}px`,
      left: `${clacLeft}px`,
    };
    setNavStyle(styleUpdate);
  };

  return (
    <div className="experience-section">
      <div>
        <h5 className="subheading-text">Experience</h5>
      </div>
      <div className="experience-section__nav" id="tab-nav">
        <span className="slected-tab-underline" style={navStyle}></span>
        <button
          id="tab-0"
          onClick={() => setSlide(0)}
          className={slide === 0 ? "current-tab" : undefined}
        >
          Sparc Agency
        </button>
        <button
          id="tab-1"
          onClick={() => setSlide(1)}
          className={slide === 1 ? "current-tab" : undefined}
        >
          Open Source
        </button>
        <button
          id="tab-2"
          onClick={() => setSlide(2)}
          className={slide === 2 ? "current-tab" : undefined}
        >
          Freelance
        </button>
      </div>
      <div className="experience-section__card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aperiam deserunt repudiandae unde minima. Perspiciatis laudantium
          atque fugit non quod ipsam distinctio nobis, voluptates ab vero earum,
          dolore reiciendis dolorem.
        </p>
      </div>
    </div>
  );
}

export default ExperienceSection;
