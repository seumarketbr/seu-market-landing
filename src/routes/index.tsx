import { createFileRoute } from "@tanstack/react-router";
import {
  Clock, ShieldCheck, PiggyBank, Home,
  CheckCircle2, Star, Box, ShoppingBasket,
  Maximize2, Settings, Lightbulb, Sofa, Sparkles, Puzzle,
  Gem, Smile, MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import heroImg from "@/assets/hero-market.jpg";
import compactImg from "@/assets/model-compact.jpg";
import wallImg from "@/assets/model-wall.jpg";
import smartImg from "@/assets/model-smart.jpg";
import primeImg from "@/assets/model-prime.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seu Market Br — O seu mercado, no seu condomínio" },
      {
        name: "description",
        content:
          "Mini mercados autônomos 24h para condomínios. Soluções inteligentes que se adaptam ao espaço disponível. Mais conveniência, segurança e qualidade de vida.",
      },
      { property: "og:title", content: "Seu Market Br — Mini mercado autônomo para condomínios" },
      { property: "og:description", content: "Soluções inteligentes que se adaptam ao seu condomínio. Aberto 24h." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home_,
});

const models = [
  {
    n: 1, title: "Seu Market Compact", size: "2m x 2m", img: compactImg,
    tag: "Ideal para espaços pequenos",
    desc: "Compacto, moderno e completo. Tudo o que os moradores precisam ao alcance.",
    attrs: [
      { icon: CheckCircle2, label: "Prático" },
      { icon: Star, label: "Moderno" },
      { icon: Box, label: "Compacto" },
      { icon: ShoppingBasket, label: "Completo" },
    ],
  },
  {
    n: 2, title: "Seu Market Wall", size: "3m (parede)", img: wallImg,
    tag: "Solução inteligente para aproveitar cada espaço",
    desc: "Perfeito para corredores, halls e áreas de passagem.",
    attrs: [
      { icon: Maximize2, label: "Otimizado" },
      { icon: Settings, label: "Funcional" },
      { icon: Star, label: "Moderno" },
      { icon: Lightbulb, label: "Inteligente" },
    ],
  },
  {
    n: 3, title: "Seu Market Smart", size: "4m x 2,5m", img: smartImg, featured: true,
    tag: "O modelo mais escolhido",
    desc: "Mais variedade, mais conforto e a experiência completa de um mini mercado.",
    attrs: [
      { icon: ShoppingBasket, label: "Completo" },
      { icon: Home, label: "Confortável" },
      { icon: Star, label: "Moderno" },
      { icon: Puzzle, label: "Versátil" },
    ],
  },
  {
    n: 4, title: "Seu Market Prime", size: "5m x 3m ou mais", img: primeImg,
    tag: "Experiência premium",
    desc: "O melhor em conveniência, variedade e sofisticação para condomínios exigentes.",
    attrs: [
      { icon: Gem, label: "Premium" },
      { icon: ShoppingBasket, label: "Completo" },
      { icon: Sofa, label: "Conforto" },
      { icon: Smile, label: "Experiência" },
    ],
  },
];

const benefits = [
  { icon: Clock, title: "Aberto 24h", desc: "Conveniência todos os dias e horários." },
  { icon: ShieldCheck, title: "Mais segurança", desc: "Ambiente monitorado e compras seguras." },
  { icon: PiggyBank, title: "Mais economia", desc: "Solução inteligente para valorizar seu condomínio." },
  { icon: Home, title: "Mais qualidade de vida", desc: "Praticidade que faz a diferença no dia a dia dos moradores." },
];

function Home_() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <FloatingWhatsApp />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]">
          <div className="absolute top-20 -left-10 size-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 -right-10 size-96 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-semibold">
              <Sparkles className="size-3.5" /> Mini mercado autônomo 24h
            </span>
            <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-dark leading-[1.05]">
              Um <span className="text-primary">Seu Market</span> para cada condomínio!
            </h1>
            <p className="mt-5 text-lg text-foreground/70 max-w-xl">
              Soluções inteligentes que <strong className="text-primary-dark">se adaptam ao espaço</strong> disponível no seu condomínio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg">Fale com a gente no WhatsApp</WhatsAppButton>
              <a href="#modelos" className="inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold text-primary-dark border-2 border-primary-dark/15 hover:border-primary-dark/40 transition-colors min-h-[44px]">
                Ver modelos
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-25" />
            <img
              src={heroImg}
              alt="Mini mercado autônomo Seu Market Br instalado em condomínio"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-elevated w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* MODELOS / SOLUÇÕES */}
      <section id="solucoes" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <span id="modelos" className="text-sm font-semibold text-primary uppercase tracking-wider">Modelos</span>
            <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl text-primary-dark">
              A solução certa para cada espaço
            </h2>
            <p className="mt-4 text-foreground/70">
              Quatro formatos pensados para condomínios de todos os tamanhos — do compacto ao premium.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {models.map((m, i) => (
              <article
                key={m.n}
                className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 animate-fade-up ${m.featured ? "ring-2 ring-primary" : "border border-border"}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {m.featured && (
                  <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-card">
                    <Star className="size-3.5 fill-current" /> Mais escolhido
                  </div>
                )}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={`${m.title} — ${m.tag}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-elevated">
                    <span className="grid place-items-center size-5 rounded-full bg-primary-foreground text-primary text-xs">{m.n}</span>
                    {m.size}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-primary-dark">{m.title}</h3>
                  <p className="mt-2 text-primary font-semibold text-sm">{m.tag}</p>
                  <p className="mt-3 text-foreground/70 text-sm leading-relaxed">{m.desc}</p>
                  <div className="mt-5 pt-5 border-t border-border grid grid-cols-4 gap-2">
                    {m.attrs.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center text-center gap-1.5">
                        <span className="grid place-items-center size-9 rounded-full bg-primary/10 text-primary">
                          <Icon className="size-4" />
                        </span>
                        <span className="text-[11px] font-medium text-foreground/70">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section id="beneficios" className="bg-primary-dark text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="flex gap-4 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="shrink-0 grid place-items-center size-12 rounded-2xl bg-primary-foreground/10 text-accent">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como funciona</span>
            <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl text-primary-dark">
              Simples do começo ao fim
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8 relative">
            {[
              { n: "1", title: "Entre em contato", desc: "Fale com a nossa equipe pelo WhatsApp." },
              { n: "2", title: "Escolha o modelo", desc: "Avaliamos o espaço e indicamos a melhor solução." },
              { n: "3", title: "Instalamos tudo", desc: "Cuidamos da instalação, abastecimento e gestão." },
            ].map((s, i) => (
              <div key={s.n} className="relative bg-card rounded-3xl p-8 shadow-card animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="grid place-items-center size-14 rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold text-2xl shadow-elevated">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display font-bold text-xl text-primary-dark">{s.title}</h3>
                <p className="mt-2 text-foreground/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="contato" className="relative py-20 md:py-24 bg-gradient-cta overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 size-96 rounded-full bg-primary-foreground blur-3xl" />
          <div className="absolute -bottom-20 -right-20 size-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="size-12 mx-auto text-primary-foreground" aria-hidden />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl text-primary-foreground">
            Quer levar o Seu Market para o seu condomínio?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Atendimento rápido pelo WhatsApp. Tire suas dúvidas e receba uma proposta sob medida.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton variant="white" size="lg">Fale com a gente agora!</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-dark text-primary-foreground/80 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-primary-foreground">
              <span className="grid place-items-center size-9 rounded-xl bg-primary-foreground/10">
                <ShoppingBasket className="size-5" />
              </span>
              Seu Market Br
            </div>
            <p className="mt-3 text-sm">O seu mercado, no seu condomínio.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-center">
            <li><a className="hover:text-primary-foreground" href="#solucoes">Soluções</a></li>
            <li><a className="hover:text-primary-foreground" href="#beneficios">Benefícios</a></li>
            <li><a className="hover:text-primary-foreground" href="#modelos">Modelos</a></li>
            <li><a className="hover:text-primary-foreground" href="#contato">Contato</a></li>
          </ul>
          <div className="md:justify-self-end">
            <WhatsAppButton>WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/60">
          © 2025 Seu Market Br. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
