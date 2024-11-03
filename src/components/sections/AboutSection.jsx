import { companyName } from "@/libs/data";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-2 w-full min-h-[40rem]">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/static/about.jpg)",
        }}
      ></div>
      <div className="w-full bg-black/5 px-10 py-16">
        <div className="text-3xl w-fit flex justify-center flex-col gap-2 font-semibold uppercase">
          About us
          <div className="w-1/2 h-0.5 bg-primary"></div>
        </div>
        <p className="my-5">
          At {companyName}, we are dedicated to providing exceptional home
          appliance repair services with a focus on quality and customer
          satisfaction. Our team of skilled technicians is experienced in
          diagnosing and fixing a wide range of appliances, ensuring your home
          runs smoothly. Trust us to restore your appliances quickly and
          efficiently, allowing you to get back to your daily routine.
        </p>
        <h3 className="text-xl font-semibold mb-2">Services We Offer:</h3>
        <ul className="list-disc list-inside">
          <li>Washing Machine Repair</li>
          <li>Dryer Repair</li>
          <li>Dishwasher Repair</li>
          <li>Stove/Cooker Repair</li>
          <li>Television Repair</li>
          <li>Gas Oven Repair</li>
          <li>Fridge Repair</li>
        </ul>
        <CallAndWhatsappButton className="py-10" />
      </div>
    </div>
  );
};

export default AboutSection;
