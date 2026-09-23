import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Code2, ShoppingCart, LayoutTemplate, Zap, Wrench, Smartphone, Monitor, Code } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Palette className="w-8 h-8 text-rose-500" />,
    title: 'Custom Web Design',
    desc: 'Bespoke digital experiences built from scratch — stunning, responsive, and perfectly on-brand.',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    id: 2,
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    title: 'Frontend Development',
    desc: 'Blazing-fast React & Next.js builds with silky animations and pixel-perfect implementation.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 3,
    icon: <ShoppingCart className="w-8 h-8 text-emerald-500" />,
    title: 'E-Commerce Solutions',
    desc: 'High-converting storefronts with seamless checkout flows and powerful backend integrations.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <LayoutTemplate className="w-8 h-8 text-indigo-500" />,
    title: 'CMS Integration',
    desc: 'Empower your team with intuitive content management — WordPress, Sanity, Contentful, and more.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 5,
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    title: 'Performance Optimization',
    desc: 'Sub-second load times, Core Web Vitals excellence, and technical SEO that drives organic growth.',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
  {
    id: 6,
    icon: <Wrench className="w-8 h-8 text-slate-500" />,
    title: 'Maintenance & Support',
    desc: 'Ongoing care packages to keep your site secure, updated, and evolving with your business.',
    color: 'text-slate-500',
    bg: 'bg-slate-50'
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-rose-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[linear-gradient(to_bottom_left,#fff1f2,transparent)] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col h-full">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} mb-6 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {service.desc}
      </p>
    </div>
  </motion.div>
);

export default function Websitedev() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('websitedev');
  const schema = getServiceSchema('Website Development', 'Custom website design, frontend development, e-commerce solutions, and performance optimization.', 'websitedev');
  
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
      
      {/* Web Dev Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Web Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] opacity-20 text-rose-500"
        >
          <Monitor size={150} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] opacity-25 text-blue-500"
        >
          <Smartphone size={100} />
        </motion.div>

        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[30%] opacity-20 text-emerald-500"
        >
          <Code size={120} />
        </motion.div>
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 border border-rose-200 mb-8"
          >
            <Code2 className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-bold text-rose-700 tracking-wide uppercase">Web Development</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Build digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">captivate and convert</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            From high-performance corporate sites to complex e-commerce platforms, we engineer modern web applications tailored perfectly to your brand.
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