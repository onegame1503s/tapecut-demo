"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Phone, Clock, MoveRight } from "lucide-react";

export default function ParadiseSalonHumanized() {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Soft, organic parallax (Opacity fade removed so it doesn't vanish on scroll)
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImageSlow = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
  };

  const services = [
    {
      title: "Signature Cuts",
      desc: "We don't just cut hair; we sculpt it to frame your face naturally. Lived-in, effortless, and entirely yours.",
      price: "From ₹1,200",
      time: "45 - 60 Min",
      // FIXED IMAGE
      img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Bespoke Color",
      desc: "From sun-kissed balayage to deep, dimensional brunettes. We use organic pigments that respect your hair's integrity.",
      price: "From ₹4,500",
      time: "120 - 180 Min",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Bridal Styling",
      desc: "Your wedding morning should be peaceful. We bring calm, expertise, and a flawless aesthetic to your biggest day.",
      price: "Consultation",
      time: "By Appointment",
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F9F8F6] text-[#2A2826] font-sans selection:bg-[#D5C5B4] selection:text-[#2A2826] overflow-x-hidden">
      
      {/* --- ORGANIC, GROUNDED NAV --- */}
      <nav className="w-full px-6 md:px-12 py-8 flex justify-between items-center absolute top-0 z-50">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif tracking-tight text-[#2A2826]">Paradise.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide text-[#2A2826]/80">
          <span className="hover:text-[#A68A7C] transition-colors cursor-pointer">The Studio</span>
          <span className="hover:text-[#A68A7C] transition-colors cursor-pointer">Services</span>
          <span className="hover:text-[#A68A7C] transition-colors cursor-pointer">Bridal</span>
        </div>

        <a href="#book" className="text-sm font-medium tracking-wide text-[#2A2826] border-b border-[#2A2826] pb-1 hover:text-[#A68A7C] hover:border-[#A68A7C] transition-all duration-300">
          Book an appointment
        </a>
      </nav>

      {/* --- EDITORIAL MAGAZINE HERO --- */}
      <section className="relative w-full pt-40 pb-16 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-4xl mx-auto z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#A68A7C]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#A68A7C]">Vasant Kunj, South Delhi</span>
            <span className="w-8 h-[1px] bg-[#A68A7C]" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-[7.5rem] font-serif leading-[1.05] tracking-tight text-[#2A2826] mb-8">
            Effortless hair,<br />
            <span className="italic text-[#A68A7C] font-light">authentic to you.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-base md:text-lg text-[#2A2826]/70 max-w-lg mx-auto leading-relaxed">
            A quiet sanctuary dedicated to the art of lived-in, healthy, and beautiful hair. Step away from the rush and find your look.
          </motion.p>
        </motion.div>

        {/* Soft, framed hero image - Fade animation removed for stability */}
        <div className="w-full max-w-6xl mx-auto mt-16 h-[50vh] md:h-[75vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] relative shadow-2xl shadow-[#2A2826]/5 bg-[#2A2826]/5">
          <motion.img 
            style={{ y: yImage }}
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2000&auto=format&fit=crop" 
            alt="Woman with beautiful natural hair"
            className="absolute inset-0 w-full h-[120%] object-cover object-center"
          />
        </div>
      </section>

      {/* --- THE PHILOSOPHY --- */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#F2EFE9] relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          <div className="w-full md:w-1/2 z-10">
            <span className="text-[#A68A7C] font-medium tracking-widest text-xs uppercase mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-snug mb-8">
              We believe your hair should feel like <span className="italic">you</span>, only better.
            </h2>
            <div className="w-16 h-[1px] bg-[#2A2826]/20 mb-8" />
            <p className="text-base text-[#2A2826]/75 leading-relaxed mb-6">
              Trends come and go, but healthy, beautifully tailored hair is timeless. At Paradise, we step away from the chaotic rush of traditional salons. We take the time to understand your morning routine, your face shape, and your hair's natural texture.
            </p>
            <p className="text-base text-[#2A2826]/75 leading-relaxed">
              Our studio in Vasant Kunj is designed to be a retreat. Come in, enjoy a fresh cup of coffee, and let our master stylists take care of the rest.
            </p>
            
            <div className="mt-10 flex items-center gap-6">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Founder" className="w-12 h-12 rounded-full object-cover grayscale" />
              <div>
                <p className="text-sm font-bold text-[#2A2826]">Creative Director</p>
                <p className="text-xs text-[#2A2826]/60">Paradise Studio</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative min-h-[500px]">
            <div className="absolute right-0 top-0 aspect-[4/5] w-4/5 max-w-sm overflow-hidden rounded-t-full rounded-b-2xl shadow-xl bg-[#2A2826]/5">
              <motion.img 
                style={{ y: yImageSlow }}
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop" 
                alt="Stylist at work"
                className="w-full h-[120%] object-cover -mt-10"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-0 bottom-10 aspect-square w-1/2 max-w-[200px] overflow-hidden rounded-2xl border-4 border-[#F2EFE9] shadow-2xl bg-[#2A2826]/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop" 
                alt="Salon details"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="w-full py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Our Craft</h2>
            <p className="mt-4 text-[#2A2826]/60">Tailored services for the modern aesthetic.</p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] } as any}
                className={`flex flex-col gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-xl shadow-[#2A2826]/5 bg-[#2A2826]/5">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full aspect-[4/3] md:aspect-[4/4] object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                </div>
                
                <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <span className="text-[#A68A7C] font-medium tracking-widest text-xs uppercase mb-4 block">0{index + 1}</span>
                  <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">{service.title}</h3>
                  <p className="text-base text-[#2A2826]/75 leading-relaxed max-w-sm mb-8">
                    {service.desc}
                  </p>
                  
                  <div className={`flex items-center gap-6 mb-8 py-4 border-y border-[#2A2826]/10 w-full max-w-sm ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-[#2A2826]/50 mb-1">Starting at</span>
                      <span className="font-serif text-lg">{service.price}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-[#2A2826]/10" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-[#2A2826]/50 mb-1">Est. Time</span>
                      <span className="flex items-center gap-2 text-sm"><Clock className="w-3.5 h-3.5 text-[#A68A7C]" /> {service.time}</span>
                    </div>
                  </div>

                  <a href="#book" className="group flex items-center gap-3 text-sm font-medium tracking-wide hover:text-[#A68A7C] transition-colors">
                    Reserve this service
                    <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* --- THE STUDIO (FIXED MASONRY IMAGES) --- */}
      <section className="w-full py-24 bg-[#F2EFE9] px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">The Space</h2>
              <p className="text-[#2A2826]/70 max-w-md">Designed to inspire relaxation. Light, airy, and meticulously maintained for your comfort.</p>
            </div>
            <a href="#book" className="text-sm font-medium border-b border-[#2A2826] pb-1 hover:text-[#A68A7C] hover:border-[#A68A7C] transition-all">
              Visit us in Vasant Kunj
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
            <div className="w-full h-full rounded-2xl md:mt-12 overflow-hidden shadow-lg bg-[#2A2826]/5">
              <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop" alt="Interior" className="w-full h-full object-cover" />
            </div>
            {/* GUARANTEED WORKING URL REPLACEMENT */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-[#2A2826]/5">
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" alt="Salon Station" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full rounded-2xl md:-mt-12 overflow-hidden shadow-lg bg-[#2A2826]/5">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop" alt="Details" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- WARM, INVITING FOOTER --- */}
      <footer id="book" className="w-full bg-[#2A2826] text-[#F9F8F6] pt-32 pb-12 px-6 md:px-12 rounded-t-[3rem] mt-2">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight leading-tight mb-8">
            Ready for a <br/>
            <span className="italic text-[#A68A7C]">change?</span>
          </h2>
          
          <p className="text-[#F9F8F6]/70 max-w-md mx-auto mb-12 leading-relaxed">
            Skip the waiting room. Secure your appointment directly through our digital portal and let us take care of you.
          </p>

          <button className="bg-[#F9F8F6] text-[#2A2826] px-10 py-5 rounded-full font-medium tracking-wide hover:bg-[#D5C5B4] hover:scale-105 transition-all duration-300 mb-24 shadow-2xl">
            Book your session online
          </button>

          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#F9F8F6]/10 gap-10">
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-sm text-[#F9F8F6]/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#A68A7C]" /> 
                <span className="text-center md:text-left">
                  Gate no 2, opp. Sector B Road,<br/>
                  Pocket 8, Vasant Kunj, Delhi 110070
                </span>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-[#F9F8F6]/20" />
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A68A7C]" /> 
                <span>+91 09711183497</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs tracking-widest uppercase text-[#F9F8F6]/40">
              <span>© {new Date().getFullYear()} Paradise Salon</span>
              <span className="hidden md:block">|</span>
              <span className="hover:text-[#F9F8F6]/80 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A68A7C] animate-pulse" />
                Engineered by Tapecut Studios
              </span>
            </div>
            
          </div>
        </div>
      </footer>

    </main>
  );
}
// deploy trigger