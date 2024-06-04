import Image from "next/image";

const topIcons = [
    { img: "/negative-thoughts-icon.svg", heading: "Stress" },
    { img: "/stress-icon.svg", heading: "Angst" },
    { img: "/negative-thoughts-icon.svg", heading: "Depression" },
];

const bottomIcons = [
    { img: "/stress-icon.svg", heading: "Modløshed" },
    { img: "/negative-thoughts-icon.svg", heading: "Sportsskader" },
    { img: "/stress-icon.svg", heading: "Velvære" },
    { img: "/negative-thoughts-icon.svg", heading: "Sportsskader" },
]

export default function Services() {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 max-w-3xl mx-auto mb-10">
                {topIcons.map((feeling, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="bg-moss p-8 rounded-md">
                            <Image
                                className="w-[100px] h-[100px] invert"
                                src={feeling.img}
                                priority
                                width={150}
                                height={150}
                                alt={feeling.heading}
                            />
                        </div>
                        <h4 className="text-xl font-extralight mt-3">{feeling.heading}</h4>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-4 max-w-5xl mx-auto">
                {bottomIcons.map((feeling, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="bg-moss p-8 rounded-md">
                            <Image
                                className="w-[100px] h-[100px] invert"
                                src={feeling.img}
                                priority
                                width={150}
                                height={150}
                                alt={feeling.heading}
                            />
                        </div>
                        <h4 className="text-xl font-thin mt-3">{feeling.heading}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}
