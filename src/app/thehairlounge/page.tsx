"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Calendar, Star, Clock } from "lucide-react";

export default function TheHairLoungeSolid() {
  const services = [
    { title: "The Signature Cut", price: "₹1,000+", desc: "Precision scissor work tailored to your bone structure and daily routine." },
    { title: "Balayage Blend", price: "₹4,500+", desc: "Hand-painted, dimensional color for a seamless, lived-in aesthetic." },
    { title: "Keratin Smooth", price: "₹3,000+", desc: "Advanced frizz-eliminating structural repair lasting up to 12 weeks." },
    { title: "Deep Scalp Detox", price: "₹1,500+", desc: "A clarifying exfoliation treatment to stimulate healthy follicular growth." }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] font-sans selection:bg-[#c9a98a] selection:text-white flex flex-col md:grid md:grid-cols-12">

      {/* --- LEFT: STICKY BRAND COLUMN (Reliable Grid Layout) --- */}
      <div className="w-full md:col-span-5 lg:col-span-4 bg-[#0a0a0a] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between md:sticky md:top-0 md:h-screen z-20 shadow-2xl">
        <div>
          <motion.div 
            initial={{ opacity: 0, width: 0 }} 
            animate={{ opacity: 1, width: 48 }} 
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#c9a98a] mb-10"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-serif tracking-tight leading-[1]"
          >
            The <br/>
            <span className="italic text-[#c9a98a]">Hair</span> <br/>
            Lounge.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="mt-8 text-white/70 max-w-sm text-sm leading-relaxed"
          >
            South Extension's premier destination for architectural cuts, transformative color, and uncompromising aesthetics.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }} 
          className="mt-16 md:mt-0 flex flex-col gap-8"
        >
          <a href="#book" className="group flex items-center justify-between w-full bg-[#c9a98a] text-black px-6 py-5 hover:bg-white transition-colors duration-300 uppercase text-xs font-bold tracking-widest rounded-sm">
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>

          <div className="flex flex-col gap-4 text-xs text-white/60 uppercase tracking-widest font-medium border-t border-white/10 pt-8">
            <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#c9a98a]"/> South Ext I, New Delhi</span>
            <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#c9a98a]"/> 09217845455</span>
          </div>
        </motion.div>
      </div>

      {/* --- RIGHT: SCROLLING CONTENT COLUMN --- */}
      <div className="w-full md:col-span-7 lg:col-span-8 bg-[#FAFAFA]">

        {/* Guaranteed Working Image URL */}
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden bg-[#111]">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover" 
            alt="Premium Salon Interior" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] to-transparent opacity-90" />
        </div>

        <div className="px-6 md:px-12 lg:px-20 -mt-20 relative z-10 pb-20">
          
          {/* Trust Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-xl shadow-black/5 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex text-[#c9a98a]">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">Premium Rated</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
              <Clock className="w-5 h-5 text-[#c9a98a]" />
              <span>Open Daily: 10 AM - 8 PM</span>
            </div>
          </motion.div>

          {/* Service Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8 tracking-tight">Curated Services.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: i * 0.1 }} 
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <h3 className="text-xl font-serif mb-3 group-hover:text-[#c9a98a] transition-colors">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-bold tracking-tight">{s.price}</span>
                    <a href="#book" className="text-[#c9a98a] bg-[#c9a98a]/10 p-2 rounded-full group-hover:bg-[#c9a98a] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary Guaranteed Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="w-full h-[40vh] rounded-2xl overflow-hidden shadow-lg mb-16"
          >
            <img 
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
              alt="Styling Detail" 
            />
          </motion.div>

          {/* Booking CTA */}
          <motion.div 
            id="book"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="w-full bg-[#111] text-white p-10 md:p-16 rounded-2xl text-center flex flex-col items-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#c9a98a]" />
            <h2 className="text-4xl font-serif mb-6 z-10">Step into the Lounge.</h2>
            <p className="text-white/70 text-sm max-w-md mb-10 z-10 leading-relaxed">
              Experience South Extension's highest standard of grooming and aesthetics. Secure your appointment today.
            </p>
            <button className="bg-[#c9a98a] text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 z-10">
              Confirm Availability
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}