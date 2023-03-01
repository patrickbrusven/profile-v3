import { useEffect, useState } from "react";

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const st = window.pageYOffset;
    if (st > 85 && scrollPosition < st) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setScrollPosition(st);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className="nav-bar"
      style={{
        transform: isVisible ? "translateY(0px)" : "translateY(-75px)",
      }}
    >
      <div className="nav-bar__container">
        <p>Patrick Brusven</p>
        <ol>
          <li>
            <span>&#9657;</span>About
          </li>
          <li>
            <span>&#9657;</span>Experience
          </li>
          <li>
            <span>&#9657;</span>Projects
          </li>
          <li>
            <span>&#9657;</span>Inspo
          </li>
          <li>Resume</li>
        </ol>
      </div>
    </nav>
  );
}

export default NavBar;
