"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Cpu, ShieldCheck, Zap, Search, ArrowRight, Check, Star, Globe2, MapPin, Activity, Building2, Headphones, Box, ArrowUpRight, Clock } from "lucide-react";

export default function TechVaultStore() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(2);
  const [addedId, setAddedId] = useState<number | null>(null);

  // EXPANDED INVENTORY
  const products = [
    { id: 1, name: "Quantum X9 Pro Smartphone", category: "Mobiles", price: "₹64,999", rating: 4.9, reviews: 128, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop", badge: "Best Seller" },
    { id: 2, name: "Nova Fold 5 Ultra", category: "Mobiles", price: "₹1,24,999", rating: 4.7, reviews: 84, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop", badge: "New Release" },
    { id: 3, name: "Titan 5G Privacy Edition", category: "Mobiles", price: "₹89,000", rating: 4.8, reviews: 45, img: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1000&auto=format&fit=crop", badge: "Enterprise" },
    { id: 4, name: "Nexus Ultra Workstation M3", category: "Laptops", price: "₹1,45,000", rating: 5.0, reviews: 64, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop", badge: "Editor's Choice" },
    { id: 5, name: "Blade Pro 16 Creator", category: "Laptops", price: "₹2,10,000", rating: 4.9, reviews: 112, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop", badge: "RTX 4090" },
    { id: 6, name: "CodeStation 14 Dev Edition", category: "Laptops", price: "₹95,000", rating: 4.7, reviews: 230, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop", badge: "Developer" },
    { id: 7, name: "Acoustic Apex Wireless ANC", category: "Audio", price: "₹18,500", rating: 4.8, reviews: 310, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", badge: "Trending" },
    { id: 8, name: "Sonic Buds Pro (Gen 3)", category: "Audio", price: "₹12,000", rating: 4.6, reviews: 540, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop", badge: "Fast Shipping" },
    { id: 9, name: "Void Studio Soundbar", category: "Audio", price: "₹45,000", rating: 4.9, reviews: 22, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop", badge: "Cinematic" },
    { id: 10, name: "CyberDeck Tactical Tablet 12", category: "Tablets", price: "₹42,000", rating: 4.7, reviews: 95, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop", badge: "Limited Stock" },
    { id: 11, name: "Canvas Pro 11 Graphic Tablet", category: "Tablets", price: "₹68,000", rating: 4.8, reviews: 145, img: "https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=1000&auto=format&fit=crop", badge: "Stylus Included" },
    { id: 12, name: "Chronos Watch Series 9", category: "Wearables", price: "₹32,000", rating: 4.9, reviews: 410, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop", badge: "Titanium" },
    { id: 13, name: "Vital Health Ring", category: "Wearables", price: "₹24,000", rating: 4.5, reviews: 88, img: "https://images.unsplash.com/photo-1610427670390-349f96b341f2?q=80&w=1000&auto=format&fit=crop", badge: "Bio-Tracker" },
    { id: 14, name: "Orbit 360 VR Headset", category: "Wearables", price: "₹49,999", rating: 4.6, reviews: 112, img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1000&auto=format&fit=crop", badge: "Metaverse" }
  ];

  const categories = ["All", "Mobiles", "Laptops", "Audio", "Tablets", "Wearables"];
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (id: number) => {
    setAddedId(id);
    setCartCount(prev => prev + 1);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <main className="min-h-screen bg-[#070709] text-[#F3F4F6] font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      
      {/* --- TOP E-COMMERCE NAVBAR --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 w-full px-4 md:px-12 py-4 flex justify-between items-center z-50 backdrop-blur-xl bg-[#070709]/80 border-b border-white/10"
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-lg font-serif tracking-tight text-white hidden sm:inline">TechVault<span className="text-blue-500">.</span></span>
          </Link>
          
          <div className="relative hidden lg:block w-96">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search smartphones, laptops, audio..." 
              className="w-full bg-[#121318] border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-all hover:bg-[#16181f]"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/TechVaultStore/tracking" className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors group">
            <ShieldCheck className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" /> Track Order
          </Link>

          <Link href="/TechVaultStore/cart" className="relative flex items-center gap-2 bg-[#121318] border border-white/10 px-5 py-2 rounded-full text-xs font-medium text-white hover:border-blue-500 transition-all shadow-lg">
            <ShoppingBag className="w-4 h-4 text-blue-400" />
            <span>Cart</span>
            <AnimatePresence>
              <motion.span 
                key={cartCount}
                initial={{ scale: 1.5, opacity: 0, y: -10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="absolute -top-2 -right-2 bg-blue-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50"
              >
                {cartCount}
              </motion.span>
            </AnimatePresence>
          </Link>
        </div>
      </motion.nav>

      {/* --- HERO BANNER --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 pt-8 pb-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950/80 via-[#121318] to-[#070709] border border-blue-500/20 p-8 md:p-16 shadow-2xl shadow-blue-900/20 flex flex-col md:flex-row items-center"
        >
          <div className="relative z-10 w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono uppercase tracking-widest mb-6"
            >
              <Zap className="w-3 h-3 animate-pulse" /> The 2026 Hardware Catalog
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-6 leading-[1.1]"
            >
              Absolute <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Processing Power.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-400 mb-8 leading-relaxed max-w-md"
            >
              Massive inventory restock. High-performance workstations, next-gen mobile architecture, and lossless audio ecosystems—ready for immediate dispatch from our Assam headquarters.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#catalog" className="bg-blue-600 text-white font-medium text-xs px-8 py-3.5 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30">
                Shop Collection
              </a>
              <a href="#offline" className="border border-white/20 text-white font-medium text-xs px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors">
                Visit Flagship Store
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 h-64 md:h-96 mt-10 md:mt-0 relative"
          >
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" 
              alt="Tech" 
              className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl shadow-black/50" 
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-[#121318]/90 backdrop-blur-xl border border-blue-500/30 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">In Stock</p>
                <p className="text-white text-sm font-bold">14,203 Units</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- BRAND AUTHORITY TICKER --- */}
      <div className="w-full border-y border-white/5 bg-[#0A0B0E] py-6 overflow-hidden flex whitespace-nowrap mt-8">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex items-center gap-16 px-8 text-gray-600 font-mono text-xs tracking-widest uppercase"
        >
          {/* Duplicated for infinite scroll illusion */}
          <span>Official Distribution Partner</span> • <span>Verified Original Hardware</span> • <span>Next-Day Pan-India Delivery</span> • <span>256-Bit Secure Checkout</span> • <span>Enterprise Volume Pricing</span> •
          <span>Official Distribution Partner</span> • <span>Verified Original Hardware</span> • <span>Next-Day Pan-India Delivery</span> • <span>256-Bit Secure Checkout</span> • <span>Enterprise Volume Pricing</span> •
        </motion.div>
      </div>

      {/* --- FLUID CATEGORY FILTER BAR --- */}
      <div id="catalog" className="max-w-[1400px] mx-auto px-4 md:px-12 py-10 flex items-center gap-2 overflow-x-auto no-scrollbar relative z-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="relative px-6 py-2.5 rounded-full text-xs font-mono tracking-wider whitespace-nowrap outline-none"
          >
            {selectedCategory === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${selectedCategory === cat ? "text-white font-bold" : "text-gray-400 hover:text-white"}`}>
              {cat}
            </span>
          </button>
        ))}
      </div>

      {/* --- STAGGERED MASSIVE PRODUCT GRID --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 min-h-screen">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, index) => (
              <motion.div 
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -40 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#121318] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col justify-between hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0B0E] p-4">
                    <span className="absolute top-4 left-4 z-10 bg-[#070709]/80 backdrop-blur-md text-[10px] font-mono text-blue-400 px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                      {p.badge}
                    </span>
                    <motion.img 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="p-6 pb-2">
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs mb-3">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-white">{p.rating}</span>
                      <span className="text-gray-500 text-[10px]">({p.reviews} verified)</span>
                    </div>
                    <h3 className="font-serif text-lg text-white mb-2 leading-tight line-clamp-2">{p.name}</h3>
                    <p className="font-mono text-blue-400 text-xl font-bold">{p.price}</p>
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <button 
                    onClick={() => handleAddToCart(p.id)}
                    className={`w-full py-3 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden relative ${
                      addedId === p.id 
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 border-emerald-500" 
                        : "bg-[#1A1C23] hover:bg-blue-600 text-white border border-white/5 hover:border-blue-500"
                    }`}
                  >
                    {addedId === p.id ? (
                      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                        <Check className="w-4 h-4" /> Added to Cart
                      </motion.div>
                    ) : (
                      <span className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> Add to Cart
                      </span>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- ENTERPRISE / B2B BANNER --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 mt-32">
        <div className="w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#121318] to-[#0A0B0E] border border-blue-500/20 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover pointer-events-none" />
          
          <div className="relative z-10 md:w-2/3">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-widest rounded-full border border-emerald-500/20 mb-4">
              B2B & Enterprise
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">Scale your workforce.</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              Equip your developers, creators, and executives with uncompromised computing power. TechVault offers dedicated account managers, bulk licensing, and priority hardware sourcing for enterprise deployments.
            </p>
          </div>
          
          <div className="relative z-10 md:w-1/3 flex justify-end">
            <button className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Contact Sales <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* --- THE OFFLINE VAULT (ABOUT US) --- */}
      <section id="offline" className="max-w-[1400px] mx-auto px-4 md:px-12 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text / Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
                <Building2 className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">About The Physical Vault</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-6">
              Experience the hardware <br/><span className="italic text-gray-500">before you scale.</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              TechVault is more than just a digital interface. Located in the commercial heart of the Northeast—<strong className="text-white">GS Road, Guwahati</strong>—our 10,000 sq.ft flagship store acts as the physical bridge between global tech manufacturers and the growing regional tech ecosystem.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              Walk in to benchmark GPUs, test mechanical switches, or consult with our hardware engineers for custom workstation configurations.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">GS Road Flagship</h4>
                  <p className="text-xs text-gray-500 font-mono">Guwahati, Assam 781005</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Experience Hours</h4>
                  <p className="text-xs text-gray-500 font-mono">10:00 AM - 8:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Masonry Images - FIXED BROKEN GAMING SETUP IMAGE */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4 h-full">
              <div className="h-[60%] rounded-3xl overflow-hidden relative bg-[#121318]">
                <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000&auto=format&fit=crop" alt="Store Front" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="h-[40%] rounded-3xl overflow-hidden relative bg-[#121318]">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop" alt="Desk setup" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="h-full rounded-3xl overflow-hidden relative bg-[#121318] mt-8">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" alt="Gaming Setup" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
            </div>
          </div>

        </div>
      </section>

      {/* --- GLOBAL FULFILLMENT MAP SECTION --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 mt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#0A0B0E] border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#121318_1px,transparent_1px),linear-gradient(to_bottom,#121318_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

          <div className="w-full lg:w-1/3 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6">
              <Globe2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white mb-6">Live Logistics <br/>Network.</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Every order is tracked via our Assam fulfillment center and routed with maximum efficiency to your exact coordinates.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-[#121318] p-4 rounded-2xl border border-white/5">
                <Activity className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-white text-sm font-bold">Assam Main Hub</p>
                  <p className="text-xs text-gray-500 font-mono">100% Operational</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#121318] p-4 rounded-2xl border border-white/5">
                <Box className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white text-sm font-bold">Pan-India Delivery</p>
                  <p className="text-xs text-gray-500 font-mono">2-3 Business Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 h-[400px] relative bg-[#121318]/50 border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center shadow-inner">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <motion.path d="M 100 300 Q 400 50, 700 250" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
              <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} d="M 100 300 Q 400 50, 700 250" fill="none" stroke="#3B82F6" strokeWidth="3" />
              <motion.path d="M 200 100 Q 500 350, 750 150" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
              <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }} d="M 200 100 Q 500 350, 750 150" fill="none" stroke="#10B981" strokeWidth="3" />
              
              <circle cx="100" cy="300" r="6" fill="#3B82F6" className="animate-ping" />
              <circle cx="100" cy="300" r="3" fill="#FFFFFF" />
              <circle cx="700" cy="250" r="6" fill="#3B82F6" className="animate-ping" />
              <circle cx="700" cy="250" r="3" fill="#FFFFFF" />

              {/* Central Assam Hub Node */}
              <circle cx="450" cy="200" r="12" fill="#3B82F6" fillOpacity="0.2" className="animate-pulse" />
              <circle cx="450" cy="200" r="6" fill="#3B82F6" />
              <circle cx="450" cy="200" r="2" fill="#FFFFFF" />
            </svg>
            <div className="absolute top-[45%] left-[58%] -translate-x-1/2 bg-[#0A0B0E]/80 backdrop-blur-md border border-blue-500/30 px-3 py-1.5 rounded text-[10px] font-mono text-blue-400 shadow-lg">
              HQ: ASSAM HUB
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- MEGA FOOTER --- */}
      <footer className="w-full bg-[#030304] border-t border-white/10 pt-24 pb-12 px-4 md:px-12 mt-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xl font-serif tracking-tight text-white">TechVault<span className="text-blue-500">.</span></span>
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Premium electronics distribution, enterprise procurement, and high-performance computing hardware directly sourced and certified.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 w-fit px-3 py-1.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Secure 256-Bit TLS Checkout
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2">Platform</h4>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Shop Catalog</a>
            <Link href="/TechVaultStore/tracking" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Track Order</Link>
            <a href="#offline" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Physical Store Locator</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Enterprise B2B</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2">Support</h4>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Warranty & Repairs</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Return Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Shipping FAQs</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-2">
              <Headphones className="w-4 h-4" /> 24/7 Support Desk
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2">Newsletter</h4>
            <p className="text-gray-500 text-xs">Subscribe for early access to hardware drops and corporate discounts.</p>
            <div className="flex mt-2">
              <input type="email" placeholder="Email address" className="bg-[#121318] border border-white/10 rounded-l-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500 w-full" />
              <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-500 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} TechVault Electronics Trading.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
            <span>Digital Architecture By</span>
            <span className="text-white font-bold hover:text-blue-400 transition-colors cursor-pointer">
              Tapecut Studios
            </span>
          </div>
        </div>
      </footer>

      {/* --- BOTTOM FLOATING CHECKOUT BAR FOR MOBILE --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#121318]/90 backdrop-blur-xl border border-white/20 p-3.5 rounded-full shadow-2xl flex justify-between items-center z-40 md:hidden">
        <div className="flex items-center gap-3 pl-2">
          <motion.div 
            key={cartCount}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-600/50"
          >
            {cartCount}
          </motion.div>
          <span className="text-xs font-mono text-gray-300">Cart Total</span>
        </div>
        <Link href="/TechVaultStore/cart" className="bg-white text-black font-bold text-xs px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
          Checkout <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </main>
  );
}