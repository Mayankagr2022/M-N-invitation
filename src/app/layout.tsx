import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayank ❤️ Nikita | Wedding Invitation — 20 February 2027",
  description:
    "Together with our families, we invite you to celebrate the wedding of Mayank and Nikita on 20 February 2027. Two hearts. One journey. Forever begins.",
  keywords: [
    "Mayank and Nikita Wedding",
    "Indian Wedding Invitation",
    "Luxury Wedding Website",
    "20 February 2027",
    "Mayank Nikita RSVP",
  ],
  authors: [{ name: "Mayank & Nikita" }],
  openGraph: {
    title: "Mayank ❤️ Nikita — Royal Wedding Invitation",
    description: "Two hearts. One journey. Forever begins. Join us in celebrating our wedding on 20 February 2027.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Mayank ❤️ Nikita Wedding Celebration",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#F8F5F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8F5F0] text-[#2D2622] font-poppins selection:bg-[#C9A46A]/20 selection:text-[#2D2622]">
        {children}
      </body>
    </html>
  );
}
