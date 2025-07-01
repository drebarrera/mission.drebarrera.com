import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "../TypewriterText";
import TypewriterDiv from "../TypewriterDiv";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import SlideItem from "./SlideItem";
import ScrollTypewriterDiv from "../ScrollTypewriterDiv";
import ScrollTypewriterText from "../ScrollTypewriterText";
import HispanicHackers from "../HispanicHackers";

export default function FinalSlide() {

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
        <motion.div className="w-full h-full p-2 sm:p-4 md:p-[15px] rounded-lg flex flex-col lg:flex-row gap-0 sm:gap-6 md:gap-[35px] items-stretch lg:items-start">
          <SlideItem show={[0.95, 1.5]} duration={[0.02, 0.02]}>
              {/* CDMX */}
              <motion.div 
                className="w-full max-w-[350px] h-[175px] sm:h-[350px] md:w-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl shadow-black/50 shrink-0 flex items-end justify-end p-2 sm:p-[10px] mx-auto lg:mx-0" 
                style={{
                  backgroundImage: "url('/assets/andres_leadership_at_podium.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
              </motion.div>
          </SlideItem>
          <motion.div className="flex flex-col items-start grow-0 gap-3 sm:gap-5 md:gap-[20px] mt-4 lg:mt-0">
            <motion.div className="flex flex-col items-start w-full">
              <ScrollTypewriterText 
                className="text-2xl sm:text-4xl md:text-6xl font-bold text-left flex items-start grow-0 leading-[1.25]"
                show={[0.95, 1.5]}
                duration={[0.02, 0.02]}
              >
                Let's Change the World Together
              </ScrollTypewriterText>
            </motion.div>
            <SlideItem show={[0.95, 1.5]} duration={[0.02, 0.02]}>
              <p className="text-white text-sm sm:text-base md:text-lg text-left whitespace-pre-line">
                Continuously learning new skills and developing my technical value proposition, I value opportunities to work with organizations that share my passion for impact-driven technology.<br/><br/>
                I am open to relocation, remote work, and starting the conversation.<br/><br/>
                <b>Let's make a true lasting impact - <em>together</em>.</b>
              </p>
            </SlideItem>
            <div className="w-full flex flex-row gap-x-2 gap-y-3 mt-[10px] items-center flex-wrap">
              <SlideItem show={[0.95, 1.5]} duration={[0.02, 0.02]}>
                <a href="https://www.drebarrera.com/work" target="_blank" rel="noopener noreferrer" className="w-fit h-fit px-[10px] py-[4px] border-1 border-white bg-white text-black text-base md:text-lg text-left font-medium" style={{borderRadius: "15px"}}>
                  Check out my portfolio <span className="font-[Helvetica]">&rarr;</span>
                </a>
              </SlideItem>
              <SlideItem show={[0.95, 1.5]} duration={[0.02, 0.02]}>
                <a href="https://www.drebarrera.com/Andres_Barrera_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-fit h-fit px-[10px] py-[4px] border-1 border-white bg-white text-black text-base md:text-lg text-left font-medium" style={{borderRadius: "15px"}}>
                  Resume
                </a>
              </SlideItem>
              <SlideItem show={[0.95, 1.5]} duration={[0.02, 0.02]}>
                <a href="https://www.linkedin.com/in/drebarrera" target="_blank" rel="noopener noreferrer" >
                  <div className="w-fit h-fit px-[4px] py-[3px] md:px-[3px] md:py-[3px] border-1 border-white bg-white text-white text-base md:text-lg text-left" style={{borderRadius: "15px"}}>
                    <svg className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032s1.031.466 1.032 1.032c0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.88.88 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z"/></svg>
                  </div>
                </a>
              </SlideItem>
              <SlideItem show={[0.95, 1.5]} duration={[0.02, 0.02]}>
                <a href="https://www.pixelvisa.net" target="_blank" rel="noopener noreferrer" >
                  <div className="w-fit h-fit px-[6px] py-[6px] md:px-[5px] md:py-[5px] border-1 border-white bg-white text-white text-base md:text-lg text-left" style={{borderRadius: "15px"}}>
                    <svg className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]" viewBox="0 0 487 487" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.98"><path d="M50 25c-13.807 0-25 11.193-25 25v412c0 13.807 11.193 25 25 25h412c13.807 0 25-11.193 25-25V50c0-13.807-11.193-25-25-25Z"/><path d="M25 0C11.193 0 0 11.193 0 25v412c0 13.807 11.193 25 25 25h412c13.807 0 25-11.193 25-25V25c0-13.807-11.193-25-25-25Z" fill="#ce272a"/><path d="M156.2 112.681q26.4-.3 45.3 6.9 19.2 7.2 28.8 22.2 9.9 15 7.8 39-.9 12-6.9 23.7-5.7 11.4-16.8 21-10.8 9.3-27 15.3-15.9 6-37.2 6.6-6.6.3-11.7.3-4.8 0-9.9-.3l-1.5 26.4q-.3 8.4-1.2 15.9-.6 7.5-1.2 11.4 3.3-.3 8.4-.3 5.1-.3 9.9-.3 4.8-.3 6.9-.3l-.9 23.1H60.5l1.2-19.8q6.6-.3 11.4-1.8t7.5-6.9q3-5.4 3.6-17.4l6-114.9q.6-8.1 1.2-15.6.9-7.5 1.5-11.4-4.8.3-12 .6-7.2 0-10.5.3l1.2-23.1q21.3-.3 42.3-.3 21.3 0 42.3-.3m-1.5 21q-6.3 0-11.1 1.5-4.5 1.5-7.2 6.6t-3.3 15.6l-3.3 67.5 6.6.6q3.3.3 6.9.3 16.5 0 27-5.4 10.8-5.7 16.2-16.2 5.4-10.8 6.3-26.1.6-15-3-24t-9.9-13.2q-6-4.5-12.9-5.7-6.6-1.5-12.3-1.5m302.7-20.4-1.2 19.8q-10.2.3-18 7.5t-15.3 24.6q-5.7 13.2-11.4 26.7-5.7 13.2-11.4 26.7-5.7 13.2-11.4 26.7-5.7 13.2-11.4 26.7l-11.4 26.4q-5.7 13.2-11.4 26.7h-23.4l-60.9-161.1q-2.7-7.5-5.1-15.6-2.1-8.1-1.8-12.9-4.8.3-9 .6-3.9 0-7.2.3l1.2-23.1h87.3l-.9 19.8q-11.1-.3-17.4 4.8-6 5.1-1.2 18.3l24 67.8q4.5 12.6 7.5 22.2 3.3 9.6 7.2 21h.3q3.9-8.7 8.1-20.1 4.5-11.4 8.7-21.6 4.5-10.5 8.7-21 4.5-10.5 8.7-20.7 4.5-10.5 8.7-21 5.1-12.3 8.1-18.3 3-6.3 5.7-9.3-4.8.3-12.3.6t-10.8.6l.9-23.1z" transform="translate(-27.95 12.125)" fill="#fff"/></g></svg>
                  </div>
                </a>
              </SlideItem>
              <SlideItem show={[0.95, 1.5]} duration={[0.02, 0.02]}>
                <a href="https://www.hispanichackers.org" target="_blank" rel="noopener noreferrer" >
                  <div className="w-fit h-fit px-[4px] py-[3px] md:px-[3px] md:py-[3px] border-1 border-white bg-white text-white text-base md:text-lg text-left" style={{borderRadius: "15px"}}>
                    <HispanicHackers className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                  </div>
                </a>
              </SlideItem>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 