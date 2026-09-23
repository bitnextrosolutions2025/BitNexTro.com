import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Layers, Cloud, Cpu, Activity, ShieldCheck, ArrowRightLeft, HardDrive } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Server className="w-8 h-8 text-blue-500" />,
    title: 'Server Installation & Configuration',
    desc: 'End-to-end setup of physical and virtual servers optimized for your specific workloads and applications.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <Layers className="w-8 h-8 text-indigo-500" />,
    title: 'Virtual Machine (VM) Setup',
    desc: 'Deploy highly efficient virtual machines to maximize hardware utilization and isolate application environments.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <Cloud className="w-8 h-8 text-emerald-500" />,
    title: 'Cloud Server Deployment',
    desc: 'Provision scalable compute resources on AWS, Azure, or private cloud environments with automated deployment.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    title: 'Hypervisor Management',
    desc: 'Expert administration of VMware ESXi, Microsoft Hyper-V, and KVM for enterprise-grade virtualization.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 5,
    icon: <Activity className="w-8 h-8 text-orange-500" />,
    title: 'Server Monitoring & Optimization',
    desc: 'Proactive performance tuning, bottleneck resolution, and 24/7 monitoring of server health metrics.',
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 6,
    icon: <HardDrive className="w-8 h-8 text-cyan-500" />,
    title: 'Backup & Disaster Recovery',
    desc: 'Implement snapshotting, replication, and failover clustering to ensure business continuity.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  },
  {
    id: 7,
    icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
    title: 'Security Hardening',
    desc: 'Apply OS-level security patches, configure host-based firewalls, and enforce strict access controls.',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    id: 8,
    icon: <ArrowRightLeft className="w-8 h-8 text-amber-500" />,
    title: 'Data Center Migration',
    desc: 'Seamless migration of physical servers to virtual environments (P2V) or cloud platforms with zero downtime.',
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

export default function Servervirtual() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('servervirtual');
  const schema = getServiceSchema('Server & Virtualization', 'Enterprise server management, VMware/Hyper-V virtualization, and data center migration.', 'servervirtual');
  
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
      
      {/* Server/Virtualization Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Servers and Layers */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] opacity-20 text-indigo-500"
        >
          <Server size={140} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] opacity-25 text-blue-500"
        >
          <Layers size={100} />
        </motion.div>

        <motion.div 
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[30%] opacity-20 text-purple-500"
        >
          <Cpu size={90} />
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
            <Server className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 tracking-wide uppercase">Server Virtualization</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Maximize efficiency with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">scalable virtualization</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Reduce hardware footprints and lower costs. We design, deploy, and manage enterprise-grade virtualized environments and high-performance server clusters.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}