import React, { useState, useRef } from "react";
import logo_final_p from "../assets/f_logo.png"
import { ChevronDown, Library, Menu, X } from "lucide-react";
import Head from "./Head";
import { Link, useLocation } from "react-router";
const servicesData = [
  {
    id: "hardware",
    link:"hardware",
    title: "Hardware Support",
    items: [
      "On-Site Hardware Repair",
      "Server & Workstation Setup",
      "Network Device Management",
      "Hardware Procurement",
      "Preventive Maintenance",
      "Peripheral Support",
    ],
  },
{
  id: "network",
  title: "Network Services",
  link:"network",
  items: [
    "LAN & WAN Setup and Configuration",
    "Router & Switch Installation",
    "Firewall Configuration & Security",
    "Server Installation & Management",
    "On-Site Hardware Troubleshooting",
    "Network Monitoring & Optimization",
    "Wi-Fi Setup & Access Point Configuration",
    "VPN Setup & Remote Access Solutions",
    "Network Device Management",
    "Preventive Maintenance & System Upgrades"
  ]
},
{
  id: "amc",
  title: "Annual Maintenance Contract (AMC)",
  link:"amc",
  items: [
    "24/7 Technical Support",
    "Scheduled Preventive Maintenance",
    "Security & Performance Monitoring",
    "Regular Data Backup",
    "Bug Fixing & Feature Updates",
    "Priority Issue Resolution",
  ],
},

  {
    id: "backup",
    title: "Data Backup & Recovery",
    link:"databackup",
    items: [
      "Automated Cloud Backup",
      "Disaster Recovery Planning",
      "On-Premise Backup Solutions",
      "Data Restoration Services",
      "Backup Monitoring & Alerts",
      "Compliance-Ready Archiving",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Services",
    link:"cloudservice",
    items: [
      "Cloud Migration",
      "Microsoft 365 (O365)",
      "Azure & AWS Management",
      "Cloud Storage Solutions",
      "Virtual Desktop (VDI)",
      "SaaS Application Support",
    ],
  },
  {
    id: "managed",
    title: "Managed Services",
    link:"managedservice",
    items: [
      "Managed IT Support",
      "Network Monitoring & Management",
      "Patch Management",
      "Helpdesk Services",
      "Asset & License Management",
      "IT Consulting & Strategy",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity",
    link:"cybersecurity",
    items: [
      "Threat Detection & Response",
      "Security Audits & Assessments",
      "Penetration Testing",
      "Endpoint Protection",
      "Email Security & Anti-Phishing",
      "Compliance Management",
    ],
  },
  {
    id: "remote",
    title: "24/7 Remote Support",
    link:"remote",
    items: [
      "24/7 Helpdesk",
      "Remote Desktop Support",
      "Critical Incident Response",
      "Proactive System Monitoring",
      "Software Troubleshooting",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "webdev",
    title: "Website & App Development",
    link:"website",
    items: [
      "Custom Website Design",
      "Web Application Development",
      "Mobile App Development",
      "E-Commerce Solutions",
      "CMS Integration",
      "UI/UX Design",
    ],
  },
  {
  id: "artificial",
  title: "Artificial Intelligence",
  link:"artifical",
  items: [
    "Machine Learning Solutions",
    "Natural Language Processing (NLP)",
    "Computer Vision Applications",
    "AI Chatbot Development",
    "Predictive Analytics",
    "AI Model Training & Deployment",
  ],
},

  {
    id: "devops",
    title: "DevOps & Automation",
    link:"devops",
    items: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Automation",
      "Monitoring & Observability",
      "DevSecOps Integration",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    link:"digital",
    items: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Management",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    
  id: "server",
  title: "Server & Virtualization",
  link: "Servervirtual",
  
  items: [
    "Server Installation & Configuration",
    "Virtual Machine (VM) Setup",
    "Cloud Server Deployment",
    "Hypervisor Management (VMware / Hyper-V)",
    "Server Monitoring & Performance Optimization",
    "Backup & Disaster Recovery Solutions",
    "Security Hardening & Firewall Configuration",
    "Data Center Migration & Maintenance"
  ]
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile
  const [isMegaOpen, setIsMegaOpen] = useState(false); // desktop hover/focus
  const [activeCategory, setActiveCategory] = useState(servicesData[0].id);
  const megaTimeout = useRef(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation()
  const handleno=()=>{
     setIsMegaOpen(false)
  }
  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setIsMegaOpen(true);
  };
  const delayedCloseMega = () => {
    megaTimeout.current = setTimeout(() => setIsMegaOpen(false), 150);
  };
  const handlescroll = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }
  const handlescrollmob = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
setIsMenuOpen(false);
  }
  return (
    <div>
      <nav className="fixed w-full md:h-[155px] z-40 transition-all duration-300 bg-[#f3f3f1] shadow-lg">
        <Head />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/"> <img className=" w-[220px] md:w-[280px] md:mt-[18px]" src={logo_final_p} alt="logo" /></Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center mt-5 space-x-8">
              <Link
                to="/"
                onClick={handlescroll}
                className={`text-gray-700 text-xl p-2  font-[play] hover:text-[#168acc] font-medium ${location.pathname=="/"? "bg-teal-500  rounded-2xl text-white":""}`}
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={delayedCloseMega}
              >
                <button
                  onFocus={openMega}
                  onBlur={delayedCloseMega}
                  className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium flex iteam-center"
                >
                  Services
                  <ChevronDown className="mt-1" size={20}/>
                </button>

                {/* FIXED Mega menu: centered, responsive width, high z-index */}
                <div
                  className={`absolute top-full left-1/2 z-50 transform -translate-x-1/2 mt-3
                    w-[88vw] md:w-[80vw] lg:w-[70vw] max-w-6xl
                    rounded-lg shadow-2xl border border-slate-200 bg-white
                    transition-all duration-300 ease-out
                    ${isMegaOpen ? "opacity-100 translate-y-0 visible pointer-events-auto" : "opacity-0 -translate-y-2 invisible pointer-events-none"}`}
                >
                  <div className="grid grid-cols-3 gap-6 p-6 max-h-[70vh] overflow-y-auto">
                    {/* Left: categories */}
                    <div className="col-span-1">
                     <ul className="space-y-2">
                     
                        {servicesData.map((cat) => (
                          
                         < li Library
                         
                             key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            onFocus={() => setActiveCategory(cat.id)}
                          >
                            
                             <Link to={cat.link}><button 
                             onClick={handleno}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer ${activeCategory === cat.id
                                ? "bg-[#eef6ff] text-[#0b63a8]"
                                : "text-gray-700 hover:bg-gray-50"
                                }`}
                            >
                              {cat.title}
                            </button></Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: details */}
                    <div className="col-span-2">
                      <div className="min-h-[140px]">
                        {servicesData.map((cat) => {
                          const isActive = cat.id === activeCategory && isMegaOpen;
                          return (
                            <div
                              key={cat.id}
                              aria-hidden={!isActive}
                              className={`transition-all duration-300 transform ${isActive ? "opacity-100 translate-y-0 block" : "opacity-0 -translate-y-2 hidden"
                                }`}
                            >
                              <h4 className="text-lg font-bold mb-2">{cat.title}</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                {cat.items.map((it, i) => (
                                  <li key={i} className="text-sm">{it}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                onClick={
                  handlescroll
                }
                className={`text-gray-700 text-xl p-2  font-[play] hover:text-[#168acc] font-medium ${location.pathname=="/about"? "bg-teal-500  rounded-2xl text-white":""}`}
              >
                About
              </Link>

              <Link
                to="/career"
                onClick={handlescroll}
                className={`text-gray-700 text-xl p-2  font-[play] hover:text-[#168acc] font-medium ${location.pathname=="/career"? "bg-teal-500  rounded-2xl text-white":""}`}
              >
                Career
              </Link>

              <Link
                to="/contact"
                onClick={handlescroll}
                className={`text-gray-700 text-xl p-2  font-[play] hover:text-[#168acc] font-medium ${location.pathname=="/contact"? "bg-teal-500  rounded-2xl text-white":""}`}
              >
                Contact
              </Link>
              <a
                href="https://support.bitnextro.com/"
                target="_blank"
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
              >
                Support
              </a>
              {/* <Link
                to="/login"
                onClick={handlescroll}
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
              >
                login
              </Link> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>




          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <Link
                to="/"
                onClick={handlescrollmob}
                className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${location.pathname=="/"?"text-green-500":""}`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="px-4">
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className="w-full text-left py-2 text-gray-700 font-medium cursor-pointer"
                >
                  Services
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 border-l border-slate-200">
                    {servicesData.map((cat) => (
                      <details key={cat.id} className="mb-2">
                        <summary className="cursor-pointer font-semibold text-gray-800">
                          {cat.title}
                        </summary>
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                          {cat.items.map((it, i) => (
                            <li key={i} className="text-sm py-0.5">{it}</li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={handlescrollmob}
                className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${location.pathname=="/about"?"text-green-500":""}`}
              >
                About
              </Link>

              <Link
                to="/career"
                onClick={handlescrollmob}
                className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${location.pathname=="/career"?"text-green-500":""}`}
              >
                Career
              </Link>
              <Link
                to="/contact"
                onClick={handlescrollmob}
                className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${location.pathname=="/contact"?"text-green-500":""}`}
              >
                Contact
              </Link>
              <a
                href="https://support.bitnextro.com/"
                target="_blank"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Support
              </a>
              <Link
                to="/login"
                onClick={handlescroll}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* spacer so page content isn't hidden behind fixed nav */}
      <div className="h-20" />
    </div>
  );
}
