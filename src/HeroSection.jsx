import { useEffect, useRef, useState } from "react";
import IntersectionObserver from "./IntersectionObserver";
import "./HeroStyles.scss";
// import { useScrollDirection } from "react-use-scroll-direction";

function HeroSection() {
  // const {
  //   isScrolling,
  //   isScrollingX,
  //   isScrollingY,
  //   isScrollingUp,
  //   isScrollingDown,
  //   isScrollingLeft,
  //   isScrollingRight,
  //   scrollDirection,
  // } = useScrollDirection();

  // const [isAnimating, setisAnimating] = useState(false);

  const updateTopObserver = (data) => {
    if (data === false) {
      transitionOut();
    } else {
      transitionIn();
    }
  };

  const updateBottomObserver = (data) => {
    if (data === true) {
      transitionIn();
    }
  };

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
      My background in Retail Management inspired me to become a
      self-taught developer. I'm a bit of a polygot who specializes in
      the modern JavaScript ecosystem.
    </p>
  );

  // const five = <button className="connect-button">Let's Connect</button>;
  const five = (
    <a className="connect-button" href="mailto:pjbrusven@gmail.com">
      Let's Connect
    </a>
  );

  const items = [one, two, three, four, five];

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
          <IntersectionObserver
            observerClass="intersection-hero-top--top"
            wrapperClass="intersection-hero-top"
            threshold={1}
            setValue={updateTopObserver}
          />
          <IntersectionObserver
            observerClass="intersection-hero-bottom--bottom"
            wrapperClass="intersection-hero-bottom"
            threshold={1}
            setValue={updateBottomObserver}
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
