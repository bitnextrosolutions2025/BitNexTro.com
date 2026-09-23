import React from 'react'
import logo_final from "../assets/t_logo.png"
import { Award, CloudUpload, Code, Facebook, Globe, Instagram, Linkedin, Shield, Twitter, X, Server, Cpu } from 'lucide-react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'

export default function Footer() {
  const lastitem = [
    { name: "Privacy Policy", link: "privacy" },
    { name: "Terms & Conditions", link: "terms" },
    { name: "Refund Policy", link: "refund" },
  ]
  const handleclick = (e, link) => {
    e.preventDefault();
    const llink = link.toLocaleLowerCase()// Prevent default anchor jump
    const target = document.querySelector(`#${llink}`);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  const handlescroll = () => {
    // Scroll handled by ScrollToTop component
  }
  return (
    <footer className="relative z-10 bg-[#0A192F] text-slate-300 pt-16 pb-8 px-8 overflow-hidden">

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-10">

          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-1 rounded-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-block">
              <img className="h-20 md:h-24 object-cover rounded-lg" src={logo_final} alt="bitnextro-footer-logo" loading="lazy" decoding="async" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Empowering the next generation of IT with zero compromise. We build digital futures.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61585936040133" target='_blank' rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:border-transparent hover:scale-110 hover:-translate-y-1 group">
                <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/bitnextro-solutions-private-limited-a3409a3a5" target='_blank' rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#0077b5] hover:border-transparent hover:scale-110 hover:-translate-y-1 group">
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
              <a href="https://x.com/bitnextro" target='_blank' rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-black hover:border-transparent hover:scale-110 hover:-translate-y-1 group">
                <X className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/bitnextro/" target='_blank' rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent hover:scale-110 hover:-translate-y-1 group">
                <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Service', action: 'openMegaMenu' },
                { name: 'Contact', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  {link.action ? (
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('openMegaMenu'))}
                      className="text-slate-400 hover:text-blue-400 font-medium transition-all duration-300 flex items-center gap-3 group w-full text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => {
                        if (link.name === 'Home' && window.location.pathname === '/') {
                          window.scrollTo(0, 0);
                        }
                      }}
                      className="text-slate-400 hover:text-blue-400 font-medium transition-all duration-300 flex items-center gap-3 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Our Services</h4>
            <ul className="space-y-4">
                              {[
                  { icon: <Server size={18} />, text: 'Managed IT Services', color: 'text-blue-400' },
                  { icon: <Shield size={18} />, text: 'Cybersecurity', color: 'text-emerald-400' },
                  { icon: <Globe size={18} />, text: 'Network & Infrastructure', color: 'text-purple-400' },
                  { icon: <CloudUpload size={18} />, text: 'Cloud & Backup', color: 'text-cyan-400' },
                  { icon: <Cpu size={18} />, text: 'AI & Business Automation', color: 'text-orange-400' },
                  { icon: <Code size={18} />, text: 'Software & Digital Solutions', color: 'text-indigo-400' },
                ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('openMegaMenu'))}
                    className="w-full text-left flex items-center gap-3 text-slate-400 hover:text-white font-medium transition-all duration-300 group"
                  >
                    <span className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>{service.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">
              Subscribe to get special offers, tech updates, and inside looks at our new services!
            </p>
            <div className="space-y-3 relative group/form">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:bg-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] relative overflow-hidden group/btn border border-white/10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Subscribe Now
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 pb-2 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="https://www.linkedin.com/in/sekh-rijwan-026740311/" target='_blank' rel="noopener noreferrer" className="group">
            <p className="text-slate-500 text-sm font-medium flex items-center gap-2 group-hover:text-slate-300 transition-colors">
              Made with <span className="text-red-500 animate-pulse group-hover:scale-125 transition-transform">❤</span> by Rijwan
            </p>
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {lastitem.map((item, index) => (
              <Link onClick={handlescroll} to={`/${item.link}`} key={index} className="text-slate-500 font-medium hover:text-blue-400 transition-colors duration-300">
                {item.name}
              </Link>
            ))}
          </div>

          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} BitNextro. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
