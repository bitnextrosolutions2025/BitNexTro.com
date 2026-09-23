import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Users, Target, Award, ArrowRight, CheckCircle2, Server, Lock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutpic from "../assets/about.jpeg"
import bnLogo3d from "../assets/trans_BN_logo.png"
import MagneticButton from '../components/MagneticButton';
// --- Utility: Animated Counter ---
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Parse the end number (handle string inputs like "500+")
    const numericEnd = parseInt(end.toString().replace(/\D/g, '')) || 0;
    
    let start = 0;
    const increment = numericEnd / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEnd) {
        setCount(numericEnd);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// --- Utility: Scroll Reveal Hook ---
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return [domRef, isVisible];
};

const RevealSection = ({ children, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function AboutPage() {
  const { scrollY } = useScroll();
  const graphicY = useTransform(scrollY, [0, 1500], [0, -100]);
  const services = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero-Trust Security",
      description: "Military-grade encryption and threat detection systems protecting your most critical digital assets."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable AWS/Azure architecture designed for 99.99% uptime and infinite growth potential."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Connectivity",
      description: "Low-latency SD-WAN solutions connecting your distributed workforce seamlessly."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "24/7/365 enterprise-level support teams monitoring your stack in real-time."
    }
  ];

  const stats = [
    { number: "1", suffix: "+", label: "Enterprise Deployments" },
    { number: "98", suffix: "%", label: "Client Retention Rate" },
    { number: "0", suffix: "+", label: "Fortune 500 Partners" },
    { number: "24", suffix: "/7", label: "Active Monitoring" }
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Velocity",
      description: "Rapid deployment methodologies that get you to market faster."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "ISO-certified quality standards in every line of code."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "Transparent protocols and complete data sovereignty."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision",
      description: "Data-driven decision making for optimal system performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-hidden font-sans selection:bg-emerald-500/30">
      
      {/* --- Animated Background --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/30 blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/50 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-white blur-[100px]"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-linears.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 z-10 mt-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/20 text-emerald-600 text-sm font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Leading the Future of IT
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900"
              >
                Building <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">Intelligent</span> <br />
                Infrastructure.
              </motion.h1>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-xl">
                <p>
                  <strong className="text-slate-900">BitNextro Solutions</strong> architects the digital backbone of modern enterprises. We transform complex challenges into streamlined, secure, and scalable technology ecosystems.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact">
                  <MagneticButton>
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2">
                      Launch Project <ArrowRight className="w-5 h-5" />
                    </button>
                  </MagneticButton>
                </Link>
                
              </div>
            </div>
            
            {/* Right Image/Graphic - Floating Card */}
            <motion.div 
              style={{ y: graphicY }} 
              className="relative w-full max-w-[440px] mx-auto lg:ml-auto aspect-square group cursor-pointer perspective-1000 hidden md:block"
            >
              {/* Animated Glow Behind */}
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/30 to-teal-400/30 rounded-[2rem] transform rotate-3 scale-100 transition-all duration-700 group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-2xl opacity-50 blur-xl group-hover:blur-2xl group-hover:opacity-80" />
              
              {/* Offset Background Card */}
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-100 to-teal-50 rounded-[2rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-8 group-hover:translate-x-3 group-hover:-translate-y-3" />
              
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden transform -rotate-2 transition-all duration-700 group-hover:rotate-0 group-hover:-translate-y-5 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                <img 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-95 group-hover:opacity-100 filter group-hover:brightness-105" 
                  src={aboutpic} 
                  alt="BitNexTro Infrastructure" 
                  loading="lazy" 
                  decoding="async" 
                />
                
                {/* Overlay gradient for premium feel */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/5 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
                
                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center justify-between transform transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                  <div className="flex flex-col items-start">
                    <span className="text-3xl font-black bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-teal-500">10+</span>
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-1">Years</span>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-black text-slate-900">24/7</span>
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-1">Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
           </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <div className="relative z-10 border-y border-white/5 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealSection key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 font-mono group-hover:text-emerald-400 transition-colors duration-300">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-widest font-semibold">{stat.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>

      {/* --- Services Section --- */}
      <section className="relative py-20 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Core Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deploy end-to-end solutions that bridge the gap between current infrastructure and future innovation.
            </p>
          </RevealSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <RevealSection key={index}>
                <div className="h-full bg-white backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 text-slate-700">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="relative py-20 bg-white z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-linears.vercel.app/noise.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Engineered for <span className="text-emerald-400">Excellence</span>.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our methodology is rooted in the belief that technology should be an enabler, not a bottleneck. We adhere to strict principles of transparency, security, and velocity.
              </p>
              
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {values.map((value, index) => (
                    <motion.div 
                      key={index} 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                      }}
                      className="flex gap-4 group"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-110">
                          {value.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-bold mb-1 group-hover:text-emerald-600 transition-colors duration-300">{value.title}</h3>
                        <p className="text-sm text-slate-600">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
            </RevealSection>
            
              <RevealSection className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group hover:border-emerald-200 transition-colors duration-500">
                   
                   {/* Glowing Orb Background */}
                   <motion.div 
                     animate={{ 
                       scale: [1, 1.2, 1],
                       opacity: [0.3, 0.6, 0.3],
                     }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-[80px] pointer-events-none"
                   />
                   <motion.div 
                     animate={{ 
                       scale: [1, 1.5, 1],
                       opacity: [0.2, 0.4, 0.2],
                     }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400 rounded-full blur-[80px] pointer-events-none"
                   />

                   <div className="aspect-video bg-white/60 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                      {/* Glass Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/40 pointer-events-none" />
                      
                      {/* Simulated Code Block with Staggered Typewriter Effect */}
                      <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                          visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="absolute inset-0 p-8 font-mono text-[13px] leading-loose text-slate-700"
                      >
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}><span className="text-purple-600 font-semibold">import</span> &#123; Future &#125; <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600">'@bitnextro/core'</span>;</motion.div>
                         <br/>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}><span className="text-blue-600 font-semibold">class</span> EnterpriseScale <span className="text-blue-600 font-semibold">extends</span> Infrastructure &#123;</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-4"><span className="text-blue-500">constructor</span>() &#123;</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-8"><span className="text-blue-500">super</span>();</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-8"><span className="text-purple-600">this</span>.security = <span className="text-emerald-600">'Zero-Trust'</span>;</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-8"><span className="text-purple-600">this</span>.uptime = <span className="text-orange-500">99.99</span>;</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-4">&#125;</motion.div>
                         <br/>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-4"><span className="text-blue-600 font-semibold">async</span> <span className="text-blue-500">deploy</span>() &#123;</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-8"><span className="text-purple-600 font-semibold">await</span> <span className="text-purple-600">this</span>.<span className="text-blue-500">optimize</span>();</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-8"><span className="text-purple-600 font-semibold">return</span> <span className="text-emerald-600">'Success'</span>;</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="pl-4">&#125;</motion.div>
                         <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>&#125;</motion.div>
                      </motion.div>
                   </div>
                </div>
              </RevealSection>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="relative py-32 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="relative overflow-hidden rounded-[3rem] bg-white border border-slate-200 shadow-2xl p-16 group hover:border-emerald-200 transition-colors duration-500">
              
              {/* Animated Background Orbs */}
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400 rounded-full blur-[100px] pointer-events-none" />
              <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-[100px] pointer-events-none" />
      
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                  Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400">Scale?</span>
                </h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                  Join the industry leaders who trust BitNextro with their digital evolution.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/contact">
                    <MagneticButton>
                      <button className="bg-emerald-500 text-slate-900 px-10 py-5 rounded-xl font-bold hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
                        <Globe className="w-5 h-5" /> Start Transformation
                      </button>
                    </MagneticButton>
                  </Link>
                  <Link to="/contact">
                    <MagneticButton>
                      <button className="bg-transparent text-slate-900 border-2 border-emerald-500/20 px-10 py-5 rounded-xl font-bold hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 w-full sm:w-auto">
                        Schedule Consultation
                      </button>
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}

