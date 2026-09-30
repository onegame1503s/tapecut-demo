"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Phone, Star, Sparkles } from "lucide-react";

export default function FamousSalonEthereal() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const services = [
    { 
      name: "Bespoke Balayage", 
      desc: "Hand-painted, multi-dimensional color for a seamless, sun-kissed aesthetic.", 
      price: "₹4,000+",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Precision Sculpting", 
      desc: "Tailored haircuts designed to flow perfectly with your natural bone structure.", 
      price: "₹1,200+",
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Luminous Skin Ritual", 
      desc: "Deeply hydrating dermal therapies that restore your natural, youthful glow.", 
      price: "₹2,500+",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FAF9F6] text-[#2C2A28] font-sans selection:bg-[#D4BBA5] selection:text-white overflow-x-hidden">
      
      {/* --- FLOATING GLASS NAVIGATION --- */}
      <div className="fixed top-6 w-full flex justify-center z-50 px-4">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white/70 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-4xl"
        >
          <span className="text-xl font-serif font-medium tracking-tight">Famous.</span>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest uppercase text-[#2C2A28]/60">
            <span className="hover:text-[#2C2A28] transition-colors cursor-pointer">Philosophy</span>
            <span className="hover:text-[#2C2A28] transition-colors cursor-pointer">Treatments</span>
            <span className="hover:text-[#2C2A28] transition-colors cursor-pointer">Gallery</span>
          </div>

          <a href="#book" className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase bg-[#2C2A28] text-white px-5 py-2.5 rounded-full hover:bg-[#D4BBA5] transition-colors">
            Book <ArrowRight className="w-3 h-3" />
          </a>
        </motion.nav>
      </div>

      {/* --- ETHEREAL HERO --- */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          style={{ y: yParallax, opacity: opacityFade }}
          className="absolute inset-0 w-full h-full -z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop" 
            alt="Soft Salon Interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/50 to-[#FAF9F6]" />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl z-10 pt-20">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#D4BBA5]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4BBA5]">Vasant Square Mall, Ground Floor</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-[7rem] font-serif tracking-tight leading-[0.9] mb-8 text-[#1A1A1A]">
            Elevated <br/><span className="italic font-light text-[#8A7B6E]">aesthetics.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg text-[#2C2A28]/70 max-w-lg mx-auto leading-relaxed mb-12">
            A sanctuary in Vasant Kunj dedicated to premium hair artistry and advanced skin therapies. Discover your signature look.
          </motion.p>
        </motion.div>
      </section>

      {/* --- TRUST & PHILOSOPHY --- */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)] relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop" alt="Stylist Detail" className="w-full h-full object-cover" />
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[240px]"
            >
              <div className="flex gap-1 text-[#D4BBA5] mb-2">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm font-medium leading-snug">"The most meticulous styling experience in South Delhi."</p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-serif tracking-tight mb-8"
            >
              The Famous Standard.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
              className="text-lg text-[#2C2A28]/70 leading-relaxed mb-6"
            >
              We believe luxury is found in the details. From the moment you step into our studio, you are met with uncompromising quality and personalized attention. 
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
              className="text-lg text-[#2C2A28]/70 leading-relaxed"
            >
              Our master stylists and colorists use only the world's most premium products to ensure your hair and skin remain flawlessly healthy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- GLASS CARD SERVICES --- */}
      <section className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">Curated Treatments</h2>
            <p className="text-[#2C2A28]/60">Expertly tailored for the modern aesthetic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl hover:shadow-[#D4BBA5]/10 transition-all duration-500"
              >
                <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-serif tracking-tight mb-2">{service.name}</h3>
                  <p className="text-sm text-[#2C2A28]/60 leading-relaxed mb-6 h-10">{service.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-bold tracking-widest text-sm">{service.price}</span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF9F6] flex items-center justify-center group-hover:bg-[#D4BBA5] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WARM GLOW FOOTER --- */}
      <footer id="book" className="w-full bg-[#1A1A1A] text-white pt-32 pb-12 px-6 md:px-12 rounded-t-[3rem] relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#D4BBA5]/20 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
          >
            Ready for your <br/><span className="italic text-[#D4BBA5]">transformation?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-white/60 mb-12 max-w-md"
          >
            Secure your appointment at our Vasant Kunj studio. We look forward to welcoming you.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="bg-[#D4BBA5] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#1A1A1A] transition-colors mb-32 shadow-xl shadow-[#D4BBA5]/20"
          >
            Request a Booking
          </motion.button>

          <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 gap-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[11px] font-bold uppercase tracking-widest text-white/50">
              <span className="flex items-center gap-2 justify-center"><MapPin className="w-3 h-3 text-[#D4BBA5]"/> Shop no. G-31, Vasant Square Mall</span>
              <span className="flex items-center gap-2 justify-center"><Phone className="w-3 h-3 text-[#D4BBA5]"/> 09457572222</span>
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white/80 transition-colors cursor-pointer">
              Engineered by Tapecut Studios
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}