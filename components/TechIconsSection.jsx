import React from "react";
import { TechIcons } from "../data/TechIcons";

const TechIconsSection = () => {
  return (
    <div
      className="flex md:gap-4 gap-2 py-10 justify-between"
    >
      {TechIcons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <IconComponent
            className="md:text-4xl text-2xl text-[#55e6a5] animate-pulse"
            key={index}
            title={icon.name}
          />
        );
      })}
    </div>
  );
};

export default TechIconsSection;
