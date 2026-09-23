import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Network as NetworkIcon, Globe, Wifi, Router, Shield, Server, Activity, CheckCircle2 } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Cybersecurity Audit",
    description: "Comprehensive vulnerability testing and risk assessment to identify and eliminate security gaps before they become threats.",
    features: ["Penetration testing & vulnerability scans", "Compliance assessment (GDPR, HIPAA)", "Detailed security roadmap"],
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <Router className="w-8 h-8 text-emerald-500" />,
    title: "Managed Firewall",
    description: "Next-generation protection with real-time threat monitoring and automated response systems to keep your network secure 24/7.",
    features: ["Advanced threat detection & blocking", "24/7 monitoring & incident response", "Traffic analysis & reporting"],
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 3,
    icon: <NetworkIcon className="w-8 h-8 text-purple-500" />,
    title: "SD-WAN Solutions",
    description: "Optimized connectivity for multi-site businesses with intelligent traffic routing and enhanced application performance.",
    features: ["Intelligent path selection", "Cloud-optimized connectivity", "Centralized management portal"],
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 4,
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    title: "Zero Trust Architecture",
    description: "Modern security protocols designed for remote work with continuous verification and least-privilege access controls.",
    features: ["Multi-factor authentication (MFA)", "Micro-segmentation & access control", "Continuous identity verification"],
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 5,
    icon: <Server className="w-8 h-8 text-cyan-500" />,
    title: "Cloud Security",
    description: "Protecting your assets across AWS, Azure, and GCP with comprehensive security posture management and compliance monitoring.",
    features: ["Multi-cloud security management", "Data encryption & key management", "Compliance automation"],
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  },
  {
    id: 6,
    icon: <Activity className="w-8 h-8 text-rose-500" />,
    title: "Network Monitoring",
    description: "Proactive performance monitoring with real-time analytics and automated alerts to prevent downtime before it impacts your business.",
    features: ["Real-time performance metrics", "Predictive analytics & alerts", "Bandwidth optimization"],
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[linear-gradient(to_bottom_left,#eff6ff,transparent)] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col h-full">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        {service.description}
      </p>
      
      <div className="mt-auto">
        <div className="flex flex-col gap-3">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className={`w-4 h-4 mt-0.5 ${service.color}`} />
              <span className="text-sm text-slate-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Network() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('network');
  const schema = getServiceSchema('Network & Infrastructure Services', 'Enterprise network solutions, SD-WAN, zero-trust architecture, and infrastructure monitoring.', 'network');
  
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
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans relative overflow-hidden">
      
      {/* Network Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Network Nodes */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] opacity-20 text-blue-500"
        >
          <Globe size={160} />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[20%] opacity-30 text-indigo-500"
        >
          <Wifi size={100} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[30%] opacity-25 text-purple-500"
        >
          <Router size={80} />
        </motion.div>

        {/* Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line 
            x1="15%" y1="20%" x2="75%" y2="45%" 
            stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" 
            className="text-blue-500"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.line 
            x1="35%" y1="75%" x2="75%" y2="45%" 
            stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" 
            className="text-indigo-500"
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-8"
          >
            <NetworkIcon className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Enterprise Network</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Connect globally with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">reliable infrastructure</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Design, deploy, and manage secure high-performance networks that keep your modern workforce connected anywhere, anytime.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}