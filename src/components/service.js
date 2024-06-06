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
]

export default function Services() {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 max-w-3xl mx-auto mb-10">
                {topIcons.map((feeling, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="lg:bg-moss p-4 lg:p-6 rounded-md">
                            <Image
                                className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] lg:invert"
                                src={feeling.img}
                                priority
                                width={150}
                                height={150}
                                alt={feeling.heading}
                            />
                        </div>
                        <h4 className="text-base lg:text-xl font-extralight lg:mt-3">{feeling.heading}</h4>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-4 max-w-5xl mx-auto">
                {bottomIcons.map((feeling, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="lg:bg-moss p-4 lg:p-6 rounded-md">
                            <Image
                                className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] lg:invert"
                                src={feeling.img}
                                priority
                                width={150}
                                height={150}
                                alt={feeling.heading}
                            />
                        </div>
                        <h4 className="text-base lg:text-xl font-extralight lg:mt-3">{feeling.heading}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}
