"use client";
import Image from "next/image";
import React, { useState } from "react";
import Reaper from "./reaper.webp";
import { useRouter } from "next/navigation";

export default function Page() {
  const [ikw, setIkw] = useState<string>("I know what I'm doing");
  const navig = useRouter();
  return (
    <main className="h-dvh w-dvw p-4 grid grid-cols-2 font-afacad">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image
          src={Reaper}
          alt="reaper"
          className="mix-blend-overlay w-1/2 h-1/2 object-contain"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-blood text-primary text-center">
          You&apos;re sure?
        </h1>
        <h1 className="text-4xl font-blood text-primary text-center">
          Have you really been here before?
        </h1>
        <button
          className="py-2 px-4 border-2 border-primary border-dashed mt-4 text-primary font-bold"
          onClick={() => {
            setIkw("Proceeding..");
            navig.push("/friend/hell");
          }}
        >
          {ikw}
        </button>
      </div>
    </main>
  );
}
