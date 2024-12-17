import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";

const WhyChooseUs = ({ company = companyName }) => {
  return (
    <section id="contact" className="flex justify-center w-full">
      <div
        className={cn(
          "flex w-full max-w-7xl bg-black/10 rounded-b-2xl mb-10 border-x-4 border-primary md:p-20 p-5 flex-col justify-center",
          company === "Lg"
            ? "bg-lgBlob border-b-4 border-lgPrimary/20"
            : company === "Samsung"
            ? "bg-samsungBlob border-b-4 text-black border-samsungPrimary/20"
            : company === "Siemens"
            ? "bg-siemensBlob border-b-4"
            : company === "Bosch"
            ? "bg-boschBlob border-b-4 border-boschPrimary/20"
            : "bg-secondary border-b-4"
        )}
      >
        <div className="text-3xl w-fit flex justify-center flex-col gap-2 font-semibold uppercase mb-8">
          Why Choose Our Services
        </div>
        <div className="max-w-6xl mx-auto text-lg mb-6">
          <p className="mb-4">
            Selecting the right appliance repair company is essential to keeping
            your home running smoothly. With our dedication to quality and years
            of expertise, we’re the trusted choice for all your appliance repair
            needs. Here’s what sets us apart:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Skilled Professionals:</span> Our
              certified experts stay up-to-date with the latest repair methods
              to deliver dependable results every time.
            </li>
            <li>
              <span className="font-bold">Top-Notch Repairs:</span> We use
              premium-quality parts and tools to restore your appliances to peak
              performance.
            </li>
            <li>
              <span className="font-bold">Honest Pricing:</span> Expect clear,
              upfront pricing with no surprises—so you’ll always know what
              you’re paying for.
            </li>
            <li>
              <span className="font-bold">Convenient Scheduling:</span> We offer
              flexible appointment options, including same-day and emergency
              services, to fit your schedule.
            </li>
            <li>
              <span className="font-bold">Satisfaction Guaranteed:</span> All
              repairs are backed by a warranty, giving you confidence and peace
              of mind.
            </li>
            <li>
              <span className="font-bold">Reliable Support:</span> Our friendly
              customer care team is always ready to answer your questions and
              address your concerns.
            </li>
          </ul>
        </div>
        <CallAndWhatsappButton company={company} className="py-5" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
