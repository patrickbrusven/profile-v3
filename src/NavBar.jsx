import { useEffect, useState, useCallback } from "react";

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const st = window.pageYOffset;
    if (scrollPosition < st) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setScrollPosition(st);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
