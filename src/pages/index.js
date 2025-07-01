import { motion, useTransform } from "framer-motion";
import HeroSlide from "@/components/slides/HeroSlide";
import useScreenHeight from "@/hooks/useScreenHeight";
import { useScrollProgress } from "@/components/ScrollContext";
import BandungIndonesiaSlide from "@/components/slides/BandungIndonesiaSlide";
import ImpactFocusedSlide from "@/components/slides/ImpactFocusedSlide";
import MissionAlignmentSlide from "@/components/slides/MissionAlignmentSlide";
import PositioningSlide from "@/components/slides/PositioningSlide";
import FinalSlide from "@/components/slides/FinalSlide";

const N_SLIDES = 14;

export default function Home() {
  const screenHeight = useScreenHeight();
  const { containerRef, scrollYProgress, scrollYValue } = useScrollProgress();

  // Create hanging effects for each slide
  const slide1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [0.2, 1, 0]);
  const slide1BlurOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0.2, 0.8, 0]);
  const slide2Opacity = useTransform(scrollYProgress, [0.15, 0.2, 0.4], [0, 0.2, 0]);
  const slide3Opacity = useTransform(scrollYProgress, [0.35, 0.55, 0.65], [0, 0.2, 0]);
  const slide4Opacity = useTransform(scrollYProgress, [0.6, 0.65, 0.775], [0, 0.5, 0]);
  const slide5Opacity = useTransform(scrollYProgress, [0.75, 0.775, 0.815], [0, 0.3, 0]);
  const slide6Opacity = useTransform(scrollYProgress, [0.8, 0.825, 0.85], [0, 0.2, 0]);
  const slide7Opacity = useTransform(scrollYProgress, [0.825, 0.85, 1], [0, 0.1, 0.3]);

  const scrollToContinue = () => {
    const scrollPoints = [0, 0.1, 0.225, 0.275, 0.53, 0.625, 0.72, 0.825, 1];

    const nextScrollPoint = scrollPoints.findIndex(point => scrollYValue < point);
    const nextScrollPointValue = scrollPoints[nextScrollPoint];

    const scrollTo = window.innerHeight * (nextScrollPointValue * N_SLIDES);
    
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });
  }

  return (
    <div ref={containerRef} className="relative min-h-screen" style={{height: screenHeight * N_SLIDES}}>
      {/* Background Slides */}
      <div className="fixed inset-0 z-0">
        {/* Slide 1 Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/andres_in_jungle_cave_bandung.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            opacity: slide1Opacity
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Slide 1 Background Blur */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/andres_in_jungle_cave_bandung.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            opacity: slide1BlurOpacity,
            filter: "blur(3px)"
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        
        {/* Slide 2 Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/citystreet_cdmx.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 2,
            opacity: slide2Opacity,
            filter: "blur(3px)"
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        
        { /* Slide 3 Background */ }
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/tetebatu_volcano.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 3,
            opacity: slide3Opacity
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        { /* Slide 4 Background */ }
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/cityscape_austin.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 4,
            opacity: slide4Opacity
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        { /* Slide 5 Background */ }
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/teotihuacan_vendor.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 4,
            opacity: slide5Opacity
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        { /* Slide 6 Background */ }
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/cityscape_berne.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 5,
            opacity: slide6Opacity
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        { /* Slide 7 Background */ }
        <motion.div
          className="absolute inset-0"
          style={{
            background: "url('/assets/backgrounds/templetrail_chiangmai.webp') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 6,
            opacity: slide7Opacity
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      {/* Content Sections */}
      <div className="h-screen w-full fixed top-0 left-0">
        { scrollYValue < 0.075 && <HeroSlide /> }
        { scrollYValue >= 0.05 && scrollYValue < 0.15 && <BandungIndonesiaSlide /> }
        { scrollYValue >= 0.15 && scrollYValue < 0.35 && <ImpactFocusedSlide /> }
        { scrollYValue >= 0.35 && scrollYValue < 0.6 && <MissionAlignmentSlide /> }
        { scrollYValue >= 0.6 && scrollYValue < 0.95 && <PositioningSlide /> }
        { scrollYValue >= 0.95 && <FinalSlide /> }
        <motion.div
          className="w-fit left-0 right-0 mx-auto md:ml-0 bottom-[3%] md:left-[20%] md:bottom-[8%] absolute cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          viewport={{ once: true }}
          style={{ bottom: scrollYValue < 0.01 ? "15%" : "4%" }}
        >
          <motion.div 
            className="w-fit px-[10px] py-[2px] text-lg font-bold bg-[rgba(0,0,0,0.7)] border-1 border-white" 
            style={{borderRadius: "20px"}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -10, 0] }}
            transition={{
              duration: 6,
              delay: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            onClick={() => scrollToContinue()}
          >
            Click or Scroll to continue&nbsp;
            {scrollYValue < 0.95 ? <span className="font-[Helvetica]">&darr;</span> : <span className="font-[Helvetica]">&uarr;</span>}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
