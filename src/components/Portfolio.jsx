import React from "react";
import { TypeAnimation } from "react-type-animation";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      title: "PHONE RETAILER",
    },
    {
      id: 2,
      src: reactParallax,
      title: "PHOTOGRAPY SERVICE",
    },
    {
      id: 3,
      src: navbar,
      title: "PANDA",
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

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
      <div name="portfolio" className=" bg-black text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">
              <TypeAnimation
                className="text-2xl"
                sequence={["  Check out some of my work right here", 1000, ""]}
                speed={20}
                wrapper="h1"
                repeat={Infinity}
                style={{ fontSize: "30px" }}
                cursor={true}
              />
            </p>
          </div>

          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ title, id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg  ">
                <img
                  src={src}
                  title={title}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>{" "}
                  <br />
                  <button>live</button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ title, id, src }) => (
              <div key={id} className="shadow-md  rounded-lg  ">
                <div class="">
                  <div class="">
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div class="">
                        <img
                          class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src={src}
                          alt=""
                        />
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-1xl font-bold text-white">
                          {title}
                        </h1>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis dolore adipisci placeat.
                        </p>
                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                          See More
                        </button>
                      </div>
                    </div>

                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
