"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
// MapPin is now correctly imported
import { ArrowLeft, Trash2, ShieldCheck, Zap, CheckCircle2, Loader2, CreditCard, MapPin } from "lucide-react";

export default function CartCheckoutPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Quantum X9 Pro Smartphone",
      price: 64999,
      qty: 1,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Acoustic Apex Wireless ANC",
      price: 18500,
      qty: 1,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    }
  ]);

  const [processing, setProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [address, setAddress] = useState("Pocket 8, Vasant Kunj, New Delhi - 110070");

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean) as any);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const total = subtotal; // Free shipping

  const handleCheckout = () => {
    setProcessing(true);
    // Simulate secure payment gateway delay
    setTimeout(() => {
      setProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#070709] text-[#F3F4F6] font-sans selection:bg-blue-600 selection:text-white px-4 md:px-12 py-10">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12 pb-6 border-b border-white/10">
        <Link href="/TechVaultStore" className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
        <span className="font-serif text-xl tracking-tight">Secure Checkout Terminal</span>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="max-w-md mx-auto bg-[#121318] border border-emerald-500/30 p-10 rounded-3xl text-center mt-20 shadow-2xl shadow-emerald-900/10"
          >
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20"
            >
              <CheckCircle2 className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl font-serif text-white mb-2">Order Confirmed!</h2>
            <p className="text-xs text-gray-400 mb-8 leading-relaxed">
              Payment successful. Order ID: <span className="font-mono text-white">#TV-89420</span>.<br/>Dispatched from Delhi Warehouse.
            </p>
            <Link href="/TechVaultStore/tracking" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-4 rounded-full block shadow-lg shadow-blue-600/30 transition-colors">
              Track Live Shipment →
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            key="cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            {/* Cart Items List */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h2 className="font-serif text-2xl mb-4">Review Cart ({cartItems.length})</h2>
              
              <AnimatePresence>
                {cartItems.length === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 text-center bg-[#121318] rounded-2xl border border-white/5 text-gray-500">
                    Your cart is empty.
                  </motion.div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-[#121318] border border-white/10 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-black" />
                        <div>
                          <h4 className="font-serif text-base text-white mb-1">{item.name}</h4>
                          <p className="font-mono text-sm text-blue-400 font-bold">₹{item.price.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="flex items-center border border-white/10 rounded-full px-3 py-1.5 bg-black/40">
                          <button onClick={() => updateQty(item.id, -1)} className="text-gray-400 hover:text-white px-2">-</button>
                          <span className="font-mono text-sm px-4 font-bold text-white">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="text-gray-400 hover:text-white px-2">+</button>
                        </div>
                        <button onClick={() => setCartItems(prev => prev.filter(p => p.id !== item.id))} className="p-2 bg-rose-500/10 text-rose-400 rounded-full hover:bg-rose-500 hover:text-white transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>

              <div className="mt-6 bg-[#121318] border border-white/10 p-6 rounded-2xl">
                <h4 className="font-serif text-base mb-3 text-white flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Delivery Destination</h4>
                <input 
                  type="text" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-mono transition-colors"
                />
              </div>
            </div>

            {/* Bill Summary */}
            <div className="lg:col-span-5">
              <div className="bg-[#121318] border border-white/10 p-8 rounded-3xl sticky top-28 shadow-2xl shadow-black">
                <h3 className="font-serif text-2xl mb-6 flex items-center gap-2"><CreditCard className="w-5 h-5 text-blue-500" /> Order Summary</h3>
                
                <div className="flex flex-col gap-5 font-mono text-sm text-gray-400 pb-6 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="text-white">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Express Shipping</span>
                    <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-xs">FREE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>GST (Included)</span>
                    <span className="text-white">Calculated</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-8 text-sm font-bold">
                  <span className="font-serif text-xl text-white">Total Amount</span>
                  <span className="font-mono text-3xl text-blue-400">₹{total.toLocaleString()}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0 || processing}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-sm py-4 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all overflow-hidden relative"
                >
                  {processing ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" /> Processing Secure Payment...
                    </motion.div>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" /> Confirm & Pay Now
                    </>
                  )}
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-gray-500 bg-white/5 py-2 rounded-lg border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> 256-Bit SSL Encrypted Gateway
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}