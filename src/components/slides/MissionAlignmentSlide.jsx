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
              <p className="text-white text-sm sm:text-base md:text-lg text-left">I want to leave my mark on my world as an engineer, leader, and innovator. With this mission comes a lifelong-learner mentality, observability-first approach, and passion for impact. My passion for cultural diversity and the people of the world fuels my drive for impact-driven technology, making me an ideal candidate for organizations with a shared vision.</p>
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
                  <svg width="auto" className="h-[40px] md:h-[60px]" fill="#fff" viewBox="0 0 24 24" fillRule="evenodd" clip-rule="evenodd" xmlns="http://www.w3.org/2000/svg"><path d="M8.194 24H3L.98 9H0V7.618c.87 0 2-.697 2-1.618h12.039c0 .922 1.092 1.618 1.961 1.618V9h-1l-1.398 10.484L13 24m-1.735-2h-6.53l-.534-4h7.592l-.196 1.485M3 9l.534 4h8.918l.528-4Zm3.309-3.691c2.819-2.143-.594-2.353.077-3.868-2.361 2.113.85 2.169-.077 3.868m2.486-.001C13.031 2.07 7.918 2.241 8.9 0c-3.382 2.895 1.259 2.959-.105 5.308"/><path d="M16.314 20.553c-.133-.284-.182-.59-.23-.89-.042-.264-.085-.536-.187-.785a1.84 1.84 0 0 0-1.68-1.146h-.004a.5.5 0 0 0-.016.092l-.015.242c-.076 1.244.519 2.346 1.538 2.91a4 4 0 0 1 .594-.423"/><path d="M16.157 18.773c.114.278.16.566.204.845.045.283.089.557.201.802a3.5 3.5 0 0 1 1.533-.351h.005c-.197-1.54-1.444-2.656-3.056-2.656q-.107 0-.216.007l-.241.015a.5.5 0 0 0-.138.03 2.13 2.13 0 0 1 1.708 1.308m2.052 3.3a1.79 1.79 0 0 0 2.527 0l.179-.171a.7.7 0 0 0-.12-.188l-.16-.181c-.674-.763-1.576-1.183-2.54-1.183-.962 0-1.864.42-2.539 1.183l-.16.18a.7.7 0 0 0-.173.385l.04-.032a2.09 2.09 0 0 1 2.946.006"/><path d="M20.931 22.273a2.05 2.05 0 0 1-1.459.604c-.551 0-1.07-.216-1.461-.606a1.8 1.8 0 0 0-1.278-.524c-.486 0-.94.186-1.278.524l-.013.011-.178.14a.7.7 0 0 0 .132.214l.16.181c.674.763 1.576 1.183 2.54 1.183.963 0 1.864-.42 2.539-1.183l.16-.181a.7.7 0 0 0 .175-.4z"/><path fill="none" d="m17.364 2.527 3.727 2.152-2.152 3.727-3.727-2.152z"/><path d="M18.861 12.243a1.14 1.14 0 0 0-1.13.323 1.143 1.143 0 0 0-2.218-.037c-.4 1.494 1.4 3.09 1.4 3.09s2.356-.482 2.756-1.976a1.143 1.143 0 0 0-.808-1.4"/></svg>
                  <p className="text-sm md:text-xl font-bold">Love for Coffee</p>
                  <p className="text-xs md:text-base"><em>I start my day with Vietnamese Cà Phé Sữa Đá.</em></p>
                </div>
              </SlideItem>
              <SlideItem show={[0.45, 0.6]} duration={[0.02, 0.02]}>
                <div className="w-[150px] md:w-[275px] h-full border-2 p-[10px] bg-[rgba(0,0,0,0.5)] border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-center items-center gap-[2px] md:gap-[5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] md:h-[60px]"  viewBox="0 -960 960 960" width="60px" fill="#fff"><path d="M472-159q-33 0-56.5-24T392-240q0-33 23.5-56.5T472-320l24-23q8-8 18.5-12.5T536-360q23 0 39.5 17t16.5 40v17q0 20 13 33t33 13q15 0 27-9t17-23l12-33q9-24 29-39.5t46-15.5q11-28 17.5-58t6.5-62q0-89-44.5-162.5T632-758v38q0 33-23.5 56.5T552-640h-40v80q0 17-11.5 28.5T472-520h-40v68q0 22-15 37t-37 15q-14 0-25.5-6T336-423l-64-97h-40v40q0 31-21 53t-50 26q26 104 112.5 173T472-159Zm80-241q-17 0-28.5-11.5T512-440q0-17 11.5-28.5T552-480h40q17 0 28.5 11.5T632-440q0 17-11.5 28.5T592-400h-40Zm93-120q-20 0-31.5-15.5T608-570l15-44q4-12 14-19t22-7q20 0 31.5 15.5T696-590l-15 44q-4 12-14 19t-22 7ZM472-80q-83 0-156-31.5T189-197q-54-54-85.5-127T72-480q0-83 31.5-156T189-763q54-54 127-85.5T472-880q83 0 156 31.5T755-763q54 54 85.5 127T872-480q0 83-31.5 156T755-197q-54 54-127 85.5T472-80Z"/></svg>
                  <p className="text-sm md:text-xl font-bold">Love for the World</p>
                  <p className="text-xs md:text-base"><em>I value my work by the change it makes.</em></p>
                </div>
              </SlideItem>
            </motion.div>
            <motion.div className="flex flex-row flex-wrap gap-3 sm:gap-5 md:gap-[20px]">
              <SlideItem show={[0.475, 0.6]} duration={[0.02, 0.02]}>
              <div className="w-[150px] md:w-[275px] h-full border-2 p-[10px] bg-[rgba(0,0,0,0.5)] border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-center items-center gap-[2px] md:gap-[5px]">
                <svg className="h-[40px] md:h-[60px]" viewBox="0 -960 783.497 800" width="auto" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M320-263v-274L80-676v274zm320-244.315V-676L400-537v274l50.505-36.382 49.699 48.096L400-171q-19 11-40 11t-40-11L40-332q-19-11-29.5-29T0-401v-318q0-22 10.5-40T40-788l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v212.685M360-606l237-137-237-137-237 137Z"/><path d="M532.324-272.62 424.68-380.266 532.324-487.91l41.862 42.61-32.518 32.517-32.518 32.518 65.036 65.036zm143.527 0-41.862-42.61 65.036-65.036-65.036-65.036 41.862-42.61 107.646 107.646z"/></svg>
                <p className="text-sm md:text-xl font-bold">Always Prototyping</p>
                <p className="text-xs md:text-base"><em>I self-host cloud-like infrastructure for container workflow testing.</em></p>
              </div>
              </SlideItem>
              <SlideItem show={[0.5, 0.6]} duration={[0.02, 0.02]}>
                <div className="w-[150px] md:w-[275px] h-full border-2 p-[10px] bg-[rgba(0,0,0,0.5)] border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-center items-center gap-[2px] md:gap-[5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] md:h-[60px]" viewBox="0 -960 960 960" width="60px" fill="#fff"><path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
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