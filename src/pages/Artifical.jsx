import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Bot, LineChart, MessageSquare, Eye, Database, Network } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { getServiceMetadata, getServiceSchema } from '../config/serviceMetadata';

const services = [
  {
    id: 1,
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: 'Machine Learning Solutions',
    desc: 'Custom ML models trained on your proprietary data to automate decision-making and uncover hidden business insights.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 2,
    icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
    title: 'Natural Language Processing',
    desc: 'Extract meaning from unstructured text data, automate document processing, and power advanced sentiment analysis.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    id: 3,
    icon: <Eye className="w-8 h-8 text-emerald-500" />,
    title: 'Computer Vision Applications',
    desc: 'Automate visual inspections, facial recognition, and object detection with high-accuracy computer vision models.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: 4,
    icon: <Bot className="w-8 h-8 text-purple-500" />,
    title: 'AI Chatbot Development',
    desc: 'Deploy intelligent, context-aware conversational agents that resolve customer queries instantly 24/7.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 5,
    icon: <LineChart className="w-8 h-8 text-orange-500" />,
    title: 'Predictive Analytics',
    desc: 'Forecast demand, identify market trends, and anticipate customer behavior with high-precision predictive algorithms.',
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 6,
    icon: <Cpu className="w-8 h-8 text-cyan-500" />,
    title: 'AI Model Training & Deployment',
    desc: 'End-to-end MLOps services from data preparation to model deployment, monitoring, and continuous retraining.',
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

export default function Artifical() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const metadata = getServiceMetadata('artifical');
  const schema = getServiceSchema('AI & Business Automation', 'Enterprise artificial intelligence, machine learning, and business automation solutions.', 'artifical');
  
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
      
      {/* AI Visual Animated Background */}
      <motion.div style={{ y }} className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated AI Brain */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[12%] text-indigo-500"
        >
          <Brain size={150} />
        </motion.div>
        
        {/* Floating AI Nodes */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[15%] opacity-20 text-purple-500"
        >
          <Cpu size={100} />
        </motion.div>

        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[25%] opacity-25 text-cyan-500"
        >
          <Network size={90} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[30%] w-4 h-4 bg-indigo-400 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)]"
        />
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 border border-indigo-200 mb-8"
          >
            <Brain className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 tracking-wide uppercase">AI & Automation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Transform operations with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">intelligent systems</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Leverage cutting-edge machine learning and artificial intelligence to automate workflows, predict trends, and accelerate business growth.
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