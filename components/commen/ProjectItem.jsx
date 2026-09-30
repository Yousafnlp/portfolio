/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectItem = ({ image, link }) => {
  const host = new URL(link).hostname.replace("www.", "");
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card p-3 group block hover:border-white/20 transition-colors duration-300"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={host}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center justify-between px-2 pt-4 pb-1">
        <span className="text-sm text-neutral-400 truncate">{host}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
          View Live
          <FiArrowUpRight />
        </span>
      </div>
    </a>
  );
};

export default ProjectItem;
