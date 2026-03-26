import heroBread from "@/assets/hero-bread.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import breadSliced from "@/assets/bread-sliced.jpg";
import breakfastTable from "@/assets/breakfast-table.jpg";
import breadOven from "@/assets/bread-oven.jpg";
import guaranteeSeal from "@/assets/guarantee-seal.png";
import packCompleto from "@/assets/pack-completo.jpg";
import CtaButton from "@/components/CtaButton";
import CountdownTimer from "@/components/CountdownTimer";
import { Star, Check, ChefHat, Clock, Wheat, Gift, ShieldCheck, Users, BookOpen, Award, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

/* ── Hero ──────────────────────────────────────── */
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img src={heroBread} alt="Pan sin gluten recién horneado" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
    <div className="relative z-10 container text-center py-20 md:py-32 flex flex-col items-center gap-8 animate-fade-up">
      <div className="flex items-center gap-2 bg-gold/20 border border-gold-light/40 rounded-full px-5 py-2">
        <Award className="w-4 h-4 text-gold-light" />
        <span className="text-gold-light text-sm font-body font-bold tracking-wide">+300 RECETAS PROBADAS SIN GLUTEN</span>
      </div>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl">
        Hornea Pan Sin Gluten <br className="hidden md:block" />
        <span className="italic text-gold-light">Suave, Delicioso y Perfecto</span>
      </h1>
      <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
        Descubre el método que ya transformó la cocina de miles de personas celíacas y amantes de la vida saludable.
      </p>
      <CtaButton subtext="📥 Descarga inmediata · Acceso de por vida" />
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {[
          { icon: Users, text: "12.000+ alumnos" },
          { icon: Star, text: "4.9/5 estrellas" },
          { icon: ShieldCheck, text: "Garantía 7 días" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
            <item.icon className="w-4 h-4" />
            <span className="font-body">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Problema ──────────────────────────────────── */
const Problema = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container max-w-3xl text-center">
      <p className="text-accent font-body font-bold text-sm tracking-widest uppercase mb-4">¿Te suena familiar?</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground">
        Intentas hacer pan sin gluten y siempre sale <span className="text-destructive italic">duro, seco o sin sabor</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 text-left">
        {[
          { emoji: "😩", text: "Gastas dinero en harinas especiales y el resultado es decepcionante." },
          { emoji: "🍞", text: "El pan se desmorona, no sube o queda con textura de ladrillo." },
          { emoji: "💸", text: "Compras pan sin gluten carísimo en el supermercado, lleno de conservantes." },
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-xl p-6 shadow-warm">
            <span className="text-3xl block mb-3">{item.emoji}</span>
            <p className="text-foreground/80 font-body leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 font-body text-muted-foreground text-lg">
        No es tu culpa. <strong className="text-foreground">El problema está en las recetas tradicionales</strong> que no fueron pensadas para harinas sin gluten.
      </p>
    </div>
  </section>
);

/* ── Solución / Método 3M ──────────────────────── */
const Solucion = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-4xl text-center">
      <p className="text-accent font-body font-bold text-sm tracking-widest uppercase mb-4">La solución</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
        El <span className="text-gradient-gold">Método 3M</span>
      </h2>
      <p className="text-muted-foreground font-body text-lg mb-14 max-w-xl mx-auto">
        Un sistema simple de 3 pasos para lograr panes sin gluten perfectos, cada vez.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Wheat, step: "1", title: "Mezcla", desc: "Aprende a combinar las harinas correctas en la proporción exacta para lograr estructura y sabor." },
          { icon: ChefHat, step: "2", title: "Masa", desc: "Domina las técnicas de amasado, hidratación y reposo que hacen la diferencia en la textura." },
          { icon: Clock, step: "3", title: "Momento", desc: "Descubre los tiempos y temperaturas precisos para un horneado dorado y perfecto." },
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-gold transition-shadow duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <item.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-gold font-display text-sm font-bold">Paso {item.step}</span>
            <h3 className="font-display text-2xl font-bold mt-1 mb-3 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Deseo ─────────────────────────────────────── */
const Deseo = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container max-w-5xl">
      <p className="text-accent font-body font-bold text-sm tracking-widest uppercase mb-4 text-center">Imagina esto...</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
        Tu casa llena del aroma de <span className="italic text-primary">pan recién horneado</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { img: breadSliced, text: "Pan suave por dentro, crujiente por fuera. Cada rebanada perfecta." },
          { img: breadOven, text: "Sacas el pan del horno, dorado y caliente. Tu familia no puede esperar." },
          { img: breakfastTable, text: "Un desayuno saludable, sin gluten, preparado con tus propias manos." },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-warm group">
            <div className="overflow-hidden">
              <img src={item.img} alt="Pan sin gluten" loading="lazy" width={800} height={600} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 bg-card">
              <p className="text-foreground/80 font-body leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Producto ──────────────────────────────────── */
const Producto = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img src={ebookMockup} alt="Ebook Mi Panadería Sin Gluten" loading="lazy" width={800} height={800} className="w-full max-w-sm drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
        </div>
        <div>
          <p className="text-accent font-body font-bold text-sm tracking-widest uppercase mb-4">El Ebook</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Mi Panadería <span className="text-gradient-gold">Sin Gluten</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
            Más de 300 recetas probadas, paso a paso, con ingredientes accesibles. Desde panes rústicos hasta bollería dulce.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "300+ recetas probadas sin TACC",
              "Fotos paso a paso de cada receta",
              "Tablas de sustitución de harinas",
              "Consejos de la Chef Isabella Conti",
              "Acceso de por vida + actualizaciones",
              "Compatible con celulares, tablet y PC",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <CtaButton />
        </div>
      </div>
    </div>
  </section>
);

/* ── Bônus ─────────────────────────────────────── */
const Bonus = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container max-w-5xl text-center">
      <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-6">
        <Gift className="w-4 h-4 text-gold" />
        <span className="text-gold font-body font-bold text-sm tracking-wide">BONOS EXCLUSIVOS</span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        Hoy recibes todo este <span className="text-gradient-gold">pack completo</span>
      </h2>
      <p className="text-muted-foreground font-body text-lg mb-6">Más de 1.000 recetas saludables para transformar tu alimentación.</p>

      <img src={packCompleto} alt="Pack completo de bonos" loading="lazy" width={1200} height={600} className="w-full rounded-2xl shadow-warm mb-12" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { num: "1", title: "30 Recetas Low Carb de Postres para Diabéticos", val: "$27" },
          { num: "2", title: "60 Recetas Low Carb (Desayuno, Almuerzo, Merienda y Cena)", val: "$37" },
          { num: "3", title: "120 Recetas Low Carb para Diabéticos", val: "$47" },
          { num: "4", title: "500 Recetas Sin Gluten", val: "$57" },
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-xl p-5 shadow-warm text-left hover:shadow-gold transition-shadow">
            <span className="inline-block bg-gradient-gold text-primary-foreground font-body font-bold text-xs px-3 py-1 rounded-full mb-3">
              Bono {item.num}
            </span>
            <h3 className="font-display font-bold text-sm mb-2 text-foreground leading-snug">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-body">Valor: <span className="line-through">{item.val}</span> <span className="text-gold font-bold">GRATIS</span></p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Prova Social ──────────────────────────────── */
const ProvaSocial = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-4xl text-center">
      <p className="text-accent font-body font-bold text-sm tracking-widest uppercase mb-4">Testimonios</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">
        Lo que dicen nuestros <span className="text-gradient-gold">alumnos</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "María G.", text: "¡Por fin un pan sin gluten que mi familia ama! Mis hijos no notan la diferencia. Gracias, Chef Isabella.", rating: 5 },
          { name: "Carlos R.", text: "Soy celíaco hace 10 años. Este ebook cambió mi relación con la comida. Las recetas son fáciles y deliciosas.", rating: 5 },
          { name: "Ana P.", text: "Empecé sin saber nada de panificación. Hoy horneo panes increíbles cada semana. ¡Lo recomiendo 100%!", rating: 5 },
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 shadow-warm text-left">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: item.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground/80 font-body leading-relaxed mb-4 italic">"{item.text}"</p>
            <p className="font-body font-bold text-foreground text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Precio ─────────────────────────────────────── */
const Precio = () => (
  <section id="precio" className="py-20 md:py-28 bg-gradient-warm">
    <div className="container max-w-xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Oferta Especial</h2>
      <p className="text-muted-foreground font-body text-lg mb-8">Accede al ebook + todos los bonos por un precio único.</p>

      <div className="bg-card rounded-3xl p-8 md:p-10 shadow-gold border border-gold/20">
        <p className="font-body text-sm text-muted-foreground mb-1">Precio normal</p>
        <p className="font-display text-2xl text-muted-foreground line-through mb-4">$67 USD</p>
        <p className="font-body text-sm text-gold font-bold uppercase tracking-widest mb-2">Hoy solamente</p>
        <p className="font-display text-6xl md:text-7xl font-bold text-foreground mb-1">
          $9 <span className="text-xl font-body font-normal text-muted-foreground">USD</span>
        </p>
        <p className="text-gold font-body font-bold text-lg mb-8">¡Ahorras $58! (86% de descuento)</p>

        <CtaButton text="🔥 ¡SÍ, QUIERO POR SOLO $9!" subtext="" />

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Pago seguro</span>
          <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Acceso inmediato</span>
        </div>
      </div>
    </div>
  </section>
);

/* ── Escasez ────────────────────────────────────── */
const Escasez = () => (
  <section className="py-16 md:py-20 bg-warm-brown text-center">
    <div className="container max-w-2xl">
      <p className="font-body text-gold-light font-bold text-sm tracking-widest uppercase mb-4">⚡ Oferta por tiempo limitado</p>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
        Esta oferta expira pronto
      </h2>
      <CountdownTimer />
      <p className="text-primary-foreground/60 font-body mt-6 text-sm">Después de este tiempo, el precio vuelve a $67 USD.</p>
      <div className="mt-8">
        <CtaButton text="¡APROVECHAR AHORA!" subtext="" />
      </div>
    </div>
  </section>
);

/* ── FAQ ────────────────────────────────────────── */
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-body font-bold text-foreground">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-muted-foreground font-body leading-relaxed">{a}</p>}
    </div>
  );
};

const Faq = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-2xl">
      <div className="flex items-center gap-2 justify-center mb-4">
        <HelpCircle className="w-5 h-5 text-accent" />
        <p className="text-accent font-body font-bold text-sm tracking-widest uppercase">FAQ</p>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
      <div>
        {[
          { q: "¿El ebook es apto para celíacos?", a: "Sí, absolutamente. Todas las recetas son 100% libres de gluten y TACC. Fueron desarrolladas y probadas por la Chef Isabella Conti, especialista en cocina sin gluten." },
          { q: "¿En qué formato viene el ebook?", a: "El ebook viene en formato PDF, compatible con cualquier dispositivo: celular, tablet, computadora o e-reader." },
          { q: "¿Necesito experiencia en cocina?", a: "No. Las recetas están explicadas paso a paso, con fotos, y pensadas para principiantes. Cualquiera puede seguirlas." },
          { q: "¿Cómo recibo el material?", a: "Inmediatamente después del pago, recibirás un email con el enlace de descarga. El acceso es instantáneo y de por vida." },
          { q: "¿Qué pasa si no me gusta?", a: "Tienes 7 días de garantía total. Si no estás satisfecho, te devolvemos el 100% de tu dinero, sin preguntas." },
        ].map((item, i) => (
          <FaqItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  </section>
);

/* ── Garantia ──────────────────────────────────── */
const Garantia = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container max-w-3xl text-center">
      <img src={guaranteeSeal} alt="Garantía de 7 días" loading="lazy" width={512} height={512} className="w-32 md:w-40 mx-auto mb-8" />
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Garantía Total de 7 Días</h2>
      <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-xl mx-auto mb-8">
        Si por cualquier razón no estás satisfecho con el ebook, simplemente envíanos un mensaje y te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
      </p>
      <CtaButton text="COMPRAR SIN RIESGO" />
    </div>
  </section>
);

/* ── CTA Final ─────────────────────────────────── */
const CtaFinal = () => (
  <section className="py-20 md:py-28 bg-warm-brown text-center">
    <div className="container max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        ¿Listo para transformar tu cocina?
      </h2>
      <p className="text-primary-foreground/70 font-body text-lg mb-10 leading-relaxed">
        Más de 12.000 personas ya descubrieron el placer de hornear pan sin gluten perfecto. Hoy es tu turno.
      </p>
      <CtaButton text="¡SÍ, QUIERO EMPEZAR HOY!" subtext="" />
    </div>
  </section>
);

/* ── Footer ────────────────────────────────────── */
const Footer = () => (
  <footer className="py-8 bg-foreground text-center">
    <p className="font-body text-sm text-primary-foreground/50">
      © 2026 Mi Panadería Sin Gluten · Todos los derechos reservados
    </p>
  </footer>
);

/* ── Page ──────────────────────────────────────── */
const Index = () => (
  <div className="min-h-screen">
    <Hero />
    <Problema />
    <Solucion />
    <Deseo />
    <Producto />
    <Bonus />
    <ProvaSocial />
    <Precio />
    <Escasez />
    <Faq />
    <Garantia />
    <CtaFinal />
    <Footer />
  </div>
);

export default Index;
