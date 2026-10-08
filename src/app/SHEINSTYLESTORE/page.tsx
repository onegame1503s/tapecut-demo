"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";

export default function SheinStyleStore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  // Verified raw street fashion imagery with scroll-triggered color blooming
  const editorialDrops = [
    {
      title: "01 // THE OVERSIZED SILHOUETTE",
      subtitle: "Streetwear Tailoring",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "02 // MONOCHROME TEXTURES",
      subtitle: "Layering Essentials",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "03 // AFTER HOURS VANGUARD",
      subtitle: "Hauz Khas After Dark",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "04 // RAW MINIMALISM",
      subtitle: "Daily Staples",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  return (
    <main ref={containerRef} className="bg-[#F4F4F0] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#F4F4F0]">
      
      {/* --- EDITORIAL BRUTALIST NAVBAR --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 w-full px-8 md:px-16 flex justify-between items-center z-50 transition-all duration-500 pointer-events-none border-b ${
          isScrolled 
            ? "py-5 bg-[#F4F4F0]/90 backdrop-blur-md border-[#111111]/10 shadow-sm" 
            : "py-8 bg-transparent border-transparent"
        }`}
      >
        <div className="font-serif text-lg tracking-tighter uppercase pointer-events-auto cursor-pointer font-bold">
          SHEIN STYLE STORE // HAUZ KHAS
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-[0.2em] uppercase pointer-events-auto">
          <a href="#manifesto" className="hover:opacity-50 transition-opacity">Manifesto</a>
          <a href="#archive" className="hover:opacity-50 transition-opacity">Archive</a>
          <a href="#location" className="hover:opacity-50 transition-opacity">Location</a>
        </div>
        <a 
          href="#location" 
          className="pointer-events-auto px-6 py-2.5 rounded-full text-[10px] font-mono tracking-[0.15em] uppercase border border-[#111111] bg-[#111111] text-[#F4F4F0] hover:bg-transparent hover:text-[#111111] transition-all duration-300"
        >
          Get Directions
        </a>
      </motion.nav>

      {/* --- HERO: RAW MAGAZINE COVER STYLE --- */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between pt-40 pb-16 px-8 md:px-16 border-b border-[#111111]/10">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[#F4F4F0]/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop" 
            alt="Shein Style Store Editorial" 
            className="w-full h-full object-cover grayscale contrast-110 opacity-90"
          />
        </motion.div>

        {/* Top Meta info */}
        <div className="relative z-20 flex justify-between items-start text-xs font-mono uppercase tracking-widest">
          <span>[ VOL. 01 // DELHI ARCHIVE ]</span>
          <span>SHOP NO 29, GROUND FLOOR</span>
        </div>

        {/* Massive Serif Title */}
        <div className="relative z-20 flex flex-col items-start w-full max-w-7xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-serif tracking-tighter leading-[0.85] uppercase"
          >
            Shein Style
          </motion.h1>
          <div className="flex justify-between w-full items-end mt-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Opposite The Record Room, Hauz Khas</span>
            <span className="font-serif italic text-4xl md:text-6xl">Store.</span>
          </div>
        </div>
      </section>

      {/* --- MANIFESTO SECTION --- */}
      <section id="manifesto" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-b border-[#111111]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 block mb-4">// THE ETHOS</span>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">
              Uncompromising youth aesthetics, curated for Delhi's underground vanguard.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 justify-center">
            <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-800">
              We operate at the intersection of fast-moving global trends and local street culture. Located in the cultural heartbeat of Hauz Khas, Shein Style Store isn't just a boutique—it’s a physical manifestation of modern digital style.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-[#111111]/10 font-mono text-xs uppercase">
              <div>
                <span className="block font-bold text-base mb-1">Weekly</span>
                <span className="text-gray-500">Inventory Rotation</span>
              </div>
              <div>
                <span className="block font-bold text-base mb-1">Unisex</span>
                <span className="text-gray-500">Fluid Silhouettes</span>
              </div>
              <div>
                <span className="block font-bold text-base mb-1">Hauz Khas</span>
                <span className="text-gray-500">Flagship Space</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL ARCHIVE (GRID) --- */}
      <section id="archive" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#111111]/10 pb-6">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-tight">The Archive</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Current Season Drops</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {editorialDrops.map((drop, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.2 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-gray-200 relative">
                {/* Scroll-triggered color blooming animation */}
                <motion.img 
                  src={drop.img} 
                  alt={drop.title} 
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#F4F4F0] px-3 py-1 font-mono text-[10px] uppercase tracking-widest border border-[#111111]/20">
                  {drop.subtitle}
                </div>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <h3 className="font-serif text-xl md:text-2xl tracking-tight">{drop.title}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-[#111111] transition-colors">View Drop →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LOCATION & BOOKING TERMINAL --- */}
      <section id="location" className="py-32 px-8 md:px-16 bg-[#111111] text-[#F4F4F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400">// VISIT THE FLOOR</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-none uppercase">
              Secure your look in person.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md font-light">
              Step into our Hauz Khas ground-floor space right opposite The Record Room. Experience the fabrics, try on the latest drops, and build your wardrobe.
            </p>
            <a 
              href="tel:07292020403" 
              className="inline-flex items-center gap-4 bg-[#F4F4F0] text-[#111111] px-8 py-5 rounded-none font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#F4F4F0] border border-[#F4F4F0] transition-colors duration-300 w-fit"
            >
              Call 07292020403 <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col gap-8 p-10 md:p-14 border border-white/10 bg-[#161616]">
            <div className="flex items-start gap-4 pb-8 border-b border-white/10">
              <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 block mb-1">Physical Address</span>
                <p className="text-base font-serif leading-relaxed">
                  Shop No 29, Ground Floor,<br/>
                  Opposite of The Record Room,<br/>
                  Hauz Khas, New Delhi
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 block mb-1">Direct Assistance</span>
                <p className="text-base font-serif leading-relaxed">07292020403</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER & TAPECUT SIGNATURE --- */}
      <footer className="bg-[#111111] text-[#F4F4F0] py-12 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs uppercase tracking-widest text-gray-400">
          <span>© {new Date().getFullYear()} Shein Style Store. Hauz Khas Delhi.</span>
          
          <div className="flex items-center gap-3 group cursor-default">
            <span>Digital Architecture By</span>
            <div className="relative">
              <span className="text-white font-bold group-hover:text-gray-300 transition-colors">
                Tapecut Studios
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}