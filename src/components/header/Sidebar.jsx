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

import { companyName, getData } from "@/libs/data";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="py-5">{company}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center gap-3">
            <SheetClose asChild>
              <NavLink title="Home" href="/" />
            </SheetClose>
            <SheetClose asChild>
              <NavLink title="About" href="/#about" />
            </SheetClose>
            <div className="relative flex items-center flex-col">
              <button onClick={() => setServicesDropdown(!servicesDropdown)}>
                Services
              </button>
              <div
                className={cn(
                  "flex flex-col gap-2 items-center transition-all text-sm font-light ease-linear duration-200",
                  servicesDropdown
                    ? "my-1 py-2 border-y h-full"
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
