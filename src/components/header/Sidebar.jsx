import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { companyName } from "@/libs/data";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="py-5">{companyName}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center gap-3">
            <NavLink title="Home" href="/" />
            <NavLink title="About" href="/about" />
            <NavLink title="Services" href="/services" />
            <NavLink title="Contact" href="/contact" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
