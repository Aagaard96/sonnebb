"use client"; // Ensure it's a client component
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import Animation from "@/components/animations/SlideAnimation";

// Sample testimonial data
const testimonials = [
    {
        name: "Morten Larsen",
        title: "Triatlet & Ledelseskonsulent",
        content:
            "Jeg havde store problemer med kramper og muskelsmerter under triathlon. De dårlige resultater havde sat sig mentalt, og det var blevet en stor udfordring at sætte sig op til et løb af frygt for endnu en fiasko. Gennem samtale, behandling og øvelser blev spændingerne løsnet, og jeg opnåede endelig gode resultater uden kramper og med mentalt overskud hele vejen til mål. Jeg kan klart anbefale et forløb hos Morten.",
    },
    {
        name: "Tobias Risager",
        title: "Studerende",
        content:
            "Med hjælp fra Morten og hans dygtige arbejde gik jeg op til eksamen og gik derfra med et 12-tal. Morten har fået mig til at tro på mig selv og mine evner. Jeg har lært, at vejrtrækning kan hjælpe en hel del og give mig kontrol over min angst og mit tankemylder. Jeg værdsætter den hjælp, Morten har givet mig, og vil opfordre alle til at få den behandling, han kan tilbyde.",
    },
    {
        name: "Susanne Christensen",
        title: "Ironman-udøver",
        content:
            "Jeg havde aldrig troet, at jeg skulle kunne gennemføre en Ironman igen. Min læg var fuldstændig overspændt, og jeg kunne intet stille op. Efter et forløb hos Morten fik vi løsnet op for det hele, både psykisk og fysisk, og kort efter kunne jeg både sætte personlig rekord på cyklen og i løbet. Jeg er så glad!",
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
        <article className="py-16 bg-[url('/nakke.jpg')] lg:bg-[url('/reviewsbg.jpg')] bg-no-repeat bg-center bg-cover border-y-4 border-mainText">
            <div className="h-full ctn">
                <div className="heading-container">
                    <Animation type="OnlyAppear" as="h2" className="text-2xl md:text-3xl uppercase text-center tracking-tight font-bold text-accent lg:text-gray">
                        anmeldelser
                    </Animation>
                    <h3 className="section-description text-2xl md:text-3xl lg:text-4xl text-center">
                        Mine kunder har sagt:
                    </h3>
                </div>
                <div className="w-full md:w-4/5 lg:w-4/5 mx-auto mt-10">
                    {/* Container with fixed height */}
                    <div className="relative flex items-center justify-center h-[325px] overflow-hidden">
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
                                className="absolute w-4/5 bg-gray/95 rounded-lg flex items-center h-fit border-2 border-accent"
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
                                    <p className="text-sm md:text-lg italic text-mainText font-extralight">
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
