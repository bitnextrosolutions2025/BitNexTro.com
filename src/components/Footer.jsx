import React from 'react'
import logo_final from "../assets/f_logo.jpg"
import { Award, CloudUpload, Code, Facebook, Globe, Instagram, Linkedin, Shield, Twitter, X } from 'lucide-react'
import { Link } from 'react-router'
export default function Footer() {
  const lastitem=[
    {name:"Privacy Policy",link:"privacy"},
    {name:"Terms & Conditions",link:"terms"},
    {name:"Refund Policy",link:"refund"},
  ]
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
    const handlescroll = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }
  return (
    <footer className="relative z-10 bg-white text-gray-900 py-16 px-8 border-t-2 border-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                <img className="h-28 rounded-[10px] object-cover " src={logo_final} alt="bitnextro-footer-logo" loading="lazy" decoding="async" />
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Empowering
                The next generation of IT
                With Zero compromise
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61585936040133" target='_blank'className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-all duration-300 hover:scale-110 text-blue-600">
                  <span className="text-xl"><Facebook /></span>
                </a>
                <a href=" https://www.linkedin.com/in/bitnextro-solutions-private-limited-a3409a3a5" target='_blank'className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-all duration-300 hover:scale-110 text-blue-600">
                  <span className="text-xl"><Linkedin /></span>
                </a>
                <a href="https://x.com/bitnextro" target='_blank' className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-all duration-300 hover:scale-110 text-blue-600">
                  <span className="text-xl"><X /></span>
                </a>
                <a href="https://www.instagram.com/bitnextro/" target='_blank' className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-all duration-300 hover:scale-110 text-blue-600">
                  <span className="text-xl"><Instagram /></span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-600">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Service','Contact'].map((link,i) => (
                  <li key={i}>
                    <a href={`#${link.toLocaleLowerCase()}`} onClick={(e) => { handleclick(e,link) }} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-600">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { icon: <Award />, text: 'IT Infrastructure setup and management', color: 'text-green-600' },
                  { icon: <Code />, text: 'Software Development', color: 'text-blue-600' },
                  { icon: <CloudUpload />, text: 'Cloud Computing', color: 'text-blue-600 ' },
                  { icon: <Shield />, text: 'Cybersecurity', color: 'text-green-600 ' },
                  { icon: <Globe />, text: 'Digital & Marketing ', color: 'text-blue-600 ' },

                ].map((service,i) => (
                  <a href="#service" onClick={handleclick} key={i}><li key={service.text} className=" cursor-pointer flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 mb-2">
                    <span className={`text-lg ${service.color} `}>{service.icon}</span>
                    {service.text}
                  </li>
                  </a>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-600">Stay Updated</h4>
              <p className="text-gray-600 text-sm mb-6">
                Subscribe to get special offers, free giveaways, and updates on new menu items!
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors duration-300"
                />
                <button className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <a href="https://www.linkedin.com/in/sekh-rijwan-026740311/" target='_blank'> <p className="text-gray-600 text-sm flex items-center gap-2">
                Made with <span className="text-red-500">❤</span> by Rijwan
              </p></a>
              <p className="text-gray-600 text-sm">
                © 2025 BitNextro. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                {lastitem.map((item,index) => (
                  <Link onClick={handlescroll} to={`/${item.link}`} key={index}  className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
