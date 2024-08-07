import "./globals.css";

import Footer from "./components/footer";
import { Inter, Playfair_Display, Inria_Sans } from "next/font/google";
import FixedBookBtn from "./components/globalBookNowBtn";
import ToTopBtn from "./components/globalToTopbtn";
import NavbarMobile from "./components/navbarMobile";
import Navbar from "./components/navbar";

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
  title: "Sonne Body & Balance | Body SDS",
  description: "Autoriseret Body SDS behandler i Karlslunde. Går du og døjer med stress eller angst? Eller går tingene bare lidt for stærkt oppe i hovedet? Har du en sportsskade der holder dig tilbage fra sport? Kontakt mig, så tar' vi en uforpligtende snak",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="da"
      className={`${inter.variable} ${playfair.variable} ${inria.variable}`}
    >
      <body className="bg-neutral-800 text-mainText mx-auto font-inria">
        {/* BOOK TID BUTTON */}
        <FixedBookBtn />
        <Navbar />
        <NavbarMobile />
        {children}
        <Footer />
        <ToTopBtn />
      </body>
    </html>
  );
}
