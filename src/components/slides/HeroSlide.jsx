import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "../TypewriterText";
import TypewriterDiv from "../TypewriterDiv";
import { useMemo, useState, useEffect } from "react";
import Logo from "../Logo";
import SlideItem from "./SlideItem";

const DATE_CYCLE_DAYS = 53;
// Cycle anchor: "today" when this requirement was defined.
const DATE_CYCLE_START_UTC = { year: 2026, monthIndex: 2, day: 31 }; // Mar 31, 2026

function utcDayNumber(date) {
  return Math.floor(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) /
      86400000
  );
}

function dateFromUtcDayNumber(dayNumber) {
  return new Date(dayNumber * 86400000);
}

export default function HeroSlide() {

  const [slide, setSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const cycleDateLabel = useMemo(() => {
    const startDay = Math.floor(
      Date.UTC(
        DATE_CYCLE_START_UTC.year,
        DATE_CYCLE_START_UTC.monthIndex,
        DATE_CYCLE_START_UTC.day
      ) / 86400000
    );

    const now = new Date();
    const nowDay = utcDayNumber(now);
    const daysSinceStart = Math.max(0, nowDay - startDay);
    const cyclesSinceStart = Math.floor(daysSinceStart / DATE_CYCLE_DAYS);
    const displayDay = startDay + cyclesSinceStart * DATE_CYCLE_DAYS;
    const displayDate = dateFromUtcDayNumber(displayDay);

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(displayDate);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000)
  }, []);

  function nextSlide() {
    setSlide(slide + 1);
  }

  return (
    <section className="fixed w-full min-h-screen flex justify-center p-4 sm:p-6 md:p-[7%]">
      <motion.div
        className="flex flex-col gap-6 sm:gap-8 md:gap-[20px] text-center text-white w-full max-w-[1200px] mx-auto relative items-start overflow-clip"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Tag */}
        <SlideItem show={[0, 0.075]} duration={[0, 0.01]} overrideVisible={true}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[500px] mx-auto flex flex-col bg-[rgba(0,0,0,0.7)] p-3 sm:p-4 md:p-[15px] items-start shrink-0 overflow-clip"
            layout
            animate={{ height: "auto" }}
            transition={{ 
              layout: { 
                duration: 0.5, 
                ease: "easeInOut" 
              },
              height: { 
                duration: 0.5, 
                ease: "easeInOut" 
              },
              duration: 0.8, 
              delay: 0.2 
            }}
            style={{ borderRadius: "15px" }}
          >
            <p className="text-base md:text-lg font-regular shrink-0 w-fit">Mission Statement</p>
            <AnimatePresence mode="wait">
              {isLoaded && (
                <motion.div
                  key="typewriter-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut",
                    height: { duration: 0.5, ease: "easeInOut" }
                  }}
                  className="overflow-hidden"
                >
                  <TypewriterDiv className="flex flex-row gap-1 sm:gap-2 md:gap-[8px] shrink-0 overflow-clip" trigger={isLoaded || slide > 0} delay={1000} step={50} onFinish={() => nextSlide()} content={[
                    {node: "Engineer | Systems & Cultural Intelligence", className: "text-lg sm:text-xl md:text-2xl font-regular italic pb-[5px]"}
                  ]}/>
                  <p className="w-fit text-xs sm:text-sm text-white">{cycleDateLabel}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </SlideItem>

        {/* Main Content - Stack vertically on mobile */}
        <motion.div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-[50px] justify-between">
          {/* Description */}
          <SlideItem show={[0, 0.05]} duration={[0, 0.01]} overrideVisible={true}>
            <motion.div
              className="w-full max-w-[800px] h-fit mx-auto lg:ml-[50px] bg-[rgba(0,0,0,0.7)] p-4 sm:p-5 md:p-[20px] pb-5 sm:pb-6 md:pb-[25px] rounded-lg flex flex-col gap-4 sm:gap-5 md:gap-[25px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}
              style={{ borderRadius: "15px" }}
            >
              <div className="flex flex-col gap-[10px] items-start text-center sm:text-left">
                <div className="flex flex-row md:flex-col gap-[10px] items-center md:items-start text-center sm:text-left">
                  <motion.img 
                    src="/assets/andres_barrera_circular_profile_image.webp" 
                    alt="Andrés Barrera" 
                    className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-cover rounded-lg shadow-2xl shadow-black/50 mx-auto sm:mx-0" 
                  />
                  <TypewriterDiv
                    className="h-fit text-2xl sm:text-3xl md:text-4xl font-bold flex flex-row items-center sm:items-start grow-0 leading-[1.25] gap-[8px]"
                    trigger={slide >= 1}
                    step={50} 
                    onFinish={() => nextSlide()} 
                    content={[
                      {node: "Hi, I'm Andrés", className: "text-2xl sm:text-3xl md:text-4xl font-bold flex flex-col sm:flex-row items-center sm:items-start grow-0 leading-[1.25]"},
                      {node: <motion.span
                        animate={{ 
                          rotate: [0, 14, -8, 14, 0],
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                        style={{ display: "inline-block" }}
                      >
                        👋🏽
                      </motion.span>, className: "text-2xl sm:text-3xl md:text-4xl font-bold flex flex-col sm:flex-row items-center sm:items-start grow-0 leading-[1.25]"},
                    ]}
                  />
                </div>
                <p className="text-white text-base md:text-lg lg:text-xl text-left sm:text-left leading-relaxed">
                  <em><b>My calling</b></em> is to build at the intersection of community, data, and technology - applying engineering depth and cross-cultural fluency to problems where the human and technical complexity are equally demanding. I'm an engineer, analyst, and community organizer with 5+ years of full-stack development, community building, & data analysis experience.<br/><br/>
                  To demonstrate my mission for global impact, I created this web app using <em>Framer Motion</em> and <em>React</em>. Scroll the page to learn more about my experience, passions, and cultural background.</p>
              </div>
            </motion.div>
          </SlideItem>

          {/* Vertical text on the right side - Hide on mobile, show on larger screens */}
          <SlideItem show={[0, 0.03]} duration={[0, 0.01]} overrideVisible={true}>
          <motion.div
              className="hidden lg:flex right-0 transform flex-row items-start gap-[40px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-[28px] text-white text-4xl font-medium wrap-break-word"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-[28px] h-[6px] bg-white mb-[5px]"></div>
                <TypewriterText className="w-full text-center text-white text-4xl font-[Arial] font-bold wrap-break-word" trigger={slide >= 2} step={50} delay={1000} onFinish={() => nextSlide()}>DATA</TypewriterText>
              </motion.div>
              <motion.div
                className="w-[28px] mt-[25px] flex flex-col items-center gap-[5px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-[28px] h-[6px] bg-white mb-[5px]"></div>
                <TypewriterText className="w-full text-center text-white text-4xl font-[Arial] font-bold wrap-break-word" trigger={slide >= 3} step={50} delay={1000} onFinish={() => nextSlide()}>IMPACT</TypewriterText>
              </motion.div>
              <motion.div
                className="w-[30px] mt-[50px] text-white text-4xl font-medium  wrap-break-word"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="w-[28px] h-[6px] bg-white mb-[5px]"></div>
                <TypewriterText className="w-full text-center text-white text-4xl font-[Arial] font-bold wrap-break-word" trigger={slide >= 4} step={50} delay={1000} onFinish={() => nextSlide()}>SYSTEMS</TypewriterText>
              </motion.div>
            </motion.div>
          </SlideItem>
        </motion.div>
      </motion.div>
    </section>
  );
} 