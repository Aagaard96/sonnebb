"use client"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaQuoteRight } from "react-icons/fa";
import StaggerAnimation from "./animations/staggerAnimation";

const reviews = [
    { name: "Rasmus Nolten", content: "Jeg vil varmt anbefale deres service til enhver, der søger en dybt givende og helbredende oplevelse. Tak for en fantastisk behandling!", cause: "Stress" },
    { name: "Kirsten Rozenkrantz", content: "Behandlingen var professionel og omsorgsfuld, og jeg følte mig virkelig hørt og forstået. Jeg kan varmt anbefale deres service til alle, der kæmper med angst og søger en effektiv og helbredende behandling. Mange tak for den vidunderlige oplevelse!", cause: "Angst" },
    { name: "Susanne Christensen", content: "Jeg besøgte Sonne Body & Balance på grund af en sportsskade, der havde plaget mig i lang tid. Efter bare én session mærkede jeg en betydelig lettelse af mine smerter, og min mobilitet blev forbedret markant.", cause: "Sportsskade" },
];


export default function Reviews() {
    return (
        <article className="grid lg:grid-cols-3 place-items-center gap-20 lg:gap-5 max-w-7xl mx-auto">
            {reviews.map((review, i) => (
            <StaggerAnimation key={i} index={i} >
                <Card isblurred className="max-w-[325px] h-fit md:max-w-[400px] p-5 bg-accentText overflow-visible">
                    <CardHeader className="font-bold text-xl text-mainText">
                        {review.name}
                    </CardHeader>
                    <CardBody className="font-playfair">
                        &quot;{review.content}&quot;
                    </CardBody>
                    <CardFooter className="md:-mb-20 -mb-14 flex justify-end">
                        <FaQuoteRight className="text-neutral-800 text-6xl md:text-8xl" />
                    </CardFooter>
                </Card>
            </StaggerAnimation>
            ))}
        </article>
    )
}
