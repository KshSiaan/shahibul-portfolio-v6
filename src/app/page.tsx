import HeaderButtons from "@/components/sub-components/header-buttons";
import RavenTitle from "@/components/sub-components/raven-title";
import { CornerLeftDown, CornerRightDown } from "lucide-react";
// import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="h-dvh w-dvw p-10 font-afacad">
        <div className="fixed bottom-4 right-4 -translate-x-[30px] -translate-y-[48px] h-[140px] w-[140px]">
          {/* <Image
            src="/assets/guide_to_nav.svg"
            layout="responsive"
            width="500"
            height="500"
            alt="guide-to-nav"
            className="object-contain"
          /> */}
        </div>
        <div className="h-auto w-full relative flex flex-row justify-start items-start">
          <div className="w-1/2 h-full flex flex-col justify-between items-start">
            <div className="">
              <p className="font-light text-lg">Hi visitor! My name is</p>
              <h1 className="text-8xl font-thin leading-tight">
                <span className="border-b-2 border-primary align-baseline">
                  Shahibul
                </span>{" "}
                Hasan
              </h1>
              <h3 className="mt-4 text-2xl">
                {" "}
                &gt; Full Stack Developer & Designer
              </h3>
            </div>
          </div>
          <div className="w-1/2 h-auto text-right">
            <RavenTitle />
            <h1 className="text-8xl font-thin leading-tight">
              <span className="border-b-2 border-primary align-baseline">
                RAVEN
              </span>
            </h1>
          </div>
        </div>
        <div className="font-afacad w-full flex flex-row justify-center items-start">
          <div className="">
            <h4 className="text-4xl mt-12">
              Need an explaination of what i can do?
            </h4>
            <div className="flex flex-row justify-center items-center">
              <CornerLeftDown size={18} className="text-primary" />
              <span className="text-center my-4">
                Choose from one in between
              </span>
              <CornerRightDown size={18} className="text-primary" />
            </div>
            <HeaderButtons />
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
