import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourwebsite.com"),
  title: "Your Name | Senior Software Engineer & AI Specialist",
  description:
    "Senior Software Engineer with 6+ years of experience building production-grade ML systems and full-stack applications. Expertise in AI/ML, React, Next.js, and cloud infrastructure.",
  keywords: [
    "Software Engineer",
    "Machine Learning",
    "AI",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "MLOps",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Your Name - Portfolio",
    title: "Your Name | Senior Software Engineer & AI Specialist",
    description:
      "Senior Software Engineer with 6+ years of experience building production-grade ML systems and full-stack applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Name - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Senior Software Engineer & AI Specialist",
    description:
      "Senior Software Engineer with 6+ years of experience building production-grade ML systems and full-stack applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
