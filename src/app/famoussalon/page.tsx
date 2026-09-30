"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export default function FamousSalonAvantGarde() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  
  const customEase: [number, number, number, number] = [0.25, 1, 0.5, 1];

  const textReveal = {
    hidden: { y: "100%", opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: customEase } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const services = [
    { name: "Architectural Cutting", desc: "Precision scissor-work designed around your natural bone structure.", price: "₹1,200+" },
    { name: "Dimensional Color", desc: "Seamless balayage, color-melting, and vivid technical applications.", price: "₹4,000+" },
    { name: "Structural Repair", desc: "Advanced molecular hair restoration and smoothing therapies.", price: "₹3,500+" },
    { name: "Curated Aesthetics", desc: "Clinical dermal treatments and high-definition event styling.", price: "₹2,500+" }
  ];

  const team = [
    { name: "Aria Sharma", role: "Creative Director", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { name: "Vikram Seth", role: "Master Colorist", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=600&auto=format&fit=crop" },
    { name: "Elena Roy", role: "Aesthetician", img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#EBEBEB] text-[#121212] font-sans selection:bg-[#121212] selection:text-[#EBEBEB] overflow-x-hidden">
      
      {/* --- MINIMAL NAVIGATION --- */}
      <nav className="fixed top-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 mix-blend-difference text-[#EBEBEB]">
        <div className="text-xl md:text-2xl font-bold tracking-tighter uppercase">Famous.</div>
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase">
          <span className="hover:opacity-50 transition-opacity cursor-pointer">Vision</span>
          <span className="hover:opacity-50 transition-opacity cursor-pointer">Services</span>
          <span className="hover:opacity-50 transition-opacity cursor-pointer">Studio</span>
        </div>
        <a href="#book" className="text-xs font-bold tracking-widest uppercase border-b border-[#EBEBEB] pb-1 hover:opacity-50 transition-opacity">
          Reserve
        </a>
      </nav>

      {/* --- HERO: KINETIC TYPOGRAPHY --- */}
      <section className="relative w-full h-screen flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: customEase }}
          className="absolute top-0 right-0 w-full md:w-3/4 h-[70vh] md:h-screen -z-10 bg-[#121212]"
        >
          <motion.img 
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2000&auto=format&fit=crop" 
            alt="Avant Garde Styling"
            className="w-full h-[120%] object-cover opacity-80 grayscale"
          />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl z-10 mix-blend-difference text-[#EBEBEB]">
          <div className="overflow-hidden mb-2"><motion.h1 variants={textReveal} className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] uppercase">Famous</motion.h1></div>
          <div className="overflow-hidden mb-8"><motion.h1 variants={textReveal} className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] uppercase">Studio.</motion.h1></div>
          <div className="overflow-hidden">
            <motion.p variants={textReveal} className="text-sm md:text-lg max-w-md font-medium tracking-wide opacity-80">
              A progressive space for hair architecture and modern aesthetics, located in the heart of Vasant Square Mall.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* --- CONTINUOUS MARQUEE --- */}
      <div className="w-full bg-[#121212] text-[#EBEBEB] py-6 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex gap-16 text-3xl md:text-5xl font-bold uppercase tracking-tighter"
        >
          <span>Redefining Form</span> <span className="opacity-30">/</span>
          <span>Elevating Standards</span> <span className="opacity-30">/</span>
          <span>Vasant Kunj</span> <span className="opacity-30">/</span>
          <span>Redefining Form</span> <span className="opacity-30">/</span>
          <span>Elevating Standards</span> <span className="opacity-30">/</span>
          <span>Vasant Kunj</span> <span className="opacity-30">/</span>
        </motion.div>
      </div>

      {/* --- PHILOSOPHY (NEW CONTENT) --- */}
      <section className="py-32 px-6 md:px-12 bg-[#EBEBEB]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="w-full md:w-1/3">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-[#121212]/50 block mb-6"
            >
              The Vision
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">More than a salon. <br/>An institution.</h2>
          </div>
          <div className="w-full md:w-2/3 text-lg md:text-2xl font-medium text-[#121212]/80 leading-snug">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-8">
              We reject the standard formulas of the beauty industry. At Famous, every cut is an architectural project. Every color application is a study in dimension and light. 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              Operating out of Vasant Kunj's premier retail space, we provide an environment of absolute focus, delivering uncompromising results for clients who demand the best.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- EXPANDING SERVICES INTERACTION --- */}
      <section className="py-24 px-6 md:px-12 bg-[#121212] text-[#EBEBEB]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">The Disciplines.</h2>
          </div>
          
          <div className="flex flex-col border-t border-[#EBEBEB]/20">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } }
                }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-12 border-b border-[#EBEBEB]/20 hover:border-[#EBEBEB] transition-colors duration-500 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full md:w-2/3">
                  <span className="text-xs font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{service.name}</h3>
                </div>
                <div className="mt-4 md:mt-0 w-full md:w-1/3 flex flex-col items-start md:items-end gap-2">
                  <p className="text-sm opacity-60 text-left md:text-right">{service.desc}</p>
                  <span className="font-bold tracking-widest">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE ARTISTS (NEW TEAM SECTION) --- */}
      <section className="py-32 px-6 md:px-12 bg-[#EBEBEB]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase">The Directors.</h2>
            <span className="hidden md:block text-xs font-bold uppercase tracking-widest opacity-50">Masters of their craft</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col group"
              >
                <div className="w-full aspect-[3/4] overflow-hidden mb-6 bg-[#121212]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight uppercase">{member.name}</h4>
                <p className="text-sm font-bold tracking-widest opacity-50 uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMMERSIVE FOOTER / BOOKING --- */}
      <footer id="book" className="w-full bg-[#121212] text-[#EBEBEB] pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: customEase }}
          className="absolute inset-0 z-0"
        >
          <img src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="texture" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none uppercase mb-8"
          >
            Initiate.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-md opacity-70 mb-12"
          >
            Secure your time at our Vasant Square Mall studio. Uncompromising service awaits.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#EBEBEB] text-[#121212] px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors mb-32"
          >
            Book Appointment
          </motion.button>

          <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[#EBEBEB]/20 pt-10 gap-8">
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Vasant Square Mall, Vasant Kunj</span>
              <span className="hidden md:flex items-center gap-2"><Phone className="w-4 h-4"/> 09457572222</span>
            </div>
            
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest opacity-60">
  <span className="hover:opacity-100 cursor-pointer transition-opacity">Instagram</span>
  <span className="hover:opacity-100 cursor-pointer transition-opacity">WhatsApp</span>
</div>

            <div className="text-xs font-bold uppercase tracking-widest opacity-40">
              Engineered by Tapecut Studios
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}