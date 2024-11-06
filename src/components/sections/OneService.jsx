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
  company = companyName,
}) => {
  return (
    <div
      className={cn(
        "w-full px-10 py-16 border border-secondary",
        `bg-${bgColor}`
      )}
      id={slug}
    >
      <div className="text-3xl w-fit flex justify-center flex-col gap-2 font-semibold uppercase">
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
      <p className="my-5">{description}</p>
      <h3 className="text-xl font-semibold mb-2">Common Problems:</h3>
      <ul className="list-disc list-inside">
        {commonProblems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>
      <p className="my-5">
        If you're facing any of these issues, don't hesitate to reach out. Our
        prompt and professional repair services will help restore your appliance
        quickly.
      </p>
      <CallAndWhatsappButton company={company} className="py-10" />
    </div>
  );
};

export default OneService;
