import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";

// FiInstagram

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/muhammed-musarraf/"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/MusarrafAM" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/muhammed.musarraf.7?mibextid=9R9pXO"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://instagram.com/musarraf_am?igshid=MzNlNGNkZWQ4Mg=="
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
