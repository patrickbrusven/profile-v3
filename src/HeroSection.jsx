import { useEffect, useRef } from "react";
import UpperLeftBlob from "./UpperLeftBlob";
import LowerRightBLob from "./LowerRightBlob";
import "./HeroStyles.scss";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const content = useRef();
  const one = <h1 className="highlight-text">Hi, my name is</h1>;
  const two = <h2 className="heading-text">Patrick Brusven.</h2>;
  const three = (
    <h3 className="subheading-text">
      I'm a Front-End leaning <br></br>Full-Stack Developer.
    </h3>
  );
  const four = (
    <p className="content-text hero-card__content__description">
      My unique background in Retail Operations inspired me to become a
      self-taught software engineer. I'm a bit of a polygot who specializes in
      the modern JavaScript ecosystem.
    </p>
    // <p className="content-text">
    //   Retail Manager turned self-taught Web Developer. I
    //   specialize in the modern JavaScript ecosystem.
    // </p>
  );

  const items = [one, two, three, four];

  const { ref } = useInView({
    /* Optional options */
    threshold: 1,
    onChange: (inView) => {
      if (inView === true) {
        transitionOut();
      } else {
        transitionIn();
      }
    },
  });

  const transitionOut = () => {
    const nodes = content.current.children;
    if (nodes) {
      for (let i = 0; i < nodes.length; i++) {
        const element = nodes[i];
        element.classList.add("fadedown-leave");
      }
    }
  };

  const transitionIn = () => {
    const nodes = content.current.children;
    if (nodes) {
      for (let i = 0; i < nodes.length; i++) {
        const element = nodes[i];
        element.classList.remove("fadedown-leave");
      }
    }
  };

  useEffect(() => {
    const nodes = content.current.children;
    if (nodes) {
      setTimeout(() => {
        for (let i = 0; i < nodes.length; i++) {
          const element = nodes[i];
          element.classList.remove("fadeup-enter");
        }
      }, 200);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="hero-card">
          <div ref={content} className="hero-card__content">
            {items.map((item, i) => (
              <span
                key={i}
                className="fadeup-enter fadeup-enter-active"
                style={{ transitionDelay: `${i + 1}00ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div ref={ref} className="intersection-ref--hero"></div>
    </>
  );
}

export default HeroSection;
