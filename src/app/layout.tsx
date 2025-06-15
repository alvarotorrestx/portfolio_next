import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/app/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Alvaro Torres | Full-Stack Software Engineer",
  description: "Software Engineer with startup experience in full-stack development and leading scalable, user-centric technology. Passionate about mentoring and building impactful software solutions; seeking full-time/internship roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/brand/logo.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="transition-colors duration-500 font-sans antialiased">
        {/* <ThemeProvider> */}
          <CustomCursor />
          <main className="px-2 md:px-10 lg:px-20 xl:px-40 flex items-center justify-center flex-col">
            {/* <NavBar /> */}
            {children}
          </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}