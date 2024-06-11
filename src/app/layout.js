import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter, Playfair_Display, Inria_Sans } from 'next/font/google'
import FixedBookBtn from "@/components/globalBookNowBtn";
import ToTopBtn from "@/components/globalToTopbtn";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const inria = Inria_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inria',
  weight: "400"
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: "variable",
  variable: '--font-playfair',
})

export const metadata = {
  title: "Sonne Body & Balance | Body SDS",
  description: "Body SDS Kropsterapeut i Karlslunde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable} ${inria.variable}`}>
      <body className="bg-neutral-800 text-mainText mx-auto font-inria">
        {/* BOOK TID BUTTON */}
        <FixedBookBtn />
        <Navbar />
        {children}
        <Footer />
        <ToTopBtn />
      </body>
    </html>
  );
}
