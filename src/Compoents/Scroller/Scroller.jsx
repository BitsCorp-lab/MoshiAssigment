import { useEffect, useState } from "react";
import useMousePosition from "../../Hooks/useMousePosition";
import "./Scroller.css";
import useScrollPosition from "../../Hooks/useScrollPosition";
const Scroller = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const { x, y } = useMousePosition();
  const { scY } = useScrollPosition();
  console.log(x, y);
  const handleMouseDown = () => {
    setIsScroll(!isScroll);
  };

  useEffect(() => {
    if (isScroll && y < 450) {
      window.scrollTo({ top: scY + 20, behavior: "smooth" });
    }
  }, [y]);

  return (
    <>
      <div
        onClick={handleMouseDown}
        className="scroller"
        style={isScroll ? { left: `${x - 30}px`, top: `${y - 30}px` } : null}
      ></div>
    </>
  );
};

export default Scroller;
