"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Sparkles } from "lucide-react";

export default function FamousSalonObsidian() {
  const treatments = [
    { title: "Bespoke Color Alchemy", price: "₹4,000+", time: "120 MIN", tag: "COLOR" },
    { title: "Architectural Cut & Style", price: "₹1,200+", time: "45 MIN", tag: "HAIR" },
    { title: "Molecular Repair Therapy", price: "₹4,500+", time: "150 MIN", tag: "TREATMENT" },
    { title: "Dermal Radiance Ritual", price: "₹2,500+", time: "60 MIN", tag: "SKIN" }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* --- FLOATING MINIMAL NAV --- */}
      <nav className="w-full px-6 md:px-16 py-8 flex justify-between items-center fixed top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
        <div className="text-lg md:text-xl font-mono tracking-tighter uppercase font-bold text-white">
          FAMOUS // Vasant Kunj
        </div>
        <div className="hidden md:flex gap-12 text-xs font-mono uppercase tracking-widest text-white/60">
          <span className="hover:text-white transition-colors cursor-pointer">Index</span>
          <span className="hover:text-white transition-colors cursor-pointer">Services</span>
          <span className="hover:text-white transition-colors cursor-pointer">Location</span>
        </div>
        <a href="#book" className="text-xs font-mono uppercase tracking-widest bg-white text-black px-6 py-3 rounded-none hover:bg-[#D4AF37] transition-colors">
          Secure Slot
        </a>
      </nav>

      {/* --- HERO SECTION: MASSIVE IMPACT --- */}
      <section className="relative w-full pt-48 pb-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col justify-between min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-xs font-mono tracking-widest uppercase mb-6 text-[#D4AF37]"
            >
              <Sparkles className="w-3.5 h-3.5" /> G-31, Vasant Square Mall
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.88]"
            >
              Famous <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/20">Studio.</span>
            </motion.h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm text-white/60 leading-relaxed font-mono"
            >
              Redefining physical presentation in South Delhi. Uncompromising precision cuts, chemical alchemy, and dermal treatments.
            </motion.p>
            
            <div className="mt-8 lg:mt-0">
              <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-1">Status</span>
              <span className="text-sm font-bold tracking-wider text-green-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Accepting Appointments Today
              </span>
            </div>
          </div>
        </div>

        {/* Hero Full-Width Visual Anchor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-[50vh] md:h-[60vh] mt-16 relative overflow-hidden border border-white/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop" 
            alt="Studio Interior" 
            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/20 text-xs font-mono uppercase tracking-widest">
            Fig 01. // Main Floor Gallery
          </div>
        </motion.div>
      </section>

      {/* --- BRUTALIST INDEX GRID (SERVICES) --- */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Service Index</h2>
          <span className="text-xs font-mono uppercase tracking-widest text-white/40">[ 04 Core Disciplines ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {treatments.map((t, i) => (
            <div key={i} className="bg-[#0A0A0A] p-10 md:p-12 flex flex-col justify-between group hover:bg-white hover:text-black transition-colors duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-mono tracking-widest px-3 py-1 border border-white/20 group-hover:border-black/20">
                  {t.tag}
                </span>
                <span className="text-xs font-mono tracking-widest opacity-60">{t.time}</span>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">{t.title}</h3>
                <div className="flex justify-between items-center pt-6 border-t border-white/10 group-hover:border-black/10">
                  <span className="text-lg font-mono font-bold">{t.price}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATEMENT MANIFESTO --- */}
      <section className="py-32 px-6 md:px-16 bg-[#111] border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block mb-4">The Manifesto</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase leading-tight mb-8">
            We don't follow trends. We architect personal identities.
          </h2>
          <p className="text-white/60 font-mono text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Situated inside Vasant Square Mall, our space is stripped of unnecessary noise. Pure focus, high-end global formulations, and master execution.
          </p>
        </div>
      </section>

      {/* --- FOOTER / BOOKING --- */}
      <footer id="book" className="w-full bg-[#0A0A0A] text-white py-32 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block mb-4">Inquiries & Bookings</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
              Let's Connect.
            </h2>
            <div className="flex flex-col gap-2 font-mono text-sm text-white/70">
              <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Shop no. G-31, Ground Floor, Vasant Square Mall, Vasant Kunj</span>
              <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#D4AF37]" /> 09457572222</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto">
            <button className="bg-white text-black px-10 py-5 text-xs font-mono uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors font-bold">
              Initialize Booking Request
            </button>
            <span className="text-xs font-mono uppercase tracking-widest text-white/30 text-center md:text-right">
              Engineered by Tapecut Studios
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}