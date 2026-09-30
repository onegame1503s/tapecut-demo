"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Star, Scissors, Clock, Sparkles, Check } from "lucide-react";

export default function FamousSalonBoutique() {
  const services = [
    { title: "Signature Haircut & Styling", price: "₹1,200", time: "45 Min", desc: "Precision cutting tailored to frame your face and match your everyday routine." },
    { title: "Bespoke Balayage & Color", price: "₹4,000+", time: "120 Min", desc: "Hand-painted, dimensional color blending for a seamless, luxurious finish." },
    { title: "Keratin & Frizz Control", price: "₹4,500+", time: "150 Min", desc: "Deep structural repair and smoothing therapy for mirror-shine hair." },
    { title: "Advanced Skin Rituals", price: "₹2,500+", time: "60 Min", desc: "Rejuvenating clinical facials designed to restore natural radiance and glow." }
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2A29] font-sans selection:bg-[#C5A880] selection:text-white">
      
      {/* --- CLASSIC CLEAN NAV --- */}
      <nav className="w-full px-6 md:px-16 py-6 flex justify-between items-center fixed top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EFECE6]">
        <div className="text-xl font-serif font-semibold tracking-wide">
          Famous <span className="text-[#C5A880] font-light italic">Salon</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-widest text-[#6B6560]">
          <span className="hover:text-[#2C2A29] transition-colors cursor-pointer">Experience</span>
          <span className="hover:text-[#2C2A29] transition-colors cursor-pointer">Services</span>
          <span className="hover:text-[#2C2A29] transition-colors cursor-pointer">Location</span>
        </div>

        <a href="#book" className="bg-[#2C2A29] text-white px-6 py-2.5 text-xs font-medium uppercase tracking-widest rounded-full hover:bg-[#C5A880] transition-colors">
          Book Appointment
        </a>
      </nav>

      {/* --- WARM & INVITING HERO --- */}
      <section className="relative w-full pt-40 pb-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4EFEA] text-xs font-medium uppercase tracking-widest rounded-full text-[#8C7A6B] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" /> Vasant Square Mall, Vasant Kunj
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.08] mb-6 text-[#1A1817]">
            Where beauty meets <br />
            <span className="italic font-light text-[#C5A880]">artistry.</span>
          </h1>
          
          <p className="text-base md:text-lg text-[#6B6560] leading-relaxed mb-8 max-w-lg">
            Vasant Kunj's premier destination for high-fashion hair styling, transformational color, and rejuvenating skincare treatments.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#services" className="w-full sm:w-auto bg-[#C5A880] text-white px-8 py-4 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-[#2C2A29] transition-colors shadow-lg text-center">
              Explore Services
            </a>
            <a href="#book" className="w-full sm:w-auto bg-transparent text-[#2C2A29] border border-[#DCD6CE] px-8 py-4 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-[#F4EFEA] transition-colors text-center">
              Call Salon
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-[#EFECE6] w-full">
            <div className="flex text-[#C5A880]">
              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-xs font-medium text-[#6B6560] uppercase tracking-wider">Trusted by 150+ regular clients in South Delhi</span>
          </div>
        </div>

        {/* Hero Visual Collage */}
        <div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
            alt="Famous Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2A29]">Ground Floor, Vasant Square Mall</span>
            <span className="text-xs font-bold text-[#C5A880]">Open Daily</span>
          </div>
        </div>
      </section>

      {/* --- SERVICES MENU --- */}
      <section id="services" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-3">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">Crafted for Your Style</h2>
          <p className="text-[#6B6560] text-sm md:text-base">Using only world-class global formulations to protect and elevate your hair health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-[#EFECE6] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-[#1A1817]">{s.title}</h3>
                  <span className="text-base font-semibold text-[#C5A880]">{s.price}</span>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-6">{s.desc}</p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-[#F4EFEA] text-xs font-medium text-[#8C7A6B]">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C5A880]" /> {s.time}</span>
                <a href="#book" className="hover:text-[#2C2A29] flex items-center gap-1 uppercase tracking-wider">Book Slot <ArrowRight className="w-3 h-3" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY US / AMENITIES --- */}
      <section className="py-24 bg-[#F4EFEA] px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-3">The Experience</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Why South Delhi Chooses Famous</h2>
            <p className="text-[#6B6560] text-sm leading-relaxed">We combine professional expertise with a relaxing ambiance right inside Vasant Square Mall.</p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#EFECE6]">
              <Scissors className="w-6 h-6 text-[#C5A880] mb-3" />
              <h4 className="text-base font-serif mb-1">Master Stylists</h4>
              <p className="text-xs text-[#6B6560]">Trained professionals with years of high-end salon experience.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#EFECE6]">
              <Sparkles className="w-6 h-6 text-[#C5A880] mb-3" />
              <h4 className="text-base font-serif mb-1">Premium Products</h4>
              <p className="text-xs text-[#6B6560]">Partnered with top international hair and skin care brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER & CONTACT --- */}
      <footer id="book" className="w-full bg-[#1A1817] text-[#FAF8F5] py-24 px-6 md:px-16 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880] block mb-3">Visit Our Studio</span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">Famous Salon</h2>
            
            <div className="flex flex-col gap-3 text-sm text-[#FAF8F5]/70">
              <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#C5A880]" /> Shop no. G-31, Ground Floor, Vasant Square Mall, Vasant Kunj, New Delhi 110070</span>
              <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#C5A880]" /> 09457572222</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="tel:09457572222" className="bg-[#C5A880] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors text-center shadow-lg">
              Call to Book: 09457572222
            </a>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FAF8F5]/30 text-center">
              Digital Presence Engineered by Tapecut Studios
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}