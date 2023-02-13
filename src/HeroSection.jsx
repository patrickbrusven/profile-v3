import { useEffect, useRef } from "react";
import CornerBlobs from "./CornerBlobs";

function HeroSection() {
  const content = useRef();
  const one = <h1 className="highlight-text">Hi, my name is</h1>;
  const two = <h2 className="heading-text">Patrick Brusven.</h2>;
  const three = (
    <h3 className="subheading-text">
      I'm a Front-End leaning Full-Stack Developer.
    </h3>
  );
  const four = (
    <p className="content-text">
      My unique background in Retail Operations inspired me to become a
      self-taught software engineer. I'm a bit of a polygot who specializes in
      the modern JavScript ecosystem.
    </p>
  );

  const items = [one, two, three, four];

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
      <div className="hero-card">
        <CornerBlobs wrapperClass={"hero-card__background"}></CornerBlobs>
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
    </>
  );
}

export default HeroSection;
