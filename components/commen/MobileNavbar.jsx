/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../DrawerTypeAnimation"), {
  loading: () => (
    <div className="h-[19px] w-[150px] bg-white/80 animate-pulse rounded-md"></div>
  ),
  ssr: false,
});
const MobileNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center z-50 animate-fade-in rounded-md">
      <div className="px-4 py-2 bg-[#0d1b29] w-[300px] flex border-4 border-t-0 z-[1000] gap-2 lg:hidden border-[#55e6a5] ">
        <img
          src="/assets/avatar.png"
          alt="logo"
          className="size-16 rounded-full"
        />

        <div className="space-y-1">
          <h3 className="text-[#55e6a5] text-xl font-semibold ">Yousaf Ijaz</h3>
          <div>
            <DynamicHeader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
