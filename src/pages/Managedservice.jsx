import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Map, Rocket, Activity, ShieldCheck, Zap, Globe, Award, Briefcase, BarChart, Settings, Shield } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Search className="w-8 h-8 text-blue-500" />,
    title: 'Discovery & Audit',
    desc: 'Deep-dive assessment of your infrastructure, mapping every asset, risk, and gap before we write a single line of policy.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <Map className="w-8 h-8 text-indigo-500" />,
    title: 'Strategy & Design',
    desc: 'Tailored managed services blueprint with defined SLAs, escalation paths, tooling stack, and phased implementation roadmap.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <Rocket className="w-8 h-8 text-emerald-500" />,
    title: 'Onboarding & Deployment',
    desc: 'Zero-disruption cutover. Agents, integrations, and automation workflows live within days — your team barely notices.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <Activity className="w-8 h-8 text-purple-500" />,
    title: 'Monitor & Optimise',
    desc: '24/7 monitoring, executive monthly reports, and continuous service improvements that scale with your business.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

const features = [
  { icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, title: 'Zero-Trust Security', desc: 'Compliance-ready controls and layered posture management across every endpoint and workload.' },
  { icon: <Zap className="w-6 h-6 text-amber-500" />, title: 'Sub-15min P1 Response', desc: 'Guaranteed by SLA — not just a promise, a contractual commitment we meet every single month.' },
  { icon: <Globe className="w-6 h-6 text-blue-500" />, title: 'Vendor-Neutral Expertise', desc: 'We work with your existing stack. No forced migrations, no hidden lock-in, no agenda.' },
  { icon: <Award className="w-6 h-6 text-rose-500" />, title: 'Certified Engineering', desc: 'Multi-certified engineers across cloud, on-premise, hybrid, and edge infrastructure.' }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[linear-gradient(to_bottom_left,#e0e7ff,transparent)] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col h-full">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {service.desc}
      </p>
    </div>
  </motion.div>
);

export default function Managedservice() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('managedservice');
  const schema = getServiceSchema('Managed IT Services', 'End-to-end managed IT services, infrastructure monitoring, and IT strategy.', 'managedservice');
  
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
      
      {/* Managed IT Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Corporate/IT Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] opacity-20 text-indigo-500"
        >
          <Briefcase size={120} />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] opacity-25 text-emerald-500"
        >
          <BarChart size={100} />
        </motion.div>

        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[30%] opacity-20 text-blue-500"
        >
          <Settings size={90} />
        </motion.div>
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 border border-indigo-200 mb-8"
          >
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 tracking-wide uppercase">Managed IT Services</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Empower your team with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">fully managed IT</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Offload the burden of IT management. We provide end-to-end infrastructure monitoring, strategic design, and 24/7 expert support.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        

      </div>
    </div>
  );
}