import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, HeadphonesIcon, Database, ArrowUpCircle, CheckCircle2, CloudFog, UploadCloud } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    title: 'Cloud Hosting',
    desc: 'Ultra-fast, geo-redundant hosting environments with auto-scaling and zero-downtime deployments.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <UploadCloud className="w-8 h-8 text-indigo-500" />,
    title: 'Cloud Migration',
    desc: 'Seamless lift-and-shift or re-architecture migration with zero data loss and minimal disruption.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8 text-emerald-500" />,
    title: 'Cloud Security',
    desc: 'Multi-layer security posture with real-time threat detection, compliance, and zero-trust architecture.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <HeadphonesIcon className="w-8 h-8 text-purple-500" />,
    title: 'Managed Cloud',
    desc: 'End-to-end cloud operations managed by certified engineers so your team stays focused on growth.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

const features = [
  { icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />, pct: '99.9%', title: '99.9% Uptime', desc: 'Guaranteed SLA-backed availability with multi-region failover and proactive incident response.' },
  { icon: <ArrowUpCircle className="w-6 h-6 text-blue-500" />, pct: '∞', title: 'High Scalability', desc: 'Elastic compute and storage that scales in seconds to match any workload demand, no over-provisioning.' },
  { icon: <Shield className="w-6 h-6 text-purple-500" />, pct: 'AES', title: 'Advanced Encryption', desc: 'AES-256 encryption at rest and in transit with customer-managed keys and hardware security modules.' },
  { icon: <Database className="w-6 h-6 text-orange-500" />, pct: '24/7', title: '24/7 Monitoring', desc: 'AI-augmented observability stack providing instant anomaly detection and automated remediation.' }
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

export default function Cloudservice() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('cloudservice');
  const schema = getServiceSchema('Cloud Services', 'Enterprise cloud hosting, migration, security, and managed services.', 'cloudservice');
  
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
      
      {/* Cloud Service Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating Clouds */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] opacity-20 text-blue-400"
        >
          <Cloud size={140} />
        </motion.div>
        
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[10%] opacity-15 text-indigo-400"
        >
          <CloudFog size={180} />
        </motion.div>

        {/* Floating Server/Data Nodes */}
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[25%] opacity-30 text-purple-500"
        >
          <Server size={80} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[30%] opacity-20 text-cyan-500"
        >
          <Database size={90} />
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
            <Cloud className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Enterprise Cloud Solutions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Scale instantly with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">secure cloud infrastructure</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Purpose-built cloud services engineered for the demands of modern enterprise IT — secure, scalable, and always on.
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