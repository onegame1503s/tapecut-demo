"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin, Phone, Star, Scissors, Clock, Sparkles, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export default function FamousSalonMasterpiece() {
  const fadeUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const services = [
    { 
      title: "Signature Haircut & Styling", 
      price: "₹1,200+", 
      time: "45 Min", 
      desc: "Precision cutting tailored to frame your unique facial structure and fit your lifestyle.",
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "Bespoke Balayage & Color", 
      price: "₹4,000+", 
      time: "120 Min", 
      desc: "Hand-painted dimensional color blending for a seamless, sun-kissed finish.",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "Keratin & Molecular Repair", 
      price: "₹4,500+", 
      time: "150 Min", 
      desc: "Deep structural smoothing therapy designed to rescue and revitalize frizzy, dry hair.",
      img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "Advanced Skin Rituals", 
      price: "₹2,500+", 
      time: "60 Min", 
      desc: "Rejuvenating clinical facials to restore natural radiance, hydration, and glow.",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const steps = [
    { num: "01", title: "Consultation", desc: "We evaluate your hair texture, skin type, and individual aesthetic goals." },
    { num: "02", title: "Custom Formulation", desc: "Colors and treatments are expertly mixed using premium global products." },
    { num: "03", title: "The Transformation", desc: "Executed with absolute precision by our senior master stylists." },
    { num: "04", title: "Finishing & Care", desc: "Styled to perfection with professional take-home maintenance guidance." }
  ];

  const reviews = [
    { quote: "Absolute perfection. The attention to detail at Vasant Square Mall is unmatched in South Delhi.", author: "Natasha K." },
    { quote: "Transformed my hair completely. The color blending is world-class and long-lasting.", author: "Rohan M." },
    { quote: "Clean, peaceful, and deeply professional. My permanent go-to studio.", author: "Priya S." }
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2A29] font-sans selection:bg-[#C5A880] selection:text-white overflow-x-hidden">
      
      {/* --- FLOATING BOUTIQUE NAV --- */}
      <div className="fixed top-6 w-full flex justify-center z-50 px-4">
        <motion.nav 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md border border-[#EFECE6] shadow-lg shadow-black/5 rounded-full px-8 py-3.5 flex items-center justify-between w-full max-w-5xl"
        >
          <span className="text-xl font-serif font-semibold tracking-wide text-[#1A1817]">
            Famous <span className="text-[#C5A880] font-light italic">Salon</span>
          </span>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest uppercase text-[#6B6560]">
            <span className="hover:text-[#2C2A29] transition-colors cursor-pointer">Story</span>
            <span className="hover:text-[#2C2A29] transition-colors cursor-pointer">Services</span>
            <span className="hover:text-[#2C2A29] transition-colors cursor-pointer">Journey</span>
            <span className="hover:text-[#2C2A29] transition-colors cursor-pointer">Reviews</span>
          </div>

          <a href="#book" className="bg-[#2C2A29] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#C5A880] transition-colors shadow-sm">
            Book Appointment
          </a>
        </motion.nav>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-44 pb-28 px-6 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F4EFEA] text-[11px] font-bold uppercase tracking-widest rounded-full text-[#8C7A6B] mb-6 border border-[#EFECE6]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" /> Vasant Square Mall, Vasant Kunj
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.06] mb-6 text-[#1A1817]">
            Where beauty meets <br />
            <span className="italic font-light text-[#C5A880]">artistry.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-base md:text-lg text-[#6B6560] leading-relaxed mb-8 max-w-lg">
            Vasant Kunj's premier destination for high-fashion hair styling, transformational color, and rejuvenating skin treatments.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#services" className="w-full sm:w-auto bg-[#C5A880] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#2C2A29] transition-colors shadow-lg text-center">
              Explore Services
            </a>
            <a href="tel:09457572222" className="w-full sm:w-auto bg-transparent text-[#2C2A29] border border-[#DCD6CE] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#F4EFEA] transition-colors text-center">
              Call: 09457572222
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-6 mt-12 pt-8 border-t border-[#EFECE6] w-full">
            <div className="flex text-[#C5A880]">
              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-xs font-semibold text-[#6B6560] uppercase tracking-wider">Trusted by 150+ regular clients in South Delhi</span>
          </motion.div>
        </motion.div>

        {/* Hero Visual Collage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 relative h-[480px] md:h-[580px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
            alt="Famous Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Famous Salon Studio</h4>
              <p className="text-[11px] text-gray-500">Ground Floor, Vasant Square Mall</p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-[#C5A880]/10 text-[#C5A880] rounded-full">Open Daily</span>
          </div>
        </motion.div>
      </section>

      {/* --- STATS TICKER --- */}
      <section className="bg-white py-12 px-6 border-y border-[#EFECE6] shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-3xl font-serif font-bold text-[#1A1817] block mb-1">157+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A6B]">Verified Reviews</span>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-[#1A1A1A] block mb-1">100%</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A6B]">Global Formulations</span>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-[#1A1A1A] block mb-1">Ground</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A6B]">Vasant Square Mall</span>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-[#1A1A1A] block mb-1">10 AM</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A6B]">Daily Opening Time</span>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL BRAND STORY --- */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop" alt="Salon Detail" className="w-full h-full object-cover" />
          </motion.div>

          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-3">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-[#1A1817]">
              Elegance engineered for everyday life.
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-6">
              Located in the thriving heart of Vasant Kunj, Famous Salon was founded on the belief that premium personal grooming should feel like a sanctuary. We combine rigorous technical expertise with a deeply relaxing atmosphere.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880]" />
                <span className="text-sm font-semibold text-[#2C2A29]">Senior Master Stylists</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880]" />
                <span className="text-sm font-semibold text-[#2C2A29]">Bespoke Hair Mapping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES MENU --- */}
      <section id="services" className="py-32 bg-white px-6 md:px-16 rounded-t-[3rem] shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-3">The Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#1A1A1A]">Crafted for Your Style</h2>
            <p className="text-[#6B6560] text-sm md:text-base">Using world-class global formulations to protect, nourish, and elevate your hair health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFECE6] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-60 rounded-2xl overflow-hidden mb-6 relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest shadow-sm">
                      {s.time}
                    </span>
                  </div>

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif text-[#1A1817]">{s.title}</h3>
                    <span className="text-lg font-bold text-[#C5A880]">{s.price}</span>
                  </div>
                  <p className="text-sm text-[#6B6560] leading-relaxed mb-6">{s.desc}</p>
                </div>
                
                <a href="#book" className="flex items-center justify-between pt-4 border-t border-[#EFECE6] text-xs font-bold text-[#1A1A1A] hover:text-[#C5A880] uppercase tracking-wider transition-colors">
                  <span>Reserve Appointment</span> <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STUDIO JOURNEY (STEPS) --- */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">The Studio Journey</h2>
          <p className="text-[#6B6560] text-sm">What to expect from the moment you walk through our mall entrance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((st, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-[#EFECE6] shadow-sm">
              <span className="text-3xl font-serif text-[#C5A880] block mb-4">{st.num}</span>
              <h3 className="text-xl font-serif mb-2 text-[#1A1A1A]">{st.title}</h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CLIENT REVIEWS GRID --- */}
      <section className="py-24 bg-[#F4EFEA] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Client Perspectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#EFECE6] flex flex-col justify-between shadow-sm">
                <p className="text-sm font-serif italic text-gray-700 mb-6 leading-relaxed">"{r.quote}"</p>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">— {r.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="book" className="w-full bg-[#1A1817] text-[#FAF8F5] py-28 px-6 md:px-16 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-3">Visit Our Studio</span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">Famous Salon</h2>
            
            <div className="flex flex-col gap-3 text-sm text-[#FAF8F5]/75">
              <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#C5A880]" /> Shop no. G-31, Ground Floor, Vasant Square Mall, Vasant Kunj, New Delhi 110070</span>
              <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#C5A880]" /> 09457572222</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="tel:09457572222" className="bg-[#C5A880] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors text-center shadow-xl">
              Call to Book: 09457572222
            </a>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F5]/30 text-center">
              Digital Presence Engineered by Tapecut Studios
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}