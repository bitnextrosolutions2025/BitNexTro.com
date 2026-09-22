import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Zap, Target, Users, CheckCircle, Star, Mail, Phone, MapPin, AlarmClock, ServerCog, Fingerprint, Telescope, Facebook, Linkedin, Twitter, Code, HardDrive, CloudUpload, Shield, Globe, Award, ArrowLeftCircle } from 'lucide-react';
import logo_final from "../assets/t_logo.png"
import pic1 from "../assets/pic1.png"
import vedio from "../assets/vedio2.mp4"
import img3 from "../assets/about.jpeg"
import ServicesSection from './Allservice';
import ContactSection from './ContactUs';
import WhatsAppContact from './Wpmessage';
import App from './ClientHandle';
import WhyChooseUs from './Why';
const HomePage = () => {

  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [vedioshow, setvedioshow] = useState(true)
  const [IsShow, setIsShow] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setvedioshow(false)
      }, 5000);
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handlemessagebtn = () => {
    if (IsShow) {
      return setIsShow(false)
    }
    setIsShow(true)

  }
  const handleclick = (e) => {
    e.preventDefault(); // Prevent default anchor jump
    const target = document.querySelector('#services');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  const handlelink = (link, e) => {
    e.preventDefault(); // Prevent default anchor jump
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }


  const services = [
    { icon: <Zap className="w-8 h-8" />, title: 'IT Infrastructure', desc: 'Custom websites and web applications built with cutting-edge technologies.' },
    { icon: <Target className="w-8 h-8" />, title: 'Networking Solutions', desc: 'Strategic campaigns to boost your online presence and drive growth.' },
    { icon: <Users className="w-8 h-8" />, title: 'Cloud Services', desc: 'Expert guidance to transform your business and achieve your goals.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Data Protection & Backup', desc: 'Comprehensive branding solutions that make your business stand out.' },
    { icon: <Users className="w-8 h-8" />, title: 'Cybersecurity', desc: 'Expert guidance to transform your business and achieve your goals.' },
    { icon: <Users className="w-8 h-8" />, title: 'Server Management', desc: 'Expert guidance to transform your business and achieve your goals.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Managed IT Services', desc: 'Comprehensive branding solutions that make your business stand out.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'System Integration', desc: 'Comprehensive branding solutions that make your business stand out.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Web Development', desc: 'Comprehensive branding solutions that make your business stand out.' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Outstanding service! They transformed our digital presence completely.', rating: 5 },
    { name: 'Michael Chen', role: 'Founder, GrowthLab', text: 'Professional, creative, and results-driven. Highly recommended!', rating: 5 },
    { name: 'Emily Rodriguez', role: 'Director, Innovate Co', text: 'Exceeded our expectations in every way. Truly exceptional work.', rating: 5 }
  ];

  const reasons = [
    'Affordable and flexible pricing',
    'Latest tools and technology',
    'End to end digital solutions',
    'Commitment to long term growth'
  ];
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-500/30 overflow-hidden relative">

      {/* Animated Background removed to maintain clean premium design */}


      {/* Navbar */}

      <WhatsAppContact />
      {/* Cinematic Dark Hero */}
      <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col pt-32 lg:pt-40 pb-16 bg-[#070d10]">
        
        {/* Full Bleed Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            muted
            autoPlay
            loop
          >
            <source src={vedio} type="video/mp4" />
          </video>
        </div>

        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d10] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        
        {/* Architectural Grid Lines (Subtle White) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {/* Vertical line 1 */}
          <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-white/5"></div>
          {/* Vertical line 2 */}
          <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white/5"></div>
          {/* Horizontal line */}
          <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-white/5"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 h-full flex flex-col">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
            }}
            className="flex flex-col items-start w-full lg:max-w-6xl"
          >


            {/* Scaled-down Typography - White Text */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[3.5rem] xl:text-[4.5rem] font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-3xl -mt-4 lg:-mt-10"
            >
              Transforming <br /> 
              Business Reality <br />
              <span className="italic font-serif font-light text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-400 pr-4">Through technology.</span>
            </motion.h1>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
              className="flex flex-col gap-8 w-full max-w-2xl items-start"
            >
              <p className="font-body text-[17px] sm:text-lg lg:text-xl text-white/80 font-medium leading-relaxed">
                Managed IT, Cybersecurity & AI Solutions for Growing Businesses
              </p>

              {/* High-End CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-2 w-full sm:w-auto">
                <button onClick={(e) => handleclick(e)} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  <span className="relative z-10 text-[15px] tracking-wide">
                    Start Your Project
                  </span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                    <ArrowRight size={16} />
                  </div>
                </button>

                <button onClick={(e) => handlelink('#contact', e)} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  <span className="text-[15px] tracking-wide">
                    Talk to an Expert
                  </span>
                  <ArrowRight size={16} className="text-blue-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* <div className='mt-8 h-[600px]  animate-fade-in-up '>

        <Slider />
      </div> */}
      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`relative py-16 lg:py-20 px-6 transition-all duration-1000 bg-[#FAFAFA] overflow-hidden
          ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-green-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
                  About BitNexTro
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.15] tracking-tight">
                Building Smart <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-green-500">Technology</span> for Modern Businesses
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                BitNexTro Solutions is a next-generation IT company focused on transforming ideas into powerful digital solutions. We engineer reliable software, scalable infrastructure, and secure systems that simplify business operations and accelerate growth.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Our mission is to deliver practical, end-to-end IT services — from networking and cybersecurity to enterprise support — enabling organizations to thrive in an ever-evolving digital landscape.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full mt-4">
                <div className="flex flex-col items-start p-5 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-md transition-all hover:-translate-y-1">
                  
                  <ServerCog className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-slate-900 text-[13px] mb-2 uppercase tracking-wider">Managed IT</h3>
                  <p className="text-slate-600 text-sm leading-snug font-medium">Keep your business running.</p></div>
                <div className="flex flex-col items-start p-5 bg-green-50/50 rounded-2xl border border-green-100 hover:shadow-md transition-all hover:-translate-y-1">
                  
                  <Shield className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-slate-900 text-[13px] mb-2 uppercase tracking-wider">Cybersecurity</h3>
                  <p className="text-slate-600 text-sm leading-snug font-medium">Protect your business from evolving threats.</p></div>
                <div className="flex flex-col items-start p-5 bg-purple-50/50 rounded-2xl border border-purple-100 hover:shadow-md transition-all hover:-translate-y-1">
                  
                  <Zap className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-bold text-slate-900 text-[13px] mb-2 uppercase tracking-wider">AI & Automation</h3>
                  <p className="text-slate-600 text-sm leading-snug font-medium">Work smarter. Automate more.</p></div>
              </div>

              <Link 
                to="/about"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Learn More About Us</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* RIGHT VISUAL */}
            <div className="order-1 lg:order-2 relative w-full max-w-[440px] mx-auto lg:ml-auto aspect-square group cursor-pointer perspective-1000">
              {/* Animated Glow Behind */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/30 to-green-400/30 rounded-[2rem] transform rotate-3 scale-100 transition-all duration-700 group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-2xl opacity-50 blur-xl group-hover:blur-2xl group-hover:opacity-80" />
              
              {/* Offset Background Card */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-green-50 rounded-[2rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-8 group-hover:translate-x-3 group-hover:-translate-y-3" />
              
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden transform -rotate-2 transition-all duration-700 group-hover:rotate-0 group-hover:-translate-y-5 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                <img 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-95 group-hover:opacity-100 filter group-hover:brightness-105" 
                  src={img3} 
                  alt="BitNexTro Office" 
                  loading="lazy" 
                  decoding="async" 
                />
                
                {/* Overlay gradient for premium feel */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/5 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
                
                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center justify-between transform transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                  <div className="flex flex-col items-start">
                    <span className="text-3xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-green-500">10+</span>
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-1">Years</span>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-black text-slate-900">24/7</span>
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-1">Support</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="services">
        <ServicesSection />
      </section>
      {/* Why Choose Us */}
      {/* <section id="why" data-animate className={`py-20 px-4 bg-green-500 transition-all duration-1000 ${visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full flex items-center justify-center h-96 bg-linear-to-br rounded-3xl ">
                <img src={pic1} alt="BitNextro IT services team" className='md:h-[350px] ' loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl text-center md:text-left md:text-5xl font-bold mb-8 pb-3 bg-linear-to-r from-[#0700a9] to-gray-900 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                {reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CheckCircle className="text-[#0700a9] shrink-0" />
                    <span className="text-xl md:text-2xl font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id='why'>
        <WhyChooseUs/>
      </section>
<App/>

      {/* Contact Section */}
      <section id="contact" data-animate className={`transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;





