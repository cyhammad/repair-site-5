import { companyName } from "@/libs/data";
import NavLink from "./header/NavLink";
import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center bg-black/5">
      <div className="grid md:grid-cols-[2fr_1fr_1fr] border-t border-black/5 w-full max-w-7xl gap-10 px-5 py-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">{companyName}</h1>
          <span className="text-sm font-light max-w-sm">
            Welcome to {companyName}, your trusted partner in home appliance
            repair! With over years of experience, we specialize in providing
            reliable and efficient repair services for a wide range of household
            appliances.
          </span>
          <CallAndWhatsappButton />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Repair Services</h1>
          <NavLink title="Washing Machine" href="/" className="text-sm" />
          <NavLink title="Dryer" href="/about" className="text-sm" />
          <NavLink
            title="Stover / Cooker"
            href="/services"
            className="text-sm"
          />
          <NavLink title="Refrigerator" href="/contact" className="text-sm" />
          <NavLink title="Gas Oven" href="/contact" className="text-sm" />
          <NavLink title="Dishwasher" href="/contact" className="text-sm" />
          <NavLink title="Television" href="/contact" className="text-sm" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Links</h1>
          <NavLink title="Home" href="/" className="text-sm" />
          <NavLink title="About" href="/about" className="text-sm" />
          <NavLink title="Services" href="/services" className="text-sm" />
          <NavLink title="Contact" href="/contact" className="text-sm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;