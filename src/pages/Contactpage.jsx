import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowRight, Globe, Shield, CheckCircle } from 'lucide-react';
import { handleError } from '../components/ErrorMessage';

// --- Utility: Animated Counter ---
// Animates numbers up from 0 to their final value
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric value for animation
    const numericEnd = parseInt(end.toString().replace(/\D/g, '')) || 0;

    let start = 0;
    const increment = numericEnd / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEnd) {
        setCount(numericEnd);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef(null);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyTMstU-QSoR-copgHz3ipUrfsKz00o6VJU_dQV0RI7tjbLimY71GIKPazrLZZuIay3/exec';
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate network request
      fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
        .then((response) => {
          setSubmitted(true);
          setIsSubmitting(false);
          setFormData({ fullname: '', email: '', phone: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        })
        .catch((error) => { console.error('Error!', error.message); handleError("Some error is occurred") });
            
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Global Support',
      detail: 'info@bitnextro.com',
      subDetail: 'Typical reply: < 2 hours',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Priority Line',
      detail: '+91 93308 55877',
      subDetail: 'Mon-Fri 9am-6pm IST',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Headquarters',
      detail: '5, Park Lane, Park Street',
      subDetail: 'Kolkata - 700016, WB, India',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Digital Presence',
      detail: 'Worldwide Remote',
      subDetail: 'Serving 50+ Countries',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-500/30 overflow-hidden relative">

      {/* --- Animated Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* --- Header Section --- */}
      <div className="relative z-10 pt-20 pb-20 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 mt-2.5">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Projects
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Let's Engineer <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
              Your Vision.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business infrastructure? Reach out to BitNextro Solutions for enterprise-grade consultation and development.
          </p>
        </div>
      </div>

      {/* --- Floating Contact Cards --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`bg-white/60 backdrop-blur-xl border ${item.border} rounded-2xl p-6 hover:translate-y-[-5px] transition-all duration-300 shadow-lg group`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={item.color}>{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-700 font-medium mb-1">{item.detail}</p>
              <p className="text-slate-600 text-xs uppercase tracking-wider">{item.subDetail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Main Layout: Form & Value Props --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Form Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500"></div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Send Message</h2>
                <p className="text-slate-600 mt-2">Connect with our engineering team directly.</p>
              </div>

              {submitted ? (
                <div className="h-96 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received</h3>
                  <p className="text-slate-600 max-w-xs mx-auto">
                    Thanks for contacting BitNextro. Our team will review your requirements and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" ref={form}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 text-slate-900 placeholder-slate-600`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 text-slate-900 placeholder-slate-600`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 text-slate-900 placeholder-slate-600"
                        placeholder="+91 ..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">Inquiry Type</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 text-slate-700"
                      >
                        <option value="">Select Category</option>
                        <option value="Enterprise">Enterprise Solutions</option>
                        <option value="Consulting">IT Consulting</option>
                        <option value="Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Project Details</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 text-slate-900 placeholder-slate-600 resize-none`}
                      placeholder="Describe your requirements, timeline, and goals..."
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-xs ml-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : (
                      <>
                        Initiate Request <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Map & Value Props */}
          <div className="lg:col-span-5 space-y-8">

            {/* Stylized Map Placeholder */}
            <div className="bg-white backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 shadow-xl group">
              <div className="h-64 relative bg-slate-100">
                {/* Abstract Map UI */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.4900536014266!2d88.35408027475646!3d22.55173033373591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1b53dab08d9575%3A0x8d2860d0a734ab9f!2sBITNEXTRO%20SOLUTIONS%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1769104804015!5m2!1sen!2sin" width="600" height="450"></iframe>
              </div>
            </div>

            {/* Service Level Agreements (Stats) */}
            <div className="bg-white backdrop-blur-md rounded-3xl p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" /> Service Guarantees
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                    1
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold flex items-center gap-2">
                      <AnimatedCounter end={24} suffix="/7" /> Support
                    </h4>
                    <p className="text-sm text-slate-600">Round-the-clock infrastructure monitoring.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">
                    2
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold flex items-center gap-2">
                      <AnimatedCounter end={99} suffix=".9%" /> Uptime
                    </h4>
                    <p className="text-sm text-slate-600">Enterprise-grade reliability for all systems.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold border border-amber-500/20">
                    3
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold flex items-center gap-2">
                      <AnimatedCounter end={1} /> Hour Response
                    </h4>
                    <p className="text-sm text-slate-600">Guaranteed initial response time for critical issues.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-white/5 transition-colors text-sm font-medium">
                  View Full SLA Documentation
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
