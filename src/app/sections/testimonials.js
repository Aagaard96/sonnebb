"use client"; // Ensure it's a client component
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import Animation from "@/components/animations/SlideAnimation";

// Sample testimonial data
const testimonials = [
    {
        name: "Rasmus Nolten",
        title: "Iron-Man atlet",
        content:
            "Jeg vil varmt anbefale deres service til enhver, der søger en dybt givende og helbredende oplevelse. Tak for en fantastisk behandling!",
        cause: "Stress",
    },
    {
        name: "Kirsten Rozenkrantz",
        title: "Prof. Fodboldspiller - HB Køge",
        content:
            "Behandlingen var professionel og omsorgsfuld, og jeg følte mig virkelig hørt og forstået. Jeg kan varmt anbefale deres service til alle, der kæmper med angst og søger en effektiv og helbredende behandling. Mange tak for den vidunderlige oplevelse!",
        cause: "Angst",
    },
    {
        name: "Susanne Christensen",
        title: "Landsholdssvømmer",
        content:
            "Jeg besøgte Sonne Body & Balance på grund af en sportsskade, der havde plaget mig i lang tid. Efter bare én session mærkede jeg en betydelig lettelse af mine smerter, og min mobilitet blev forbedret markant.",
        cause: "Sportsskade",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect: changes testimonial every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 8000); // Switch every 10 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    const slideVariants = {
        enter: { x: "-100%", opacity: 0 }, // Slides in from left
        center: { x: 0, opacity: 1 }, // In center
        exit: { x: "100%", opacity: 0 }, // Slides out to left after delay
    };

    return (
        <article className="py-16 bg-[url('/sonnenakke.JPEG')] lg:bg-[url('/reviewsbg.jpg')] bg-no-repeat bg-cover border-y-4 border-white">
            <div className="h-full ctn">
                <div className="text-center uppercase tracking-tight">
                    <Animation type="OnlyAppear" as="h2" className="section-heading text-lg md:text-xl lg:text-2xl">
                        anmeldelser
                    </Animation>
                    <h3 className="section-main-heading text-2xl md:text-3xl lg:text-4xl">
                        Mine kunder har sagt:
                    </h3>
                </div>
                <div className="w-full md:w-4/5 lg:w-4/5 mx-auto mt-10">
                    {/* Container with fixed height */}
                    <div className="relative flex items-center justify-center h-[250px] md:h-[250px] overflow-hidden">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={currentIndex} // Make sure the key changes based on index
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.5 },
                                }}
                                className="absolute w-4/5 bg-gray/95 rounded-lg flex items-center h-full border-2 border-accent"
                            >
                                <div className="text-center  flex flex-col gap-5 py-5 px-2 lg:p-10 relative">
                                    <div>
                                        <p className="font-semibold text-base md:text-2xl lg:text-3xl">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-xs md:text-lg lg:text-xl text-accent italic">
                                            {testimonials[currentIndex].title}
                                        </p>
                                    </div>
                                    <p className="text-sm md:text-lg lg:text-xl italic text-mainText font-extralight">
                                        &quot;{testimonials[currentIndex].content}&quot;
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </article>
    );
}
