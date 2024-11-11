import React from "react";

export default function Page() {
  return (
    <main className="h-dvh w-dvw">
      <div className="w-full h-full grid grid-cols-7">
        <div className="col-span-1 w-full bg-background">
          <div className="w-full h-[48px] bg-accent grid grid-cols-4">
            <div className="w-full h-full bg-primary"></div>
            <div className="col-span-3"></div>
          </div>
        </div>
        <div className="col-span-6 w-full bg-background"></div>
      </div>
    </main>
  );
}
