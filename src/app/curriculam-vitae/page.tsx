import React from "react";

export default function Page() {
  return (
    <main className="h-dvh w-dvw">
      <iframe
        src="/assets/cv.pdf"
        className="w-full h-full"
        style={{ border: "none" }}
        title="PDF as Image"
      />
      {/* <embed
        src="/assets/cv.pdf"
        type="application/pdf"
        className="w-full h-full"
        width="100%"
        height="100%"
        title="Embedded PDF Viewer"
      /> */}
    </main>
  );
}
