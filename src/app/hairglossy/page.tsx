"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, MoveRight } from "lucide-react";

export default function HairGlossy3() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Refined organic parallax
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yImageSlow = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  // Premium Custom Easing
  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Advanced Animation Variants with slight rotation for a liquid feel
  const maskReveal: any = {
    hidden: { y: "120%", opacity: 0, rotate: 3 },
    show: { y: 0, opacity: 1, rotate: 0, transition: { duration: 1.2, ease: customEase } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const services = [
    {
      title: "Precision Styling",
      desc: "Bespoke haircuts tailored to your bone structure and lifestyle. Premium grooming for both men and women.",
      price: "From ₹800",
      time: "45 Min",
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Advanced Color & Keratin",
      desc: "Transformative colorwork and smoothing treatments using industry-leading, damage-free formulations.",
      price: "From ₹3,500",
      time: "120 - 180 Min",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Luxury Skincare",
      desc: "Deep-cleansing facials and rejuvenating skin therapies designed to restore your natural, healthy glow.",
      price: "From ₹1,200",
      time: "60 Min",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#111111] text-[#F9F8F6] font-sans selection:bg-[#A68A7C] selection:text-[#111111] overflow-x-hidden">
      
      {/* --- NAV --- */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: customEase, delay: 0.5 }}
        className="w-full px-6 md:px-12 py-8 flex justify-between items-center absolute top-0 z-50 text-[#F9F8F6]"
      >
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif tracking-tight font-semibold uppercase tracking-widest">Hair Glossy.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide opacity-80">
          <span className="hover:opacity-100 hover:text-[#A68A7C] transition-all cursor-pointer">The Studio</span>
          <span className="hover:opacity-100 hover:text-[#A68A7C] transition-all cursor-pointer">Services</span>
          <span className="hover:opacity-100 hover:text-[#A68A7C] transition-all cursor-pointer">Grooming</span>
        </div>

        <a href="#book" className="text-sm font-medium tracking-wide border-b border-[#F9F8F6] pb-1 hover:text-[#A68A7C] hover:border-[#A68A7C] transition-all duration-300">
          Book an appointment
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
              <span className="w-8 h-[1px] bg-[#A68A7C]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#A68A7C]">Mahipalpur Extension, South Delhi</span>
              <span className="w-8 h-[1px] bg-[#A68A7C]" />
            </motion.div>
          </div>

          <div className="overflow-hidden mb-2 pt-2">
            <motion.h1 variants={maskReveal} className="text-6xl md:text-[7.5rem] font-serif leading-[1.05] tracking-tight text-[#F9F8F6]">
              Hair Glossy
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 pt-2">
            <motion.h1 variants={maskReveal} className="text-4xl md:text-[5rem] font-serif leading-[1.05] tracking-tight">
              <span className="italic text-[#A68A7C] font-light">Luxury unisex salon.</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden pt-2">
            <motion.p variants={maskReveal} className="text-base md:text-lg text-[#F9F8F6]/70 max-w-lg mx-auto leading-relaxed">
              A premium studio dedicated to precision hair styling, advanced treatments, and immaculate skincare for everyone.
            </motion.p>
          </div>
        </motion.div>

        {/* Hero Image with Curtain Reveal */}
        <div className="w-full max-w-6xl mx-auto mt-16 h-[50vh] md:h-[75vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] relative shadow-2xl bg-[#2A2826]">
          <motion.div 
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: customEase, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-full bg-[#111111] z-10"
          />
          <motion.img 
            initial={{ scale: 1.2, filter: "blur(10px)" }}
            whileInView={{ scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: customEase }}
            style={{ y: yImage }}
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop" 
            alt="Hair Glossy luxury salon interior"
            className="absolute inset-0 w-full h-[120%] object-cover object-center opacity-80"
          />
        </div>
      </section>

      {/* --- THE PHILOSOPHY --- */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full md:w-1/2 z-10"
          >
            <div className="overflow-hidden mb-6 pt-2">
              <motion.span variants={maskReveal} className="text-[#A68A7C] font-medium tracking-widest text-xs uppercase block">Our Standard</motion.span>
            </div>
            <div className="overflow-hidden mb-8 pt-2">
              <motion.h2 variants={maskReveal} className="text-4xl md:text-5xl font-serif tracking-tight leading-snug">
                Uncompromising quality for <span className="italic">every</span> client.
              </motion.h2>
            </div>
            <motion.div variants={maskReveal} className="w-16 h-[1px] bg-[#F9F8F6]/20 mb-8" />
            <motion.p variants={maskReveal} className="text-base text-[#F9F8F6]/70 leading-relaxed mb-6">
              Hair Glossy was built on a simple premise: South Delhi deserves a true luxury unisex experience without the pretense. Whether you are coming in for a sharp fade, a complete color transformation, or a restorative facial, our attention to detail remains absolute.
            </motion.p>
            <motion.p variants={maskReveal} className="text-base text-[#F9F8F6]/70 leading-relaxed">
              Step into our Mahipalpur studio, disconnect from the city, and let our experts refine your aesthetic.
            </motion.p>
          </motion.div>
          
          <div className="w-full md:w-1/2 relative min-h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: customEase }}
              viewport={{ once: true }}
              className="absolute right-0 top-0 aspect-[4/5] w-4/5 max-w-sm overflow-hidden rounded-t-full rounded-b-2xl shadow-xl bg-[#2A2826]"
            >
              <motion.div 
                initial={{ width: "100%" }}
                whileInView={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: customEase, delay: 0.2 }}
                className="absolute top-0 right-0 h-full bg-[#1A1A1A] z-10"
              />
              <motion.img 
                style={{ y: yImageSlow }}
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop" 
                alt="Stylist at work"
                className="w-full h-[120%] object-cover -mt-10 grayscale opacity-80"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -60, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: customEase, delay: 0.5 }}
              className="absolute left-0 bottom-10 aspect-square w-1/2 max-w-[200px] overflow-hidden rounded-2xl border-4 border-[#1A1A1A] shadow-2xl bg-[#2A2826]"
            >
              <img 
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600&auto=format&fit=crop" 
                alt="Men grooming tools"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24 text-center"
          >
            <div className="overflow-hidden mb-4 pt-2"><motion.h2 variants={maskReveal} className="text-5xl md:text-6xl font-serif tracking-tight">The Services</motion.h2></div>
            <div className="overflow-hidden pt-2"><motion.p variants={maskReveal} className="text-[#F9F8F6]/60">Mastery in hair, skin, and grooming.</motion.p></div>
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
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-xl shadow-black/50 bg-[#2A2826] group relative">
                  <motion.div 
                    initial={{ height: "100%" }}
                    whileInView={{ height: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: customEase, delay: 0.2 }}
                    className="absolute bottom-0 left-0 w-full bg-[#111111] z-10"
                  />
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: customEase }}
                    src={service.img} 
                    alt={service.title}
                    className="w-full aspect-[4/3] md:aspect-[4/4] object-cover opacity-90"
                  />
                </div>
                
                <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <span className="text-[#A68A7C] font-medium tracking-widest text-xs uppercase mb-4 block">0{index + 1}</span>
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
                      <span className="flex items-center gap-2 text-sm"><Clock className="w-3.5 h-3.5 text-[#A68A7C]" /> {service.time}</span>
                    </div>
                  </div>

                  <a href="#book" className="group flex items-center gap-3 text-sm font-medium tracking-wide hover:text-[#A68A7C] transition-colors">
                    Reserve this service
                    <MoveRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500 ease-out" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WARM, INVITING FOOTER --- */}
      <footer id="book" className="w-full bg-[#0A0A0A] text-[#F9F8F6] pt-32 pb-12 px-6 md:px-12 rounded-t-[3rem] mt-2 relative overflow-hidden">
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
              <span className="italic text-[#A68A7C]">appointment?</span>
            </motion.h2>
          </div>
          
          <div className="overflow-hidden mb-12 pt-2">
            <motion.p variants={maskReveal} className="text-[#F9F8F6]/70 max-w-md mx-auto leading-relaxed">
              Secure your slot directly through our digital portal. Walk-ins welcome, appointments prioritized.
            </motion.p>
          </div>

          <motion.button 
            variants={maskReveal}
            whileHover={{ scale: 1.05, backgroundColor: "#D5C5B4", color: "#111111" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#A68A7C] text-[#111111] px-10 py-5 rounded-full font-medium tracking-wide transition-colors duration-300 mb-24 shadow-2xl"
          >
            Book your session online
          </motion.button>

          <motion.div 
            variants={maskReveal}
            className="w-full flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#F9F8F6]/10 gap-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-sm text-[#F9F8F6]/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#A68A7C]" /> 
                <span className="text-center md:text-left">
                  Block A, Ramkishan, Plot No. 62, Rd Number 2,<br/>
                  Mahipalpur Extension, Delhi, 110037
                </span>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-[#F9F8F6]/20" />
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A68A7C]" /> 
                <span>+91 084391 28134</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs tracking-widest uppercase text-[#F9F8F6]/40">
              <span>© {new Date().getFullYear()} Hair Glossy Salon</span>
              <span className="hidden md:block">|</span>
              <span className="hover:text-[#F9F8F6]/80 transition-colors flex items-center gap-2 cursor-pointer">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A68A7C] animate-pulse" />
                Engineered by Tapecut Studios
              </span>
            </div>
            
          </motion.div>
        </motion.div>
      </footer>

    </main>
  );
}