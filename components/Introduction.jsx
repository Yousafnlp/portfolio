/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import React from "react";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { socialLinks } from "../data/SocialLinks";
import { TechIcons } from "../data/TechIcons";

const DynamicHeader = dynamic(() => import("./HeaderTypeAnimation"), {
  loading: () => <span className="text-white/80">Frontend Developer</span>,
  ssr: false,
});

const Introduction = () => {
  return (
    <div className="text-center flex flex-col items-center animate-fade-in">
      <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-2xl p-1.5 border border-white/10 bg-black/20 backdrop-blur-sm shadow-lg -rotate-3">
        <img
          src="/assets/avatar.png"
          alt="Yousaf Ijaz"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <span className="chip mb-5">2 Years of Experience</span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
        <span className="block glass-text">Hi, I&apos;m</span>
        <span className="block glass-text">Yousaf Ijaz</span>
      </h1>

      <div className="text-lg sm:text-xl md:text-2xl h-8 md:h-10 mb-5">
        <DynamicHeader />
      </div>

      <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto mb-7 leading-relaxed">
        I&apos;m a skilled Frontend Developer specializing in building
        responsive and dynamic web interfaces. From crafting pixel-perfect
        layouts to creating smooth, interactive user experiences, I bring
        designs to life with clean, performant code that drives results.
      </p>

      <div className="flex items-center justify-center gap-6 flex-wrap mb-7">
        {socialLinks.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative pb-1 text-sm font-bold glass-text group"
          >
            {item.text}
            <span className="underline-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        ))}
      </div>

      <button className="px-6 py-3 mb-10 border border-white/10 rounded-full text-sm font-medium inline-flex items-center gap-2 text-white/80 hover:bg-white/5 hover:border-white/20 transition-all duration-300">
        Download CV
        <FiDownload />
      </button>

      <div className="flex items-center justify-center gap-5 sm:gap-7 flex-wrap mb-10">
        {TechIcons.map((icon) => {
          const IconComponent = icon.component;
          return (
            <IconComponent
              key={icon.name}
              title={icon.name}
              className="text-2xl md:text-3xl text-neutral-600 hover:text-neutral-300 transition-colors duration-300"
            />
          );
        })}
      </div>

      <a
        href="#about"
        className="flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-300 transition-colors"
      >
        <span className="text-xs font-medium tracking-wide">Scroll</span>
        <FiArrowDown className="animate-bounce-on-hover" />
      </a>
    </div>
  );
};

export default Introduction;
