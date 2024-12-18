"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { companyName, dialPhone, getData, phoneNumber } from "@/libs/data";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { phoneSvg } from "../icons";

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="bg-[#f7f7f7] border-b border-primary"
        >
          <SheetHeader>
            <SheetTitle className="py-5 text-left">
              {company}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-center gap-3">
            <SheetClose asChild>
              <NavLink title="Home" href="/" />
            </SheetClose>
            <SheetClose asChild>
              <NavLink title="About" href="/#about" />
            </SheetClose>
            <div className="relative flex flex-col">
              <button
                className="text-start"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Services
              </button>
              <div
                className={cn(
                  "flex flex-col gap-2 transition-all text-sm font-light ease-linear duration-200",
                  servicesDropdown
                    ? "my-1 py-2 border-y border-white/20 h-full"
                    : "h-0 overflow-hidden"
                )}
              >
                {getData().map((service, index) => (
                  <Link key={index} href={`/#${service.slug}`}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <SheetClose asChild>
              <NavLink title="Contact" href="/#contact" />
            </SheetClose>
            <div className="py-5 flex items-center gap-2">
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
                    : "text-white bg-secondary",
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
