"use client";

import { dialPhone, phoneNumber, sendMessage } from "@/libs/data";
import Image from "next/image";

export default function FixedCallButtons() {
  return (
    <div className="fixed flex items-center justify-center bottom-0 right-0 z-[101] w-screen px-3 py-2 pointer-events-none">
      <div className="flex justify-between w-full items-center max-w-7xl gap-2">
        <button
          onClick={dialPhone}
          className="rounded-full flex items-center justify-center shadow-lg h-14 w-14 border-black/10 border bg-primary pointer-events-auto"
        >
          <Image
            quality={100}
            src="/static/call.svg"
            alt="Call us"
            width={35}
            height={35}
          />
        </button>
        <button
          onClick={sendMessage}
          className="rounded-md flex items-center justify-center shadow-lg h-14 w-14 bg-green-400 border border-green-200 pointer-events-auto"
        >
          <Image
            quality={100}
            src="/static/whatsapp-2.svg"
            alt="Whatsapp"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}
