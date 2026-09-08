import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import restTitleBg from "@/assets/rest-title-bg.jpg";

const MASTERCLASS =
  "https://docs.google.com/forms/d/e/1FAIpQLSfgZpa19D-9Nn01wnz9ll7VAVjOuRNC6srAv_cbMPmvI7d6oQ/viewform?usp=pp_url";
const CALL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd-Cs0K2RDb6ydOPFZkpp7i6qBIWnuuJvkAxIljgiJCgLb84A/viewform?usp=pp_url";

export const Route = createFileRoute("/rest-sessions")({
  head: () => ({
    meta: [
      { title: "R.E.S.T Sessions | Rapid Evolve Self Transformation" },
      {
        name: "description",
        content:
          "R.E.S.T Sessions combine Clinical Hypnotherapy, Transpersonal Regression, NLP, CBT and Neuro Science to release stuck emotions and reframe limiting patterns.",
      },
      { property: "og:title", content: "R.E.S.T Sessions | Rapid Evolve Self Transformation" },
      {
        property: "og:description",
        content:
          "Identify, break and reframe limiting beliefs at Self, Life and DNA level — usually in just one or two sessions.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RestSessions,
});

function RestSessions() {
  const phases = [
    {
      title: "Exploration Session",
      points: [
        "You will understand how the mind works, its language, and how to win over it",
        "We identify your limiting belief or repetitive pattern and agree to work on it",
      ],
    },
    {
      title: "R.E.S.T Session",
      points: [
        "We reprogram your mind to make you realize your own potential",
        "Break & reframe your patterns",
        "Release stuck energy and activate your power house",
      ],
    },
    {
      title: "Post R.E.S.T",
      points: [
        "A 21-day customised recording to form a new neuro pathway for your new reality",
        "One-to-one support whenever needed during that period",
        "Learn my RRR method for future triggers",
      ],
    },
  ];

  const levels = [
    {
      icon: Brain,
      title: "Self Imprint",
      body: "We identify, break and reframe the limiting beliefs behind your problem and create the desired future. For addictions, weight management and trauma, multiple other techniques are combined to achieve a breakthrough.",
    },
    {
      icon: Heart,
      title: "Life Imprint",
      body: "Many issues are spread across deeper levels. This approach extends to regressing each incident throughout your life and clearing the physical and auric impacts, including womb healing and rebirthing where required. A powerful phase that many therapists miss.",
    },
    {
      icon: Sparkles,
      title: "DNA Imprint",
      body: "Often you are carrying generational patterns and curses. DNA healing, ancestral healing, past lives and parallel realities. Very few people take care of this part.",
    },
  ];

  const issues = [
    "Anxiety",
    "Unworthiness",
    "Feeling Stuck",
    "Addictions of any kind",
    "Weight Management",
    "Dealing with unfair situations",
    "Fear of any kind (Heights, Water, etc.)",
    "Phobias",
    "Inferiority Complex",
    "Allergies",
    "Grief",
    "Fear of future",
    "Feeling of Abandonment",
    "Body Pain",
    "Eating Disorders",
    "Changing unhealthy Habits",
    "Guilt",
    "Goal Accomplishments",
    "Physical Issues",
    "Sexual Issues",
    "Cravings",
    "Exam / Event Anxiety",
    "Not feeling Enough",
    "Career issues",
    "Self Worth",
    "Toxic relationships",
  ];

  return (
    <main>
      <section className="relative flex min-h-[420px] items-center overflow-hidden py-24 sm:min-h-[500px]">
        <img
          src={restTitleBg}
          alt="A peaceful meditation setting surrounded by nature"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container-tight relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Rapid Evolve Self Transformation
          </p>
          <h1 className="mt-3 text-4xl font-medium text-primary-foreground sm:text-5xl md:text-6xl">
            R.E.S.T Sessions
          </h1>
          <p className="mt-5 text-xl font-light text-primary-foreground/90">
            REST in peace while you live — not just after.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-foreground">What is a R.E.S.T Session?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              When a piece of you goes missing, you look for peace. In R.E.S.T I bring back your lost
              pieces to make you whole.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We first identify the problem using an approach that combines Clinical Hypnotherapy,
              Transpersonal Regression, Past Life Regression, NLP, CBT, Psychotherapy and Neuro
              Science. It is the most effective and logical way to change your perception and release
              stuck emotions from your past — working deeply on the aura body, physical body and
              mental body.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-foreground">How does it work?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Resting in peace while living here can only happen when you are free from your baggage.
              It takes only one or two sessions to work on one limiting belief or pattern. Yes — it is
              simple and easy, if you are ready.
            </p>
            <p className="mt-4 rounded-xl bg-secondary/60 p-5 text-base leading-relaxed text-muted-foreground">
              Note: Deeper traumas, abuse, addictions and weight management can take a few sessions,
              as multiple beliefs may be triggering them.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-tight">
          <h2 className="text-center text-3xl font-medium text-foreground sm:text-4xl">
            The Session Journey
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {phases.map((phase, i) => (
              <div key={phase.title} className="card-soothe rounded-2xl p-8 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-medium text-card-foreground">{phase.title}</h3>
                <ul className="mt-4 space-y-3">
                  {phase.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
              At what levels can R.E.S.T work?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Depending on the intensity of the issue and its imprints in your life, we may use any or
              all of the following.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {levels.map((l) => (
              <div key={l.title} className="card-soothe rounded-2xl border border-border p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <l.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-card-foreground">{l.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium text-foreground sm:text-4xl">Issues we can address</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Wherever you feel restless or stuck, deep work can resolve it. This list is only a
              starting point.
            </p>
          </div>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {issues.map((issue) => (
              <li
                key={issue}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground"
              >
                {issue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">Start with the free masterclass</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Understand the simplest yet deepest functioning of the mind, then book your call.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={MASTERCLASS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-background px-8 py-4 font-medium text-foreground transition-all hover:shadow-lg sm:w-auto"
            >
              Register for Free Masterclass
            </a>
            <a
              href={CALL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 font-medium transition-all hover:bg-primary-foreground/10 sm:w-auto"
            >
              Book a Free 30-min Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
