"use client";
import { companyName, dialPhone, phoneNumber } from "@/libs/data";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { phoneSvg } from "../icons";

const Header = ({ company = companyName }) => {
  const pathname = usePathname();

  // Check the route and override company name for specific paths
  const dynamicCompany =
    pathname === "/companies/water-heater" ? "Repair Site 5" : company;

  return (
    <header className="flex flex-col w-full border-t-4 border-primary items-center justify-center bg-black fixed top-0 z-50 text-white">
      <div className="flex w-full justify-between px-5 py-5 max-w-7xl items-center gap-5">
        {dynamicCompany === "Siemens" ? (
          <Link href="/companies/siemens">
            <Image
              src="/static/siemens.svg"
              width={150}
              height={50}
              alt="Siemens"
            />
          </Link>
        ) : dynamicCompany === "Bosch" ? (
          <Link href="/companies/bosch">
            <Image
              src="/static/bosch.svg"
              width={150}
              height={50}
              alt="Bosch"
            />
          </Link>
        ) : dynamicCompany === "Samsung" ? (
          <Link href="/companies/samsung">
            <Image
              src="/static/samsung.svg"
              width={120}
              height={50}
              alt="Samsung"
            />
          </Link>
        ) : dynamicCompany === "Lg" ? (
          <Link href="/companies/lg">
            <Image src="/static/lg.svg" width={100} height={50} alt="LG" />
          </Link>
        ) : dynamicCompany === "Repair Site 5" ? (
          <Link href="/companies/water-heater" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        ) : (
          <Link href="/" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        )}
        <Sidebar company={dynamicCompany} />
        <div className="items-center hidden md:flex gap-8 text-sm">
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="#about" />
          <ServicesDropdown company={dynamicCompany} />
          <NavLink title="Contact" href="#contact" />
        </div>
        <div className="md:flex items-center gap-2 hidden">
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
                : " text-white",
              "hover:border-black/10"
            )}
          >
            {phoneSvg}
            <div className="relative">
              <span>{phoneNumber}</span>
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
          <button
            onClick={dialPhone}
            className={cn(
              "group flex items-center gap-2 px-4 rounded-sm text-sm py-2",
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
            <div className="relative">
              <span>Whatsapp Us</span>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
