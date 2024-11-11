"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function RavenTitle() {
  const navig = useRouter();
  return (
    <p className="font-light text-lg">
      You can also{" "}
      <span
        onClick={() => {
          navig.push("/friend");
        }}
      >
        call me
      </span>
    </p>
  );
}
