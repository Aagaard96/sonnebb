import "./globals.css";
import Footer from "@/components/footer";
import { Inter, Playfair_Display, Inria_Sans } from "next/font/google";
import ToTopBtn from "@/components/globalToTopbtn";
import Navigation from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const inria = Inria_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inria",
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL("https://sonnebb.netlify.app"), // Replace with your actual domain
  title: "Sonne Body & Balance | Body SDS",
  description: "Autoriseret Body SDS behandler i Karlslunde. Går du og døjer med stress eller angst? Eller går tingene bare lidt for stærkt opppe i hovedet? Har du en sportsskade der holder dig tilbage fra sport? Kontakt mig, så tar' vi en uforpligtende snak",
  openGraph: {
    title: "Sonne Body & Balance | Body SDS",
    description: "Autoriseret Body SDS behandler i Karlslunde. Går du og døjer med stress eller angst? Eller går tingene bare lidt for stærkt opppe i hovedet? Har du en sportsskade der holder dig tilbage fra sport? Kontakt mig, så tar' vi en uforpligtende snak",
    images: [
      {
        url: "/opengraph-image.png", // Replace with your image URL
      },
    ],
    url: "sonnebb.netlify.app", // Replace with your page URL
    type: "website", // Set type to website
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="da"
      className={`${inter.variable} ${playfair.variable} ${inria.variable}`}
    >
      <body className="bg-gradient-to-b from-accentBg to-mainBg text-mainText font-inria">
        <Navigation />
        {children}
        <Footer />
        <ToTopBtn />
      </body>
    </html>
  );
}
