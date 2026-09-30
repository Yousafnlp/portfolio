import React from "react";
import { educationData } from "../data";
import EducationItem from "../components/commen/EducationItem";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="section-title">About</h2>

        <p className="text-base sm:text-lg text-neutral-500 leading-relaxed text-center max-w-3xl mx-auto font-medium mb-10 sm:mb-14">
          I&apos;m a <span className="text-white">Frontend Developer</span> who
          builds <span className="text-white">responsive</span> and{" "}
          <span className="text-white">dynamic</span> web interfaces, with a
          focus on <span className="text-white">pixel-perfect</span> layouts
          and <span className="text-white">clean, performant code</span>.
        </p>

        <h3 className="text-xl text-neutral-400 text-center mb-6">Education</h3>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {educationData.map((item) => (
            <EducationItem
              key={item.title}
              title={item.title}
              description={item.description}
              institute={item.institute}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
