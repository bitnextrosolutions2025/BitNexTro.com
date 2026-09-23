import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Headphones, Monitor, Wifi, UserCircle, ShieldAlert, Activity, Cpu, LifeBuoy } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Headphones className="w-8 h-8 text-blue-500" />,
    title: '24/7 Helpdesk',
    desc: 'Round-the-clock assistance whenever you need it, ensuring your team is never left stranded with IT issues.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <Monitor className="w-8 h-8 text-indigo-500" />,
    title: 'Remote Desktop Support',
    desc: 'Instant secure screen access to troubleshoot and resolve your technical issues fast, no matter where you are.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <ShieldAlert className="w-8 h-8 text-rose-500" />,
    title: 'Critical Incident Response',
    desc: 'Rapid escalation protocols and immediate intervention for high-severity events and security alerts.',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    id: 4,
    icon: <Activity className="w-8 h-8 text-emerald-500" />,
    title: 'Proactive System Monitoring',
    desc: 'We catch and resolve background system issues silently before they ever affect your daily operations.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 5,
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    title: 'Software Troubleshooting',
    desc: 'Expert diagnosis and repair across all major operating systems, business applications, and platforms.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 6,
    icon: <UserCircle className="w-8 h-8 text-amber-500" />,
    title: 'Dedicated Account Manager',
    desc: 'Your personal point of contact who understands your specific IT environment inside and out.',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
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
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {service.desc}
      </p>
    </div>
  </motion.div>
);

export default function Remote() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('remote');
  const schema = getServiceSchema('Remote IT Support', '24/7 helpdesk, remote desktop troubleshooting, and proactive monitoring.', 'remote');
  
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
      
      {/* Remote Support Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Support Icons */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] opacity-20 text-blue-500"
        >
          <LifeBuoy size={140} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] opacity-25 text-indigo-500"
        >
          <Monitor size={110} />
        </motion.div>

        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[30%] opacity-20 text-purple-500"
        >
          <Wifi size={90} />
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
            <Headphones className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Remote IT Support</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Instant assistance from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">expert engineers</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Don't let technical issues stall your productivity. Get immediate, secure remote support from certified professionals whenever you need it.
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