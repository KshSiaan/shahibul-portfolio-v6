import { MailIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="h-dvh w-dvw p-4 grid grid-cols-2 gap-4 font-afacad bg-background">
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-1/2">
          <h2 className="font-semibold text-5xl">
            Lets Chat. <br />
            Tell me about your project.
          </h2>
          <p className="mt-4 text-lg">Lets create something together 🤟</p>
          <div className="w-full flex flex-row justify-center gap-6 mt-6">
            <div className="h-[48px] w-[48px] rounded-full flex justify-center items-center bg-accent">
              <MailIcon />
            </div>
            <div className="">
              <h4 className="text-2xl font-bold">Mail me at:</h4>
              <p className="text-thin text-xl">kshsiaan@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[80%] grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full py-2 px-4 bg-transparent border-b-2 border-primary"
          />
          <input
            type="text"
            placeholder="Subject (Optional)"
            className="w-full py-2 px-4 bg-transparent border-b-2 border-primary"
          />
          <textarea
            rows={10}
            className="w-full py-2 px-4 bg-background border-2 border-primary resize-none"
            placeholder="Your Message"
          />
          <div className="w-full flex flex-row justify-center items-center">
            <button className="py-2 px-4 border-2 border-dashed border-primary shadow-black shadow-md active:shadow-none">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
