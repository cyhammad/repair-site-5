import { companyName } from "@/libs/data";
import Link from "next/link";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";

const Header = () => {
  return (
    <header className="flex flex-col w-full items-center justify-center border-b border-black/5">
      <Topbar />
      <div className="flex w-full justify-between px-5 py-4 max-w-7xl items-center gap-5">
        <Link href="/" className="text-2xl font-bold">
          {companyName}
        </Link>
        <Sidebar />
        <div className="items-center hidden md:flex gap-4">
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="#about" />
          <ServicesDropdown />
          <NavLink title="Contact" href="#contact" />
        </div>
      </div>
    </header>
  );
};

export default Header;
