import React from 'react';
import { BadgeDollarSign, Cpu, Globe, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Affordable & Flexible",
      description: "Pricing plans designed for you",
      icon: <BadgeDollarSign className="w-8 h-8 text-slate-900" />,
      position: "top-left",
    },
    {
      id: 2,
      title: "Latest Technology",
      description: "Cutting-edge tools & stack",
      icon: <Cpu className="w-8 h-8 text-slate-900" />,
      position: "top-right",
    },
    {
      id: 3,
      title: "End-to-End Solutions",
      description: "Complete digital lifecycle",
      icon: <Globe className="w-8 h-8 text-slate-900" />,
      position: "bottom-left",
    },
    {
      id: 4,
      title: "Long Term Growth",
      description: "Commitment to your success",
      icon: <TrendingUp className="w-8 h-8 text-slate-900" />,
      position: "bottom-right",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-4 md:p-10 font-sans">
      
      <div className="relative w-full max-w-4xl h-auto md:h-[600px] flex flex-col md:block items-center">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600 ">Why Choose Us?</h1>
          <p className="text-green-600 mt-2">Discover our key advantages</p>
        </div>

        {/* --- DESKTOP ARROWS (SVG Layer) --- */}
        {/* This SVG sits behind the content and draws the connecting lines on large screens */}
        <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#cbd5e1" />
            </marker>
          </defs>
          
          {/* Top Left Arrow */}
          <path d="M 350 280 Q 280 250 200 180" stroke="#cbd5e1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* Top Right Arrow */}
          <path d="M 450 280 Q 520 250 600 180" stroke="#cbd5e1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* Bottom Left Arrow */}
          <path d="M 350 320 Q 280 350 200 420" stroke="#cbd5e1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* Bottom Right Arrow */}
          <path d="M 450 320 Q 520 350 600 420" stroke="#cbd5e1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        </svg>

        {/* --- CENTRAL HUB (Rectangle) --- */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-64 h-32 bg-linear-to-r from-blue-600 to-teal-500 rounded-xl shadow-xl flex-col items-center justify-center text-slate-900 transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold uppercase tracking-wide">Why Choose Us</h2>
          <div className="w-12 h-1 bg-white/30 mt-2 rounded-full"></div>
        </div>

        {/* --- SATELLITE NODES (Circles) --- */}
        <div className="grid grid-cols-1 gap-6 w-full md:block md:w-auto">
          {features.map((item) => {
            // Determine positioning classes for desktop
            let positionClass = "";
            if (item.position === "top-left") positionClass = "md:absolute md:top-10 md:left-10";
            if (item.position === "top-right") positionClass = "md:absolute md:top-10 md:right-10";
            if (item.position === "bottom-left") positionClass = "md:absolute md:bottom-10 md:left-10";
            if (item.position === "bottom-right") positionClass = "md:absolute md:bottom-10 md:right-10";

            return (
              
              <div 
                key={item.id} 
                className={`
                  ${positionClass}
                  group
                  flex flex-row md:flex-col items-center
                  bg-white md:bg-transparent 
                  p-4 md:p-0 rounded-xl shadow-sm md:shadow-none
                  md:w-48 transition-all duration-300 hover:-translate-y-1
                `}
              >
                {/* Circle Icon Container */}
                <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-br from-teal-400 to-blue-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-shadow duration-300 z-10">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center">
                  <h3 className="font-bold text-green-500 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-800 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
