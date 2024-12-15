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
        "w-full flex flex-col gap-3 border rounded-lg border-secondary relative",
        `bg-${bgColor}`
      )}
      id={slug}
    >
      <div className="text-xl px-5 py-5 w-fit flex justify-center flex-col gap-2 font-semibold">
        {title}
      </div>
      <div className="p-2">
        <div
          className="bg-center rounded-t-sm bg-cover bg-no-repeat w-full h-[200px]"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>
      </div>
      <p className="px-5">{description}</p>
      <CallAndWhatsappButton
        company={company}
        className="px-5 pb-10 absolute bottom-0"
      />
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
    </div>
  );
};

export default OneService;
