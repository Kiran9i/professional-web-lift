import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Palette, Sparkles } from "lucide-react";
import chakraShopTitleBg from "@/assets/chakra-shop-title-bg.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop | Chakra Bathing Ritual Kit — Neuro Pathway" },
      {
        name: "description",
        content:
          "Conscious Bathing Ritual: seven chakra soaps with a guided kit linking the seven chakras to the seven days, rainbow colour therapy and a quick activation practice.",
      },
      { property: "og:title", content: "Shop | Chakra Bathing Ritual Kit — Neuro Pathway" },
      {
        property: "og:description",
        content:
          "Special chakra soaps with a guided kit — colour therapy and chakra activation woven into your daily bath.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const includes = [
    {
      icon: Droplets,
      title: "7 Chakras, 7 Days",
      body: "A quick video on how the chakras and the days of the week are linked, and which chakra soap to use on which day.",
    },
    {
      icon: Palette,
      title: "7 Chakras, 7 Colours",
      body: "Rainbow colour therapy while you bathe — healing woven into a routine you already have.",
    },
    {
      icon: Sparkles,
      title: "Chakra Activation",
      body: "A guided process you can do while bathing, so you never need to spare an extra minute.",
    },
  ];

  return (
    <main>
      <section className="relative flex min-h-[420px] items-center overflow-hidden py-24 sm:min-h-[500px]">
        <img
          src={chakraShopTitleBg}
          alt="Seven colourful handcrafted chakra soaps in a natural bathing ritual setting"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container-tight relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Shop</p>
          <h1 className="mt-3 text-4xl font-medium text-primary-foreground sm:text-5xl md:text-6xl">
            Conscious Bathing Ritual
          </h1>
          <p className="mt-5 text-xl font-light text-primary-foreground/90">
            Chakra soaps with a guided kit, created with a collaborating chakra therapist.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our chakras control our life system. For your mental, emotional and spiritual health it is
            vital to include something in your life that enhances them — meditation, chakra foods,
            colours. In the end it is all about setting your mind at a certain frequency, whichever
            route you take.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            In a busy routine we barely get time for ourselves. So we created special chakra soaps
            that come with a guided kit.
          </p>
        </div>

        <div className="container-tight mt-14 grid gap-8 md:grid-cols-3">
          {includes.map((item) => (
            <div key={item.title} className="card-soothe rounded-2xl border border-border p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-card-foreground">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">To order, message us on WhatsApp</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Send a message and we will share pricing, delivery and availability.
          </p>
          <a
            href="https://wa.me/971585914324"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-background px-8 py-4 font-medium text-foreground transition-all hover:shadow-lg"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
