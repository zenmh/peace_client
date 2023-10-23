import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer, Navbar } from "@/components/shared";

export const metadata: Metadata = {
  title: "Peace",
  description: "Created by Mehedi Hasan",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="max-w-[1444px] sm:mx-3 md:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
