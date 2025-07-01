import { createContext, useContext, useRef, useState } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [scrollYValue, setScrollYValue] = useState(null);

  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  useMotionValueEvent(smoothYProgress, "change", (latest) => {
    setScrollYValue(latest);
  });

  return (
    <ScrollContext.Provider value={{ scrollYProgress, smoothYProgress, containerRef, scrollYValue }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollProgress() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollProgress must be used within a ScrollProvider");
  }
  return context;
}

