import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import { motion } from "framer-motion";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      // style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      // style: "shadow-blue-700",
      hover: "",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      // style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      // style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      // style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      // style: "shadow-white",
    },
    // {
    //   id: 7,
    //   src: graphql,
    //   title: "GraphQL",
    //   style: "shadow-pink-400",
    // },
    // {
    //   id: 8,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-400",
    // },
  ];

  return (
    //   className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"

    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div class=" bg-neutral-800 items-center  items-center justify-center ">
        <div name="experience" className="bg-black">
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div className="text-center">
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Experience
              </p>
              <p className="py-6">
                These are the technologies I've worked with
              </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-50 duration-1000 py-2 rounded-lg ${style}`}
                >
                  {/* <img src={src} alt="" className="w-20 mx-auto" /> */}
                  <p className="mt-4">{title}</p>

                  <div class="flex    items-center justify-center bg-neutral-800">
                    <div>
                      <div class="">
                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                          <div class="">
                            <img src={src} alt="" className=" " />
                          </div>
                          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">
                              {title}
                            </h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
                          </div>
                        </div>

                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------- */}

        {/* --------------- */}
      </div>
      <div>
        <div class="fixed bottom-16  hidden  lg:flex flex-col top-[90%] left-[30%]  ">
          <div>
            <p class="font-com text-2xl  text-center font-semibold text-white">
              All Images are from{" "}
              <a href="https://unsplash.com" class="text-blue-500">
                Unsplash.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
