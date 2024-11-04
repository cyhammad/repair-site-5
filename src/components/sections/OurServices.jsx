import { companyName } from "@/libs/data";
import React from "react";
import ServiceCard from "../ServiceCard";
import ServicesCarousel from "../ServicesCarousel";

const OurServices = () => {
  return (
    <section id="services" className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-5 py-20 gap-5">
        <div className="text-3xl w-fit flex justify-center items-center flex-col gap-2 font-semibold uppercase">
          Our services
          <div className="w-1/2 h-0.5 bg-primary"></div>
        </div>
        <div className="max-w-3xl text-center text-sm">
          At {companyName}, our mission is to deliver top-notch repair services
          that exceed our customers' expectations. We understand that a
          malfunctioning appliance can disrupt your daily routine, which is why
          we strive for quick turnaround times and exceptional customer service.
          Your satisfaction is our priority!
        </div>
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default OurServices;
