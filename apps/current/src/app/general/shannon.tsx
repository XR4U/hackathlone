import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import { shannonData } from "./general.dto";

const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  adaptiveHeight: true,
  cssEase: "ease-out",
};

/** Shannon Technology University */
const Shannon = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const sharedView = () => (
    <>
      <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 w-full flex items-center justify-center mt-[1.5rem] mr-[1rem] MobileScreen:mt-[0.5rem]">
          <div className="MobileScreen:px-[0px]">
            <motion.h1
              variants={fadeIn("right", "tween", 0.2, 0.4)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px] lg:leading-[44.62px] MobileScreen:pr-[1rem] md:text-[32.99px] md:text-3xl lg:text-[42px] font-extrabold text-hackathone-font-rocket-red font-hackathoneCabinetGrotesk mb-6 pr-[20%] MobileScreen:mb-4"
            >
              Technology University of the Shannon
            </motion.h1>

            {/* Remove gap-8 here */}
            <div className="flex flex-col">
              <motion.p
                variants={fadeIn("down", "tween", 1.2, 0.4)}
                initial={animationComplete ? "" : "hidden"}
                whileInView="show"
                onAnimationComplete={handleAnimationComplete}
                className="my-4 text-base sm:text-lg md:text-lg md:mb-[1rem] sm:mb-[1rem] font-hackathoneCabinetGrotesk font-[500] text-slate-50 leading-relaxed MobileScreen:leading-[30.57px] pr-[20%] MobileScreen:pr-[1rem]"
              >
                The NASA SpaceApps Challenge 2024 is happening in the heart of
                Ireland, Athlone, with the Technological University of the
                Shannon hosting this in-person hackathon. Renowned for its
                innovation and technological excellence, the university educates
                and inspires over{" "}
                <span className="font-semibold text-hackathone-font-rocket-red">
                  7,000 students
                </span>
                , making it the perfect venue for this prestigious event.
              </motion.p>

              <motion.div
                variants={fadeIn("down", "tween", 1.2, 0.4)}
                initial={animationComplete ? "" : "hidden"}
                whileInView="show"
                onAnimationComplete={handleAnimationComplete}
                className="my-4 MobileScreen:my-2 text-base sm:text-lg md:text-lg md:mb-[1rem] sm:mb-[1rem] font-hackathoneCabinetGrotesk font-[500] text-slate-50 leading-relaxed MobileScreen:leading-[30.57px] pr-[20%] MobileScreen:pr-[2rem]"
              >
                As the venue partner, the university also offers resources like:
                <ul className="list-disc py-[1rem] pl-[2.5rem] MobileScreen:py-[0.5rem]">
                  <li>Hackshop</li>
                  <li>Software, mechanical and electrical labs</li>
                  <li>PLA / Resin 3D printers</li>
                  <li> XR headsets like Meta Quest and Hololens</li>
                </ul>
                and more to support your creative projects.
              </motion.div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-[1.5rem] mr-[1.5rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4755.461203507001!2d-7.909200223581451!3d53.419643969237065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c496e6b7b9b4f%3A0x8f4cd9c287dbe71d!2sTUS%3A%20Midlands%20Engineering%20%26%20Science%20Building!5e0!3m2!1sen!2sie!4v1723633423719!5m2!1sen!2sie"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl lg:h-[400px] h-[300px] w-full mb-4" // Added mb-4 for gap
          ></iframe>
          <Slider {...settings}>
            {shannonData.map((item, index) => (
              <div key={index}>
                <Image
                  className="rounded-2xl lg:h-[400px] h-[300px] w-full object-cover"
                  src={item.img}
                  alt={"Shannon Image"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );

  const desktopView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="TabletScreen:hidden MobileScreen:hidden lg:block h-full mt-20 mb-36 mx-[8.06%] py-8"
    >
      {sharedView()}
    </motion.div>
  );

  const tabletView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="DesktopScreen:hidden MobileScreen:hidden lg:block mt-20 py-8 mx-[2rem]"
    >
      {sharedView()}
    </motion.div>
  );

  const mobileView = () => (
    <motion.div
      style={{ backgroundSize: "21%" }}
      className="DesktopScreen:hidden TabletScreen:hidden lg:block mx-[1.2rem]"
    >
      {sharedView()}
    </motion.div>
  );

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default Shannon;
