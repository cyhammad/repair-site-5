"use client";
import { companyName } from "@/libs/data";
import React from "react";
import ServicesCarousel from "../ServicesCarousel";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const OurServices = ({ company = companyName }) => {
  const pathname = usePathname();

  // Determine whether to show company name
  const showCompanyName = pathname !== "/companies/water-heater";

  return (
    <section id="services" className="flex items-center justify-center w-full">
      <div className="flex flex-col justify-center w-full max-w-7xl px-5 py-20 gap-5">
        <div className="text-3xl w-fit flex justify-center flex-col gap-2 font-semibold uppercase">
          Our services
        </div>
        <div className="max-w-3xl text-sm">
          {showCompanyName ? (
            <>
              Our mission is to deliver top-notch repair services that exceed
              our customers' expectations. We understand that a malfunctioning
              appliance can disrupt your daily routine, which is why we strive
              for quick turnaround times and exceptional customer service. Your
              satisfaction is our priority!
            </>
          ) : (
            <>
              Our mission is to deliver top-notch repair services that exceed
              our customers' expectations. We understand that a malfunctioning
              appliance can disrupt your daily routine, which is why we strive
              for quick turnaround times and exceptional customer service. Your
              satisfaction is our priority!
            </>
          )}
        </div>
        <ServicesCarousel company={company} />
      </div>
    </section>
  );
};

export default OurServices;
