"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Heart } from "lucide-react";
import { useRef, useState } from "react";

export default function KawaiFuku() {
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

  // Curated boutique aesthetic drops with scroll color blooming
  const collections = [
    {
      title: "Pastel Dreams",
      desc: "Soft silhouettes, playful layering, and whimsical everyday pieces.",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Boho Village Vibe",
      desc: "Artisan textures and free-spirited designs inspired by Hauz Khas Village.",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Contemporary Kawai",
      desc: "Modern cuts infused with youthful charm and vibrant individuality.",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Artisan Outerwear",
      desc: "Statement pieces crafted to turn heads against any backdrop.",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  return (
    <main ref={containerRef} className="bg-[#FAF8F5] text-[#2C2A29] font-sans selection:bg-[#E8C5C8] selection:text-[#2C2A29]">
      
      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 w-full px-8 md:px-16 flex justify-between items-center z-50 transition-all duration-500 pointer-events-none border-b ${
          isScrolled 
            ? "py-5 bg-[#FAF8F5]/90 backdrop-blur-md border-[#2C2A29]/10 shadow-sm" 
            : "py-8 bg-transparent border-transparent"
        }`}
      >
        <div className="font-serif text-lg tracking-wider uppercase pointer-events-auto cursor-pointer font-bold flex items-center gap-2">
          KAWAI FUKU <span className="text-[#D4A373] font-light font-sans text-xs">// HAUZ KHAS</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-[0.2em] uppercase pointer-events-auto">
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#collections" className="hover:opacity-50 transition-opacity">Collections</a>
          <a href="#visit" className="hover:opacity-50 transition-opacity">Visit</a>
        </div>
        <a 
          href="#visit" 
          className="pointer-events-auto px-6 py-2.5 rounded-full text-[10px] font-mono tracking-[0.15em] uppercase border border-[#2C2A29] bg-[#2C2A29] text-[#FAF8F5] hover:bg-transparent hover:text-[#2C2A29] transition-all duration-300"
        >
          Store Map
        </a>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between pt-40 pb-16 px-8 md:px-16 border-b border-[#2C2A29]/10">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[#FAF8F5]/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
            alt="Kawai Fuku Boutique" 
            className="w-full h-full object-cover grayscale contrast-110 opacity-90"
          />
        </motion.div>

        <div className="relative z-20 flex justify-between items-start text-xs font-mono uppercase tracking-widest">
          <span>[ BOUTIQUE CLOTHING // SOUTH DELHI ][cite: 4]</span>
          <span>NEAR RANG ART GALLERY</span>
        </div>

        <div className="relative z-20 flex flex-col items-start w-full max-w-7xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-serif tracking-tighter leading-[0.85] uppercase"
          >
            Kawai Fuku
          </motion.h1>
          <div className="flex justify-between w-full items-end mt-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Hauz Khas Village, Deer Park Enclave</span>
            <span className="font-serif italic text-4xl md:text-6xl text-[#D4A373]">Boutique.</span>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-b border-[#2C2A29]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A373] block mb-4">// SANCTUARY OF STYLE</span>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">
              A curated expression of whimsical fashion nestled in Delhi's historic creative hub[cite: 4].
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 justify-center">
            <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-700">
              Located at Shop No. 16, right near the Rang Art Gallery and Deer Park in Hauz Khas Village[cite: 4], Kawai Fuku brings a refreshing wave of playful aesthetics and artisanal charm to South Delhi.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-[#2C2A29]/10 font-mono text-xs uppercase">
              <div>
                <span className="block font-bold text-base mb-1">Village</span>
                <span className="text-gray-500">Hauz Khas Enclave[cite: 4]</span>
              </div>
              <div>
                <span className="block font-bold text-base mb-1">Artisan</span>
                <span className="text-gray-500">Unique Selection</span>
              </div>
              <div>
                <span className="block font-bold text-base mb-1">Exclusive</span>
                <span className="text-gray-500">Limited Pieces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COLLECTIONS GRID (WITH SCROLL COLOR BLOOM) --- */}
      <section id="collections" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#2C2A29]/10 pb-6">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-tight">The Collections</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Handpicked Drops</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {collections.map((item, i) => (
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
                  src={item.img} 
                  alt={item.title} 
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5] px-3 py-1 font-mono text-[10px] uppercase tracking-widest border border-[#2C2A29]/20">
                  {item.title}
                </div>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                <span className="font-mono text-xs uppercase tracking-widest text-[#D4A373]">Explore →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- VISIT & LOCATION TERMINAL --- */}
      <section id="visit" className="py-32 px-8 md:px-16 bg-[#2C2A29] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A373] // FIND US">// FIND US</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-none uppercase">
              Step into the world of Kawai Fuku.
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md font-light">
              Visit our boutique in Hauz Khas Village[cite: 4]. Lose yourself in the creativity of South Delhi's most scenic arts district near Deer Park.
            </p>
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#D4A373]">
              <Sparkles className="w-4 h-4" /> Open Daily For Walk-Ins
            </div>
          </div>

          <div className="flex flex-col gap-8 p-10 md:p-14 border border-white/10 bg-[#363433]">
            <div className="flex items-start gap-4 pb-8 border-b border-white/10">
              <MapPin className="w-6 h-6 text-[#D4A373] flex-shrink-0 mt-1" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 block mb-1">Store Address</span>
                <p className="text-base font-serif leading-relaxed">
                  Shop No. 16, Near Rang Art Gallery,<br/>
                  Hauz Khas Village, Deer Park,<br/>
                  New Delhi[cite: 4]
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-[#D4A373] flex-shrink-0 mt-1" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 block mb-1">Direct Note</span>
                <p className="text-base font-serif leading-relaxed text-gray-300">
                  Standalone web presence designed for immediate client pitch integration.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER & TAPECUT SIGNATURE --- */}
      <footer className="bg-[#2C2A29] text-[#FAF8F5] py-12 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs uppercase tracking-widest text-gray-400">
          <span>© {new Date().getFullYear()} Kawai Fuku. Hauz Khas Village, New Delhi[cite: 4].</span>
          
          <div className="flex items-center gap-3 group cursor-default">
            <span>Digital Architecture By</span>
            <div className="relative">
              <span className="text-white font-bold group-hover:text-[#D4A373] transition-colors">
                Tapecut Studios
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4A373] group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}