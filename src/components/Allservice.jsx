import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Layout, Smartphone, Zap, ArrowRight, Briefcase,
  Cpu, Globe, Shield, Database, HardDrive, MonitorCloud,
  CloudUpload, Server, Lock, Layers
} from 'lucide-react';

// --- Configuration & Data ---

const services1 = [
  {
    icon: <Code size={28} />,
    title: "Software Engineering",
    desc: ["Custom SaaS", "Mobile Apps", "DevOps Pipelines", "QA Automation"],
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
    linear: "from-blue-500 to-cyan-400",
    bg: "bg-blue-500/10"
  },
  {
    icon: <Server size={28} />,
    title: "Infrastructure & Hardware",
    desc: ["High-Perf Servers", "Virtualization", "Network Design", "Hardware Lifecycle"],
    color: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
    linear: "from-purple-500 to-pink-400",
    bg: "bg-purple-500/10"
  },
  {
    icon: <Layers size={28} />,
    title: "Managed Networking",
    desc: ["Network Security", "VoIP Solutions", "VPN Configuration", "24/7 Monitoring"],
    color: "text-orange-400",
    glow: "group-hover:shadow-orange-500/20",
    linear: "from-orange-500 to-red-400",
    bg: "bg-orange-500/10"
  },
  {
    icon: <CloudUpload size={28} />,
    title: "Cloud Architecture",
    desc: ["AWS/Azure Strategy", "Migration", "Serverless", "Cost Optimization"],
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    linear: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-500/10"
  },
  {
    icon: <Database size={28} />,
    title: "Data & Analytics",
    desc: ["Big Data Pipelines", "BI Dashboards", "Disaster Recovery", "Warehouse Design"],
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
    linear: "from-cyan-500 to-blue-400",
    bg: "bg-cyan-500/10"
  },
  {
    icon: <Shield size={28} />,
    title: "Cybersecurity",
    desc: ["Penetration Testing", "Zero Trust Arch", "Compliance (SOC2)", "Threat Intel"],
    color: "text-rose-400",
    glow: "group-hover:shadow-rose-500/20",
    linear: "from-rose-500 to-red-400",
    bg: "bg-rose-500/10"
  },
  {
    icon: <Globe size={28} />,
    title: "Digital Experience",
    desc: ["UI/UX Design", "Brand Strategy", "SEO/SEM", "Conversion Opt"],
    color: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
    linear: "from-amber-500 to-orange-400",
    bg: "bg-amber-500/10"
  },
  {
    icon: <Cpu size={28} />,
    title: "Deep Tech & AI",
    desc: ["LLM Integration", "Computer Vision", "IoT Ecosystems", "Blockchain"],
    color: "text-indigo-400",
    glow: "group-hover:shadow-indigo-500/20",
    linear: "from-indigo-500 to-violet-400",
    bg: "bg-indigo-500/10"
  }
];
const services = [
  {
    icon: <Code size={28} />,
    title: "Software Development & Programming",
    desc: ["Custom Software", "Web & Mobile Apps", "DevOps & Automation", "Maintenance & Testing"],
    color: "text-indigo-400",
    glow: "group-hover:shadow-indigo-500/20",
    linear: "from-indigo-500 to-violet-400",
    bg: "bg-indigo-500/10"
  },
  {
    icon: <HardDrive size={28} />,
    title: "Hardware & Infrastructure Services",
    desc: ["Workstations & Servers", "OS & Virtualization", "Network Devices", "Hardware Maintenance"],
    color: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
    linear: "from-purple-500 to-pink-400",
    bg: "bg-purple-500/10"
  },
  {
    icon: <MonitorCloud size={28} />,
    title: "Hardware Maintenance",
    desc: ["Network Setup", "Managed Networking", "VoIP and Collaboration", "Network Security"],
    color: "text-orange-400",
    glow: "group-hover:shadow-orange-500/20",
    linear: "from-orange-500 to-red-400",
    bg: "bg-orange-500/10"
  },
  {
    icon: <CloudUpload size={28} />,
    title: "Cloud Computing & Virtualization",
    desc: ["Cloud & Management", "IaaS ", "PaaS", "SaaS"],
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    linear: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-500/10"
  },
  {
    icon: <Database size={28} />,
    title: "Data Storage, Backup & Analytics",
    desc: [
      "SAN/NAS & Cloud Storage Setup",
      "Database Administration",
      "Backup & Disaster Recovery",
      "Data Analytics & BI Solutions"
    ],
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
    linear: "from-cyan-500 to-blue-400",
    bg: "bg-cyan-500/10"
  },
  {
    icon: <Shield size={28} />,
    title: "Cybersecurity & Compliance",
    desc: [
      "Risk Assessment & Threat Protection",
      "Encryption & Access Control",
      "DLP & Security Monitoring",
      "Identity & Compliance Management"
    ],
        color: "text-rose-400",
    glow: "group-hover:shadow-rose-500/20",
    linear: "from-rose-500 to-red-400",
    bg: "bg-rose-500/10"
  },
  {
    icon: <Globe size={28} />,
    title: "Digital & Marketing Services",
    desc: [
      "Web Design & Development",
      "Graphic & Multimedia Design",
      "SEO & Social Media Management",
      "Email & Digital Advertising"
    ],
   color: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
    linear: "from-amber-500 to-orange-400",
    bg: "bg-amber-500/10"
  },
  {
    icon: <Cpu size={28} />,
    title: "Emerging Technology & Innovation",
    desc: [
      "AI & Machine Learning",
      "Blockchain & Cryptocurrency",
      "IoT & Smart Systems",
      "AR/VR & RPA Solutions"
    ],
       color: "text-indigo-400",
    glow: "group-hover:shadow-indigo-500/20",
    linear: "from-indigo-500 to-violet-400",
    bg: "bg-indigo-500/10"
  },
  // {
  //   icon: <Briefcase size={28} />,
  //   title: "Enterprise Solutions & Consulting",
  //   desc: [
  //     "IT Consulting & Strategy",
  //     "Managed IT Services",
  //     "E-commerce & ERP/CRM",
  //     "Migration & Professional Services"
  //   ],
  //   color: "from-indigo-400 to-violet-300"
  // }


];
// --- Components ---

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className={`group relative h-full flex flex-col p-6 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 transition-all duration-500 hover:border-slate-600/50 hover:-translate-y-1 shadow-lg ${service.glow}`}
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${service.linear}`} />

      {/* Header: Icon & Title */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className={`p-3 rounded-2xl ${service.bg} ring-1 ring-inset ring-white/5`}>
          <div className={`${service.color}`}>
            {service.icon}
          </div>
        </div>

        {/* Animated Arrow */}
        <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <div className={`p-2 rounded-full ${service.bg} ${service.color}`}>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      <div className="relative z-10 grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
          {service.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {service.desc.map((item, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-medium rounded-md border border-slate-700 bg-slate-800/50 text-slate-400 group-hover:border-slate-600 group-hover:text-slate-300 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom linear Line */}
      <div className={`absolute bottom-0 left-6 right-6 h-px bg-linear-to-r ${service.linear} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden min-h-screen font-sans">

      {/* Background Decor: Grid */}
      <div className="absolute inset-0 bg-[linear-linear(to_right,#80808012_1px,transparent_1px),linear-linear(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      {/* Background Decor: Spotlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-medium mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <h1>Our Expertise</h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Future-Proof <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">Solutions</span> <br />
            For Modern Enterprises.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            We blend cutting-edge engineering with strategic innovation to deliver
            scalable, secure, and high-impact digital ecosystems.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <button className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;