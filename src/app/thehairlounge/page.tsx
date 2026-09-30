"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, MoveRight, AlertCircle } from "lucide-react";

export default function TheHairLounge() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yImageSlow = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const maskReveal: any = {
    hidden: { y: "120%", opacity: 0, rotate: 2 },
    show: { y: 0, opacity: 1, rotate: 0, transition: { duration: 1.2, ease: customEase } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const services = [
    {
      title: "Signature Cuts & Styling",
      desc: "Tailored precision cutting and styling for the modern aesthetic. Designed to frame your unique features.",
      price: "From ₹1,000",
      time: "45 Min",
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Color Alchemy",
      desc: "From seamless balayage to complete color corrections. We use premium, high-integrity formulations.",
      price: "From ₹4,500",
      time: "120 - 180 Min",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Restorative Treatments",
      desc: "Advanced keratin and deep-conditioning therapies to restore strength, shine, and manageability to your hair.",
      price: "From ₹2,500",
      time: "90 Min",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-[#F9F8F6] font-sans selection:bg-[#c9a98a] selection:text-[#0a0a0a] overflow-x-hidden">
      
      {/* --- NAV --- */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: customEase, delay: 0.5 }}
        className="w-full px-6 md:px-12 py-8 flex justify-between items-center absolute top-0 z-50 text-[#F9F8F6]"
      >
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif tracking-tight font-semibold uppercase tracking-widest">The Hair Lounge.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide opacity-80">
          <span className="hover:opacity-100 hover:text-[#c9a98a] transition-all cursor-pointer">The Experience</span>
          <span className="hover:opacity-100 hover:text-[#c9a98a] transition-all cursor-pointer">Services</span>
          <span className="hover:opacity-100 hover:text-[#c9a98a] transition-all cursor-pointer">Location</span>
        </div>

        <a href="#book" className="text-sm font-medium tracking-wide border-b border-[#F9F8F6] pb-1 hover:text-[#c9a98a] hover:border-[#c9a98a] transition-all duration-300">
          Reserve a Chair
        </a>
      </motion.nav>

      {/* --- HERO --- */}
      <section className="relative w-full pt-40 pb-16 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto z-10"
        >
          <div className="overflow-hidden mb-6 flex justify-center pt-4">
            <motion.div variants={maskReveal} className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c9a98a]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#c9a98a]">South Extension I, New Delhi</span>
              <span className="w-8 h-[1px] bg-[#c9a98a]" />
            </motion.div>
          </div>

          <div className="overflow-hidden mb-2 pt-2">
            <motion.h1 variants={maskReveal} className="text-6xl md:text-[7.5rem] font-serif leading-[1.05] tracking-tight text-[#F9F8F6]">
              The Hair Lounge
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 pt-2">
            <motion.h1 variants={maskReveal} className="text-4xl md:text-[4.5rem] font-serif leading-[1.05] tracking-tight">
              <span className="italic text-[#c9a98a] font-light">Elevating South Delhi.</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden pt-2">
            <motion.p variants={maskReveal} className="text-base md:text-lg text-[#F9F8F6]/70 max-w-lg mx-auto leading-relaxed">
              A premium space dedicated to the art of hair. Expert styling, advanced treatments, and a truly refined salon experience.
            </motion.p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto mt-16 h-[50vh] md:h-[75vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] relative shadow-2xl bg-[#1a1a1a]">
          <motion.div 
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: customEase, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-full bg-[#0a0a0a] z-10"
          />
          <motion.img 
            initial={{ scale: 1.2, filter: "blur(10px)" }}
            whileInView={{ scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: customEase }}
            style={{ y: yImage }}
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop" 
            alt="The Hair Lounge interior"
            className="absolute inset-0 w-full h-[120%] object-cover object-center opacity-70"
          />
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24 text-center"
          >
            <div className="overflow-hidden mb-4 pt-2"><motion.h2 variants={maskReveal} className="text-5xl md:text-6xl font-serif tracking-tight">Our Expertise</motion.h2></div>
            <div className="overflow-hidden pt-2"><motion.p variants={maskReveal} className="text-[#F9F8F6]/60">Mastery in hair styling and care.</motion.p></div>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-32">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 1 ? 80 : -80, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, ease: customEase }}
                className={`flex flex-col gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-xl shadow-black/50 bg-[#1a1a1a] group relative">
                  <motion.div 
                    initial={{ height: "100%" }}
                    whileInView={{ height: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: customEase, delay: 0.2 }}
                    className="absolute bottom-0 left-0 w-full bg-[#0a0a0a] z-10"
                  />
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: customEase }}
                    src={service.img} 
                    alt={service.title}
                    className="w-full aspect-[4/3] md:aspect-[4/4] object-cover opacity-80"
                  />
                </div>
                
                <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <span className="text-[#c9a98a] font-medium tracking-widest text-xs uppercase mb-4 block">0{index + 1}</span>
                  <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">{service.title}</h3>
                  <p className="text-base text-[#F9F8F6]/70 leading-relaxed max-w-sm mb-8">
                    {service.desc}
                  </p>
                  
                  <div className={`flex items-center gap-6 mb-8 py-4 border-y border-[#F9F8F6]/10 w-full max-w-sm ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-[#F9F8F6]/50 mb-1">Starting at</span>
                      <span className="font-serif text-lg">{service.price}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-[#F9F8F6]/10" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-[#F9F8F6]/50 mb-1">Est. Time</span>
                      <span className="flex items-center gap-2 text-sm"><Clock className="w-3.5 h-3.5 text-[#c9a98a]" /> {service.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="book" className="w-full bg-[#111] text-[#F9F8F6] pt-32 pb-12 px-6 md:px-12 rounded-t-[3rem] mt-2 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10"
        >
          <div className="overflow-hidden mb-2 pt-2">
            <motion.h2 variants={maskReveal} className="text-5xl md:text-8xl font-serif tracking-tight leading-tight">
              Ready for your
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8 pt-2">
            <motion.h2 variants={maskReveal} className="text-5xl md:text-8xl font-serif tracking-tight leading-tight">
              <span className="italic text-[#c9a98a]">appointment?</span>
            </motion.h2>
          </div>
          
          <div className="overflow-hidden mb-12 pt-2">
            <motion.p variants={maskReveal} className="text-[#F9F8F6]/70 max-w-md mx-auto leading-relaxed">
              Step into The Lounge. Secure your slot and let our specialists take care of the rest.
            </motion.p>
          </div>

          <motion.button 
            variants={maskReveal}
            whileHover={{ scale: 1.05, backgroundColor: "#e3c7a8", color: "#0a0a0a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#c9a98a] text-[#0a0a0a] px-10 py-5 rounded-full font-medium tracking-wide transition-colors duration-300 mb-24 shadow-2xl"
          >
            Book your session
          </motion.button>

          <motion.div 
            variants={maskReveal}
            className="w-full flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#F9F8F6]/10 gap-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-sm text-[#F9F8F6]/70">
              <div className="flex items-center gap-3 text-left">
                <MapPin className="w-5 h-5 text-[#c9a98a] shrink-0" /> 
                <span>
                  Market, F 38, South Extension I,<br/>
                  Near McDonald's, New Delhi 110049
                </span>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-[#F9F8F6]/20" />
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a98a]" /> 
                <span>+91 09217845455</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs tracking-widest uppercase text-[#F9F8F6]/40">
              <span>© {new Date().getFullYear()} The Hair Lounge</span>
              <span className="hidden md:block">|</span>
              <span className="hover:text-[#F9F8F6]/80 transition-colors flex items-center gap-2 cursor-pointer">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a98a] animate-pulse" />
                Engineered by Tapecut Studios
              </span>
            </div>
            
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}