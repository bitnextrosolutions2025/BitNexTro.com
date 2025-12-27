import React from 'react'
import logo_final from "../assets/f_logo.jpg"
import { Award, CloudUpload, Code, Facebook, Globe, Linkedin, Shield, Twitter, X } from 'lucide-react'
export default function Footer() {
    const handleclick = (e,link) => {
    e.preventDefault();
    const llink=link.toLocaleLowerCase()// Prevent default anchor jump
    const target = document.querySelector(`#${llink}`);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  return (
    <footer className="relative z-10 bg-linear-to-br from-sky-900 via-sky-800 to-sky-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                <img className="h-28 rounded-[10px] object-cover " src={logo_final} alt="" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering
                The next generation of IT
                With Zero compromise
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl"><Facebook /></span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl"><Linkedin /></span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl"><X /></span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Service','Contact'].map((link,i) => (
                  <li key={i}>
                    <a href={`#${link.toLocaleLowerCase()}`} onClick={(e) => { handleclick(e,link) }} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { icon: <Award />, text: 'IT Infrastructure setup and management', color: 'text-orange-400' },
                  { icon: <Code />, text: 'Software Development', color: 'text-blue-400' },
                  { icon: <CloudUpload />, text: 'Cloud Computing', color: 'text-red-400 ' },
                  { icon: <Shield />, text: 'Cybersecurity', color: 'text-green-400 ' },
                  { icon: <Globe />, text: 'Digital & Marketing ', color: 'text-blue-400 ' },

                ].map((service,i) => (
                  <a href="#service" onClick={handleclick} key={i}><li key={service.text} className=" cursor-pointer flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-2">
                    <span className={`text-lg ${service.color} `}>{service.icon}</span>
                    {service.text}
                  </li>
                  </a>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-6">
                Subscribe to get special offers, free giveaways, and updates on new menu items!
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-300"
                />
                <button className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                Made with <span className="text-red-500">❤</span> by Rijwan
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 BitNextro. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                {['Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((item) => (
                  <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
