import { allServices, companyName } from "@/libs/data";
import OneService from "./OneService";

const ServiceDetails = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full shadow-xl bg-black/5"
      id="service-details"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-5 py-20 gap-5">
        <div className="text-3xl w-fit flex justify-center items-center flex-col gap-2 font-semibold uppercase">
          Service Details
          <div className="w-1/2 h-0.5 bg-primary"></div>
        </div>
        <div className="max-w-6xl text-center text-sm">
          At {companyName}, we offer a comprehensive range of home appliance
          repair services tailored to meet your specific needs. Our skilled
          technicians are trained to handle various appliance issues, from
          refrigerators and washers to ovens and dishwashers. We pride ourselves
          on our transparent service process, ensuring that you're informed
          every step of the way. With a commitment to using high-quality parts
          and the latest repair techniques, we aim to restore your appliances to
          optimal functioning as quickly and efficiently as possible. Explore
          our detailed service offerings below to find the right solution for
          your appliance repair needs.
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5">
        {allServices.map((service) => (
          <OneService
            title={service.title}
            description={service.description}
            commonProblems={service.commonProblems}
            slug={service.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
