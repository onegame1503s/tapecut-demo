"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Phone , Clock, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

export default function CuttingEdgeSalon() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Subtle parallax for the hero background
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Advanced Interactive Service List
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "01",
      title: "Signature Cutting",
      desc: "Bespoke scissor and razor work tailored to your natural hair texture and facial architecture. Includes a comprehensive consultation and signature blowout.",
      price: "₹1,500+",
      img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Balayage & Blending",
      desc: "Hand-painted, multi-dimensional color mapping. We create seamless, sun-kissed transitions that grow out beautifully without harsh lines.",
      price: "₹4,000+",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Keratin Restoration",
      desc: "A transformative molecular smoothing treatment that eliminates frizz, locks in vital moisture, and dramatically reduces daily styling time.",
      price: "₹3,500+",
      img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Scalp Ritual",
      desc: "A deeply relaxing, clarifying detox for your roots. Stimulates blood flow, removes buildup, and promotes exceptionally healthy follicular growth.",
      price: "₹2,000+",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FAF7F2] text-[#2C2A28] font-sans selection:bg-[#B39371] selection:text-white">
      
      {/* --- ELEGANT FLOATING HEADER --- */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 mix-blend-difference text-white"
      >
        <span className="text-xl font-serif italic tracking-wide">Cutting Edge</span>
        <a href="#book" className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase hover:text-[#B39371] transition-colors">
          Book Session <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.header>

      {/* --- HERO: COMPLEX CLIP-PATH REVEAL --- */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <motion.div
            initial={{ scale: 1.2, clipPath: "inset(100% 0 0 0)" }}
            animate={{ scale: 1, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop" 
              alt="Beautiful flowing hair" 
              className="w-full h-full object-cover brightness-[0.7] contrast-110"
            />
          </motion.div>
        </motion.div>

        {/* Hero Typography */}
        <div className="relative z-10 flex flex-col items-center text-white text-center mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            South Delhi's Premier Studio
          </motion.span>
          <motion.div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-none"
            >
              Cutting Edge.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* --- THE PHILOSOPHY (WARM, ORGANIC LAYOUT) --- */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[100px] rounded-b-xl relative">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop" 
              alt="Salon Interior" 
              className="w-full h-full object-cover"
            />
            {/* Organic Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-12 bg-white p-6 rounded-full shadow-2xl flex items-center justify-center flex-col w-32 h-32 text-center">
              <Sparkles className="w-5 h-5 text-[#B39371] mb-1" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Expert<br/>Stylists</span>
            </div>
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B39371] mb-6">Our Vibe</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Effortless beauty, <br/><span className="italic text-gray-400">masterfully crafted.</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Situated within the vibrant energy of Vasant Square Mall, Cutting Edge is a sanctuary of style. We don't believe in one-size-fits-all beauty. Our senior artists take the time to map your features, understand your lifestyle, and craft a look that feels authentically, beautifully you.
          </p>
          <div className="flex items-center gap-6 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#B39371]" />
              <span className="text-xs font-bold tracking-widest uppercase">10AM - 8PM Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- ADVANCED STICKY SERVICES SHOWCASE --- */}
      <section className="py-24 bg-white px-6 md:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight">The Menu.</h2>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mt-4 md:mt-0">Curated Treatments</span>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-16 relative">
            
            {/* Left: Scrollable Text List */}
            <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-24 pb-12">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  onViewportEnter={() => setActiveService(index)}
                  className="flex flex-col gap-4 pr-0 md:pr-12"
                >
                  <div className="flex items-end gap-4 mb-2">
                    <span className="text-sm font-mono text-[#B39371]">{service.id}</span>
                    <h3 className="text-3xl md:text-4xl font-serif leading-none">{service.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                  <span className="text-lg font-medium">{service.price}</span>
                </motion.div>
              ))}
            </div>

            {/* Right: Sticky Image Masking Animation */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] sticky top-24 hidden md:block rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={services[activeService].img}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/5" />
            </div>

          </div>
        </div>
      </section>

      {/* --- WARM, INVITING FOOTER & BOOKING --- */}
      <footer id="book" className="bg-[#1C1A18] text-[#FAF7F2] pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#B39371]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-[1.1] mb-8">
              Let's create <br/>something <span className="italic text-[#B39371]">beautiful.</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-sm text-sm leading-relaxed">
              Experience the highest standard of hair styling in South Delhi. Secure your appointment today and let our experts take care of the rest.
            </p>
            <a 
              href="tel:09818234836" 
              className="inline-flex items-center gap-4 bg-[#B39371] text-white px-8 py-5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors shadow-xl"
            >
              Call 09818234836 <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-10 border-l border-white/10 pl-0 lg:pl-12 pt-8 lg:pt-0">
            <div>
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#B39371] uppercase mb-3">
                <MapPin className="w-4 h-4" /> Visit The Salon
              </span>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Ground Floor, Vasant Square Mall,<br/>
                G-16, Pocket 5, Sector B,<br/>
                South Delhi
              </p>
            </div>
            <div>
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#B39371] uppercase mb-3">
                <Phone className="w-4 h-4" /> Concierge
              </span>
              <p className="text-sm text-gray-300 leading-relaxed font-light">09818234836</p>
            </div>
          </div>

        </div>

        {/* --- TAPECUT STUDIOS SIGNATURE --- */}
        <div className="relative z-10 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-[0.15em] text-gray-500 uppercase">
          <span>© {new Date().getFullYear()} Cutting Edge Salon.</span>
          <div className="flex items-center gap-2 group cursor-default bg-white/5 px-4 py-2 rounded-full">
            <span>Engineered By</span>
            <span className="text-white font-bold group-hover:text-[#B39371] transition-colors duration-300">
              Tapecut Studios
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}