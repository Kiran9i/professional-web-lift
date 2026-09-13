import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Eye, FileText, PenLine } from "lucide-react";

import graphologyTitleBg from "@/assets/graphology-title-bg.jpg";

const CALL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd-Cs0K2RDb6ydOPFZkpp7i6qBIWnuuJvkAxIljgiJCgLb84A/viewform?usp=pp_url";

export const Route = createFileRoute("/graphology")({
  head: () => ({
    meta: [
      { title: "Graphology | Handwriting Analysis by Shetall" },
      {
        name: "description",
        content:
          "Discover what your handwriting reveals about your personality, emotional patterns, strengths and opportunities for self-transformation.",
      },
      { property: "og:title", content: "Graphology | Handwriting Analysis by Shetall" },
      {
        property: "og:description",
        content:
          "A thoughtful handwriting analysis to understand personality traits, emotional patterns and pathways for personal growth.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://neuropathway.world/graphology" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://neuropathway.world/graphology" }],
  }),
  component: Graphology,
});

function Graphology() {
  const insights = [
    {
      icon: Eye,
      title: "Personality Insights",
      body: "Explore the characteristics reflected in the size, slant, pressure, spacing and rhythm of your handwriting.",
    },
    {
      icon: PenLine,
      title: "Emotional Patterns",
      body: "Recognise recurring tendencies in how you think, feel, communicate and respond to the world around you.",
    },
    {
      icon: FileText,
      title: "Personal Guidance",
      body: "Receive a clear analysis of your strengths and areas of attention to support greater self-awareness and transformation.",
    },
  ];

  return (
    <main>
      <section className="relative flex min-h-[420px] items-center overflow-hidden py-24 sm:min-h-[500px]">
        <img
          src={graphologyTitleBg}
          alt="Handwritten journal, fountain pen and magnifying glass used for graphology"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container-tight relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            The Science of Handwriting
          </p>
          <h1 className="mt-3 text-4xl font-medium text-primary-foreground sm:text-5xl md:text-6xl">
            Graphology
          </h1>
          <p className="mt-5 text-xl font-light text-primary-foreground/90">
            Discover the patterns and potential expressed through your handwriting.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-foreground">What is Graphology?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Graphology is the study of handwriting as an expression of personality. The way you
              form letters, connect words and use space can offer meaningful insights into your
              natural traits, emotions and behavioural patterns.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-foreground">A path to self-awareness</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A handwriting analysis can help you see strengths that may be underused and patterns
              that may be holding you back. This awareness creates a practical starting point for
              conscious change and deeper self-transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
              What your handwriting can reveal
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your written expression can offer a fresh perspective on how you experience yourself
              and connect with others.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {insights.map((insight) => (
              <div key={insight.title} className="card-soothe rounded-2xl border border-border p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <insight.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-card-foreground">{insight.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">Explore your handwriting</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Book a complimentary exploration call to learn more about a personal graphology analysis.
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