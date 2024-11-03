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

const ServicesCarousel = () => {
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
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            imgUrl="/static/washing.jpeg"
            title="Washing Machine Repair"
            desc="Our washing machine repair service ensures your appliance runs efficiently and quietly, restoring its performance in no time. Trust our experienced technicians to diagnose and fix any issue, so you can get back to your laundry routine stress-free!"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            imgUrl="/static/dryer.jpeg"
            title="Dryer Repair"
            desc="Our dryer repair service helps restore your appliance’s efficiency, ensuring your clothes dry quickly and thoroughly. Count on our skilled technicians to resolve any issues, so you can enjoy hassle-free laundry days!"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            imgUrl="/static/dishwasher.jpeg"
            title="Dishwasher Repair"
            desc="Our dishwasher repair service gets your appliance back in top shape, making dishwashing a breeze. Trust our experts to handle all problems, so you can enjoy spotless dishes without the stress!"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            imgUrl="/static/stove.jpeg"
            title="Stove / Cooker Repair"
            desc="Our stove and cooker repair service ensures your cooking appliances function perfectly, helping you create delicious meals with ease. Rely on our knowledgeable technicians for fast and effective solutions!"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            imgUrl="/static/tv.jpeg"
            title="Television Repair"
            desc="Our television repair service brings your entertainment back to life, diagnosing and fixing issues quickly. Trust our technicians to ensure you enjoy your favorite shows without interruption!"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            imgUrl="/static/oven.jpeg"
            title="Gas Oven Repair"
            desc="Our gas oven repair service guarantees safe and reliable cooking experiences. Our skilled technicians will resolve any issues promptly, so you can get back to preparing delicious meals!"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            imgUrl="/static/fridge.jpeg"
            title="Fridge Repair"
            desc="Our fridge repair service helps keep your food fresh and safe. Trust our experienced technicians to fix any issues quickly, ensuring your appliance runs efficiently and effectively!"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default ServicesCarousel;
