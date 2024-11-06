import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName } from "@/libs/data";

const OneService = ({
  title,
  description,
  commonProblems = [],
  bgColor = "white",
  slug,
  imgUrl,
  company = companyName,
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-3 border border-secondary relative",
        `bg-${bgColor}`
      )}
      id={slug}
    >
      <div
        className="bg-center rounded-t-sm bg-cover bg-no-repeat w-full h-[200px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="text-3xl px-5 w-fit flex justify-center flex-col gap-2 font-semibold uppercase">
        {title}
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
      <p className="px-5">{description}</p>
      <h3 className="text-xl font-semibold px-5">Common Problems:</h3>
      <ul className="list-disc list-inside px-5">
        {commonProblems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>
      <p className="px-5 pb-28">
        If you're facing any of these issues, don't hesitate to reach out. Our
        prompt and professional repair services will help restore your appliance
        quickly.
      </p>
      <CallAndWhatsappButton company={company} className="px-5 pb-10 absolute bottom-0" />
    </div>
  );
};

export default OneService;
