import { cn } from "@/lib/utils";
import Image from "next/image";

const CallAndWhatsappButton = ({ className }) => {
  return (
    <div className={cn(className, "flex items-center gap-3 text-black")}>
      <button className="group flex items-center gap-2 px-4 rounded-sm text-sm py-2 bg-primary border border-primary hover:border-black/10">
        <Image src="/static/phone.svg" alt="phone" width={10} height={10} />
        <div className="relative">
          <span>Call us</span>
          <span className="w-0 absolute bottom-0.5 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-black"></span>
        </div>
      </button>
      <button className="group flex items-center gap-2 px-4 rounded-sm text-sm py-2 bg-secondary border border-secondary hover:border-black/10">
        <Image src="/static/whatsapp.svg" alt="phone" width={15} height={15} />
        <div className="relative">
          <span>Whatsapp</span>
          <span className="w-0 absolute bottom-0.5 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-black"></span>
        </div>
      </button>
    </div>
  );
};

export default CallAndWhatsappButton;
