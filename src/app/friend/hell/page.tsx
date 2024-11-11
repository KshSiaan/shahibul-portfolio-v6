"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const navig = useRouter();
  return (
    <main className="w-dvw h-dvh flex flex-col gap-4 justify-center items-center">
      <h1 className="text-8xl font-blood text-primary underline">
        Welcome to Hell
      </h1>
      <h4 className="font-blood text-2xl text-primary">
        For now Only Chat is available.
      </h4>
      <button
        className="py-2 px-4 border-2 border-primary font-afacad"
        onClick={() => {
          navig.push("hell/chat");
        }}
      >
        Chat with Raven
      </button>
    </main>
  );
}
