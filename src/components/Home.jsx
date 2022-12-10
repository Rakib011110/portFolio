import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div name="home" className="h-screen w-full bg-black">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Front End Developer
              <TypeAnimation
                className="text-2xl"
                sequence={["", 1000, ""]}
                speed={20}
                wrapper="h1"
                repeat={Infinity}
                style={{ fontSize: "30px" }}
                cursor={true}
              />
            </h2>
            <p className="text-gray-300 py-4 max-w-md">
              <TypeAnimation
                className="text-2xl"
                sequence={[" RESUME ", 1000, ""]}
                speed={20}
                wrapper="h1"
                repeat={Infinity}
                style={{ fontSize: "30px" }}
                cursor={true}
              />
              <a href="resume.pdf" download>
                <button className="btn btn-outline text-white btn-sm mb-2 mt-2">
                  Download
                </button>
              </a>
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className=" md:w-1/3 shadow-xl  sm:w-full ">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-1/2 grad   md:w-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
