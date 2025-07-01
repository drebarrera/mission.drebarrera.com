import { useState, useEffect } from "react";

export default function useScreenHeight() {
  const [height, setHeight] = useState(0); // Initial value safe for SSR

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    // Set initial height after client hydration
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
}
