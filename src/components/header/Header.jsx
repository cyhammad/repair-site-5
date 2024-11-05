import { companyName } from "@/libs/data";
import Link from "next/link";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";

const Header = ({ company = companyName }) => {
  return (
    <header className="flex flex-col w-full items-center justify-center border-b border-black/5">
      <Topbar company={company} />
      <div className="flex w-full justify-between px-5 py-4 max-w-7xl items-center gap-5">
        {company === "Siemens" ? (
          <Link href="/companies/siemens">
            <Image
              src="/static/siemens.svg"
              width={150}
              height={50}
              alt="Siemens"
            />
          </Link>
        ) : company === "Bosch" ? (
          <Link href="/companies/bosch">
            <Image src="/static/bosch.svg" width={150} height={50} alt="LG" />
          </Link>
        ) : company === "Samsung" ? (
          <Link href="/companies/samsung">
            <Image src="/static/samsung.svg" width={120} height={50} alt="LG" />
          </Link>
        ) : company === "Lg" ? (
          <Link href="/companies/lg">
            <Image src="/static/lg.svg" width={100} height={50} alt="LG" />
          </Link>
        ) : (
          <Link href="/" className="text-xl font-bold">
            {company}
          </Link>
        )}
        <Sidebar company={company} />
        <div className="items-center hidden md:flex gap-4">
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="#about" />
          <ServicesDropdown company={company} />
          <NavLink title="Contact" href="#contact" />
        </div>
      </div>
    </header>
  );
};

export default Header;
