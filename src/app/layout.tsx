import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Footer from '@/components/Footer'
import Script from "next/script";
import ClarityProvider from "@/components/ClarityProvider";

export const metadata: Metadata = {
  title: "Alvaro Torres | Full-Stack Software Engineer",
  authors: [{ name: "Alvaro Torres - @alvarotorrestx", url: "https://alvarotorres.dev" }],
  description:
    "Full-stack software engineer focused on automation, applied AI, fintech operations, and practical product development using React, TypeScript, Python, FastAPI, and PostgreSQL.",
  keywords: [
    "Alvaro Torres",
    "Full-Stack Software Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Product Engineer",
    "Automation Engineer",
    "Python Developer",
    "React Developer",
    "TypeScript Developer",
    "FastAPI Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Backend Developer",
    "API Development",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Redis",
    "Docker",
    "Vercel",
    "Railway",
    "Applied AI",
    "Generative AI",
    "OpenAI API",
    "Google Gemini AI",
    "LLM Applications",
    "Machine Learning",
    "TensorFlow",
    "Keras",
    "scikit-learn",
    "Data Automation",
    "Workflow Automation",
    "Fintech Technology",
    "Contact Center Automation",
    "Genesys Cloud",
    "Power BI",
    "Excel VBA",
    "alvarotorres.dev",
    "@alvarotorrestx"
  ],
  metadataBase: new URL("https://alvarotorres.dev"),
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Alvaro Torres | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer focused on automation, applied AI, fintech operations, and practical product development using React, TypeScript, Python, FastAPI, and PostgreSQL.",
    images: ["/images/brand/logo_seo.jpg"],
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvaro Torres | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer focused on automation, applied AI, fintech operations, and practical product development using React, TypeScript, Python, FastAPI, and PostgreSQL.",
    images: ["/images/brand/logo_seo.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/brand/logo_red.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="transition-colors duration-500 font-sans antialiased scroll-smooth">
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QYB3H5EX9S"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QYB3H5EX9S');
            `,
          }}
        />

        <ClarityProvider />

        <CustomCursor />
        <main className="px-2 md:px-10 lg:px-20 xl:px-40 flex items-center justify-center flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}