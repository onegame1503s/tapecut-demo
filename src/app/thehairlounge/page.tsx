"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function TheHairLoungeEditorial() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Parallax for the editorial images
  const yImageFast = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImageSlow = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const fadeUp: any = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: customEase } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const services = [
    {
      title: "Signature Styling",
      desc: "Precision cutting focused on natural movement and bone structure.",
      price: "₹1,000+",
    },
    {
      title: "Color Alchemy",
      desc: "Seamless balayage, vivids, and high-integrity color corrections.",
      price: "₹4,500+",
    },
    {
      title: "Restorative Care",
      desc: "Deep-conditioning and keratin treatments for compromised hair.",
      price: "₹2,500+",
    },
    {
      title: "Event & Bridal",
      desc: "Flawless execution for high-profile events and wedding mornings.",
      price: "Consult",
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans selection:bg-[#121212] selection:text-[#FAFAFA] overflow-x-hidden">
      
      {/* --- MINIMALIST NAV --- */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: customEase }}
        className="w-full px-6 md:px-12 py-8 flex justify-between items-center absolute top-0 z-50 mix-blend-difference text-white"
      >
        <span className="text-lg md:text-xl font-serif tracking-tighter font-medium">THL.</span>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase">
          <span className="hover:opacity-60 transition-opacity cursor-pointer">Studio</span>
          <span className="hover:opacity-60 transition-opacity cursor-pointer">Menu</span>
          <span className="hover:opacity-60 transition-opacity cursor-pointer">Contact</span>
        </div>

        <a href="#book" className="text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:opacity-60 transition-opacity">
          Book <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.nav>

      {/* --- ASYMMETRICAL HERO --- */}
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-32 md:pt-0 gap-12">
        
        {/* Left: Typography */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 flex flex-col justify-center z-10 md:pr-10"
        >
          <div className="overflow-hidden mb-4">
            <motion.p variants={fadeUp} className="text-xs font-medium tracking-widest uppercase text-[#121212]/50">
              South Extension I, New Delhi
            </motion.p>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[8rem] font-serif leading-[0.9] tracking-tighter text-[#121212]">
              The Hair
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[8rem] font-serif leading-[0.9] tracking-tighter italic text-[#121212]/80">
              Lounge.
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#121212]/70 max-w-md leading-relaxed">
              A highly curated space dedicated to the art of aesthetic refinement. Where South Delhi's most discerning clients find their signature look.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="mt-12">
            <a href="#book" className="inline-flex items-center gap-3 bg-[#121212] text-[#FAFAFA] px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#333] transition-colors">
              Reserve a Chair
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Tall Editorial Image */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[90vh] relative overflow-hidden rounded-2xl bg-[#EBEBEB]">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: customEase }}
            style={{ y: yImageFast }}
            src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1000&auto=format&fit=crop" 
            alt="Editorial hair styling"
            className="absolute inset-0 w-full h-[120%] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* --- EDITORIAL MENU (LIST BASED) --- */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Section Header */}
          <div className="w-full md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: customEase }}
              className="text-4xl md:text-5xl font-serif tracking-tighter sticky top-32"
            >
              The Menu.
            </motion.h2>
          </div>

          {/* Minimalist Line-Item Services */}
          <div className="w-full md:w-2/3 flex flex-col">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: customEase, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-[#121212]/10 hover:border-[#121212] transition-colors"
              >
                <div className="flex flex-col gap-2 max-w-sm">
                  <h3 className="text-2xl font-serif tracking-tight group-hover:italic transition-all">{service.title}</h3>
                  <p className="text-sm text-[#121212]/60 leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-6">
                  <span className="font-serif text-xl">{service.price}</span>
                  <div className="w-10 h-10 rounded-full border border-[#121212]/20 flex items-center justify-center group-hover:bg-[#121212] group-hover:text-[#FAFAFA] transition-all cursor-pointer">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- MASONRY GALLERY / VIBE --- */}
      <section className="w-full py-20 px-6 md:px-12 bg-[#121212] text-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">
            <div className="w-full h-full flex flex-col justify-center pr-10 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-serif tracking-tighter leading-none mb-6">Mastery in <br/><span className="italic text-white/50">motion.</span></h2>
              <p className="text-white/60 max-w-sm">Every cut, color, and treatment is executed with uncompromising precision. Our South Ex studio is designed for complete relaxation.</p>
            </div>
            <div className="w-full h-[400px] md:h-full rounded-2xl overflow-hidden relative">
              <motion.img 
                style={{ y: yImageSlow }}
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop" 
                alt="Salon detail"
                className="absolute inset-0 w-full h-[120%] object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- HIGH CONTRAST FOOTER --- */}
      <footer id="book" className="w-full bg-[#FAFAFA] text-[#121212] pt-32 pb-12 px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto flex flex-col items-center text-center"
        >
          <div className="overflow-hidden mb-8">
            <motion.h2 variants={fadeUp} className="text-5xl md:text-[7rem] font-serif tracking-tighter leading-none">
              Book the <span className="italic text-[#121212]/50">Lounge.</span>
            </motion.h2>
          </div>
          
          <motion.div variants={fadeUp} className="w-full max-w-2xl flex flex-col md:flex-row justify-between items-center py-12 border-y border-[#121212]/10 my-12 gap-10">
            <div className="flex items-center gap-4 text-left">
              <MapPin className="w-6 h-6 text-[#121212]/50 shrink-0" /> 
              <span className="text-sm font-medium">
                Market, F 38, South Extension I,<br/>
                Near McDonald's, New Delhi 110049
              </span>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-[#121212]/10" />
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#121212]/50" /> 
              <span className="text-lg font-serif">09217845455</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full flex justify-between items-center text-xs font-medium tracking-widest uppercase text-[#121212]/40">
            <span>© {new Date().getFullYear()} THL</span>
            <span className="hover:text-[#121212] transition-colors cursor-pointer">
              Engineered by Tapecut Studios
            </span>
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}