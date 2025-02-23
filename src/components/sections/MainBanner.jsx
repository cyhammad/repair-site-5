"use client";
import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { usePathname } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MainBanner = ({ company = companyName },route) => {
  const pathname = usePathname();
  const displayCompany =
  route !== "/" && company !== "Prime Appliances Care UAE" ? company : "";
  const dynamicCompany =
    pathname === "/companies/water-heater" ? "Water Heater" : company;

    const borderColorClass =
    company === "Lg"
      ? "border-lgPrimary"
      : company === "Samsung"
      ? "border-samsungPrimary"
      : company === "Bosch"
      ? "border-boschPrimary"
      : company === "Siemens"
      ? "border-siemensPrimary"
      : pathname === "/companies/water-heater"
      ? "border-blue-500"
      : "border-tertiary"; // Default border color

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full shadow-lg min-h-[45rem] pt-5 h-full"
      )}
      style={{
        backgroundImage: "url(/static/kitchen.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid md:grid-cols-2 bg-white/80 px-5 pt-36 pb-10 md:py-10 gap-5 w-full max-w-7xl">
        <div className="flex flex-col justify-center gap-5 w-full">
          <h1 className="text-4xl max-w-[550px] font-bold">
            We offer reliable and affordable {displayCompany} Repair services
          </h1>
          <p className="max-w-[550px]">
            Quick and Reliable {displayCompany} Repair Services are offered in
            UAE. Kitchen and Laundry Appliance Repair with our
            experts. Call us today. Pro technician Quote.
          </p>
          <CallAndWhatsappButton company={dynamicCompany} className="py-5" />
        </div>
        <div
          className={cn(
            "w-full border-2 rounded-2xl overflow-hidden",
            borderColorClass // Apply the dynamic border color
          )}
        >
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem className="">
                <Image
                  src="/static/washing.avif"
                  width={400}
                  height={400}
                  className="w-full h-full"
                  alt="Slider Image"
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src="/static/fridge.jpg"
                  width={400}
                  height={400}
                  className="w-full h-full"
                  alt="Slider Image"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};


export default MainBanner;
