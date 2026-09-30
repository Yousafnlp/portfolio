"use client";
import { TypeAnimation } from "react-type-animation";

const HeaderTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "React Developer",
        1000,
        "Web Developer",
        1000,
        "Next Js Developer",
        1000,
        "Frontend Developer",
      ]}
      wrapper="span"
      speed={50}
      className="text-white/80 font-medium tracking-wide"
      repeat={Infinity}
    />
  );
};

export default HeaderTypeAnimation;
