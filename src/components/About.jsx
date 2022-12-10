import React from "react";
import "animate.css/animate.min.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div name="about" className="w-full h-screen bg-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            deserunt illum mollitia officiis qui exercitationem perferendis
            neque quasi a recusandae necessitatibus tempora iusto! Blanditiis
            error iste, totam fugiat recusandae rerum laborum perferendis
            molestiae aperiam asperiores nemo. Magni dolor maxime debitis vitae,
            eaque hic ab mollitia voluptatibus, a nostrum eveniet laborum!
          </p>

          <br />

          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            pariatur, vel similique sint, nobis aspernatur ut praesentium
            explicabo ipsam aliquid quasi laboriosam et culpa possimus
            repudiandae quisquam ullam maiores ab unde. Fugiat odio mollitia
            nemo alias. Commodi facilis atque nulla vero voluptatem explicabo.
            Quibusdam, magni quo! Eum cupiditate debitis labore.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
