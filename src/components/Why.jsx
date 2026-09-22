import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeDollarSign, Cpu, Globe, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const features = [
    {
      id: 1,
      title: "Affordable & Flexible",
      description: "Pricing plans designed for your specific enterprise needs.",
      icon: <BadgeDollarSign className="w-8 h-8" />,
      position: "top-left",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Latest Technology",
      description: "Cutting-edge tech stack ensuring scalable performance.",
      icon: <Cpu className="w-8 h-8" />,
      position: "top-right",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      title: "End-to-End Solutions",
      description: "Complete digital lifecycle management from idea to deployment.",
      icon: <Globe className="w-8 h-8" />,
      position: "bottom-left",
      color: "from-teal-400 to-emerald-500"
    },
    {
      id: 4,
      title: "Long Term Growth",
      description: "Unwavering commitment to your operational success.",
      icon: <TrendingUp className="w-8 h-8" />,
      position: "bottom-right",
      color: "from-orange-400 to-pink-500"
    },
  ];

  return (
    <div className="bg-[#FAFAFA] text-slate-900 py-20 md:py-32 px-4 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-slate-800 uppercase">The BitNexTro Advantage</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Why Partner With Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We don't just build software; we engineer competitive advantages. Discover what sets our infrastructure apart.
          </motion.p>
        </div>

        {/* Interactive Diagram Area */}
        <div className="relative w-full max-w-5xl h-auto md:h-[600px] flex flex-col md:block items-center">
          
          {/* SVG Connecting Lines (Desktop) */}
          <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1024 600" preserveAspectRatio="none">
            {/* Top Left Line */}
            <path d="M 356 140 Q 512 140 512 300" stroke={hoveredId === 1 || hoveredId === null ? "#cbd5e1" : "#f1f5f9"} strokeWidth="2" fill="none" strokeDasharray={hoveredId === 1 ? "6,6" : "0"} className={hoveredId === 1 ? "animate-[dash_1s_linear_infinite]" : "transition-colors duration-500"} />
            
            {/* Top Right Line */}
            <path d="M 668 140 Q 512 140 512 300" stroke={hoveredId === 2 || hoveredId === null ? "#cbd5e1" : "#f1f5f9"} strokeWidth="2" fill="none" strokeDasharray={hoveredId === 2 ? "6,6" : "0"} className={hoveredId === 2 ? "animate-[dash_1s_linear_infinite]" : "transition-colors duration-500"} />
            
            {/* Bottom Left Line */}
            <path d="M 356 460 Q 512 460 512 300" stroke={hoveredId === 3 || hoveredId === null ? "#cbd5e1" : "#f1f5f9"} strokeWidth="2" fill="none" strokeDasharray={hoveredId === 3 ? "6,6" : "0"} className={hoveredId === 3 ? "animate-[dash_1s_linear_infinite]" : "transition-colors duration-500"} />
            
            {/* Bottom Right Line */}
            <path d="M 668 460 Q 512 460 512 300" stroke={hoveredId === 4 || hoveredId === null ? "#cbd5e1" : "#f1f5f9"} strokeWidth="2" fill="none" strokeDasharray={hoveredId === 4 ? "6,6" : "0"} className={hoveredId === 4 ? "animate-[dash_1s_linear_infinite]" : "transition-colors duration-500"} />
            
            <style>
              {`
                @keyframes dash {
                  to { stroke-dashoffset: -24; }
                }
              `}
            </style>
          </svg>

          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className={`hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 rounded-full flex-col items-center justify-center transition-all duration-500 ${hoveredId ? 'bg-slate-900 text-white shadow-[0_0_50px_rgba(0,0,0,0.2)] scale-110' : 'bg-white text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100'}`}
          >
            <div className="absolute inset-2 border border-dashed border-current opacity-20 rounded-full animate-[spin_20s_linear_infinite]" />
            <h3 className="text-xl font-bold uppercase tracking-widest text-center">Core<br/>Value</h3>
          </motion.div>

          {/* Feature Nodes */}
          <div className="grid grid-cols-1 gap-6 w-full md:absolute md:inset-0 mt-8 md:mt-0 z-30">
            {features.map((item, idx) => {
              let posClass = "";
              if (item.position === "top-left") posClass = "md:absolute md:top-0 md:left-4 md:w-[340px]";
              if (item.position === "top-right") posClass = "md:absolute md:top-0 md:right-4 md:w-[340px]";
              if (item.position === "bottom-left") posClass = "md:absolute md:bottom-0 md:left-4 md:w-[340px]";
              if (item.position === "bottom-right") posClass = "md:absolute md:bottom-0 md:right-4 md:w-[340px]";

              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    ${posClass}
                    group cursor-default
                    flex flex-col items-center md:items-start text-center md:text-left
                    bg-white md:bg-white/60 md:backdrop-blur-xl
                    p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-slate-200 hover:bg-white
                  `}
                >
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white bg-linear-to-br ${item.color} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
