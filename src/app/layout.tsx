import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navig from "@/components/navig";

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
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
