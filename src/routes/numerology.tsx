import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, User, Building2, Baby } from "lucide-react";

const CALL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd-Cs0K2RDb6ydOPFZkpp7i6qBIWnuuJvkAxIljgiJCgLb84A/viewform?usp=pp_url";

export const Route = createFileRoute("/numerology")({
  head: () => ({
    meta: [
      { title: "Numero Cosmic Code Report | Numerology by Shetall" },
      {
        name: "description",
        content:
          "Personal, child and business Numero Cosmic Code reports — a 15-20 page personalised decoding of your name, date of birth, life path and yearly calendar.",
      },
      { property: "og:title", content: "Numero Cosmic Code Report | Numerology by Shetall" },
      {
        property: "og:description",
        content:
          "Decode your personal cosmic code: name analysis, life path, soul urge, compatibility and a one-year personal calendar.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Numerology,
});

function Numerology() {
  const personal = [
    "Your current name analysis",
    "Your date of birth analysis",
    "Universal potentials you should be aligned with",
    "Life path analysis",
    "Your soul urge",
    "Your expression to the world",
    "Personal Trinity and Significant 6",
    "1-year personal calendar to tune your energies with your goals",
    "Shapes, colours, personal meditations & dates that suit you",
    "Compatibility check",
    "Alignment of house, car and phone number",
  ];

  const child = [
    "Everything in the personal report",
    "Alignment of potential",
    "Powers and skills of the child",
    "Parent-child alignment",
  ];

  const business = [
    "Everything in the personal report",
    "Alignment of the business with you",
    "Partner alignment",
    "Who can be the face and paper authority",
    "Aligning payment transaction numbers to your money vibration",
    "1-year appointment, payment and goods-receiving calendar",
    "Website numero insights to attract the right client",
  ];

  const reports = [
    { icon: User, title: "Personal Report", intro: "A 15-20 page personalised report decoding your cosmic code.", items: personal },
    { icon: Baby, title: "New Born / Child Report", intro: "Blessed is the child with aware parents — a gift more precious than any material one.", items: child },
    { icon: Building2, title: "Business Report", intro: "Your business is an extension of you. Aligned businesses bring the right opportunities at the right time.", items: business },
  ];

  return (
    <main>
      <section className="section-padding bg-secondary/40 pt-32">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Numerology</p>
          <h1 className="mt-3 text-4xl font-medium text-foreground sm:text-5xl md:text-6xl">
            The Cosmic Code Report
          </h1>
          <p className="mt-5 text-xl font-light text-muted-foreground">
            Your personal vibrations — the code you were born with.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-foreground">What is Numerology?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              In one line, numerology is your personal <span className="font-semibold text-foreground">cosmic code</span> —
              the vibrations you are born with and the ones you use to communicate with the outer
              world and the universe.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-foreground">The importance of your name</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              The universe runs on numbers. Anything you chant, speak or hear carries a numerical
              frequency. Your name is the personal mantra you have lived with since birth — its
              frequency goes out into the world and reflects straight back into your space.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium text-foreground sm:text-4xl">Reports we create</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each report is written for you. The lists below are only a small part of what is covered.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {reports.map((r) => (
              <div key={r.title} className="rounded-2xl bg-card p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-card-foreground">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.intro}</p>
                <ul className="mt-5 space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">Book your Cosmic Code report</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Understand your cosmic game and start living aligned with your life path.
          </p>
          <a
            href={CALL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 font-medium text-foreground transition-all hover:shadow-lg"
          >
            Book an Exploration Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
