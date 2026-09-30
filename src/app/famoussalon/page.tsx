"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, ShieldCheck, Clock, Star, Scissors } from "lucide-react";

export default function FamousSalonMall() {
  const services = [
    { title: "Advanced Colorimetry", price: "₹4,000+", desc: "Bespoke color mapping, balayage, and vivid transformations using industry-leading formulations." },
    { title: "Structural Hair Design", price: "₹1,200+", desc: "Precision cutting tailored to your facial architecture and lifestyle demands." },
    { title: "Keratin & Botox Therapy", price: "₹5,000+", desc: "Intensive smoothing and structural repair for luminous, frizz-free longevity." },
    { title: "Luxury Skin Rituals", price: "₹2,500+", desc: "Clinical-grade facials and dermal therapies to rejuvenate and restore your natural glow." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111] font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* --- TOP BAR (Utility) --- */}
      <div className="w-full bg-[#111] text-white/80 py-2 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase font-medium z-50 relative">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-[#D4AF37]" /> Vasant Square Mall, Vasant Kunj</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-[#D4AF37]" /> Open Daily: 10 AM - 9 PM</span>
          <span className="flex items-center gap-2 hidden md:flex"><Phone className="w-3 h-3 text-[#D4AF37]" /> 09457572222</span>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight uppercase">Famous Salon</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-gray-500">
          <span className="hover:text-[#111] transition-colors cursor-pointer">The Studio</span>
          <span className="hover:text-[#111] transition-colors cursor-pointer">Services</span>
          <span className="hover:text-[#111] transition-colors cursor-pointer">Bridal</span>
        </div>

        <a href="#book" className="bg-[#111] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors duration-300">
          Book Now
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[75vh] bg-[#111] flex items-center px-6 md:px-12 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Salon Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 max-w-2xl text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">Premium Hair & Beauty</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
          >
            Redefining <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Luxury Grooming.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-10"
          >
            Vasant Kunj's premier destination for high-fashion styling, advanced aesthetics, and uncompromising quality.
          </motion.p>
          
          <motion.a 
            href="#book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-3 bg-white text-[#111] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
          >
            Explore Services <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* --- TRUST BANNER (Bypassing the 4.0 Rating) --- */}
      <div className="w-full bg-[#FAFAFA] border-b border-gray-100 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16">
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest">Certified Experts</h4>
            <p className="text-xs text-gray-500">Master stylists & technicians</p>
          </div>
        </div>
        <div className="hidden md:block w-px h-10 bg-gray-200" />
        <div className="flex items-center gap-4">
          <Star className="w-8 h-8 text-[#D4AF37]" />
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest">Premium Products</h4>
            <p className="text-xs text-gray-500">Global luxury brand partners</p>
          </div>
        </div>
        <div className="hidden md:block w-px h-10 bg-gray-200" />
        <div className="flex items-center gap-4">
          <Scissors className="w-8 h-8 text-[#D4AF37]" />
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest">Bespoke Styling</h4>
            <p className="text-xs text-gray-500">Tailored to your aesthetic</p>
          </div>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Experience a curated menu of advanced treatments executed with absolute precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 border border-gray-100 hover:border-[#D4AF37] bg-[#FAFAFA] transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-bold group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                <span className="text-sm font-bold tracking-widest text-gray-400">{s.price}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA / FOOTER --- */}
      <section id="book" className="w-full bg-[#111] text-white py-24 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Experience Famous Salon.</h2>
        <p className="text-white/60 max-w-md mb-10">Step into our Vasant Square Mall studio and elevate your personal aesthetic. Walk-ins are accommodated based on availability.</p>
        
        <button className="bg-[#D4AF37] text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#111] transition-colors duration-300 mb-16">
          Confirm Your Appointment
        </button>

        <div className="w-full max-w-4xl border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase text-white/40">
          <span>© {new Date().getFullYear()} Famous Salon Vasant Kunj</span>
          <span className="hover:text-white transition-colors cursor-pointer">Engineered by Tapecut Studios</span>
        </div>
      </section>

    </div>
  );
}