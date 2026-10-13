"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Package, Truck, CheckCircle2, MapPin, Clock, Phone, Navigation, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function OrderTrackingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(65), 500); // Fills to the 3rd step
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { title: "Order Verified & Packed", time: "10:30 AM", status: "completed", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Dispatched from TechVault Hub", time: "01:15 PM", status: "completed", icon: <Package className="w-5 h-5" /> },
    { title: "Out for Delivery", time: "Estimated 4:00 PM", status: "current", icon: <Truck className="w-5 h-5" /> },
    { title: "Delivered to Indiranagar", time: "Pending", status: "pending", icon: <MapPin className="w-5 h-5" /> }
  ];

  return (
    <main className="min-h-screen bg-[#070709] text-[#F3F4F6] font-sans selection:bg-blue-600 selection:text-white px-4 md:px-12 py-10 overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-12 pb-6 border-b border-white/10">
        <Link href="/TechVaultStore" className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Storefront
        </Link>
        <span className="font-serif text-xl tracking-tight text-white">Live Shipment Monitor</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- LEFT COLUMN: LIST TRACKING --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#121318] border border-white/10 p-8 md:p-12 rounded-3xl relative shadow-2xl shadow-black flex flex-col h-[650px]"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-white/10 mb-10">
            <div>
              <span className="font-mono text-xs uppercase text-blue-400 tracking-widest block mb-2">AWB Number</span>
              <h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight">#TV-BLR-449201</h2>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono px-5 py-2.5 rounded-full flex items-center gap-3 shadow-lg shadow-blue-900/20">
              <Truck className="w-5 h-5 animate-pulse" /> In Transit
            </div>
          </div>

          <div className="relative pl-4 md:pl-8 py-4 flex-grow">
            {/* Background Line */}
            <div className="absolute left-[31px] md:left-[47px] top-4 bottom-4 w-1 bg-white/5 rounded-full" />
            
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-[31px] md:left-[47px] top-4 w-1 bg-blue-500 rounded-full origin-top"
              initial={{ height: "0%" }}
              animate={{ height: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <div className="space-y-12 relative z-10">
              {steps.map((step, i) => {
                const isCompleted = step.status === "completed";
                const isCurrent = step.status === "current";
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
                    className="flex items-start gap-6 md:gap-8"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-[#121318] shadow-xl transition-colors duration-500 ${
                      isCompleted ? "bg-blue-600 text-white" : 
                      isCurrent ? "bg-blue-500 text-white ring-4 ring-blue-500/20 animate-pulse" : 
                      "bg-[#1A1C23] text-gray-600"
                    }`}>
                      {step.icon}
                    </div>
                    
                    <div className="pt-2">
                      <h4 className={`font-serif text-lg md:text-xl mb-1 ${isCompleted || isCurrent ? "text-white" : "text-gray-500"}`}>
                        {step.title}
                      </h4>
                      <p className="font-mono text-xs flex items-center gap-2 text-gray-400">
                        <Clock className="w-3.5 h-3.5" /> {step.time}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-3 text-xs font-mono text-emerald-400 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10">
            <ShieldCheck className="w-4 h-4" /> OTP Required for Delivery Verification
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: REAL MAP (LOCKED CANVAS ARCHITECTURE) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[650px] bg-[#0A0B0E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center"
        >
          
          {/* 
            LOCKED CANVAS TRICK 
            This div is forced to exactly 1200x1200px. It centers perfectly inside the responsive 
            parent wrapper. Because it never resizes, the SVG paths and the map roads stay glued 
            together flawlessly on every device screen.
          */}
          <div className="absolute w-[1200px] h-[1200px] flex items-center justify-center pointer-events-none">
            
            {/* Real Google Map iframe of Bengaluru - Dark Mode Inverted */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.041048611867!2d77.638361!3d12.969223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a4197ec191%3A0x28634812f8664273!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 [filter:invert(100%)_hue-rotate(180deg)_brightness(70%)_contrast(130%)_saturate(0%)] opacity-60"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-blue-950/20 mix-blend-overlay" />

            {/* SVG overlay pinned exactly to the 1200x1200 map */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 1200">
              
              {/* City Block Street Path (Sharp 90-degree turns mimicking roads) */}
              <path 
                d="M 400 800 L 400 650 L 550 650 L 550 500 L 700 500 L 700 400 L 800 400" 
                fill="none" 
                stroke="#1E293B" 
                strokeWidth="8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              
              {/* Animated Tracer */}
              <motion.path 
                d="M 400 800 L 400 650 L 550 650 L 550 500 L 700 500 L 700 400 L 800 400" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.7 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                className="drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]"
              />

              {/* Start Hub Node */}
              <circle cx="400" cy="800" r="10" fill="#10B981" />
              <circle cx="400" cy="800" r="25" fill="#10B981" fillOpacity="0.2" className="animate-ping" />

              {/* Destination Node (Indiranagar) */}
              <circle cx="800" cy="400" r="12" fill="#EF4444" />
              <circle cx="800" cy="400" r="30" fill="#EF4444" fillOpacity="0.2" className="animate-pulse" />
              <circle cx="800" cy="400" r="5" fill="#FFFFFF" />

              {/* PERFECTLY ANIMATED DELIVERY DRIVER (Matches every single corner) */}
              <motion.g
                animate={{
                  x: [400, 400, 550, 550, 700, 700, 800],
                  y: [800, 650, 650, 500, 500, 400, 400]
                }}
                // The times array calculates the exact linear timing needed for each road segment distance
                transition={{ duration: 10, times: [0, 0.187, 0.375, 0.562, 0.75, 0.875, 1], repeat: Infinity, ease: "linear" }}
              >
                {/* Expanding Radar Rings */}
                <circle cx="0" cy="0" r="30" fill="#3B82F6" fillOpacity="0.2">
                  <animate attributeName="r" values="10; 40" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8; 0" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="15" fill="#3B82F6" fillOpacity="0.4">
                   <animate attributeName="r" values="5; 20" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
                   <animate attributeName="opacity" values="0.8; 0" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
                </circle>

                {/* Solid Core Dot */}
                <circle cx="0" cy="0" r="8" fill="#FFFFFF" className="drop-shadow-lg" />
                <circle cx="0" cy="0" r="4" fill="#3B82F6" />

                {/* Hover Tooltip locked to driver */}
                <foreignObject x="-60" y="-55" width="120" height="40">
                  <div className="bg-[#121318]/90 backdrop-blur-md border border-blue-500/50 rounded-lg px-2 py-1 text-center shadow-lg shadow-blue-500/20">
                    <span className="block text-[8px] text-gray-400 font-mono uppercase">Agent En Route</span>
                    <span className="block text-[10px] text-blue-400 font-bold font-mono">1.2km Away</span>
                  </div>
                </foreignObject>
              </motion.g>
            </svg>
          </div>

          {/* Holographic Overlay Stats */}
          <div className="absolute top-6 right-6 bg-[#121318]/80 backdrop-blur-md border border-blue-500/30 px-4 py-3 rounded-lg font-mono text-[10px] text-blue-400 uppercase flex flex-col items-end shadow-lg shadow-blue-900/20 pointer-events-auto">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" /> GPS Sync Active</span>
            <span className="text-gray-500 mt-2 tracking-widest">LAT: 12.9716° N</span>
            <span className="text-gray-500 mt-1 tracking-widest">LNG: 77.5946° E</span>
          </div>

          {/* Driver Telemetry Card */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-6 right-6 bg-[#121318]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between shadow-2xl pointer-events-auto"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/30 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" alt="Driver" className="w-full h-full object-cover grayscale contrast-125" />
              </div>
              <div>
                <p className="text-[10px] text-blue-400 font-mono uppercase tracking-widest mb-1">Delivery Partner</p>
                <p className="font-serif text-white text-lg leading-none">Vikram Reddy</p>
                <p className="text-[10px] text-gray-500 font-mono mt-1">KA-01-EQ-4492 • 4.9★</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#1A1C23] border border-white/10 text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30">
                <Navigation className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>

    </main>
  );
}