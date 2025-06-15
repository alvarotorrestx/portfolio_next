import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Alvaro Torres | Software Engineer | Front-End Developer | Web Developer",
  description: "Software Engineer with startup experience in full-stack development and leading scalable, user-centric technology. Passionate about mentoring and building impactful software solutions; seeking full-time/internship roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/images/brand/logo.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <main className="px-2 md:px-10 lg:px-20 xl:px-40 flex items-center justify-center flex-col">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}