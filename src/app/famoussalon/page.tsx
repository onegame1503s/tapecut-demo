"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Phone, Star, Sparkles, CheckCircle2 } from "lucide-react";

export default function FamousSalonFullyLoaded() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const fadeUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const services = [
    { 
      name: "Bespoke Balayage & Color", 
      desc: "Hand-painted, multi-dimensional color mapping for a seamless, sun-kissed aesthetic.", 
      price: "₹4,000+",
      time: "120 Min",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Architectural Sculpting", 
      desc: "Precision haircuts engineered to complement your natural bone structure and lifestyle.", 
      price: "₹1,200+",
      time: "45 Min",
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Luminous Skin Rituals", 
      desc: "Clinical-grade dermal therapies designed to deeply hydrate, refresh, and restore radiance.", 
      price: "₹2,500+",
      time: "60 Min",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Keratin & Molecular Repair", 
      desc: "Advanced smoothing and restorative treatments to rescue compromised, frizzy hair.", 
      price: "₹4,500+",
      time: "150 Min",
      img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const steps = [
    { num: "01", title: "Consultation", desc: "We analyze your hair texture, scalp health, and aesthetic goals." },
    { num: "02", title: "Custom Formulation", desc: "Color or treatment blends are hand-mixed specifically for your hair profile." },
    { num: "03", title: "The Transformation", desc: "Executed with meticulous precision by our senior master stylists." },
    { num: "04", title: "Finishing & Care", desc: "Styled to perfection with professional take-home maintenance advice." }
  ];

  const testimonials = [
    { quote: "Absolute perfection. The attention to detail at Vasant Square Mall is unmatched.", author: "Natasha K." },
    { quote: "Transformed my hair completely. The color blending is world-class.", author: "Rohan M." },
    { quote: "Clean, peaceful, and professional. My go-to studio in South Delhi.", author: "Priya S." }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FAF9F6] text-[#2C2A28] font-sans selection:bg-[#D4BBA5] selection:text-white overflow-x-hidden">
      
      {/* --- FLOATING GLASS NAVIGATION --- */}
      <div className="fixed top-6 w-full flex justify-center z-50 px-4">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xl shadow-black/5 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-5xl"
        >
          <span className="text-xl font-serif font-medium tracking-tight">Famous Studio.</span>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest uppercase text-[#2C2A28]/70">
            <span className="hover:text-[#2C2A28] transition-colors cursor-pointer">Philosophy</span>
            <span className="hover:text-[#2C2A28] transition-colors cursor-pointer">Treatments</span>
            <span className="hover:text-[#2C2A28] transition-colors cursor-pointer">Process</span>
            <span className="hover:text-[#2C2A28] transition-colors cursor-pointer">Reviews</span>
          </div>

          <a href="#book" className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase bg-[#2C2A28] text-white px-6 py-2.5 rounded-full hover:bg-[#D4BBA5] transition-colors shadow-md">
            Reserve <ArrowRight className="w-3 h-3" />
          </a>
        </motion.nav>
      </div>

      {/* --- RICH HERO SECTION (Fixed Empty Background) --- */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 bg-[#111] overflow-hidden">
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 w-full h-full -z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          {/* Deep dark gradient overlay so text is crisp and the background is fully packed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/40 to-black/70" />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl z-10 pt-16 text-white">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4BBA5]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#D4BBA5]">Vasant Square Mall, Vasant Kunj</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-[8rem] font-serif tracking-tight leading-[0.9] mb-8 text-white">
            Elevated <br/><span className="italic font-light text-[#D4BBA5]">aesthetics.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
            South Delhi’s sanctuary for precision hair architecture, luminous skin therapies, and uncompromising personal style.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="w-full sm:w-auto bg-[#D4BBA5] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#111] transition-colors shadow-lg">
              Explore Services
            </a>
            <a href="#book" className="w-full sm:w-auto bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
              Book Appointment
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS / QUICK HIGHLIGHTS BAR --- */}
      <section className="bg-white py-12 px-6 border-b border-gray-100 relative z-20 shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-1">157+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Verified Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-1">100%</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Luxury Formulations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-1">Ground</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Vasant Square Mall</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-1">Daily</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Open 10 AM - 9 PM</span>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY & STORY SECTION --- */}
      <section className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[550px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop" alt="Styling Detail" className="w-full h-full object-cover" />
            
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[260px]">
              <div className="flex gap-1 text-[#D4BBA5] mb-2">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-gray-800 mb-1">Verified Excellence</p>
              <p className="text-xs text-gray-500 leading-snug">"Dedicated to precision work and client satisfaction."</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#D4BBA5]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A7B6E]">Our Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">
              Where technical mastery meets modern elegance.
            </h2>
            
            <p className="text-base text-[#2C2A28]/70 leading-relaxed mb-6">
              Located in the heart of Vasant Kunj, Famous Studio was built on a singular premise: that grooming is an art form. We reject rushed appointments and cookie-cutter styles in favor of customized architecture tailored entirely to you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4BBA5] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">Senior Master Stylists</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4BBA5] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">Global Luxury Products</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4BBA5] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">Relaxed Mall Environment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4BBA5] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">Bespoke Color Mapping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FULL SERVICES GRID --- */}
      <section id="services" className="py-32 px-6 md:px-12 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A7B6E]">Our Menu</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-4">Curated Treatments</h2>
            <p className="text-[#2C2A28]/60 max-w-md mx-auto">Expertly formulated services designed to elevate your personal presentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-[#FAF9F6] rounded-3xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:shadow-[#D4BBA5]/10 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 relative">
                    <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-sm">
                      {service.time}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif tracking-tight">{service.name}</h3>
                    <span className="font-bold text-lg tracking-tight text-[#8A7B6E]">{service.price}</span>
                  </div>
                  
                  <p className="text-sm text-[#2C2A28]/60 leading-relaxed mb-6">{service.desc}</p>
                </div>

                <a href="#book" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] group-hover:text-[#D4BBA5] transition-colors pt-4 border-t border-gray-200">
                  <span>Reserve Treatment</span> <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE CLIENT EXPERIENCE PROCESS --- */}
      <section className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">The Studio Journey</h2>
            <p className="text-[#2C2A28]/60">What to expect when you step into our Vasant Kunj location.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif font-light text-[#D4BBA5] block mb-6">{step.num}</span>
                  <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS TICKER --- */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Client Perspectives</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#FAF9F6] p-8 rounded-3xl flex flex-col justify-between border border-gray-100">
              <p className="text-base font-serif italic text-gray-700 mb-6 leading-relaxed">"{t.quote}"</p>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A7B6E]">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- WARM GLOW FOOTER --- */}
      <footer id="book" className="w-full bg-[#1A1A1A] text-white pt-32 pb-12 px-6 md:px-12 rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[#D4BBA5]/15 blur-[140px] rounded-full" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
          >
            Ready for your <br/><span className="italic text-[#D4BBA5]">transformation?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-white/60 mb-12 max-w-md text-sm md:text-base leading-relaxed"
          >
            Secure your appointment at Vasant Square Mall. We look forward to welcoming you to Famous Studio.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="bg-[#D4BBA5] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#1A1A1A] transition-colors mb-32 shadow-xl shadow-[#D4BBA5]/20"
          >
            Request a Booking
          </motion.button>

          <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 gap-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[11px] font-bold uppercase tracking-widest text-white/50">
              <span className="flex items-center gap-2 justify-center"><MapPin className="w-3.5 h-3.5 text-[#D4BBA5]"/> Shop no. G-31, Vasant Square Mall, Vasant Kunj</span>
              <span className="flex items-center gap-2 justify-center"><Phone className="w-3.5 h-3.5 text-[#D4BBA5]"/> 09457572222</span>
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">
              Engineered by Tapecut Studios
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}