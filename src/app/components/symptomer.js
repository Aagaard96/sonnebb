import Image from "next/image";

const topIcons = [
  { img: "/icons/negative-thoughts-icon.svg", heading: "Stress" },
  { img: "/icons/stress-icon.svg", heading: "Angst" },
  { img: "/icons/negative-thoughts-icon.svg", heading: "Depression" },
];

const bottomIcons = [
  { img: "/icons/stress-icon.svg", heading: "Modløshed" },
  { img: "/icons/negative-thoughts-icon.svg", heading: "Sportsskader" },
  { img: "/icons/stress-icon.svg", heading: "Velvære" },
  { img: "/icons/negative-thoughts-icon.svg", heading: "Sportsskader" },
];

export default function Symptomer() {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-3 max-w-3xl place-items-center mx-auto mb-10">
        {topIcons.map((feeling, i) => (
          <div
            key={i}
            className="bg-moss w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] flex flex-col items-center justify-evenly rounded-md border-1 text-center border-mainText"
          >
            <Image
              className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] invert"
              src={feeling.img}
              priority
              width={150}
              height={150}
              alt={feeling.heading}
            />
            <h4 className="text-sm lg:text-xl font-extralight lg:mt-3">
              {feeling.heading}
            </h4>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 max-w-5xl place-items-center mx-auto">
        {bottomIcons.map((feeling, i) => (
          <div
            key={i}
            className="bg-moss w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] flex flex-col items-center justify-evenly rounded-md border-1 text-center border-mainText"
          >
            <Image
              className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] invert"
              src={feeling.img}
              priority
              width={150}
              height={150}
              alt={feeling.heading}
            />
            <h4 className="text-sm lg:text-xl font-extralight lg:mt-3">
              {feeling.heading}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
