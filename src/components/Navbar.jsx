import React, { useState, useRef } from "react";
import logo_final_p from "../assets/f_logo.jpg"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
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

  .nav-glass {
    background: rgba(8, 12, 22, 0.72);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(255,255,255,0.07);
    box-shadow: 0 4px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.05) inset;
  }

  .nav-link {
    position: relative;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.03em;
    color: rgba(200, 210, 230, 0.85);
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
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    border-radius: 2px;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }

  .nav-link:hover {
    color: #e2eaf8;
    background: rgba(255,255,255,0.05);
  }

  .nav-link:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  .nav-link:active {
    transform: scale(0.96);
    background: rgba(56, 189, 248, 0.1);
  }

  .nav-link-active {
    color: #38bdf8 !important;
    background: rgba(56, 189, 248, 0.1) !important;
  }

  .nav-link-active::after {
    transform: translateX(-50%) scaleX(1) !important;
  }

  .services-btn {
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.03em;
    color: rgba(200, 210, 230, 0.85);
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
    color: #e2eaf8;
    background: rgba(255,255,255,0.05);
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
    background: rgba(10, 15, 28, 0.92);
    backdrop-filter: blur(28px) saturate(200%);
    -webkit-backdrop-filter: blur(28px) saturate(200%);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
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
    color: rgba(180, 195, 220, 0.8);
    transition: all 0.18s ease;
    letter-spacing: 0.02em;
  }

  .mega-cat-btn:hover {
    background: rgba(56, 189, 248, 0.08);
    color: #e2eaf8;
  }

  .mega-cat-btn:active {
    transform: scale(0.98);
  }

  .mega-cat-btn-active {
    background: rgba(56, 189, 248, 0.12) !important;
    color: #38bdf8 !important;
    box-shadow: inset 2px 0 0 #38bdf8;
  }

  .mega-item {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.78rem;
    color: rgba(160, 175, 205, 0.8);
    padding: 3px 0;
    transition: color 0.15s ease;
  }

  .mega-item:hover {
    color: #94d8fb;
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
    background: rgba(8, 12, 22, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .mobile-link {
    display: block;
    padding: 11px 20px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    color: rgba(190, 205, 230, 0.85);
    text-decoration: none;
    border-radius: 8px;
    margin: 2px 8px;
    transition: all 0.18s ease;
    letter-spacing: 0.02em;
  }

  .mobile-link:hover {
    background: rgba(56, 189, 248, 0.08);
    color: #e2eaf8;
  }

  .mobile-link:active {
    background: rgba(56, 189, 248, 0.15);
    transform: scale(0.98);
  }

  .mobile-link-active {
    color: #38bdf8 !important;
    background: rgba(56, 189, 248, 0.1) !important;
  }

  .mobile-services-toggle {
    width: 100%;
    text-align: left;
    padding: 11px 20px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    color: rgba(190, 205, 230, 0.85);
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
    background: rgba(56, 189, 248, 0.08);
    color: #e2eaf8;
  }

  .mobile-services-toggle:active {
    transform: scale(0.98);
  }

  .mobile-details summary {
    font-family: 'Outfit', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(160, 190, 230, 0.9);
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
    color: #38bdf8;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlescrollmob = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{styles}</style>
      <div>
        <nav className="nav-glass fixed w-full z-40 transition-all duration-300">
          <Head />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <Link to="/" onClick={handlescroll} className="flex items-center shrink-0">
                <img
                  className="w-40 md:w-[190px] object-contain rounded-3xl"
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
                      className={`mega-glass mega-enter absolute top-full left-1/2 z-50 rounded-xl mt-2
                        w-[88vw] md:w-[78vw] lg:w-[68vw] max-w-5xl
                        -translate-x-1/2`}
                      style={{ transformOrigin: "top center" }}
                    >
                      <div className="grid grid-cols-3 gap-0 max-h-[68vh] mega-scroll overflow-y-auto rounded-xl">
                        {/* Categories panel */}
                        <div
                          className="col-span-1 p-4 border-r overflow-y-auto"
                          style={{ borderColor: "rgba(255,255,255,0.06)" }}
                        >
                          <p
                            className="text-xs font-semibold mb-3 px-2 tracking-widest"
                            style={{
                              fontFamily: "Outfit, sans-serif",
                              color: "rgba(56,189,248,0.7)",
                            }}
                          >
                            OUR SERVICES
                          </p>
                          <ul className="space-y-0.5">
                            {servicesData.map((cat) => (
                              <li key={cat.id} onMouseEnter={() => setActiveCategory(cat.id)}>
                                <Link to={cat.link} onClick={handlescroll}>
                                  <button
                                    onClick={handleno}
                                    className={`mega-cat-btn ${activeCategory === cat.id ? "mega-cat-btn-active" : ""}`}
                                  >
                                    {cat.title}
                                  </button>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Detail panel */}
                        <div className="col-span-2 p-6">
                          {servicesData.map((cat) => {
                            const active = cat.id === activeCategory && isMegaOpen;
                            return (
                              <div
                                key={cat.id}
                                aria-hidden={!active}
                                className={`transition-all duration-200 ${active ? "opacity-100 block" : "opacity-0 hidden"}`}
                              >
                                <h4
                                  className="text-sm font-bold mb-3"
                                  style={{
                                    fontFamily: "Outfit, sans-serif",
                                    color: "#e2eaf8",
                                    letterSpacing: "0.02em",
                                  }}
                                >
                                  {cat.title}
                                </h4>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                  {cat.items.map((it, i) => (
                                    <div key={i} className="mega-item flex items-center gap-2">
                                      <span
                                        style={{
                                          width: 4,
                                          height: 4,
                                          borderRadius: "50%",
                                          background: "#38bdf8",
                                          flexShrink: 0,
                                          opacity: 0.6,
                                          display: "inline-block",
                                        }}
                                      />
                                      {it}
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