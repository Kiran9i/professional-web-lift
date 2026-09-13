import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Heart,
  Sparkles,
  Cigarette,
  Lock,
  ShieldAlert,
  CloudRain,
  Scale,
  Utensils,
  Ghost,
  Hash,
  ArrowRight,
  Play,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import aboutPortrait from "@/assets/shetall-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neuro Pathway | R.E.S.T Sessions by Shetall" },
      { name: "description", content: "Rapid Evolve Self Transformation (R.E.S.T) sessions combining Clinical Hypnosis, Regression, NLP, CBT and Neuro Science to resolve deep-rooted patterns." },
      { property: "og:title", content: "Neuro Pathway | R.E.S.T Sessions by Shetall" },
      { property: "og:description", content: "Rapid Evolve Self Transformation (R.E.S.T) sessions combining Clinical Hypnosis, Regression, NLP, CBT and Neuro Science to resolve deep-rooted patterns." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Philosophy />
      <Approach />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Calm, sunlit wellness space"
          className="h-full w-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 container-tight flex flex-col items-center text-center">
        <p className="mb-4 inline-block rounded-full bg-background/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          R.E.S.T Sessions — Rapid Evolve Self Transformation
        </p>
        <h1 className="max-w-4xl text-5xl font-medium leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Neuro Pathway
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-foreground/80 sm:text-2xl md:text-3xl">
          Changing Your Reality
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-Cs0K2RDb6ydOPFZkpp7i6qBIWnuuJvkAxIljgiJCgLb84A/viewform?usp=pp_url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Book a Free 30-min Call
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfgZpa19D-9Nn01wnz9ll7VAVjOuRNC6srAv_cbMPmvI7d6oQ/viewform?usp=pp_url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-8 py-3.5 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-background"
          >
            Register for Free Masterclass
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-foreground/60 hover:text-foreground"
        aria-label="Scroll to About section"
      >
        <ArrowRight className="h-6 w-6 rotate-90" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
            <img
              src={aboutPortrait}
              alt="Shetall, creator of R.E.S.T Sessions"
              className="h-full w-full object-cover"
              width={800}
              height={1008}
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-background/95 p-5 shadow-lg backdrop-blur-sm">
              <p className="text-sm font-medium text-primary">Shetall</p>
              <p className="text-xs text-muted-foreground">Founder, Neuro Pathway</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
            <h2 className="mt-3 text-4xl font-medium text-foreground sm:text-5xl">
              I'm Shetall, creator of R.E.S.T Sessions
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Rapid Evolve Self Transformation</span>{" "}
              is a scientific approach to resolve deep rooted patterns. It combines{" "}
              <span className="italic text-foreground">
                Clinical Hypnosis, Trans-personal Regression, past life regressions, NLP, CBT, Neuro Science Principles and Graphology
              </span>
              .
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I believe any issue in our life is not from today — we carry many fragments of the same issue from the past. The root cause in the past needs to be identified to fix the current surfaced issue.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My work is a combination of <span className="font-semibold text-foreground">Logic & Spirituality</span>. I also deeply value <span className="font-semibold text-foreground">Numerology</span> as it strongly enhances your hidden potentials, works on your brain pattern, and enables you to live an aligned life with your life path.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Life is simple and no-one needs to spend ages to resolve any pattern. I myself overcame many deep patterns in my life which made me the person that I am today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="section-padding bg-secondary/30">
      <div className="container-tight mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">My Philosophy</p>
        <h2 className="mt-3 text-4xl font-medium text-foreground sm:text-5xl">
          Rest In Peace While You Live, Not When You Die
        </h2>
        <p className="mt-6 text-xl font-medium leading-relaxed text-foreground">
          This tagline is more than a phrase — it is the heart of Neuro Pathway.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          True peace is not something we find at the end of life; it is something we can experience now, in this moment, by releasing what weighs us down and reconnecting with our authentic selves.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          I believe that everyone has the capacity for deep transformation. Sometimes we just need the right guide and the right tools to access it. That is what Neuro Pathway is here to provide — a safe, compassionate space where you can heal, evolve, and discover the peace that has always been within you.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Whether you are struggling with anxiety, addiction, weight management, or simply feeling stuck in life, know that change is possible — and it can happen faster than you think. The subconscious mind is incredibly powerful, and when we work with it rather than against it, transformation becomes not just possible, but natural.
        </p>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    {
      icon: Brain,
      title: "Self Imprint",
      description:
        "Releasing the first imprints of unhealthy beliefs and changing your reality at the source.",
    },
    {
      icon: Heart,
      title: "Life Imprint",
      description:
        "Working on traumatic incidents, rebirthing, and womb healing to reframe life experiences.",
    },
    {
      icon: Sparkles,
      title: "DNA Imprint",
      description:
        "Releasing ancestral vows & patterns. DNA healing for true breakthrough and generational freedom.",
    },
  ];

  return (
    <section id="approach" className="section-padding bg-secondary/50">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">The Method</p>
          <h2 className="mt-3 text-4xl font-medium text-foreground sm:text-5xl">
            Rapid Evolve Session Approach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A Three Layer Self Transformation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="card-soothe group relative rounded-2xl p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <step.icon className="h-7 w-7" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <h3 className="text-xl font-medium text-card-foreground">{step.title}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Cigarette,
      title: "Addictions",
      description:
        "Smoking, alcohol, drugs — they have no power to control you. Rapid Evolve Sessions help you break free and improve relationships, focus, and peace.",
    },
    {
      icon: Lock,
      title: "Limiting Beliefs",
      description:
        "Beliefs acquired in childhood create today's reality. In just one Rapid Evolve session, any limiting belief can be transformed into a powerful future.",
    },
    {
      icon: ShieldAlert,
      title: "Trauma",
      description:
        "Overcome the charges and symptoms of the deepest trauma. Receive support and guidance to heal through grief and live freely.",
    },
    {
      icon: CloudRain,
      title: "Anxiety",
      description:
        "Anxiety and panic attacks are consequences of entangled emotions. Move out of this state and experience your truest self.",
    },
    {
      icon: Scale,
      title: "Manage Weight",
      description:
        "Studies show 90% of weight issues are mental. We work directly on unhealthy patterns and hidden defence mechanisms — even to the DNA level.",
    },
    {
      icon: Utensils,
      title: "Eating Habits & Food Cravings",
      description:
        "Reduce cravings for foods that don't serve your health. In just one Rapid Evolve Session, move toward a healthier lifestyle.",
    },
    {
      icon: Ghost,
      title: "Fear & Phobia",
      description:
        "Phobias of cats, snakes, water, or fears of heights, flights, darkness, and speed can often be resolved in 1-2 Rapid Evolve sessions.",
    },
    {
      icon: Hash,
      title: "Numerology",
      description:
        "A powerful cosmic science to align your life and business to your highest potential. Gain insight on your own cosmic code in a detailed report.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How I Can Help</p>
          <h2 className="mt-3 text-4xl font-medium text-foreground sm:text-5xl">Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Personalized Rapid Evolve Sessions designed to free you from the patterns holding you back.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-soothe rounded-2xl border border-border p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-card-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { title: "Amanda's Testimonial", id: "Vc1p94F5z2Q" },
    { title: "Akos's Testimonial", id: "lghiatHbg8M" },
    { title: "Cay's Testimonial", id: "vDgGgv5LUf4" },
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Real Stories</p>
          <h2 className="mt-3 text-4xl font-medium text-foreground sm:text-5xl">Testimonials</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from people who have experienced transformation through R.E.S.T Sessions.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-2xl bg-card shadow-sm"
            >
              <div className="aspect-video w-full bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="flex items-center gap-3 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Play className="h-4 w-4 fill-current" />
                </div>
                <p className="font-medium text-card-foreground">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-medium sm:text-5xl">
            Are you ready to take a step towards a better life?
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/90">
            Start with a free masterclass or book a complimentary 30-minute exploration call.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfgZpa19D-9Nn01wnz9ll7VAVjOuRNC6srAv_cbMPmvI7d6oQ/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-background/90 hover:shadow-lg sm:w-auto"
            >
              Register for Free Masterclass
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-Cs0K2RDb6ydOPFZkpp7i6qBIWnuuJvkAxIljgiJCgLb84A/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-transparent px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10 sm:w-auto"
            >
              Book a Free 30-min Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
