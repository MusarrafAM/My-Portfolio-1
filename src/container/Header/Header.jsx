import React, { useRef } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed


const Header = () => {
  const parentRef = useRef();
  return (
    <div className="app__header app__flex" ref={parentRef}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            animate={{
              x: [0, 50, 0], // Define the horizontal movement loop
              y: [0, 0, 0], // Define the vertical movement loop (you can customize this as needed)
            }}
            transition={{
              duration: 4, // Duration of each loop in seconds
              ease: "linear", // Use linear easing for a smoother loop
              repeat: Infinity, // Repeat the animation infinitely
            }}
          >
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Musarraf</h1>
              </div>
            </div>
          </motion.div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">Fullstack web Developer</p>
            <p className="p-text">AI Enthusiast</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.python, images.node].map((circle, index) => (
          <motion.div
            className="circle-cmp app__flex"
            key={`circle-${index}`}
            animate={{
              x: [0, 0, 0], // Define the horizontal movement loop
              y: [0, 50, 0], // Define the vertical movement loop (you can customize this as needed)
            }}
            transition={{
              duration: 2, // Duration of each loop in seconds
              ease: "linear", // Use linear easing for a smoother loop
              repeat: Infinity, // Repeat the animation infinitely
            }}
            //!Below is for Dragg Animation
            drag={isMobile ? false : true}
            whileDrag={{ scale: 1.2, rotate: 20 }}
            dragConstraints={parentRef}
            // dragElastic= {0}
            // dragSnapToOrigin="true"
            dragPropagation="true"
          >
            <img src={circle} alt="profile_bg" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
