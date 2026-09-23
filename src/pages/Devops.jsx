import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TerminalSquare, GitBranch, Boxes, Repeat, ShieldCheck, Activity, Terminal, PlayCircle } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <PlayCircle className="w-8 h-8 text-blue-500" />,
    title: 'CI/CD Pipeline Setup',
    desc: 'Automate your software delivery process with continuous integration and continuous deployment pipelines for faster, reliable releases.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <TerminalSquare className="w-8 h-8 text-indigo-500" />,
    title: 'Infrastructure as Code',
    desc: 'Provision and manage your cloud infrastructure through machine-readable definition files using Terraform and Ansible.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <Boxes className="w-8 h-8 text-emerald-500" />,
    title: 'Container Orchestration',
    desc: 'Deploy and manage containerized applications at scale using Kubernetes and Docker Swarm for high availability.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <Repeat className="w-8 h-8 text-purple-500" />,
    title: 'Cloud Automation',
    desc: 'Eliminate manual tasks with intelligent cloud automation, auto-scaling rules, and automated resource provisioning.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 5,
    icon: <Activity className="w-8 h-8 text-orange-500" />,
    title: 'Monitoring & Observability',
    desc: 'Implement comprehensive logging, metrics, and tracing to proactively detect and resolve issues before they affect users.',
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 6,
    icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />,
    title: 'DevSecOps Integration',
    desc: 'Embed security into every phase of your software development lifecycle with automated vulnerability scanning and compliance checks.',
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
    className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[linear-gradient(to_bottom_left,#e0f2fe,transparent)] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col h-full">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {service.desc}
      </p>
    </div>
  </motion.div>
);

export default function Devops() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('devops');
  const schema = getServiceSchema('DevOps Services', 'Enterprise DevOps solutions, CI/CD automation, and infrastructure as code.', 'devops');
  
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
      
      {/* DevOps Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated DevOps Pipeline/Git Nodes */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] opacity-20 text-cyan-500"
        >
          <Repeat size={120} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[15%] opacity-20 text-indigo-500"
        >
          <GitBranch size={90} />
        </motion.div>

        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[25%] opacity-30 text-blue-500"
        >
          <Boxes size={100} />
        </motion.div>
        
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[30%] opacity-20 text-emerald-500"
        >
          <Terminal size={70} />
        </motion.div>
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-200 mb-8"
          >
            <GitBranch className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-bold text-cyan-700 tracking-wide uppercase">DevOps Engineering</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Accelerate delivery with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">continuous automation</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Bridge the gap between development and operations. Streamline your software delivery lifecycle with automated pipelines, infrastructure as code, and container orchestration.
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