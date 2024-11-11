"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FileUserIcon, Gamepad2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
// import React, { useState } from "react";

export default function HeaderButtons() {
  const navig = useRouter();
  return (
    <div className="w-full h-[200px] grid grid-cols-2 divide-x-2 divide-primary">
      <div className="w-full relative h-full flex justify-center items-center bg-background shadow-black">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-full bg-primary absolute top-0"
            style={{
              right: `${(index * 100) / 8}%`,
              width: `${100 / 8}%`,
              opacity: 0.1 - index * 0.025, // Start from 0.2 and reduce for each div
            }}
          ></div>
        ))}
        <AnimatePresence>
          <motion.button
            initial={{ x: -100, y: 0, scale: 1, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: -4, y: -4 }}
            whileTap={{ scale: 0.9, x: 0, y: 0 }}
            transition={{ type: "spring" }}
            onClick={() => {
              navig.push("/curriculam-vitae");
            }}
            className="relative bg-background border-2 active:shadow-[1px_1px_0px_black] hover:shadow-[4px_4px_0px_black] transition-all border-dashed rounded-md border-primary flex flex-row justify-center items-center p-2 gap-2"
          >
            <FileUserIcon size={18} /> <span>Formal approach</span>
          </motion.button>
        </AnimatePresence>
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-full bg-primary absolute top-0"
            style={{
              left: `${(index * 100) / 8}%`,
              width: `${100 / 8}%`,
              opacity: 0.1 - index * 0.025, // Start from 0.2 and reduce for each div
            }}
          ></div>
        ))}
        <AnimatePresence>
          <motion.button
            initial={{
              x: 100,
              rotateX: 100,
              rotateY: 50,
              y: 0,
              scale: 1,
              opacity: 0,
            }}
            animate={{ x: 0, rotateX: 0, rotateY: 0, opacity: 1 }}
            whileHover={{ y: -4, rotateY: 20, skewX: 10 }}
            whileTap={{ scale: 0.9, x: -4, y: 2 }}
            transition={{ type: "spring", ease: "easeInOut" }}
            className="relative overflow-hidden bg-background border-2 transition-all hover:shadow-[-4px_4px_0px_black] border-dashed rounded-md border-primary flex flex-row justify-center items-center p-2 gap-2"
            aria-label="Creative approach"
          >
            <Gamepad2Icon size={18} />
            <span>Creative approach</span>
          </motion.button>
        </AnimatePresence>
      </div>
    </div>
  );
}
