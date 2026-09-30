import React from "react";
import { experienceData } from "../data";
import ExperienceItem from "../components/commen/ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="section-title">Experience</h2>

        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent md:-translate-x-1/2" />
          <div className="space-y-12 sm:space-y-16">
            {experienceData.map((item, index) => (
              <ExperienceItem
                key={item.title}
                index={index}
                title={item.title}
                years={item.years}
                description={item.description}
                institute={item.institute}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
