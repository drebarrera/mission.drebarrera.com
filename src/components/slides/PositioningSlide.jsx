import { motion, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import SlideItem from "./SlideItem";
import ScrollTypewriterText from "../ScrollTypewriterText";
import Map from "../Map";
import { useScrollProgress } from "../ScrollContext";
import MapTextMarker from "../MapTextMarker";
import TypewriterText from "../TypewriterText";
import { Marker } from "react-map-gl/mapbox";
import ScrollTypewriterDiv from "../ScrollTypewriterDiv";

export default function PositioningSlide() {

  const { smoothYProgress } = useScrollProgress();

  const mapWidth = useTransform(smoothYProgress, [0.6, 0.7, 0.75], [300, 300, 600]);
  const mapZoom = useTransform(smoothYProgress, [0.6, 0.75, 0.8, 0.815, 0.825, 0.9], [12, 12, 1, 2.5, 1, 2]);
  const mapLatitude = useTransform(smoothYProgress, [0.6, 0.79, 0.8, 0.815, 0.825], [30.278, 30.278, 20, 48, 10]);
  const mapLongitude = useTransform(smoothYProgress, [0.6, 0.8, 0.825], [-97.7431, -97.7431, 109]);

  return (
    <section className="fixed w-full min-h-screen p-4 sm:p-6 md:p-[7%]">
      <motion.div
        className="flex flex-col gap-6 sm:gap-8 md:gap-[50px] text-center text-white w-full max-w-[1200px] mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div className="w-full h-full p-2 sm:p-4 md:p-[15px] rounded-lg flex flex-col lg:flex-row gap-8 sm:gap-6 md:gap-[35px] items-stretch lg:items-start justify-center">
          <motion.div className="flex flex-col items-start grow-0 gap-[20px]">
            {smoothYProgress.get() < 0.75 && <motion.div className="flex flex-col items-start grow-0 gap-[20px] w-full">
              <motion.div className="flex flex-col items-start">
                <ScrollTypewriterText 
                  className="text-2xl sm:text-4xl md:text-6xl font-bold text-left flex items-start grow-0 leading-[1.25]"
                  show={[0.625, 0.75]}
                  duration={[0.02, 0.02]}
                >
                    Based in Austin, Texas
                </ScrollTypewriterText>
              </motion.div>
              <SlideItem show={[0.625, 0.75]} duration={[0.02, 0.02]}>
                <p className="text-white text-sm sm:text-base md:text-lg text-left">I currently live in Austin, Texas, which is considered to be one of the foremost startup hubs in the United States. I love Austin for its mix of culture, technology, and outdoor activities. However, my life does not revolve around one place, but rather around the world.</p>
              </SlideItem>
              <SlideItem show={[0.65, 0.75]} duration={[0.02, 0.02]}>
                <motion.div className="w-fit border-2 border-white pl-2 pr-3 py-1 text-white bg-[rgba(0,0,0,0.7)]" style={{borderRadius: "20px"}}>
                  <ScrollTypewriterDiv
                    className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                    show={[0.65, 0.75]}
                    duration={[0.02, 0.02]}
                    content={[
                      {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                      {node: "Austin, TX 🇺🇸", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                    ]}
                  />
                </motion.div>
              </SlideItem>
            </motion.div>}
            
            {smoothYProgress.get() >= 0.75 && smoothYProgress.get() < 0.85 && <motion.div className="flex flex-col items-start grow-0 gap-[20px]" style={{ width: mapWidth.get() == 300 ? "calc(100% - 335px)" : "100%" }}>
              <motion.div className="flex flex-col items-start">
                <ScrollTypewriterText 
                  className="text-2xl sm:text-4xl md:text-6xl font-bold text-left flex items-start grow-0 leading-[1.25]"
                  show={[0.75, 0.85]}
                  duration={[0.02, 0.02]}
                >
                    Globally Connected
                </ScrollTypewriterText>
              </motion.div>
              <SlideItem show={[0.75, 0.85]} duration={[0.02, 0.02]}>
                <p className="text-white text-sm sm:text-base md:text-lg text-left">I have had the privilege of walking the streets, trails, and beaches of 24 countries across 6 continents and living in Japan, Vietnam, and the United States. I speak English and Spanish fluently, with a foundational understanding of Romance languages, Japanese, and Russian. I am open to work in Mexico, Argentina, The Netherlands, Belgium, Spain, Thailand, Indonesia, Singapore, and Japan.</p>
              </SlideItem>
            </motion.div>}

            {smoothYProgress.get() >= 0.85 && <motion.div className="flex flex-col items-start grow-0 gap-[20px]" style={{ width: mapWidth.get() == 300 ? "calc(100% - 335px)" : "100%" }}>
              <motion.div className="flex flex-col items-start">
                <ScrollTypewriterText 
                  className="text-2xl sm:text-4xl md:text-6xl font-bold text-left flex items-start grow-0 leading-[1.25]"
                  show={[0.85, 0.95]}
                  duration={[0.02, 0.02]}
                >
                  My Asian Hub
                </ScrollTypewriterText>
              </motion.div>
              <SlideItem show={[0.85, 0.95]} duration={[0.02, 0.02]}>
                <p className="text-white text-sm sm:text-base md:text-lg text-left">Growing up as a military brat, I lived in Tokyo, Japan for several years. Returning in 2023, I spent a year traveling Asia, visiting 9 countries and setting up my home in Saigon, Vietnam. I love the culture, food, and people of Asia, and am open to work in Thailand, Indonesia, Singapore, and Japan.</p>
              </SlideItem>
            </motion.div>}

            <SlideItem show={[0.75, 0.95]} duration={[0.02, 0.02]}>
              <motion.div className="w-fit border-2 border-white pl-2 pr-3 py-1 text-white bg-[rgba(0,0,0,0.7)] mt-2 ml-2" style={{borderRadius: "20px"}}>
                <ScrollTypewriterDiv
                  className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                  show={[0.75, 0.8]}
                  duration={[0.02, 0.02]}
                  content={[
                    {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                    {node: "Mexico 🇲🇽", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                  ]}
                />
                <ScrollTypewriterDiv
                  className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                  show={[0.8, 0.85]}
                  duration={[0.02, 0.02]}
                  content={[
                    {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                    {node: "Switzerland 🇨🇭", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                  ]}
                />
                <ScrollTypewriterDiv
                  className="h-fit flex flex-row gap-1 sm:gap-[5px] items-center"
                  show={[0.85, 1]}
                  duration={[0.02, 0.02]}
                  content={[
                    {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" className="shrink-0" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
                    {node: "Thailand 🇹🇭", className: "text-base sm:text-lg md:text-xl font-regular whitespace-nowrap"},
                  ]}
                />
            </motion.div>
          </SlideItem>
          </motion.div>
          <SlideItem show={[0.625, 0.95]} duration={[0.02, 0.02]}>
            {/* Map */}
            <motion.div 
              className="h-[250px] sm:h-[350px] md:h-[400px] max-w-[300px] md:max-w-[600px] rounded-lg shadow-2xl shadow-black/50 shrink-0 overflow-clip w-full mx-auto lg:mx-0" 
              style={{ 
                borderRadius: "20px", 
                width: mapWidth
              }}
            >
              <Map style={{ width: "600px" }} zoom={mapZoom.get()} latitude={mapLatitude.get()} longitude={mapLongitude.get()}>
                { /* Austin, TX */ }
                <Marker longitude={-97.7431} latitude={30.278}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">
                      <TypewriterText
                        show={true}
                        trigger={true}
                        delay={500}
                        step={50}
                        className="text-black text-sm"
                      >{smoothYProgress.get() < 0.8 ? 'Austin, TX 🇺🇸' : '🇺🇸'}</TypewriterText>
                    </MapTextMarker>
                    <div style={{ color: 'red', fontSize: '2rem' }}>{smoothYProgress.get() < 0.75 ? '📍' : ''}</div>
                  </div>
                </Marker>

                { /* Mexico */ }
                <Marker longitude={-100.5528} latitude={20.6345}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇲🇽</MapTextMarker>
                  </div>
                </Marker>

                { /* Dominican Republic */ }
                <Marker longitude={-69.8652} latitude={19.5394}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇩🇴</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Panama */ }
                <Marker longitude={-79.5568} latitude={9.5394}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇵🇦</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Peru */ }
                <Marker longitude={-75.1495} latitude={-12.0464}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇵🇪</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Ireland */ }
                <Marker longitude={-6.2597} latitude={53.3478}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇮🇪</MapTextMarker>
                  </div>
                </Marker>

                { /* UK */ }
                <Marker longitude={-3.7038} latitude={51.5074}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇬🇧</MapTextMarker>
                  </div>
                </Marker>

                { /* Germany */ }
                <Marker longitude={10.4515} latitude={51.1657}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇩🇪</MapTextMarker>
                  </div>
                </Marker>

                { /* Switzerland */ }
                <Marker longitude={8.5417} latitude={46.8182}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇨🇭</MapTextMarker>
                  </div>
                </Marker>
                
                { /* The Netherlands */ }
                <Marker longitude={5.2913} latitude={52.1326}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇳🇱</MapTextMarker>
                  </div>
                </Marker>

                { /* Belgium */ }
                <Marker longitude={4.3517} latitude={50.8503}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇧🇪</MapTextMarker>
                  </div>
                </Marker>

                { /* Luxembourg */ }
                <Marker longitude={6.1296} latitude={49.6117}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇱🇺</MapTextMarker>
                  </div>
                </Marker>

                { /* France */ }
                <Marker longitude={2.3522} latitude={48.8566}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇫🇷</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Spain */ }
                <Marker longitude={-3.7038} latitude={40.4168}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇪🇸</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Ceuta, Spain */ }
                <Marker longitude={-5.3222} latitude={34.8889}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🌍</MapTextMarker>
                  </div>
                </Marker>
                
                { /* South Korea */ }
                <Marker longitude={126.9780} latitude={37.5665}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇰🇷</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Japan */ }
                <Marker longitude={139.7514} latitude={35.6895}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇯🇵</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Thailand */ }
                <Marker longitude={100.5018} latitude={13.7563}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇹🇭</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Indonesia */ }
                <Marker longitude={106.8650} latitude={-6.2088}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇮🇩</MapTextMarker>
                  </div>
                </Marker>

                { /* Laos */ }
                <Marker longitude={102.6331} latitude={17.9667}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇱🇦</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Cambodia */ }
                <Marker longitude={104.9167} latitude={11.5500}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇰🇭</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Vietnam */ }
                <Marker longitude={105.8500} latitude={10.8333}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇻🇳</MapTextMarker>
                  </div>
                </Marker>

                { /* Malaysia */ }
                <Marker longitude={101.6869} latitude={4.2105}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇲🇾</MapTextMarker>
                  </div>
                </Marker>
                
                { /* Singapore */ }
                <Marker longitude={103.8198} latitude={1.3521}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇸🇬</MapTextMarker>
                  </div>
                </Marker>

                { /* Australia */ }
                <Marker longitude={133.7751} latitude={-25.2744}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-10px)' }}>
                    <MapTextMarker style={{ color: 'black' }} backgroundColor="white">🇦🇺</MapTextMarker>
                  </div>
                </Marker>
                
              </Map>
            </motion.div>
          </SlideItem>
        </motion.div>
      </motion.div>
    </section>
  );
} 