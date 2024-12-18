"use client";

import { companyName } from "@/libs/data";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const AboutSection = ({ company = companyName },route) => {
  const pathname = usePathname();
  const displayCompany =
  route !== "/" && company !== "United Appliances Repairs" ? company : "";

  // Define services for water-heater and general cases
  const waterHeaterServices = [
    "Solar Water Heater Repair",
    "Leaking Pipes and Connections",
    "Faulty Temperature Sensors",
    "Improper Installation Issues",
    "Blocked or Clogged Pipes",
    "Circulation Pump Not Working",
  ];

  const generalServices = [
   `${displayCompany} Washing Machine Repair`,
`${displayCompany} Dryer Repair`,
`${displayCompany} Dishwasher Repair`,
`${displayCompany} Stove/Cooker Repair`,
`${displayCompany} Gas Oven Repair`,
`${displayCompany} Fridge Repair`,
  ];

  // Determine which services to display
  const services =
    pathname === "/companies/water-heater"
      ? waterHeaterServices
      : generalServices;

  return (
    <section
      id="about"
      className={cn(
        "flex items-center justify-center w-full min-h-[40rem] bg-primary py-5",
        company === "Lg"
          ? "bg-lgPrimary text-white"
          : company === "Samsung"
          ? "bg-samsungPrimary text-white"
          : company === "Siemens"
          ? "bg-siemensPrimary text-white"
          : company === "Bosch"
          ? "bg-boschBlob"
          : "bg-secondary"
      )}
    >
      <div className="grid md:grid-cols-2 w-full h-full max-w-7xl">
        <div className="w-full px-10 py-16">
          <div className="text-3xl w-fit flex justify-center flex-col gap-2 font-semibold uppercase">
            About us
          </div>
          <p className="my-5">
            We are dedicated to providing exceptional home appliance repair
            services with a focus on quality and customer satisfaction. Our team
            of skilled technicians is experienced in diagnosing and fixing a
            wide range of appliances, ensuring your home runs smoothly. Trust us
            to restore your appliances quickly and efficiently, allowing you to
            get back to your daily routine.
          </p>
          <h3 className="text-xl font-semibold mb-2">Services We Offer:</h3>
          <ul className="list-disc list-inside">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <CallAndWhatsappButton company={company} className="py-10" />
        </div>
        <div
          className="w-full bg-cover min-h-[35rem] rounded-2xl border-4 border-tertiary bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/static/about.jpg)",
            
        
          }}
        ></div>
      </div>
    </section>
  );
};

export default AboutSection;
