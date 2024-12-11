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
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-5 py-20 gap-5">
        <div className="text-3xl w-fit flex justify-center items-center flex-col gap-2 font-semibold uppercase">
          Our services
          <div
            className={cn(
              "w-1/2 h-0.5",
              company === "Lg"
                ? "bg-lgPrimary"
                : company === "Samsung"
                ? "bg-samsungPrimary"
                : company === "Bosch"
                ? "bg-boschPrimary"
                : company === "Siemens"
                ? "bg-siemensPrimary"
                : "bg-primary"
            )}
          ></div>
        </div>
        <div className="max-w-3xl text-center text-sm">
          {showCompanyName ? (
            <>
           Our mission is to deliver top-notch repair services
              that exceed our customers' expectations. We understand that a
              malfunctioning appliance can disrupt your daily routine, which is
              why we strive for quick turnaround times and exceptional customer
              service. Your satisfaction is our priority!
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
