import React from "react";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";

const ServiceCard = ({ title, desc, imgUrl }) => {
  return (
    <div className="bg-black/5 text-center hover:bg-secondary transition-all ease-in duration-200 rounded-sm flex flex-col w-full h-full min-h-[30rem] gap-5">
      <div
        className="bg-center rounded-t-sm bg-cover bg-no-repeat w-full h-1/2"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="flex flex-col items-center gap-3 pb-6 px-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="text-sm">{desc}</span>
        <CallAndWhatsappButton />
      </div>
    </div>
  );
};

export default ServiceCard;
