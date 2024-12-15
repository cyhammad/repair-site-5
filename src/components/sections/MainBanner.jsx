"use client"
import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { usePathname } from "next/navigation";

const MainBanner = ({ company = companyName }) => {
  const pathname = usePathname();

  const dynamicCompany =
    pathname === "/companies/water-heater" ? "Water Heater" : company;

  return (
    <div className="flex items-center justify-center w-full bg-[url(/static/kitchen.jpg)] bg-cover bg-fixed bg-no-repeat bg-center min-h-[35rem] h-full">
      <div className="bg-black/85 text-white w-full h-full min-h-[35rem] flex items-center justify-center">
        <div className="flex flex-col uppercase px-5 py-10 w-full max-w-7xl">
          <h2 className="mb-3">
            Best repair <span className="text-primary">services</span>
          </h2>
          <h1 className="text-4xl font-bold uppercase">We offer reliable and affordable services</h1>
          <h1 className="text-4xl">{dynamicCompany} repairs</h1>
          <CallAndWhatsappButton
            company={dynamicCompany}
            className="py-5"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
