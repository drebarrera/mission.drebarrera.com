import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "../TypewriterText";
import TypewriterDiv from "../TypewriterDiv";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import SlideItem from "./SlideItem";
import ScrollTypewriterDiv from "../ScrollTypewriterDiv";
import ScrollTypewriterText from "../ScrollTypewriterText";
import HispanicHackers from "../HispanicHackers";

export default function MissionAlignmentSlide() {

  const [slide, setSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the first typewriter when the component loads
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  function nextSlide() {
    setSlide(slide + 1);
  }

  return (
    <section className="fixed w-full min-h-screen p-4 sm:p-6 md:p-[7%]">
      <motion.div
        className="flex flex-col gap-6 sm:gap-8 md:gap-[50px] text-center text-white w-full max-w-[1200px] mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div className="w-full h-full p-2 sm:p-4 md:p-[15px] rounded-lg flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-[35px] items-stretch lg:items-start justify-end">
          <motion.div className="w-full flex flex-col items-start grow-0 gap-3 sm:gap-5 md:gap-[20px]">
            <motion.div className="w-full flex flex-col items-start">
              <ScrollTypewriterText 
                className="text-2xl sm:text-4xl md:text-6xl font-bold text-left flex items-start grow-0 leading-[1.25]"
                show={[0.4, 0.6]}
                duration={[0.02, 0.02]}
              >
                  Aligned for Global Impact
              </ScrollTypewriterText>
              <div className="w-full flex justify-start">
                <SlideItem show={[0.4, 0.6]} duration={[0.02, 0.02]}>
                  <p className="hidden md:block w-full font-[Courier] text-base sm:text-xl md:text-2xl text-right text-[#FFC337] whitespace-pre-wrap">{"< The Intersection of Mission and Passion  />"}</p>
                  <p className="md:hidden w-full font-[Courier] text-base sm:text-xl md:text-2xl text-right text-[#FFC337] whitespace-pre-wrap">{"< Mission + Passion  />"}</p>
                </SlideItem>
              </div>
            </motion.div>
            <SlideItem show={[0.4, 0.6]} duration={[0.02, 0.02]}>
              <p className="text-white text-sm sm:text-base md:text-lg text-left">My passion extends beyond my own community - it reaches every culture, language, & human system I've had the privilege of encountering. I've lived & worked across four continents, learning to adapt and translate for different contexts. I bring the same orientation to my work: designing clear process documentation and adaptable prototypes as a baseline for every problem I approach. </p>
            </SlideItem>
            <SlideItem show={[0.5, 0.6]} duration={[0.02, 0.02]}>
              <motion.div className="w-fit border-2 border-white pl-2 pr-3 py-1 text-white bg-[rgba(0,0,0,0.7)]" style={{borderRadius: "20px"}}>
                <ScrollTypewriterDiv
                  className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                  show={[0.5, 0.6]}
                  duration={[0.02, 0.02]}
                  content={[
                    {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                    {node: "Tetebatu, Indonesia 🇮🇩", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                  ]}
                />
              </motion.div>
            </SlideItem>
            <motion.div className="flex flex-row flex-wrap gap-3 sm:gap-5 md:gap-[20px]">
              <SlideItem show={[0.425, 0.6]} duration={[0.02, 0.02]}>
                <div className="w-[150px] md:w-[275px] h-full border-2 p-[10px] bg-[rgba(0,0,0,0.5)] border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-center items-center gap-[2px] md:gap-[5px]">
                <svg className="h-[40px] md:h-[60px]" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><title>trumph-arch-france-ico</title><path d="M8 4v2m0 4v2M4 8h2m4 0h2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="M4.651 17.1a1.069 1.069 0 1 1-1.069-1.069A1.07 1.07 0 0 1 4.651 17.1"/><path d="M57.934 17h-45a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2h45a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2M58 26H13a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2h45a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2m-44.066 0v36h12V42.7a9.5 9.5 0 1 1 19 0V62h12V26ZM48 33h5m-35 0h5m-9.066 9.039h12M45 42h11M44.934 55.118h12M14 55h12m24.934-12.556v19m-31-19v19" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="M14 22v-5m43 5v-5" fill="none" stroke-linejoin="round" stroke-width="3"/></svg>
                  <p className="text-sm md:text-xl font-bold">Passion for Culture</p>
                  <p className="text-xs md:text-base"><em>I expand my world view through cultural immersion.</em></p>
                </div>
              </SlideItem>
              <SlideItem show={[0.45, 0.6]} duration={[0.02, 0.02]}>
                <div className="w-[150px] md:w-[275px] h-full border-2 p-[10px] bg-[rgba(0,0,0,0.5)] border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-center items-center gap-[2px] md:gap-[5px]">
                  <svg className="h-[40px] md:h-[60px]" viewBox="0 -8 72 72" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="m59.25 12.42-.83.27-4.42.39-1.27 2-.91-.29-3.59-3.19-.52-1.66L47 8.16l-2.23-2-2.63-.51-.06 1.2 2.58 2.52 1.26 1.48-1.42.75-1.15-.34-1.73-.73V9.14l-2.2-.94-.75 3.29-2.29.51.23 1.84 3 .57.52-2.93 2.46.37 1.14.67h1.84L46.8 15l3.34 3.38-.25 1.32-2.69-.34-4.64 2.34-3.34 4-.43 1.78h-1.21l-2.23-1-2.17 1 .54 2.29.94-1.09h1.67l-.12 2 1.38.4L39 32.67l2.2-.67 2.57.4 3 .8 1.48.18 2.52 2.86 4.87 2.86-3.15 6-3.32 1.54-1.26 3.44-4.81 3.21-.51 1.85a28 28 0 0 0 16.66-42.72"/><path d="m39.22 42.63-2-3.78L39.05 35l-1.87-.56-2.1-2.11-4.66-1L28.88 28v1.92h-.68l-4-5.44V20l-2.94-4.78-4.67.83h-3.16l-1.59-1 2-1.6-2 .46A28 28 0 0 0 36 56a29 29 0 0 0 3.51-.25l-.29-3.39s1.29-5 1.29-5.2-1.29-4.53-1.29-4.53M18.41 9l5-.7 2.29-1.25 2.58.74 4.12-.23 1.42-2.22 2.05.34 5-.47 1.38-1.52 2-1.29 2.74.41 1-.15a27.91 27.91 0 0 0-33.51 7.49Zm18.77-6.22L40 1.21l1.84 1.06-2.66 2-2.54.26-1.14-.74ZM28.71 3l1.29.54L31.63 3l.9 1.56-3.82 1-1.83-1.06s1.79-1.15 1.83-1.5"/></svg>
                  <p className="text-sm md:text-xl font-bold">Love for the World</p>
                  <p className="text-xs md:text-base"><em>I value my work by the change it makes.</em></p>
                </div>
              </SlideItem>
            </motion.div>
            <motion.div className="flex flex-row flex-wrap gap-3 sm:gap-5 md:gap-[20px]">
              <SlideItem show={[0.475, 0.6]} duration={[0.02, 0.02]}>
              <div className="w-[150px] md:w-[275px] h-full border-2 p-[10px] bg-[rgba(0,0,0,0.5)] border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-center items-center gap-[2px] md:gap-[5px]">
                <svg className="h-[40px] md:h-[60px]" viewBox="0 -960 783.497 800" width="auto" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M336-239v-298L64-692v306zm320-268.315V-692L384-537v306l74.505-48.382 41.699 42.096L400-171q-19 11-40 11t-40-11L40-332q-19-11-29.5-29T0-401v-318q0-22 10.5-40T40-788l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v212.685M360-590l261-153-261-153L99-743Z"/><path d="M548.324-272.62 440.68-380.266 548.324-487.91l33.862 34.61-73.036 73.035 73.036 73.036zm127.527 0-33.862-34.61 73.036-73.036-81.036-73.036 41.862-34.61 107.646 107.646z"/></svg>
                <p className="text-sm md:text-xl font-bold">Always Prototyping</p>
                <p className="text-xs md:text-base"><em>I build both professionally and as an everyday passion.</em></p>
              </div>
              </SlideItem>
              <SlideItem show={[0.5, 0.6]} duration={[0.02, 0.02]}>
                <div className="w-[150px] md:w-[275px] h-full border-2 p-[10px] bg-[rgba(0,0,0,0.5)] border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-center items-center gap-[2px] md:gap-[5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] md:h-[60px]" fill="#fff" viewBox="0 -960 960 960"><path d="M291.5-468.5Q280-457 280-440v120q0 17 11.5 28.5T320-280t28.5-11.5T360-320v-120q0-17-11.5-28.5T320-480t-28.5 11.5m320-200Q600-657 600-640v320q0 17 11.5 28.5T640-280t28.5-11.5T680-320v-320q0-17-11.5-28.5T640-680t-28.5 11.5m-160 280Q440-377 440-360v40q0 17 11.5 28.5T480-280t28.5-11.5T520-320v-40q0-17-11.5-28.5T480-400t-28.5 11.5M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120zm0-80h560v-560H200zm0-560v560zm308.5 268.5Q520-503 520-520t-11.5-28.5T480-560t-28.5 11.5T440-520t11.5 28.5T480-480t28.5-11.5"/></svg>
                  <p className="text-sm md:text-xl font-bold">Observability-First</p>
                  <p className="text-xs md:text-base"><em>I put clear communication, reporting, and documentation first.</em></p>
                </div>
              </SlideItem>
            </motion.div>
          </motion.div>
          <motion.div className="h-full flex flex-col items-center justify-between gap-6 sm:gap-8 md:gap-[50px] mt-4 lg:mt-0">
            <SlideItem show={[0.35, 0.6]} duration={[0.02, 0.02]}>
              <motion.div 
                className="w-[325px] h-[175px] sm:h-[350px] md:w-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl shadow-black/50 shrink-0 flex items-end justify-end p-2 sm:p-[10px] mx-auto lg:mx-0" 
                style={{
                  backgroundImage: "url('/assets/backgrounds/cafe_coding_caphe.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <SlideItem show={[0.35, 0.6]} duration={[0.02, 0.02]}>
                  <motion.div className="w-fit border-2 border-white pl-2 pr-3 py-1 text-white bg-[rgba(0,0,0,0.7)] mt-2 ml-2" style={{borderRadius: "20px"}}>
                    <ScrollTypewriterDiv
                      className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                      show={[0.35, 0.6]}
                      duration={[0.02, 0.02]}
                      content={[
                        {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                        {node: "Cafe Bâng Khuâng 🇻🇳", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                      ]}
                    />
                  </motion.div>
                </SlideItem>
              </motion.div>
            </SlideItem>
          </motion.div>
          
        </motion.div>
      </motion.div>
    </section>
  );
} 