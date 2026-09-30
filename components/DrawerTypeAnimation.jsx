import { TypeAnimation } from "react-type-animation";

const DrawerTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1000,
        "Web Developer",
        1000,
        "React Developer",
        1000,
        "Next.js Developer",
        1000,
        "Mern Stack Developer",
        1000,
        "Frontend Developer",
        1000,
        "Backend Developer",
        1000,
        "Node.js Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-white text-base lg:text-2xl leading-[20px]"
      repeat={Infinity}
    />
  );
};

export default DrawerTypeAnimation;
