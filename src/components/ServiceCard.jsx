import React from "react";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";
import { cn } from "@/lib/utils";

const ServiceCard = ({ title, desc, imgUrl, company = companyName }) => {
  return (
    <div
      className={cn(
        "border-4 rounded-3xl cursor-pointer overflow-hidden text-black transition-all ease-in duration-200 flex flex-col w-full h-full min-h-[30rem] gap-5",
        company === "Lg"
          ? "bg-lgBlob border-lgBlob hover:bg-lgPrimary hover:text-white"
          : company === "Samsung"
          ? "bg-samsungBlob border-samsungBlob hover:bg-samsungPrimary hover:text-white"
          : company === "Siemens"
          ? "bg-siemensBlob border-siemensBlob hover:bg-siemensPrimary hover:text-white"
          : company === "Bosch"
          ? "bg-boschBlob border-boschBlob hover:bg-boschSecondary hover:text-white"
          : "bg-primary hover:bg-tertiary hover:text-white border-primary"
      )}
    >
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
