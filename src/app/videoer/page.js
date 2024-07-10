import Divider from "@/components/divider";
import React from "react";

export const metadata = {
  title: "Videoer | Sonne Body & Balance",
  description:
    "Her finder du forskellige små øvelser du kan lave derhjemme, uden krav til udstyr",
};

export default function Videoer() {
  return (
    <section className="py-28 bg-gradient-to-br from-mainBg to-accentBg">
      <div className="flex flex-col px-10 xl:px-0 max-w-6xl mx-auto justify-center">
        <div className="mb-20 text-center">
          <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-2">
            Hjemmeøvelser
          </h3>
          <p>
            Her er nogle gode og effektive øvelser, du nemt kan lave derhjemme -
            helt uden udstyr, kun med din egen krop.
          </p>
        </div>
        <article className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Dette er en test overskrift
            </h4>
            <p>Tekst der forklarer hvad videoen går ud på</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dolores perspiciatis saepe ullam odit repudiandae facere nostrum,
              ipsum doloremque. Architecto consequuntur quo, fuga in explicabo
              repellendus molestias.
            </p>
          </div>
          <video
            className="rounded-md border-2 border-moss"
            src="/bahamas.mp4"
            controls
            preload="metadata"
          />
        </article>
        <Divider className="my-10" />
        <article className="flex flex-col lg:flex-row gap-10">
          <video
            className="rounded-md order-last lg:-order-last border-2 border-moss"
            src="/bahamas.mp4"
            controls
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Dette er en test overskrift
            </h4>
            <p>Tekst der forklarer hvad videoen går ud på</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dolores perspiciatis saepe ullam odit repudiandae facere nostrum,
              ipsum doloremque. Architecto consequuntur quo, fuga in explicabo
              repellendus molestias totam sunt voluptatum velit reiciendis
              consequatur.
            </p>
          </div>
        </article>
        <Divider className="my-10" />
        <article className="flex flex-col lg:flex-row gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Dette er en test overskrift
            </h4>
            <p>Tekst der forklarer hvad videoen går ud på</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dolores perspiciatis saepe ullam odit repudiandae facere nostrum,
              ipsum doloremque.
            </p>
          </div>
          <video className="rounded-md border-2 border-moss" src="/bahamas.mp4" controls />
        </article>
      </div>
    </section>
  );
}
