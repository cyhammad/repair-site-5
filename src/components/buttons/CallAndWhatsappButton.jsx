"use client";

import { cn } from "@/lib/utils";
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import { phoneSvg } from "../icons";

const CallAndWhatsappButton = ({ className, company = companyName }) => {
  return (
    <div className={cn(className, "flex items-center gap-3")}>
      {/* Call Us Button */}
      <button
        onClick={dialPhone}
        className={cn(
          "group flex items-center gap-2 pl-2 pr-4 rounded-sm text-sm py-1.5",
          company === "Lg"
            ? "bg-lgPrimary border-lgPrimary text-white"
            : company === "Samsung"
            ? "bg-samsungPrimary border-samsungPrimary text-white"
            : company === "Bosch"
            ? "bg-boschPrimary border-boschPrimary text-white"
            : company === "Siemens"
            ? "bg-siemensPrimary border-siemensPrimary text-white"
            : "bg-primary border-primary text-black",
          "hover:border-black/10"
        )}
      >
        {phoneSvg}
        <div className="relative">
          <span>Call us</span>
          <span
            className={cn(
              "w-0 absolute bottom-0.5 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px]",
              company === "Lg"
                ? "bg-white"
                : company === "Samsung"
                ? "bg-white"
                : company === "Bosch"
                ? "bg-white"
                : company === "Siemens"
                ? "bg-white"
                : "bg-black"
            )}
          ></span>
        </div>
      </button>

      {/* Whatsapp Button */}
      <button
        onClick={sendMessage}
        className={cn(
          "group flex items-center gap-2 px-4 rounded-sm text-sm py-2",
          company === "Lg"
            ? "bg-lgSecondary border-lgSecondary text-white"
            : company === "Samsung"
            ? "bg-samsungSecondary border-samsungSecondary text-black"
            : company === "Bosch"
            ? "bg-boschSecondary border-boschSecondary text-white"
            : company === "Siemens"
            ? "bg-siemensSecondary border-siemensSecondary text-black"
            : "bg-secondary border-secondary text-black",
          "hover:border-black/10"
        )}
      >
        {whatsappSvg}
        <div className="relative">
          <span>Whatsapp</span>
          <span
            className={cn(
              "w-0 absolute bottom-0.5 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px]",
              company === "Lg"
                ? "bg-white"
                : company === "Samsung"
                ? "bg-black"
                : company === "Bosch"
                ? "bg-white"
                : company === "Siemens"
                ? "bg-black"
                : "bg-black"
            )}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default CallAndWhatsappButton;

const whatsappSvg = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M65.5 33C65.5 15.078 50.922 0.5 33 0.5C15.078 0.5 0.5 15.078 0.5 33C0.5 38.25 1.7812 43.461 4.2109 48.078L2.0312 63.316L15.3012 60.2574C20.5707 63.6871 26.6802 65.4957 33.0002 65.4957C50.9222 65.4996 65.5 50.922 65.5 33ZM15.352 27.0508C13.7114 18.8399 18.3012 16.0508 21.1918 15.1208C22.3832 14.7419 23.6918 15.3513 24.1918 16.5192L27.1215 23.359C27.6918 24.6871 27.3715 26.2574 26.3207 27.2574L24.1605 29.3277C26.4222 36.7769 34.6095 41.0777 36.0905 41.7967L38.2702 39.6365C39.2116 38.6951 40.6296 38.3748 41.8913 38.8162L49.3327 41.406C50.4108 41.7849 51.1139 42.8474 50.9929 43.9451C50.6335 47.2459 48.3015 49.0935 46.4148 50.074C45.2429 50.6755 43.9265 50.9842 42.5867 50.9842C42.0672 50.9842 41.5555 50.9334 41.0359 50.8435C19.1409 46.9216 15.38 27.2498 15.352 27.0508Z"
      fill="currentColor"
    />
  </svg>
);
