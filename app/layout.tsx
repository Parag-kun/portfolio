import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parag Bokde | Full Stack Developer | Next.js, MERN Stack",
  description:
    "Software Engineer with nearly 3 years of experience specializing in building high-performance web applications using the MERN stack. Passionate about problem-solving and scalable solutions.",
  keywords: [
    "Parag Bokde",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Software Engineer Portfolio",
    "React Developer",
    "Web Developer India",
  ],
  authors: [{ name: "Parag Bokde", url: "https://paragbokde.com" }],
  creator: "Parag Bokde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://paragbokde.com",
    title: "Parag Bokde | Full Stack Developer",
    description:
      "Expert MERN stack developer and software engineer building high-performance web applications.",
    siteName: "Parag Bokde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parag Bokde | Full Stack Developer",
    description:
      "Expert MERN stack developer and software engineer building high-performance web applications.",
    creator: "@ParagBokde",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parag Bokde",
  url: "https://paragbokde.com",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://x.com/ParagBokde",
    "https://linkedin.com/in/parag-bokde-30b9241b1",
  ],
  description:
    "Software Engineer specializing in MERN stack and high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
