import React from "react";
import { motion } from "framer-motion";
import paths from "../assets/svgPaths/svgBackground"

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

const Background = () => {
  return (
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none"
      >
          {paths.map((path, index) => 
              <motion.path
                key={path}
                d={path}
                fill="white"
                opacity={"0." + index}
                animate={{ y: [rand(7, 11), 0, rand(7, 11)]}}
                transition={{
                    ease: "linear",
                    duration: 5,
                    repeat: Infinity,
                }}
              />
          )}
      </svg>
  );
};

export default Background;
