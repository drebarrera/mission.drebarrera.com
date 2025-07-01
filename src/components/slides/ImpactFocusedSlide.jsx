import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "../TypewriterText";
import TypewriterDiv from "../TypewriterDiv";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import SlideItem from "./SlideItem";
import ScrollTypewriterDiv from "../ScrollTypewriterDiv";
import ScrollTypewriterText from "../ScrollTypewriterText";
import HispanicHackers from "../HispanicHackers";

export default function ImpactFocusedSlide() {

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
          <SlideItem show={[0.175, 0.275]} duration={[0.02, 0.02]}>
              {/* CDMX */}
              <motion.div 
                className="w-full max-w-[350px] h-[175px] sm:h-[350px] md:w-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl shadow-black/50 shrink-0 flex items-end justify-end p-2 sm:p-[10px] mx-auto lg:mx-0" 
                style={{
                  backgroundImage: "url('/assets/backgrounds/citystreet_cdmx.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <SlideItem show={[0.2, 0.275]} duration={[0.02, 0.02]}>
                  <motion.div className="w-fit border-2 border-white pl-2 pr-3 py-1 text-white bg-[rgba(0,0,0,0.7)] mt-2 ml-2" style={{borderRadius: "20px"}}>
                    <ScrollTypewriterDiv
                      className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                      show={[0.2, 0.275]}
                      duration={[0.02, 0.02]}
                      content={[
                        {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                        {node: "CDMX, México 🇲🇽", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                      ]}
                    />
                  </motion.div>
                </SlideItem>
              </motion.div>
          </SlideItem>
          <SlideItem show={[0.275, 0.35]} duration={[0.02, 0.02]}>
              {/* Hispanic Hackers */}
              <motion.div 
                className="w-full max-w-[350px] h-[175px] sm:h-[350px] md:w-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl shadow-black/50 shrink-0 flex items-end justify-end p-2 sm:p-[10px] mx-auto lg:mx-0" 
                style={{
                  backgroundImage: "url('/assets/hispanic_hackers_group_photo.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <SlideItem show={[0.275, 0.35]} duration={[0.02, 0.02]}>
                  <motion.div className="w-fit border-2 border-white pl-2 pr-3 py-1 text-white bg-[rgba(0,0,0,0.7)] mt-2 ml-2" style={{borderRadius: "20px"}}>
                    <ScrollTypewriterDiv
                      className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                      show={[0.275, 0.35]}
                      duration={[0.02, 0.02]}
                      content={[
                        {node:  <HispanicHackers className="w-[20px] h-[20px]" />},
                        {node: "Hispanic Hackers", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                      ]}
                    />
                  </motion.div>
                </SlideItem>
              </motion.div>
          </SlideItem>
          <motion.div className="flex flex-col items-start grow-0 gap-3 sm:gap-5 md:gap-[20px] mt-4 lg:mt-0">
            <motion.div className="flex flex-col items-start w-full">
              <ScrollTypewriterText 
                className="text-2xl sm:text-4xl md:text-6xl font-bold text-left flex items-start grow-0 leading-[1.25]"
                show={[0.2, 0.35]}
                duration={[0.02, 0.02]}
              >
                  Impact-Focused Narratives
              </ScrollTypewriterText>
              <div className="w-full flex justify-end">
                <SlideItem show={[0.2, 0.35]} duration={[0.02, 0.02]}>
                  <p className="font-[Courier] text-base sm:text-xl md:text-2xl text-right text-[#FFC337]">&lt; From Technical Perspectives /&gt;</p>
                </SlideItem>
              </div>
            </motion.div>
            <SlideItem show={[0.2, 0.275]} duration={[0.02, 0.02]}>
              <p className="text-white text-sm sm:text-base md:text-lg text-left whitespace-pre-line">
                I'm a Software and Product Engineer with a Bachelor's degree in Computer Engineering from <em>Purdue University</em>. I began learning how to code in middle school and have since led engineering, product, and community efforts across three continents. With technical skills in application development, dashboard creation, and insight analysis, I craft impactful narratives that drive change and inspire action. As a technical consultant, Latino engineer, and non-profit leader, my mission is clear: to lift up my community and create a lasting positive impact on the world.
              </p>
            </SlideItem>
            <SlideItem show={[0.275, 0.35]} duration={[0.02, 0.02]}>
              <p className="text-white text-sm sm:text-base md:text-lg text-left whitespace-pre-line">
                <b><em>According to <a className="underline underline-offset-4" href="https://www.pewresearch.org/social-trends/2021/04/01/stem-jobs-see-uneven-progress-in-increasing-gender-racial-and-ethnic-diversity/" target="_blank">a 2021 Pew Research study</a></em>, Hispanics only make up 8% of STEM workers, despite making up 18% of the US population.</b><br/><br/>In 2023, I established Hispanic Hackers as a 501(c)(3) non-profit and community of over 2,700 members to date with the goal of making the tech industry more accessible for Latino and Hispanic people. Serving as the organization's president, I lead teams of volunteers to develop internal tools, organize events, and mentor entry-level developers in my community. <em>As an organization, our mission is to increase the number of Latino and Hispanic people represented in the tech industry by providing opportunities for learning, networking, and career growth.</em>
              </p>
            </SlideItem>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 