import React from "react";

const ServiceItem = ({ title, description }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="space-y-2 bg-gradient-to-b from-[#0d1b29]/90 to-[#0d1b29]  p-4 md:p-6 rounded-xl lg:w-[300px] w-full cursor-pointer border border-transparent hover:border-[#55e6a5] transition-all duration-300"
    >
      <h3 className="text-base md:text-[1.2rem] font-semibold text-white leading-[1]">
        {title}
      </h3>
      <p className="md:text-sm text-xs text-white/70">{description}</p>
    </div>
  );
};

export default ServiceItem;
