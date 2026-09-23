import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Server, Router, ShoppingCart, ShieldCheck, MonitorSpeaker, MemoryStick, HardDrive, Monitor } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: 'On-Site Hardware Repair',
    desc: 'Swift diagnosis and expert repair of desktops, laptops, and server hardware directly at your location.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <Server className="w-8 h-8 text-indigo-500" />,
    title: 'Server & Workstation Setup',
    desc: 'End-to-end configuration and deployment of enterprise-grade servers and high-performance workstations.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <Router className="w-8 h-8 text-emerald-500" />,
    title: 'Network Device Management',
    desc: 'Seamless physical connectivity, structured cabling, and infrastructure oversight for switches and routers.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <ShoppingCart className="w-8 h-8 text-purple-500" />,
    title: 'Hardware Procurement',
    desc: 'Sourcing premium, reliable IT hardware and components at competitive pricing through our vendor network.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 5,
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: 'Preventive Maintenance',
    desc: 'Proactive physical care, dust removal, and thermal management to maximize your hardware lifespan.',
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 6,
    icon: <MonitorSpeaker className="w-8 h-8 text-cyan-500" />,
    title: 'Peripheral Support',
    desc: 'Complete deployment and troubleshooting for printers, scanners, conferencing systems, and IoT devices.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[linear-gradient(to_bottom_left,#f1f5f9,transparent)] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col h-full">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {service.desc}
      </p>
    </div>
  </motion.div>
);

export default function Hardware() {
  const metadata = getServiceMetadata('hardware');
  const schema = getServiceSchema('Hardware & Infrastructure Services', 'Hardware procurement, workstation setup, network device management, and preventive maintenance.', 'hardware');
  
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
      
      {/* Hardware Visual Animated Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Hardware Components */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] opacity-20 text-slate-500"
        >
          <Cpu size={140} />
        </motion.div>
        
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] opacity-25 text-blue-500"
        >
          <MemoryStick size={100} />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[30%] opacity-20 text-indigo-500"
        >
          <HardDrive size={90} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] right-[30%] opacity-15 text-slate-400"
        >
          <Monitor size={80} />
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 border border-slate-300 mb-8"
          >
            <Cpu className="w-4 h-4 text-slate-700" />
            <span className="text-sm font-bold text-slate-800 tracking-wide uppercase">Hardware Services</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Build your foundation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900">reliable hardware</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            From high-performance workstation procurement to physical on-site repairs and maintenance, we ensure the physical backbone of your IT infrastructure never fails.
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