import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto">
      <section>
        <div className="relative flex items-center justify-center px-5">
          <Image
            className="absolute w-1/2 h-1/3"
            src="/sonnebb_logo_black.svg"
            width={200}
            height={200}
            alt="Sonne Body & Balance"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          />
          <Image
            className="w-full h-fit grayscale rounded-md"
            src="/hero.jpg"
            width={5000}
            height={5000}
            alt="Hero Image"
          />
        </div>
      </section>
    </main>
  );
}
