import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Zap, Target, Users, CheckCircle, Star, Mail, Phone, MapPin, AlarmClock, ServerCog, Fingerprint, Telescope, Facebook, Linkedin, Twitter, Code, HardDrive, CloudUpload, Shield, Globe, Award, ArrowLeftCircle } from 'lucide-react';
import logo_final from "../assets/f_logo.jpg"
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

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white">

        {/* Animated Gradient Waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient from-blue-50 via-white to-green-50 animate-gradient-shift"></div>
        </div>

        {/* Floating Blobs */}
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-200/30 blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-gray-200/20 blur-[100px]"></div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path className="animate-draw-line" d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path className="animate-draw-line animation-delay-2000" d="M0,300 Q250,250 500,300 T1000,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>


      {/* Navbar */}

      <WhatsAppContact />
      {/* Hero Section */}
      <section
  id="home"
  className="relative h-screen flex items-center justify-center overflow-hidden"
>
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover md:block"
    playsInline
    muted
    autoPlay
    loop
  >
    <source src={vedio} type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
    <h1
      className="text-5xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-[#d5ff03] via-[#40ff00] to-[#6aff00] text-transparent bg-clip-text animate-fade-in-up"
      style={{ fontFamily: "Lato" }}
    >
      Empowering <br /> The next generation of IT <br /> With Zero compromise
    </h1>

    <p className="text-xl md:text-3xl text-white font-bold mb-8 bg-blue-600 inline-block px-4 py-2 rounded-xl animate-bounce">
      Professional services that drive growth, innovation, and success
    </p>
    <br />

    {/* Glassmorphic Floating Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      
      {/* Button 1: Urgent Work (Green Highlight) */}
      <button className="relative px-8 py-3 rounded-full bg-green-600/10 backdrop-blur-lg border border-green-600/50 text-green-700 font-bold tracking-wide shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:bg-green-600/20 transition-all duration-300 flex items-center gap-3 hover:-translate-y-1 cursor-pointer">
        {/* Pulsing indicator for "Urgent" */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
        </span>
        Urgent Work
      </button>

      {/* Button 2: Get a call (Blue Highlight) */}
      <button className="relative px-8 py-3 rounded-full bg-blue-600/20 backdrop-blur-lg border border-blue-600/50 text-blue-700 font-bold tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:bg-blue-600/40 transition-all duration-300 flex items-center gap-2 group hover:-translate-y-1 cursor-pointer">
        Get a call
        {/* Phone Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 group-hover:rotate-12 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </button>
      
    </div>
  </div>
</section>

      {/* <div className='mt-8 h-[600px]  animate-fade-in-up '>

        <Slider />
      </div> */}
      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`relative py-24 px-6 transition-all duration-1000 
  ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          background: "linear-gradient(135deg, rgb(87 233 156), rgb(19 118 68))",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <div className='flex justify-center'>
                <p className="inline-block text-center w-[150px] mb-3 px-4 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                  About BitNextro
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-linear-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent text-center">
                Building Smart Technology for Modern Businesses
              </h2>



              <p className="text-gray-900 text-xl font-bold leading-relaxed mb-5">
                BitNextro Solutions is a next-generation IT company focused on transforming
                ideas into powerful digital solutions. We design reliable software,
                scalable infrastructure, and secure systems that simplify business operations
                and accelerate growth.
              </p>

              <p className="text-gray-900 text-xl font-bold leading-relaxed">
                Our mission is to deliver practical, end-to-end IT services — from networking
                and cybersecurity to enterprise support — enabling organizations to thrive
                in an ever-evolving digital landscape.
              </p>

              {/* CTA */}
              <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition animate-bounce">
                Learn More About Us
              </button>
            </div>

            {/* RIGHT VISUAL / STATS */}
            <div className="relative">
              <img className='rounded-2xl' src={img3} alt="binextro-homepage-pic" loading="lazy" decoding="async" />
            </div>

          </div>
        </div>
      </section>

      <section id="services" className='mt-24'>
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
