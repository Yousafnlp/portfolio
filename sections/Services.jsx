import React from "react";
import ServiceItem from "../components/commen/ServiceItem";
import { serviceItems } from "../data";

const Services = () => {
  return (
    <div
      className="w-full flex flex-col gap-5 items-center justify-center pt-10 md:pt-20 "
      id="services"
    >
      <div className="text-3xl font-semibold text-white w-fit">Services</div>

      <div className="flex gap-6 flex-wrap justify-center">
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
