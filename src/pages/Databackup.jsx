import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, HardDrive, ShieldCheck, Cloud, Server, Activity, CheckCircle2, Lock, Monitor, Zap, Scale } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    title: "Cloud Backup",
    desc: "Seamlessly back up all your data to geographically distributed cloud nodes with automatic redundancy and failover.",
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <Server className="w-8 h-8 text-indigo-500" />,
    title: "Server Backup",
    desc: "Full-image and incremental server backups with deduplication technology to minimize storage costs and transfer times.",
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    title: "Disaster Recovery",
    desc: "Rapid recovery protocols ensuring your systems are restored in minutes, not hours, with pre-tested failover environments.",
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <Activity className="w-8 h-8 text-purple-500" />,
    title: "Automated Backup",
    desc: "Set it and forget it. Intelligent scheduling adapts to your workload patterns for zero-impact automated protection.",
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

const features = [
  { icon: <Lock className="w-6 h-6 text-emerald-500" />, title: "End-to-End Encryption", desc: "Military-grade AES-256 encryption in transit and at rest ensures your data is never accessible to unauthorized parties." },
  { icon: <Monitor className="w-6 h-6 text-blue-500" />, title: "24/7 Monitoring", desc: "Our AI-powered monitoring engine watches every backup job, storage node, and replication stream around the clock." },
  { icon: <Zap className="w-6 h-6 text-purple-500" />, title: "Fast Recovery", desc: "Granular file-level and bare-metal recovery options deliver your data back exactly where you need it, typically within minutes." },
  { icon: <Scale className="w-6 h-6 text-orange-500" />, title: "Scalable Storage", desc: "Start with gigabytes, grow to petabytes. Our elastic storage architecture scales automatically with your business." }
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

export default function Databackup() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('databackup');
  const schema = getServiceSchema('Data Backup & Recovery', 'Enterprise data backup, disaster recovery, and automated storage solutions.', 'databackup');
  
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
      
      {/* Backup Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Databases/Servers */}
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] opacity-20 text-blue-500"
        >
          <Database size={130} />
        </motion.div>
        
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] opacity-25 text-indigo-500"
        >
          <HardDrive size={100} />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[30%] opacity-30 text-emerald-500"
        >
          <ShieldCheck size={90} />
        </motion.div>
        
        {/* Data transfer particles */}
        <motion.div 
          animate={{ y: [100, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[20%] w-2 h-8 bg-gradient-to-t from-transparent to-blue-400 rounded-full"
        />
        <motion.div 
          animate={{ y: [100, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-[40%] right-[25%] w-2 h-8 bg-gradient-to-t from-transparent to-indigo-400 rounded-full"
        />
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-8"
          >
            <Database className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Data Backup & Recovery</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Never lose data with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">bulletproof backups</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Protect your most valuable asset with automated, encrypted, and instantly recoverable data backup solutions tailored for enterprise resilience.
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