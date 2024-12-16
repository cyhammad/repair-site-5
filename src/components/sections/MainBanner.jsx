"use client";
import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { usePathname } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MainBanner = ({ company = companyName }) => {
  const pathname = usePathname();

  const dynamicCompany =
    pathname === "/companies/water-heater" ? "Water Heater" : company;

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full  min-h-[35rem] h-full",
        company !== companyName ? "" : "bg-primary"
      )}
    >
      <div className="grid md:grid-cols-2 px-5 pt-36 pb-10 md:py-10 gap-5 w-full max-w-7xl">
        <div className="flex flex-col justify-center gap-5 w-full">
          <h1 className="text-4xl max-w-[550px] font-bold">
            We offer reliable and affordable services
          </h1>
          <p className="max-w-[550px]">
            Quick and Reliable Appliance Repair is offered by Karsaaz in
            Rawalpindi near you. Kitchen and Laundry Appliance Repair with our
            experts. Call us today. Pro technician Quote. Services: Appliance
            Repair, Oven Repair.
          </p>
          <CallAndWhatsappButton company={dynamicCompany} className="py-5" />
        </div>
        <div className="w-full md:p-20">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="">
                <Image
                  src="/static/washing.jpeg"
                  width={400}
                  height={400}
                  className="w-full h-full"
                  alt="Slider Image"
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src="/static/tv.jpeg"
                  width={400}
                  height={400}
                  className="w-full h-full"
                  alt="Slider Image"
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src="/static/fridge.jpeg"
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
