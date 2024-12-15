import React from "react";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";

const ServiceCard = ({ title, desc, imgUrl, company = companyName }) => {
  return (
    <div className="bg-black text-white border-4 rounded-lg overflow-hidden border-primary hover:bg-primary hover:text-black transition-all ease-in duration-200 flex flex-col w-full h-full min-h-[30rem] gap-5">
      <div className="flex flex-col gap-3 pt-6 px-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="text-sm">{desc}</span>
        <CallAndWhatsappButton company={company} />
      </div>
      <div
        className="bg-center rounded-t-sm bg-cover bg-no-repeat w-full h-1/2"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default ServiceCard;
