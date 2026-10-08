"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, MapPin, Phone, Scissors, Star } from "lucide-react";
import { useRef, useState } from "react";

export default function THairCraft() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Track window scroll to morph the navbar
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Subtle Parallax for Hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  // Verified, highly reliable Pexels salon photography
  const services = [
    {
      title: "Architectural Cuts",
      desc: "Precision shaping tailored to your bone structure and daily routine.",
      img: "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1200",
      aspect: "aspect-square"
    },
    {
      title: "Color Alchemy",
      desc: "From lived-in balayage to bold structural color transformations.",
      img: "https://images.pexels.com/photos/3993306/pexels-photo-3993306.jpeg?auto=compress&cs=tinysrgb&w=1200",
      aspect: "aspect-[3/4]"
    },
    {
      title: "Keratin Smooth",
      desc: "Advanced frizz-eliminating structural repair for flawless texture.",
      img: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      title: "The Scalp Detox",
      desc: "A clarifying exfoliation treatment for optimal follicular health.",
      img: "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg?auto=compress&cs=tinysrgb&w=1200",
      aspect: "aspect-square"
    }
  ];

  return (
    <main ref={containerRef} className="bg-[#0D0D0D] text-[#E5E5E5] font-sans selection:bg-[#A98259] selection:text-white">
      
      {/* --- DYNAMIC EDITORIAL NAVBAR --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 w-full px-8 md:px-16 flex justify-between items-center z-50 transition-all duration-500 pointer-events-none ${
          isScrolled 
            ? "py-4 bg-[#0D0D0D]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="font-serif text-xl tracking-widest uppercase pointer-events-auto cursor-pointer flex items-center gap-2">
          T<span className="text-[#A98259] font-sans font-light">HairCraft</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-auto">
          <a href="#philosophy" className="hover:text-[#A98259] transition-colors">Philosophy</a>
          <a href="#services" className="hover:text-[#A98259] transition-colors">Services</a>
        </div>
        <a 
          href="#book" 
          className="pointer-events-auto px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 backdrop-blur-md border border-white/20 bg-white/10 text-white hover:bg-white hover:text-[#0D0D0D]"
        >
          Book Chair
        </a>
      </motion.nav>

      {/* --- HERO: PARALLAX & HIGH CONTRAST TYPOGRAPHY --- */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-24 px-8 md:px-16">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent z-10" />
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0D0D0D]/80 to-transparent z-10" />
          
          {/* Replaced deep-fried image with a clean, naturally moody aesthetic shot */}
          <img 
            src="https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Premium Salon Interior" 
            className="w-full h-full object-cover scale-105 opacity-80"
          />
        </motion.div>

        <div className="relative z-20 flex flex-col items-start w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#A98259]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#A98259]">
              Unisex Salon • South Delhi
            </span>
          </motion.div>
          
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter leading-none"
            >
              T Hair
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter leading-none italic text-transparent [-webkit-text-stroke:1px_#E5E5E5]"
            >
              Craft.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* --- THE PHILOSOPHY --- */}
      <section id="philosophy" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Mastery in <br/>
              <span className="italic text-[#A98259]">every cut.</span>
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-12">
            <p className="text-[#A0A0A0] leading-relaxed text-lg md:text-xl font-light max-w-2xl">
              Located on Nelson Mandela Marg, T Hair Craft is where technique meets personal expression. We don't just cut hair; we engineer aesthetics tailored to your lifestyle, delivering South Delhi's most refined grooming experience for both men and women.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
              <div className="flex gap-4">
                <Scissors className="w-6 h-6 text-[#A98259] flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-2 text-white">Senior Stylists</h4>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">Years of intensive training ensure technical perfection in every service.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Star className="w-6 h-6 text-[#A98259] flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-2 text-white">Premium Products</h4>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">Exclusive use of high-end, nourishing formulations designed for lasting results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ASYMMETRICAL EDITORIAL GRID (SERVICES) --- */}
      <section id="services" className="py-32 px-8 md:px-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8 mb-16">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight">The Menu</h2>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#A98259]">Curated Treatments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.2 }}
                className={`flex flex-col gap-6 group cursor-pointer ${
                  i === 0 ? "md:col-span-5 md:mt-0" :
                  i === 1 ? "md:col-span-6 md:col-start-7 md:mt-24" :
                  i === 2 ? "md:col-span-7 md:mt-0" :
                  "md:col-span-4 md:col-start-9 md:mt-[-100px]"
                }`}
              >
                <div className={`w-full overflow-hidden rounded-sm bg-[#1A1A1A] relative ${s.aspect}`}>
                  {/* MOBILE FIX: Color blooms automatically based on scroll viewport */}
                  <motion.img 
                    src={s.img} 
                    alt={s.title} 
                    initial={{ filter: "grayscale(100%)" }}
                    whileInView={{ filter: "grayscale(0%)" }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/10 pointer-events-none" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#A98259] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING TERMINAL & FOOTER --- */}
      <footer id="book" className="bg-[#0D0D0D] pt-32 pb-8 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto bg-[#141414] p-10 md:p-20 rounded-xl border border-white/5 mb-20 flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A98259]/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#A98259] block mb-4">Secure Your Chair</span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
              Experience the <br/>Craft.
            </h2>
            <p className="text-[#A0A0A0] mb-8 max-w-md text-sm leading-relaxed">
              Elevate your aesthetic at South Delhi's premier unisex salon. Appointments are highly recommended.
            </p>
            <a 
              href="tel:07011409996" 
              className="inline-flex items-center gap-4 bg-[#E5E5E5] text-[#0D0D0D] px-8 py-5 rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#A98259] hover:text-white transition-colors duration-300"
            >
              Call 07011409996 <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative z-10 lg:w-1/3 flex flex-col gap-10 w-full">
            <div className="flex items-start gap-4">
              <div className="bg-[#1A1A1A] p-3 rounded-full border border-white/5"><MapPin className="w-5 h-5 text-[#A98259]" /></div>
              <div>
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-white block mb-1">The Salon</span>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Flat No 004, Ground Floor,<br/>
                  Narmada I, Nelson Mandela Marg,<br/>
                  New Delhi
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1A1A1A] p-3 rounded-full border border-white/5"><Phone className="w-5 h-5 text-[#A98259]" /></div>
              <div>
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-white block mb-1">Direct Line</span>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">07011409996</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- TAPECUT STUDIOS SIGNATURE --- */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-[0.15em] text-[#666666] uppercase">
          <span>© {new Date().getFullYear()} T Hair Craft. All Rights Reserved.</span>
          
          <div className="flex items-center gap-3 group cursor-default">
            <span>Digital Architecture By</span>
            <div className="relative">
              <span className="text-[#E5E5E5] font-bold group-hover:text-[#A98259] transition-colors duration-500">
                Tapecut Studios
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#A98259] group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}