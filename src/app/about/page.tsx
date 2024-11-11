"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="h-dvh w-dvw overflow-hidden p-12 grid grid-cols-3 font-afacad">
        <div className="col-span-1 w-full h-full text-primary">
          <div className="relative w-full">
            <p className="text-center font-md text-xl">ME</p>
            <Image
              src="/assets/Raven Avatar.svg"
              height={500}
              width={500}
              alt="me"
              className="h-auto w-full border-2 border-primary bg-background"
            />
          </div>
        </div>
        <div className="col-span-2 h-full w-full grid grid-rows-2">
          <div className="h-full">
            <h2 className="w-full text-center font-afacad font-bold text-2xl">
              The Journey of a Developer: From Curiosity to Craftsmanship
            </h2>
            <div className="w-full font-afacad font-light bg-background p-4 overflow-y-auto">
              <TextGenerateEffect words={words} />
            </div>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <Link href="/skills" passHref legacyBehavior>
              <a className="w-40 h-12 bg-background cursor-pointer rounded-3xl border-2 border-primary shadow-[inset_0px_-2px_0px_1px_theme(colors.primary)] group hover:bg-primary transition duration-300 ease-in-out flex items-center justify-center">
                <span className="font-medium text-foreground group-hover:text-white">
                  Explore my skills
                </span>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

const words = `I'm Shahibul Hasan, a developer from Bangladesh whose journey into tech started with the Mimo app, sparking a curiosity that quickly turned into a full-on obsession with building seamless, full-stack applications. What began as a fascination with coding soon evolved into a passion for crafting experiences that flow effortlessly from front to back.

On the front end, I specialize in creating responsive, engaging interfaces using React, Next.js, and Tailwind, bringing designs to life with precision and flair. My work doesn’t stop at visuals, though. With Node.js, Express, and MongoDB on the back end, I build systems that are just as robust behind the scenes—scalable, efficient, and ready to grow.

Development, to me, is about more than code; it’s about solving real problems, pushing creative boundaries, and staying on a constant learning path to keep building better solutions.

Curious? Check the skills page to know more...`;

{
  /* <div className="relative h-[220px] w-full flex flex-row justify-center items-end">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] text-sm font-afacad text-primary bg-background">
            This is what i look like
          </div>
          <Image
            src="/assets/Raven Avatar.svg"
            height={500}
            width={500}
            alt="me"
            className="h-[200px] w-[200px] border-2 border-primary bg-background"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center p-4 mt-4">
          <h2 className="w-full text-center font-afacad font-bold text-2xl">
            The Journey of a Developer: From Curiosity to Craftsmanship
          </h2>
          <div className="w-2/3 font-afacad font-thin bg-background p-4 overflow-y-auto">
            <TextGenerateEffect words={words} />
          </div>
        </div> */
}
