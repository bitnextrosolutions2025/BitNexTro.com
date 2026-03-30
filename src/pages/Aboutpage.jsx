import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, Globe, Users, Target, Award, ArrowRight, CheckCircle2, Server, Lock } from 'lucide-react';
import aboutpic from "../assets/about.jpeg"
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
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans selection:bg-emerald-500/30">
      
      {/* --- Animated Background --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-700/50 blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-slate-900/50 blur-[100px]"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-linears.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 z-10 mt-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Leading the Future of IT
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                Building <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">Intelligent</span> <br />
                Infrastructure.
              </h1>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed max-w-xl">
                <p>
                  <strong className="text-white">BitNextro Solutions</strong> architects the digital backbone of modern enterprises. We transform complex challenges into streamlined, secure, and scalable technology ecosystems.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 flex items-center gap-2">
                  Launch Project <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  Explore Capabilities
                </button>
              </div>
            </div>
            
            {/* Right Image/Graphic */}
            <div className="relative lg:h-[600px] h-[400px] w-full hidden md:block">
               {/* Abstract Tech Visualization */}
               <img className='rounded-2xl' src={aboutpic} alt="bitnextro-company-about" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <div className="relative z-10 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealSection key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono group-hover:text-emerald-400 transition-colors duration-300">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>

      {/* --- Services Section --- */}
      <section className="relative py-20 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Core Capabilities</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We deploy end-to-end solutions that bridge the gap between current infrastructure and future innovation.
            </p>
          </RevealSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <RevealSection key={index}>
                <div className="h-full bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 text-slate-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="relative py-20 bg-slate-900/50 z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-linears.vercel.app/noise.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Engineered for <span className="text-emerald-400">Excellence</span>.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our methodology is rooted in the belief that technology should be an enabler, not a bottleneck. We adhere to strict principles of transparency, security, and velocity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{value.title}</h3>
                      <p className="text-sm text-slate-500">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
            
            <RevealSection className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <div className="aspect-video bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center relative group overflow-hidden">
                    {/* Simulated Code Block */}
                    <div className="absolute inset-0 p-8 font-mono text-xs text-slate-200 opacity-30">
                       <div>import &#123; Future &#125; from '@bitnextro/core';</div>
                       <br/>
                       <div>class EnterpriseScale extends Infrastructure &#123;</div>
                       <div className="pl-4">constructor() &#123;</div>
                       <div className="pl-8">super();</div>
                       <div className="pl-8">this.security = 'Zero-Trust';</div>
                       <div className="pl-8">this.uptime = 99.99;</div>
                       <div className="pl-4">&#125;</div>
                       <br/>
                       <div className="pl-4">async deploy() &#123;</div>
                       <div className="pl-8">await this.optimize();</div>
                       <div className="pl-8">return 'Success';</div>
                       <div className="pl-4">&#125;</div>
                       <div>&#125;</div>
                    </div>
                    
                    
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine"></div>
                 </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="relative py-24 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="bg-linear-to-b from-emerald-900/40 to-slate-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-linear-to-r from-transparent via-emerald-500 to-transparent"></div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Scale?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join the industry leaders who trust BitNextro with their digital evolution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                  <Globe className="w-5 h-5" /> Start Transformation
                </button>
                <button className="bg-transparent text-white border border-white/20 px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
