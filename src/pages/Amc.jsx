import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, HeadphonesIcon, ShieldCheck, Database, HardDrive, Wrench, ArrowRight, Settings, CheckCircle2 } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    title: 'Proactive System Monitoring',
    desc: 'Regular health checks, performance review and preventive maintenance.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <HeadphonesIcon className="w-8 h-8 text-emerald-500" />,
    title: 'Priority IT Support',
    desc: 'Fast response remote support with scheduled onsite visits.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
    title: 'Security & Compliance',
    desc: 'Basic firewall review, antivirus management and patch updates.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 4,
    icon: <Database className="w-8 h-8 text-orange-500" />,
    title: 'Data Backup Assistance',
    desc: 'Daily/weekly backup configuration and recovery guidance.',
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 5,
    icon: <HardDrive className="w-8 h-8 text-cyan-500" />,
    title: 'Infrastructure Optimization',
    desc: 'Network tuning, storage cleanup and system optimization.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  },
  {
    id: 6,
    icon: <Wrench className="w-8 h-8 text-rose-500" />,
    title: 'Remote & On-site Support',
    desc: 'Remote troubleshooting plus physical visits when required.',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  }
];

const plans = [
  { name: 'Silver', color: 'bg-slate-400', features: ['Email Support', 'Monthly health check', 'Remote troubleshooting', 'Quarterly onsite', 'Basic backup assistance'] },
  { name: 'Gold', color: 'bg-emerald-500', features: ['Phone + Email support', 'Monthly reports', 'Quarterly onsite', 'Patch update', 'Firewall basic review'], popular: true },
  { name: 'Platinum', color: 'bg-indigo-500', features: ['Dedicated engineer', 'Weekly visits', 'Server monitoring', 'Backup + DR', 'Priority support'] },
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

const PlanCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={`relative flex flex-col p-8 rounded-[2rem] bg-white border ${plan.popular ? 'border-emerald-300 shadow-xl scale-105' : 'border-slate-200 shadow-sm'} overflow-hidden`}
  >
    {plan.popular && (
      <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500" />
    )}
    <h3 className="text-2xl font-black text-slate-900 mb-6">{plan.name}</h3>
    <ul className="space-y-4 mb-8 flex-grow">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-600">
          <CheckCircle2 className={`w-5 h-5 ${plan.color.replace('bg-', 'text-')}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold text-white transition-all hover:shadow-lg ${plan.color} ${plan.popular ? 'hover:bg-emerald-600' : 'hover:opacity-90'}`}>
      Select Plan
    </button>
  </motion.div>
);

export default function Amc() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('amc');
  const schema = getServiceSchema('IT AMC Services', 'Comprehensive IT Annual Maintenance Contracts including proactive monitoring, priority support, and infrastructure optimization.', 'amc');
  
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
      
      {/* IT Support Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Gears and Tools */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] opacity-30 text-emerald-500"
        >
          <Settings size={120} />
        </motion.div>
        
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[35%] left-[18%] opacity-20 text-blue-500"
        >
          <Settings size={80} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[15%] opacity-20 text-indigo-500"
        >
          <Wrench size={100} />
        </motion.div>

        {/* Pulse Heartbeat for Monitoring */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[30%] opacity-30 text-rose-500"
        >
          <Activity size={90} />
        </motion.div>
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 border border-emerald-200 mb-8"
          >
            <HeadphonesIcon className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 tracking-wide uppercase">IT AMC Services</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Uninterrupted operations with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">priority support</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Keep your business running smoothly with our proactive IT maintenance contracts. We monitor, manage, and secure your infrastructure 24/7.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Pricing/Plans Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Choose Your Support Level</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Flexible AMC packages tailored to fit the specific needs and size of your business infrastructure.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}