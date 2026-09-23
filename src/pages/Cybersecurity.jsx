import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, ScanLine, Smartphone, Mail, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <ScanLine className="w-8 h-8 text-blue-500" />,
    title: "Threat Detection & Response",
    desc: "Real-time monitoring with AI-powered threat intelligence to detect, analyze, and neutralize cyber threats before they cause damage.",
    stat: "99.8% Detection Rate",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    id: 2,
    icon: <FileCheck className="w-8 h-8 text-emerald-500" />,
    title: "Security Audits & Assessments",
    desc: "Comprehensive evaluation of your security posture — identifying vulnerabilities, gaps, and compliance failures across your entire infrastructure.",
    stat: "360° Coverage",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    id: 3,
    icon: <Lock className="w-8 h-8 text-purple-500" />,
    title: "Penetration Testing",
    desc: "Ethical hackers simulate real-world attacks to expose weaknesses in your systems, applications, and networks before adversaries do.",
    stat: "500+ CVEs Found",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    id: 4,
    icon: <Smartphone className="w-8 h-8 text-orange-500" />,
    title: "Endpoint Protection",
    desc: "Advanced protection for every device on your network — from workstations to mobile endpoints — with behavioral analysis and zero-day defense.",
    stat: "10M+ Endpoints Secured",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    id: 5,
    icon: <Mail className="w-8 h-8 text-cyan-500" />,
    title: "Email Security & Anti-Phishing",
    desc: "Block phishing, BEC attacks, malware, and social engineering before they reach your inbox with intelligent email filtering and user training.",
    stat: "98.5% Phish Blocked",
    color: "text-cyan-500",
    bg: "bg-cyan-50"
  },
  {
    id: 6,
    icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
    title: "Compliance Management",
    desc: "Stay audit-ready with automated compliance workflows for GDPR, HIPAA, ISO 27001, SOC 2, and PCI-DSS regulations.",
    stat: "40+ Frameworks",
    color: "text-rose-500",
    bg: "bg-rose-50"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
          {service.icon}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
          {service.desc}
        </p>
        
        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100">
            <div className={`w-2 h-2 rounded-full ${service.bg.replace('50', '500')}`} />
            <span className="text-sm font-semibold text-slate-700">{service.stat}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Cybersecurity() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('cybersecurity');
  const schema = getServiceSchema('Cyber Security Services', 'Expert cybersecurity services including threat detection, penetration testing, security audits, endpoint protection, email security, and compliance management.', 'cybersecurity');
  
  usePageMeta({
    ...metadata,
    ogImage: "https://www.bitnextro.com/og-image.png",
    ogUrl: metadata.canonicalUrl,
    twitterImage: "https://www.bitnextro.com/og-image.png",
    twitterTitle: metadata.ogTitle,
    twitterDescription: metadata.ogDescription,
    schema
  });

  return (
    <div className="relative min-h-screen bg-slate-50 pt-24 pb-20 font-sans overflow-hidden">
      {/* Background Decor */}
                  {/* Visual Animated Background Decor */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]"
        />
        
        {/* Thematic Floating Icons */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] opacity-15 text-blue-500"
        >
          <Shield size={120} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[10%] opacity-15 text-indigo-500"
        >
          <Lock size={150} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[30%] opacity-20 text-cyan-500"
        >
          <ScanLine size={80} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[15%] right-[30%] opacity-20 text-rose-500"
        >
          <ShieldCheck size={90} />
        </motion.div>
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-8"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Enterprise Security</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Protect your business from <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">evolving threats</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Advanced threat protection for the modern enterprise. Defend your digital perimeter with military-grade security infrastructure.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5">
              Get Protected Now
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all">
              View Threat Report
            </Link>
          </motion.div>
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-16 opacity-60">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">
            Core Security Services
          </span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-[2.5rem] bg-slate-900 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10 px-8 py-20 md:p-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Secure your data from attacks
            </h2>
            <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto">
              Get a free security assessment and discover your vulnerabilities before attackers do.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
              Schedule Free Assessment <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}