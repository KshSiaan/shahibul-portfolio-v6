import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navig from "@/components/navig";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Shahibul Hasan - Web Developer & Designer Portfolio",
  description:
    "Explore the portfolio of Shahibul Hasan, a skilled web developer specializing in modern, responsive web design with expertise in Next.js, React, and Tailwind CSS.",
  keywords:
    "Shahibul Hasan, web developer, portfolio, Next.js, React, Tailwind CSS, frontend developer, full-stack developer",
  author: "Shahibul Hasan",
  openGraph: {
    title: "Shahibul Hasan - Web Developer & Designer Portfolio",
    description:
      "Showcasing Shahibul Hasan's projects, skills, and expertise in web development, including animations with Framer Motion.",
    type: "website",
    url: "https://shahibul-hasan.vercel.app",
    image: "https://shahibul-hasan.vercel.app/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahibul Hasan - Web Developer & Designer",
    description:
      "Explore Shahibul Hasan's portfolio, featuring cutting-edge web development projects.",
    image: "https://shahibul-hasan.vercel.app/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          style={{ backgroundImage: `url("/assets/bg.svg")` }}
          className="bg-fixed bg-cover bg-top selection:bg-primary"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <Navig />
            </header>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
