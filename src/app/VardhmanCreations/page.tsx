"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, MapPin, Phone, Scissors, Ruler, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

export default function VardhmanBoutique() {
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
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  // Locked-in Pexels fashion photography. The dead 1st image link is completely removed.
  const collections = [
    {
      title: "Heritage Handlooms",
      desc: "Ethically sourced, hand-woven textiles that celebrate generations of Indian craftsmanship.",
      img: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1200", 
    },
    {
      title: "Bespoke Bridal",
      desc: "Custom-fitted trousseaus designed to make your most important moments utterly unforgettable.",
      img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1200", 
    },
    {
      title: "Modern Fusion",
      desc: "Where traditional silhouettes meet contemporary tailoring for the modern connoisseur.",
      img: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1200", 
    },
    {
      title: "The Tailor's Room",
      desc: "Precision alterations and custom fittings performed by our master tailors in-house.",
      img: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200", 
    },
    {
      title: "Festive Couture",
      desc: "Opulent collections featuring intricate hand-embroidery and rich, celebratory palettes.",
      img: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=1200", 
    },
    {
      title: "Silk & Velvet",
      desc: "Luxurious draping fabrics reserved for our most exclusive bespoke client commissions.",
      img: "https://images.pexels.com/photos/2364069/pexels-photo-2364069.jpeg?auto=compress&cs=tinysrgb&w=1200", 
    }
  ];

  return (
    <main ref={containerRef} className="bg-[#F9F8F6] text-[#222222] font-sans selection:bg-[#8C7355] selection:text-white">
      
      {/* --- DYNAMIC EDITORIAL NAVBAR --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 w-full px-8 md:px-16 flex justify-between items-center z-50 transition-all duration-500 pointer-events-none ${
          isScrolled 
            ? "py-4 bg-[#F9F8F6]/90 backdrop-blur-md shadow-sm text-[#222222]" 
            : "py-8 bg-transparent text-white"
        }`}
      >
        <div className="font-serif text-xl tracking-wider pointer-events-auto cursor-pointer">
          VARDHMAN
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-auto">
          <a href="#atelier" className="hover:text-[#8C7355] transition-colors">The Atelier</a>
          <a href="#collections" className="hover:text-[#8C7355] transition-colors">Collections</a>
        </div>
        <a 
          href="#book" 
          className={`pointer-events-auto px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 backdrop-blur-md border ${
            isScrolled 
              ? "border-[#222222]/20 text-[#222222] hover:bg-[#222222] hover:text-white" 
              : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-[#222222]"
          }`}
        >
          Book Fitting
        </a>
      </motion.nav>

      {/* --- HERO: PARALLAX & STAGGERED TYPOGRAPHY --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Protective top gradient to guarantee the logo always pops on load */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none" />
          <img 
            src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="High Fashion Fabric" 
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center text-white text-center px-6 mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8"
          >
            Boutique Clothing Stores in Hauz Khas Delhi
          </motion.span>
          
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-none"
            >
              Vardhman
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-none italic text-[#E5D5B5]"
            >
              Creations.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* --- THE ATELIER (ABOUT) --- */}
      <section id="atelier" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C7355] block mb-6">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Weave your story into <br/>
              <span className="italic text-gray-400">every single thread.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              Nestled in the historic, artistic enclave of Hauz Khas, Vardhman Creations is more than a boutique—it is a sanctuary for bespoke tailoring and heritage fabrics. We source the finest materials and employ master craftsmen to ensure every garment we create is an enduring piece of art.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <Scissors className="w-6 h-6 text-[#8C7355] mb-4" />
                <h4 className="font-serif text-lg mb-2">Master Tailoring</h4>
                <p className="text-xs text-gray-500">Precision cuts tailored specifically to your unique measurements.</p>
              </div>
              <div>
                <Ruler className="w-6 h-6 text-[#8C7355] mb-4" />
                <h4 className="font-serif text-lg mb-2">Bespoke Fittings</h4>
                <p className="text-xs text-gray-500">Private consultations to design your perfect silhouette.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full aspect-[4/5] md:aspect-square">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-t-full overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Fabric Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-32 h-32 border border-[#8C7355]/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10"
            >
              <Sparkles className="w-6 h-6 text-[#8C7355]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FLAWLESS NATIVE HORIZONTAL SCROLL PORTFOLIO --- */}
      <section id="collections" className="py-32 bg-[#1A1A1A] relative">
        <div className="px-8 md:px-16 mb-16 text-white max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">The Portfolio</h2>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C7355]">Swipe to Explore</span>
        </div>

        <div className="flex gap-8 px-8 md:px-16 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full pb-10">
          {collections.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-[85vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0 flex flex-col gap-6 snap-center group cursor-grab active:cursor-grabbing"
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-900 relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-serif text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BOOKING TERMINAL & FOOTER --- */}
      <footer id="book" className="bg-[#F9F8F6] pt-32 pb-8 px-8 md:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto bg-white p-10 md:p-20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 mb-20 flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 text-[200px] font-serif italic text-gray-50 pointer-events-none select-none">
            V
          </div>

          <div className="relative z-10 lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C7355] block mb-4">Private Consultation</span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
              Reserve your <br/>fitting session.
            </h2>
            <p className="text-gray-500 mb-8 max-w-md text-sm leading-relaxed">
              Step into our Hauz Khas boutique for a dedicated session with our stylists and master tailors.
            </p>
            <a 
              href="tel:01146080334" 
              className="inline-flex items-center gap-4 bg-[#222] text-white px-8 py-5 rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8C7355] transition-colors"
            >
              Call 01146080334 <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative z-10 lg:w-1/3 flex flex-col gap-10 w-full">
            <div className="flex items-start gap-4">
              <div className="bg-[#F9F8F6] p-3 rounded-full"><MapPin className="w-5 h-5 text-[#8C7355]" /></div>
              <div>
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-gray-900 block mb-1">The Boutique</span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Shop No. 1, CSC, DDA Market,<br/>
                  Sri Aurobindo Marg,<br/>
                  Hauz Khas, New Delhi
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#F9F8F6] p-3 rounded-full"><Phone className="w-5 h-5 text-[#8C7355]" /></div>
              <div>
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-gray-900 block mb-1">Direct Line</span>
                <p className="text-sm text-gray-500 leading-relaxed">01146080334</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- TAPECUT STUDIOS SIGNATURE --- */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-[0.15em] text-gray-400 uppercase">
          <span>© {new Date().getFullYear()} Vardhman Creations.</span>
          
          <div className="flex items-center gap-3 group cursor-default">
            <span>Digital Architecture By</span>
            <div className="relative">
              <span className="text-[#222] font-bold group-hover:text-[#8C7355] transition-colors duration-500">
                Tapecut Studios
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8C7355] group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}