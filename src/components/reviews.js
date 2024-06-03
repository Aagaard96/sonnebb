import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
    { name: "Kirsten Rozenkrantz", content: "Efter en session hos Sonne Body & Balance følte jeg mig forynget og afslappet som aldrig før. Behandlingen var professionel og omsorgsfuld, og jeg kunne mærke en markant forbedring i min krop efter blot én session. Jeg vil varmt anbefale deres service til enhver, der søger en dybt givende og helbredende oplevelse. Tak for en fantastisk behandling!", cause: "Stress" },
    { name: "Kirsten Rozenkrantz", content: "Efter en session hos Sonne Body & Balance følte jeg mig forynget og afslappet som aldrig før. Behandlingen var professionel og omsorgsfuld, og jeg kunne mærke en markant forbedring i min krop efter blot én session. Jeg vil varmt anbefale deres service til enhver, der søger en dybt givende og helbredende oplevelse. Tak for en fantastisk behandling!", cause: "Sportsskade" },
    { name: "Kirsten Rozenkrantz", content: "Efter en session hos Sonne Body & Balance følte jeg mig forynget og afslappet som aldrig før. Behandlingen var professionel og omsorgsfuld, og jeg kunne mærke en markant forbedring i min krop efter blot én session. Jeg vil varmt anbefale deres service til enhver, der søger en dybt givende og helbredende oplevelse. Tak for en fantastisk behandling!", cause: "Angst" },
];


export default function Reviews() {
    return (
        <article className="grid grid-cols-3 place-items-center gap-5">
            {reviews.map((review, i) => (
                <Card key={i} isblurred className="max-w-[275px] md:max-w-[400px] p-5 bg-[#63827B] text-white shadow-xl shadow-zinc-600 overflow-visible">
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
