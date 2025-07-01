import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "../TypewriterText";
import TypewriterDiv from "../TypewriterDiv";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import SlideItem from "./SlideItem";
import ScrollTypewriterDiv from "../ScrollTypewriterDiv";

export default function BandungIndonesiaSlide() {

  const [slide, setSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the first typewriter when the component loads
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000)
  }, []);

  function nextSlide() {
    setSlide(slide + 1);
  }

  return (
    <section className="fixed w-full min-h-screen flex justify-center">
      <motion.div className="absolute w-full h-full flex justify-center items-center">
        <SlideItem show={[0.06, 0.15]} duration={[0.02, 0.02]}>
          <motion.div className=" w-fit border-2 border-white pl-[6px] pr-[10px] py-[2px] text-white bg-[rgba(0,0,0,0.7)]" style={{borderRadius: "20px"}}>
            <ScrollTypewriterDiv
              className="h-fit flex flex-row gap-[5px] items-center"
              show={[0.06, 0.15]}
              duration={[0.02, 0.02]}
              content={[
                {node: <svg fill="white" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                {node: "Bandung, Indonesia 🇮🇩", className: "text-xl md:text-2xl font-regular whitespace-nowrap"},
              ]}
            />
          </motion.div>
        </SlideItem>
      </motion.div>
    </section>
  );
} 