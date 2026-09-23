import React, { useState, useRef, useEffect } from "react";
import logo_final_p from "../assets/t_logo.png"
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Head from "./Head";
import { Link, useLocation } from "react-router";

const servicesData = [
  {
    id: "hardware",
    link: "service/hardware-services-kolkata",
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
    link: "service/network-setup-kolkata",
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
      "Preventive Maintenance & System Upgrades",
    ],
  },
  {
    id: "amc",
    title: "Annual Maintenance Contract (AMC)",
    link: "service/it-amc-services-kolkata",
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
    link: "service/data-backup-disaster-recovery",
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
    link: "service/cloud-services-kolkata",
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
    link: "service/managed-services-kolkata",
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
    link: "service/cyber-security-services-kolkata",
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
    link: "service/remote-services-kolkata",
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
    link: "service/website-services-kolkata",
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
    link: "service/artifical-services-kolkata",
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
    link: "service/devops-services-kolkata",
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
    link: "service/digital-services-kolkata",
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
    link: "service/server-support-kolkata",
    items: [
      "Server Installation & Configuration",
      "Virtual Machine (VM) Setup",
      "Cloud Server Deployment",
      "Hypervisor Management (VMware / Hyper-V)",
      "Server Monitoring & Performance Optimization",
      "Backup & Disaster Recovery Solutions",
      "Security Hardening & Firewall Configuration",
      "Data Center Migration & Maintenance",
    ],
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600&display=swap');

  .nav-glass-scrolled {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: none;
    box-shadow: 0 20px 40px -10px rgba(37, 99, 235, 0.25);
  }

  .nav-glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: none;
    box-shadow: 0 15px 40px -10px rgba(37, 99, 235, 0.25);
  }

  .nav-link {
    position: relative;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.03em;
    color: rgba(31, 41, 55, 0.85);
    padding: 6px 12px;
    border-radius: 8px;
    transition: color 0.2s ease, background 0.2s ease;
    text-decoration: none;
    white-space: nowrap;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, #0ea5e9, #22c55e);
    border-radius: 2px;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }

  .nav-link:hover {
    color: #000;
    background: rgba(59, 130, 246, 0.1);
  }

  .nav-link:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  .nav-link:active {
    transform: scale(0.96);
    background: rgba(59, 130, 246, 0.2);
  }

  .nav-link-active {
    color: #0ea5e9 !important;
    background: rgba(59, 130, 246, 0.1) !important;
  }

  .nav-link-active::after {
    transform: translateX(-50%) scaleX(1) !important;
  }

  .services-btn {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.03em;
    color: rgba(31, 41, 55, 0.85);
    padding: 6px 12px;
    border-radius: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.2s ease, background 0.2s ease;
    white-space: nowrap;
  }

  .services-btn:hover {
    color: #000;
    background: rgba(59, 130, 246, 0.1);
  }

  .services-btn:active {
    transform: scale(0.96);
  }

  .services-chevron {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }

  .services-chevron-open {
    transform: rotate(180deg);
  }

  .mega-glass {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(28px) saturate(200%);
    -webkit-backdrop-filter: blur(28px) saturate(200%);
    border: none;
    box-shadow: 0 24px 64px rgba(59, 130, 246, 0.15), 0 1px 0 rgba(59, 130, 246, 0.1) inset;
  }

  .mega-cat-btn {
    width: 100%;
    text-align: left;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(55, 65, 81, 0.8);
    transition: all 0.18s ease;
    letter-spacing: 0.02em;
  }

  .mega-cat-btn:hover {
    background: rgba(59, 130, 246, 0.1);
    color: #000;
  }

  .mega-cat-btn:active {
    transform: scale(0.98);
  }

  .mega-cat-btn-active {
    background: rgba(59, 130, 246, 0.15) !important;
    color: #0ea5e9 !important;
    box-shadow: inset 2px 0 0 #0ea5e9;
  }

  .mega-item {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.78rem;
    color: rgba(55, 65, 81, 0.8);
    padding: 3px 0;
    transition: color 0.15s ease;
  }

  .mega-item:hover {
    color: #0ea5e9;
  }

  .support-btn {
    font-family: 'Outfit', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 7px 16px;
    border-radius: 8px;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    color: #fff;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 14px rgba(56, 189, 248, 0.3);
    white-space: nowrap;
  }

  .support-btn:hover {
    opacity: 0.9;
    box-shadow: 0 4px 22px rgba(56, 189, 248, 0.45);
    transform: translateY(-1px);
  }

  .support-btn:active {
    transform: scale(0.96) translateY(0);
    opacity: 1;
  }

  /* Mobile */
  .mobile-menu-glass {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-top: 1px solid rgba(59, 130, 246, 0.1);
  }

  .mobile-link {
    display: block;
    padding: 11px 20px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    color: rgba(55, 65, 81, 0.85);
    text-decoration: none;
    border-radius: 8px;
    margin: 2px 8px;
    transition: all 0.18s ease;
    letter-spacing: 0.02em;
  }

  .mobile-link:hover {
    background: rgba(59, 130, 246, 0.1);
    color: #000;
  }

  .mobile-link:active {
    background: rgba(59, 130, 246, 0.15);
    transform: scale(0.98);
  }

  .mobile-link-active {
    color: #0ea5e9 !important;
    background: rgba(59, 130, 246, 0.1) !important;
  }

  .mobile-services-toggle {
    width: 100%;
    text-align: left;
    padding: 11px 20px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    color: rgba(55, 65, 81, 0.85);
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    margin: 2px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.18s ease;
    letter-spacing: 0.02em;
  }

  .mobile-services-toggle:hover {
    background: rgba(59, 130, 246, 0.1);
    color: #000;
  }

  .mobile-services-toggle:active {
    transform: scale(0.98);
  }

  .mobile-details summary {
    font-family: 'Outfit', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(31, 41, 55, 0.9);
    padding: 8px 10px;
    cursor: pointer;
    border-radius: 6px;
    list-style: none;
    transition: background 0.15s ease;
  }

  .mobile-details summary::-webkit-details-marker { display: none; }

  .mobile-details summary::before {
    content: '›';
    display: inline-block;
    margin-right: 6px;
    transition: transform 0.2s ease;
    font-size: 1rem;
    color: #0ea5e9;
  }

  .mobile-details[open] summary::before {
    transform: rotate(90deg);
  }

  .mobile-details summary:hover {
    background: rgba(255,255,255,0.04);
  }

  .mobile-go-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    padding: 5px 12px;
    border-radius: 6px;
    border: 1px solid rgba(56, 189, 248, 0.3);
    background: rgba(56, 189, 248, 0.07);
    color: #38bdf8;
    font-family: 'Outfit', sans-serif;
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.18s ease;
    letter-spacing: 0.03em;
  }

  .mobile-go-btn:hover {
    background: rgba(56, 189, 248, 0.15);
    border-color: rgba(56, 189, 248, 0.5);
  }

  .mobile-go-btn:active {
    transform: scale(0.96);
  }

  .mobile-menu-enter {
    animation: slideDown 0.25s cubic-bezier(0.16,1,0.3,1) forwards;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .mega-enter {
    animation: megaFadeIn 0.22s cubic-bezier(0.16,1,0.3,1) forwards;
  }

  @keyframes megaFadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Hamburger button */
  .hamburger-btn {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.04);
    color: rgba(200,215,240,0.9);
    cursor: pointer;
    transition: all 0.18s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger-btn:hover {
    background: rgba(255,255,255,0.09);
    border-color: rgba(56, 189, 248, 0.25);
    color: #fff;
  }

  .hamburger-btn:active {
    transform: scale(0.92);
  }

  /* Scrollbar for mega menu */
  .mega-scroll::-webkit-scrollbar {
    width: 4px;
  }
  .mega-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .mega-scroll::-webkit-scrollbar-thumb {
    background: rgba(56, 189, 248, 0.2);
    border-radius: 4px;
  }
  .mega-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(56, 189, 248, 0.4);
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(servicesData[0].id);
  const megaTimeout = useRef(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleno = () => {
    setIsMegaOpen(false);
  };

  const handlenophone = () => {
    handlescroll();
    setMobileServicesOpen(false);
    setIsMenuOpen(false);
  };

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setIsMegaOpen(true);
  };

  const delayedCloseMega = () => {
    megaTimeout.current = setTimeout(() => setIsMegaOpen(false), 150);
  };

  const handlescroll = () => {
    // Scroll handled by ScrollToTop component
  };

  const handlescrollmob = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleOpenMegaMenu = () => {
      window.scrollTo(0, 0);
      setIsMegaOpen(true);
    };
    window.addEventListener('openMegaMenu', handleOpenMegaMenu);
    return () => window.removeEventListener('openMegaMenu', handleOpenMegaMenu);
  }, []);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
      <style>{styles}</style>
      <div>
        <nav className={`fixed z-40 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${scrolled ? "top-4 w-[95%] md:w-[85%] rounded-3xl nav-glass-scrolled shadow-lg" : "top-0 w-full rounded-none nav-glass"}`}>
          {/* <Head /> */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <Link to="/" onClick={handlescroll} className="flex items-center shrink-0">
                <img
                  className={`object-contain rounded-3xl transition-all duration-500 ease-in-out ${scrolled ? "w-32 md:w-[140px]" : "w-40 md:w-[190px]"}`}
                  src={logo_final_p}
                  alt="bitnextro-logo"
                />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1 lg:gap-1.5">

                <Link
                  to="/"
                  onClick={handlescroll}
                  className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
                >
                  Home
                </Link>

                {/* Services mega menu */}
                <div
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={delayedCloseMega}
                >
                  <button
                    onFocus={openMega}
                    onBlur={delayedCloseMega}
                    className="services-btn"
                  >
                    Services
                    <ChevronDown
                      size={15}
                      className={`services-chevron ${isMegaOpen ? "services-chevron-open" : ""}`}
                    />
                  </button>

                  {isMegaOpen && (
                    <div
                      className="absolute top-full left-1/2 z-50 rounded-3xl mt-4 w-[90vw] md:w-[82vw] lg:w-[72vw] max-w-5xl -translate-x-1/2 overflow-hidden bg-white/95 backdrop-blur-2xl border border-slate-200/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-top-4 duration-300"
                      style={{ transformOrigin: "top center" }}
                    >
                      <div className="grid grid-cols-12 h-[420px] max-h-[70vh]">
                        {/* Categories panel */}
                        <div className="col-span-4 bg-slate-50/80 p-5 border-r border-slate-100 overflow-y-auto mega-scroll" data-lenis-prevent="true">
                          <p className="text-[11px] font-bold mb-3 px-3 tracking-widest text-blue-500 uppercase">
                            Our Services
                          </p>
                          <ul className="space-y-1">
                            {servicesData.map((cat) => {
                              const isActiveCat = activeCategory === cat.id;
                              return (
                                <li key={cat.id} onMouseEnter={() => setActiveCategory(cat.id)}>
                                  <Link to={cat.link} onClick={handlescroll}>
                                    <button
                                      onClick={handleno}
                                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-300 font-medium text-[13px] flex items-center justify-between group ${
                                        isActiveCat 
                                          ? "bg-white shadow-sm text-blue-600 border border-slate-200/80 ring-1 ring-black/5" 
                                          : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent"
                                      }`}
                                    >
                                      <span className="tracking-wide">{cat.title}</span>
                                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActiveCat ? "text-blue-600 translate-x-1 opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"}`} />
                                    </button>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* Detail panel */}
                        <div className="col-span-8 p-6 lg:p-8 overflow-y-auto mega-scroll bg-white" data-lenis-prevent="true">
                          {servicesData.map((cat) => {
                            const active = cat.id === activeCategory && isMegaOpen;
                            return (
                              <div
                                key={cat.id}
                                aria-hidden={!active}
                                className={`transition-all duration-400 ease-out ${active ? "opacity-100 translate-y-0 block" : "opacity-0 translate-y-4 hidden"}`}
                              >
                                <div className="mb-5 flex items-end justify-between pb-4 border-b border-slate-100">
                                  <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                    {cat.title}
                                  </h4>
                                  <Link 
                                    to={cat.link} 
                                    onClick={handleno} 
                                    className="text-[13px] font-bold text-blue-600 flex items-center gap-1 hover:text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors group"
                                  >
                                    View Full Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                  {cat.items.map((it, i) => (
                                    <div key={i} className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/80 transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-sm cursor-default">
                                      <div className="w-4 h-4 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                                        <div className="w-1 h-1 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-300" />
                                      </div>
                                      <span className="text-[13px] font-medium text-slate-700 group-hover:text-slate-950 transition-colors truncate" title={it}>
                                        {it}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/about" onClick={handlescroll} className={`nav-link ${isActive("/about") ? "nav-link-active" : ""}`}>
                  About
                </Link>

                <Link to="/career" onClick={handlescroll} className={`nav-link ${isActive("/career") ? "nav-link-active" : ""}`}>
                  Career
                </Link>

                <Link to="/contact" onClick={handlescroll} className={`nav-link ${isActive("/contact") ? "nav-link-active" : ""}`}>
                  Contact
                </Link>

                <Link to="/blog" onClick={handlescroll} className={`nav-link ${isActive("/blog") ? "nav-link-active" : ""}`}>
                  Blog
                </Link>
                
                <Link to="/fq" onClick={handlescroll} className={`nav-link ${isActive("/fq") ? "nav-link-active" : ""}`}>
                  F&Q
                </Link>

                <a
                  href="https://support.bitnextro.com/"
                  target="_blank"
                  className="support-btn"
                  style={{ marginLeft: "6px" }}
                >
                  Support ↗
                </a>
              </div>

              {/* Mobile hamburger */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen((s) => !s)}
                  aria-label="Toggle menu"
                  className="hamburger-btn"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mobile-menu-glass mobile-menu-enter md:hidden pb-4 pt-2">
              <Link
                to="/"
                onClick={handlescrollmob}
                className={`mobile-link ${isActive("/") ? "mobile-link-active" : ""}`}
              >
                Home
              </Link>

              <div style={{ margin: "2px 8px" }}>
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className="mobile-services-toggle"
                  style={{ width: "calc(100% - 0px)", margin: 0 }}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transition: "transform 0.25s ease",
                      transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: "#38bdf8",
                    }}
                  />
                </button>

                {mobileServicesOpen && (
                  <div
                    className="mt-1 mb-2 pl-3 border-l"
                    style={{ borderColor: "rgba(56,189,248,0.2)" }}
                  >
                    {servicesData.map((cat) => (
                      <details key={cat.id} className="mobile-details mb-1">
                        <summary>{cat.title}</summary>
                        <ul className="pl-6 mt-2 mb-3 space-y-1">
                          {cat.items.map((it, i) => (
                            <li
                              key={i}
                              className="mega-item"
                              style={{ fontSize: "0.78rem" }}
                            >
                              {it}
                            </li>
                          ))}
                        </ul>
                        <Link to={`/${cat.link}`}>
                          <button onClick={handlenophone} className="mobile-go-btn">
                            Go to page
                            <ArrowRight size={13} />
                          </button>
                        </Link>
                      </details>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" onClick={handlescrollmob} className={`mobile-link ${isActive("/about") ? "mobile-link-active" : ""}`}>
                About
              </Link>
              <Link to="/career" onClick={handlescrollmob} className={`mobile-link ${isActive("/career") ? "mobile-link-active" : ""}`}>
                Career
              </Link>
              <Link to="/contact" onClick={handlescrollmob} className={`mobile-link ${isActive("/contact") ? "mobile-link-active" : ""}`}>
                Contact
              </Link>
              <Link to="/blog" onClick={handlescrollmob} className={`mobile-link ${isActive("/blog") ? "mobile-link-active" : ""}`}>
                Blog
              </Link>
              <Link to="/fq" onClick={handlescrollmob} className={`mobile-link ${isActive("/fq") ? "mobile-link-active" : ""}`}>
                F&Q
              </Link>
              <div style={{ padding: "8px 16px" }}>
                <a
                  href="https://support.bitnextro.com/"
                  target="_blank"
                  className="support-btn"
                  style={{ display: "inline-block" }}
                >
                  Support ↗
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Spacer */}
        <div className="h-16" />
      </div>
    </>
  );
}





