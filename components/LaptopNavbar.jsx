/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import dynamic from "next/dynamic";
import MenuItem from "./commen/MenuItem";
import menuItems from "../data/Menu";

const LaptopNavbar = () => {
  return (
    <div className="w-[280px] shrink-0 lg:flex hidden animate-fade-in">
      <Drawer
        open={true}
        direction="left"
        style={{
          backgroundColor: "#0d1b29",
          width: "280px",
        }}
        className="p-5 flex flex-col justify-center"
        enableOverlay={false}
        overlayOpacity={0}
      >
        <div className="pb-10 space-y-2">
          <img
            src="/assets/avatar.png"
            alt="logo"
            className="size-32 rounded-full"
          />
          <h3 className="text-[#55e6a5] text-xl font-semibold ">
            2 Years of Experience
          </h3>
          <div>
          </div>
        </div>
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default LaptopNavbar;
