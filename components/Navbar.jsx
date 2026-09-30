"use client";
import React, { useEffect, useState } from "react";
import menuItems from "../data/Menu";

const Navbar = () => {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 animate-slide-in">
      <div className="w-full sm:w-auto border border-white/10 rounded-full px-3 sm:px-8 md:px-10 py-2.5 md:py-3.5 bg-black/20 backdrop-blur-md shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-evenly sm:justify-center gap-2 sm:gap-5 md:gap-7 overflow-x-auto">
          {menuItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-[11px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? "glass-text font-bold"
                    : "text-neutral-500 hover:text-neutral-300 font-semibold"
                }`}
              >
                {item.label}
                {isActive && <span className="underline-glow" />}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
