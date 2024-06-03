import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sonne Body & Balance",
  description: "BodySDS Terapeut i Karlslunde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-[#312B2B] mx-auto">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
