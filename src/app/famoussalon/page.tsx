"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin, Phone, Star, Sparkles, CheckCircle2 } from "lucide-react";

export default function FamousSalonEditorialHero() {
  const fadeUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
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
    <main className="min-h-screen bg-[#FAF9F6] text-[#2C2A28] font-sans selection:bg-[#D4BBA5] selection:text-white overflow-x-hidden">
      
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

      {/* --- PACKED EDITORIAL HERO (No Empty Space) --- */}
      <section className="relative w-full pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column: Bold Typography & Actions */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4BBA5]/10 border border-[#D4BBA5]/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#8A7B6E]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#8A7B6E]">Vasant Square Mall, Vasant Kunj</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1] mb-6 text-[#1A1A1A]">
            Elevated <br/><span className="italic font-light text-[#8A7B6E]">aesthetics.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-base md:text-lg text-[#2C2A28]/70 leading-relaxed mb-8 max-w-lg">
            South Delhi’s premier sanctuary for precision hair architecture, luminous skin therapies, and uncompromising personal style.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#services" className="w-full sm:w-auto bg-[#2C2A28] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#D4BBA5] transition-colors shadow-lg text-center">
              Explore Services
            </a>
            <a href="#book" className="w-full sm:w-auto bg-white text-[#2C2A28] border border-gray-200 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-50 transition-colors text-center">
              Book Appointment
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Stunning Stacked Image Collage (Filled & Rich) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
            alt="Famous Studio Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4BBA5]/20 flex items-center justify-center text-[#8A7B6E] font-serif font-bold">FS</div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Famous Studio</h4>
                <p className="text-[11px] text-gray-500">Ground Floor, Vasant Square Mall</p>
              </div>
            </div>
            <div className="flex text-[#D4BBA5]">
              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
            </div>
          </div>
        </motion.div>

      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-white py-10 px-6 border-y border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-[#1A1A1A] mb-1">157+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Verified Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-[#1A1A1A] mb-1">100%</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Luxury Formulations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-[#1A1A1A] mb-1">Ground</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Vasant Square Mall</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-[#1A1A1A] mb-1">Daily</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Open 10 AM - 9 PM</span>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section className="py-28 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop" alt="Styling Detail" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#D4BBA5]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A7B6E]">Our Philosophy</span>
            </div>
            
            <h2 className="text-4xl font-serif tracking-tight mb-6">
              Where technical mastery meets modern elegance.
            </h2>
            
            <p className="text-base text-[#2C2A28]/70 leading-relaxed mb-6">
              Located in Vasant Kunj, Famous Studio was built on a singular premise: that grooming is an art form. We reject cookie-cutter styles in favor of customized architecture tailored entirely to you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4BBA5] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">Senior Master Stylists</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4BBA5] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">Global Luxury Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="py-28 px-6 md:px-12 bg-white rounded-t-[3rem] shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A7B6E] mb-2 block">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Curated Treatments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#FAF9F6] rounded-3xl p-6 md:p-8 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
                    <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
                    <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold tracking-widest shadow-sm">
                      {service.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif">{service.name}</h3>
                    <span className="font-bold text-[#8A7B6E]">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                </div>
                <a href="#book" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] pt-4 border-t border-gray-200">
                  <span>Reserve Treatment</span> <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-28 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif tracking-tight">The Studio Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100">
                <span className="text-2xl font-serif text-[#D4BBA5] block mb-4">{step.num}</span>
                <h3 className="text-lg font-serif mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#FAF9F6] p-6 rounded-3xl border border-gray-100">
              <p className="text-sm font-serif italic text-gray-700 mb-4">"{t.quote}"</p>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A7B6E]">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="book" className="w-full bg-[#1A1A1A] text-white pt-28 pb-12 px-6 md:px-12 rounded-t-[3rem] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
            Ready for your <span className="italic text-[#D4BBA5]">transformation?</span>
          </h2>
          <p className="text-white/60 mb-10 text-sm max-w-md">
            Secure your appointment at Vasant Square Mall. We look forward to welcoming you.
          </p>
          <button className="bg-[#D4BBA5] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#1A1A1A] transition-colors mb-24 shadow-xl">
            Request a Booking
          </button>

          <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6 text-[11px] font-bold uppercase tracking-widest text-white/50">
            <span>Shop no. G-31, Vasant Square Mall, Vasant Kunj</span>
            <span>09457572222</span>
          </div>
        </div>
      </footer>
    </main>
  );
}