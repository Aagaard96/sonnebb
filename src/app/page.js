import Reviews from "@/components/reviews";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="min-h-screen mx-auto">
        {/* HERO */}
        <section className="bg-zinc-200 w-full h-[400px]">
          <div className="relative flex justify-between items-center max-w-6xl mx-auto">
            <div className="font-semibold">
              <div className="mb-8 flex flex-col gap-2">
                <h1 className="text-5xl">Sonne Body &amp; Balance</h1>
                <h3 className="text-[#63827B] text-2xl">Autoriseret Body SDS Kropsterapeut</h3>
              </div>
              <button className="px-8 py-4 bg-[#63827B] rounded-md text-white hover:bg-[#63827B]/50">Book her</button>
            </div>
            <Image
              className="rounded-md"
              src="/hero-dummy.png"
              width={600}
              height={500}
              alt="Hero Image"
            />
          </div>
        </section>

        {/* REVIEWS*/}
        <section className="max-w-7xl mx-auto mb-28">
          <div className="text-center my-20 max-w-4xl mx-auto text-lg">
            <h3 className="text-3xl font-bold mb-4">Her er, hvad mine fantastiske kunder har delt om deres oplevelser med mig</h3>
            <p>I løbet af de sidste 5 år har jeg haft æren af at bidrage til at forbedre livskvaliteten for mange af mine klienter</p>
            <p>Uanset om det drejede sig om fysiske eller psykiske udfordringer, har de fleste oplevet en mærkbar forbedring i deres livskvalitet efter vores behandlinger.</p>
          </div>
          <Reviews />
        </section>
      </main>
    </NextUIProvider>
  );
}
