import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
    { name: "Rasmus Nolten", content: "Jeg vil varmt anbefale deres service til enhver, der søger en dybt givende og helbredende oplevelse. Tak for en fantastisk behandling!", cause: "Stress" },
    { name: "Kirsten Rozenkrantz", content: "Behandlingen var professionel og omsorgsfuld, og jeg følte mig virkelig hørt og forstået. Jeg kan varmt anbefale deres service til alle, der kæmper med angst og søger en effektiv og helbredende behandling. Mange tak for den vidunderlige oplevelse!", cause: "Angst" },
    { name: "Susanne Christensen", content: "Jeg besøgte Sonne Body & Balance på grund af en sportsskade, der havde plaget mig i lang tid. Efter bare én session mærkede jeg en betydelig lettelse af mine smerter, og min mobilitet blev forbedret markant.", cause: "Sportsskade" },
];


export default function Reviews() {
    return (
        <article className="grid grid-cols-3 place-items-center gap-5">
            {reviews.map((review, i) => (
                <Card key={i} isblurred className="max-w-[275px] h-[300px] md:max-w-[400px] p-5 bg-moss text-white shadow-lg shadow-zinc-400 overflow-visible">
                    <CardHeader className="font-bold text-xl">
                        {review.name}
                    </CardHeader>
                    <CardBody >
                        {review.content}
                    </CardBody>
                    <CardFooter className="-mb-20 flex justify-end">
                        <FaQuoteRight className="text-black text-8xl" />
                    </CardFooter>
                </Card>
            ))}
        </article>
    )
}
