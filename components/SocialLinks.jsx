import { socialLinks } from "../data/SocialLinks";
import React from "react";
import SocialLinkItem from "./commen/SocialLinkItem";

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:gap-4 gap-3 items-center w-full my-10 flex-wrap">
      {socialLinks.map((item, index) => (
        <SocialLinkItem
          key={index}
          icon={item.icon}
          link={item.link}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
