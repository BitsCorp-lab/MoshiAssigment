import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ scY: null });

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollPosition({scY:scrollPosition})
};

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

  return scrollPosition;
}