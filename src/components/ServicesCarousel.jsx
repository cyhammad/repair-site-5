"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "./ServiceCard";
import Autoplay from "embla-carousel-autoplay";
import { companyName, getData } from "@/libs/data";

const ServicesCarousel = ({ company = companyName }) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="max-w-[80vw] w-full py-10"
    >
      <CarouselContent>
        {getData(company).map((service) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            key={service.slug}
          >
            <ServiceCard
              imgUrl={service.imgUrl}
              title={service.title}
              desc={service.description}
              company={company}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ServicesCarousel;
