"use client";

import { dialPhone, phoneNumber, sendMessage } from "@/libs/data";
import Image from "next/image";

export default function FixedCallButtons() {
  return (
    <div className="fixed bottom-0 right-0 z-[101] px-3 py-2 pointer-events-none">
      <div className="flex justify-between items-center max-w-7xl gap-2">
        <button
          onClick={sendMessage}
          className="rounded-md flex items-center justify-center h-14 w-14 bg-green-400 border border-green-200 pointer-events-auto"
        >
          <Image
            quality={100}
            src="/static/whatsapp-2.svg"
            alt="Whatsapp"
            width={40}
            height={40}
          />
        </button>
        <button
          onClick={dialPhone}
          className="rounded-md flex items-center justify-center h-14 w-14 border-black/10 border bg-primary pointer-events-auto"
        >
          <Image
            quality={100}
            src="/static/call.svg"
            alt="Call us"
            width={35}
            height={35}
          />
        </button>
      </div>
    </div>
  );
}
