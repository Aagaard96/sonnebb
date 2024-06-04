import BookBtn from "@/components/bookbtn";
import Reviews from "@/components/reviews";
import Services from "@/components/service";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="min-h-screen mx-auto">
        {/* BOOK TID BUTTON */}
        <BookBtn />

        {/* HERO */}
        <section className="bg-zinc-200 w-full h-[400px]">
          <div className="relative flex justify-between items-center max-w-6xl mx-auto">
            <div className="font-semibold">
              <div className="mb-8 flex flex-col gap-2">
                <h1 className="text-5xl">Sonne Body &amp; Balance</h1>
                <h3 className="text-moss text-2xl">
                  Autoriseret Body SDS Kropsterapeut
                </h3>
              </div>
              <button className="px-8 py-4 bg-moss rounded-md text-white hover:bg-moss/50 uppercase border-2 border-moss">
                Book her
              </button>
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
            <h3 className="text-4xl font-bold mb-4">
              Her er, hvad mine fantastiske kunder har delt om deres oplevelser
              hos mig
            </h3>
            <p>
              I løbet af de sidste 5 år har jeg haft æren af at bidrage til at
              forbedre livskvaliteten for mange af mine klienter
            </p>
            <p>
              Uanset om det drejede sig om fysiske eller psykiske udfordringer,
              har de fleste oplevet en mærkbar forbedring i deres livskvalitet
              efter vores behandlinger.
            </p>
          </div>
          <Reviews />
        </section>

        {/* SERVICES */}
        <section className=" py-20 bg-zinc-200">
          <div className="text-center max-w-6xl mx-auto text-lg text-pretty mb-20 bg-zinc-200">
            <h3 className="text-4xl font-bold mb-5">
              Body SDS - Hvad kan det gøre for mig?
            </h3>
            <p>
              Uanset om det handler om fysiske smerter, stress, angst eller
              andre helbredsmæssige udfordringer, har Body SDS vist sig at være
              effektiv.
            </p>
            <p className="mt-2">
              Denne holistiske tilgang til kroppen hjælper med at løsne
              spændinger, forbedre kropsholdningen, øge energiniveauet og fremme
              en dybere følelse af ro og balance.{" "}
            </p>
          </div>
          <Services />
        </section>

        {/* SÅDAN FOREGÅR EN BEHANDLING */}
        <section className="max-w-6xl mx-auto my-20 flex justify-between gap-20">
          <div className="flex-1 bg-zinc-100 p-5 rounded-md shadow-md shadow-moss">
            <h3 className="text-4xl font-bold mb-5">
              Hvordan foregår en <span className="text-moss">behandling?</span>
            </h3>
            <div className="flex flex-col gap-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum ratione maiores? Ad nobis, molestiae ab mollitia, expedita ratione tempora veniam cupiditate inventore exercitationem, facere at recusandae dolor non natus porro perferendis.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil autem itaque, facere eius inventore aspernatur tempora soluta cumque! Quo?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum modi voluptas quo nihil quaerat sint consequatur est. Neque, dolores aperiam minima expedita consectetur voluptas aliquid odit ea quos fugit.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas facilis, explicabo incidunt rerum placeat reprehenderit obcaecati modi iste voluptates deleniti. Ratione natus labore laudantium dicta, fuga, eveniet facilis debitis magnam molestias ex esse culpa laborum quae non eum. Asperiores, maxime.</p>
            </div>
          </div>


          <div className="flex items-center relative">
            <Image
              className="rounded-md z-20 w-full"
              src="/behandlingdummy.jpg"
              width={400}
              height={400}
              alt="Behandling hos SonneBB"
            />
            <div className="w-[640px] h-[520px] bg-moss/50 rounded-md absolute z-10 ml-16 mt-20">

            </div>
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
