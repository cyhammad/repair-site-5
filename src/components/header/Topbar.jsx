import { phoneNumber } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex items-center justify-center w-full bg-primary">
      <div className="grid grid-cols-[1fr_1px_1fr] gap-2 w-full max-w-7xl">
        <div className="flex items-center justify-center gap-1 px-5 py-2 text-sm">
          <Image src="/static/phone.svg" width={12} height={20} alt="Phone" />
          Call us
          <Link className="group relative hidden sm:block" href="/">
            <span>{phoneNumber}</span>
            <span className="w-0 absolute bottom-0 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-black"></span>
          </Link>
        </div>
        <span className="border-[0.5px] border-black/50 h-8 mt-0.5"></span>
        <div className="flex items-center justify-center gap-1 px-5 py-2 text-sm">
          <Image src="/static/whatsapp.svg" width={16} height={20} alt="Phone" />
          Whatsapp
          <Link className="group relative hidden sm:block" href="/">
            <span>{phoneNumber}</span>
            <span className="w-0 absolute bottom-0 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-black"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
