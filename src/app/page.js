import Symptomer from "../sections/symptomer";
import Testimonials from "../sections/testimonials";
import Procedure from "../sections/procedure";
import Hero from "../sections/hero";

export default function Home() {
  return (
      <main className="min-h-screen mx-auto">
        {/* HERO */}
        <Hero />
        {/* SYMPTOMER */}
        <Symptomer />
        {/* ANMELDELSER */}
        <Testimonials />
        {/* SÅDAN FOREGÅR EN BEHANDLING */}
        <Procedure />
      </main>
  );
}
