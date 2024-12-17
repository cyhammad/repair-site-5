"use client";

import { getData, companyName } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import OneService from "./OneService";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const ServiceDetails = ({ company = companyName }) => {
  const pathname = usePathname();

  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company)
      : getData(company);

  return (
    <section
      id="service-details"
      className={cn(
        "w-full bg-gray-50 shadow-lg border-b-2 border-gray-300",
        company === "Lg"
          ? "bg-lgBlob border-lgPrimary/20"
          : company === "Samsung"
          ? "bg-samsungBlob text-black border-samsungPrimary/20"
          : company === "Siemens"
          ? "bg-siemensBlob"
          : company === "Bosch"
          ? "bg-boschBlob border-boschPrimary/20"
          : "bg-secondary"
      )}
    >
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-16 gap-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase text-gray-800">
            Service Highlights
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-3xl text-center text-gray-700 text-base leading-7">
          Discover a wide array of repair services designed to meet the unique
          needs of your home appliances. From fixing refrigerators and washing
          machines to restoring ovens and dishwashers, we’ve got you covered.
          Our expert technicians are equipped with the latest tools and
          techniques to ensure reliable, efficient repairs. Browse our service
          offerings below to find the perfect solution for your appliance
          issues.
        </p>

        {/* Services Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {services.map((service) => (
            <OneService
              key={service.slug}
              title={service.title}
              description={service.description}
              commonProblems={service.commonProblems}
              slug={service.slug}
              company={company}
              imgUrl={service.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
