import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip"; //For hover show texts
import { TypeAnimation } from "react-type-animation"; //For Type animation

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const parentSkillsRef = useRef();
  return (
    <>
      <h2 className="head-text">
        Skills &
        <span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " Experiences",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              " Education",
              1000,
              " Certification",
              1000,
            ]}
            wrapper="span"
            speed={20}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </span>
      </h2>

      <div className="app__skills-container" ref={parentSkillsRef}>
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              // whileInView={{ opacity: [0, 1] }}
              className="app__skills-item app__flex"
              key={skill.name}
              //!Spring Animation
              drag={isMobile ? false : true}
              // whileDrag={{ scale: 1.2, rotate: 20 }}
              dragConstraints={parentSkillsRef}
              // dragElastic= {0}
              dragSnapToOrigin="true"
              // dragPropagation="true"
              animate={{
                x: [0, 0, 0], // Define the horizontal movement loop
                y: [0, 50, 0], // Define the vertical movement loop (you can customize this as needed)
              }}
              transition={{
                duration: 2, // Duration of each loop in seconds
                ease: "linear", // Use linear easing for a smoother loop
                repeat: Infinity, // Repeat the animation infinitely
              }}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-tooltip-id={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
