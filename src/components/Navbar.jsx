import React, { useState, useRef } from "react";
import logo_final_p from "../assets/f_logo.png"
import { Menu, X } from "lucide-react";
import Head from "./Head";
import { Link } from "react-router";

const servicesData = [
  /* same servicesData as before - keep the array you already have */
  {
    id: "software",
    title: "Software Development & Programming",
    items: [
      "Custom Software (ERP, CRM, CMS, inventory systems)",
      "Web & Mobile Apps — front-end and back-end development",
      "API and Integrations — payment gateways, microservices",
      "DevOps & Automation — CI/CD, Docker/Kubernetes",
      "Maintenance & Testing — ongoing support and QA",
    ],
  },
  {
    id: "networking",
    title: "Networking & Connectivity",
    items: [
      "Network Setup — LAN/WAN, wired & Wi-Fi, VPN tunnels",
      "Managed Networking — monitoring, performance tuning",
      "VoIP & Collaboration — telephony and video conferencing",
      "Network Security — firewalls, IDS/IPS, VLAN segmentation",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing & Virtualization",
    items: [
      "Cloud Migration & Management — AWS/Azure/GCP",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "SaaS Integration — Office365, Google Workspace",
      "Virtualization — Hyper-V, VMware, container orchestration",
    ],
  },
  {
    id: "storage",
    title: "Data Storage, Backup & Analytics",
    items: [
      "Storage Solutions — SAN/NAS, cloud buckets, deduplication",
      "Database Administration — MySQL, PostgreSQL, NoSQL",
      "Data Backup & Disaster Recovery — onsite/offsite, cloud DR",
      "Data Analytics & Mining — data pipelines, BI dashboards",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity & Compliance",
    items: [
      "Risk Assessment — identify vulnerabilities & gaps",
      "Threat Protection — firewalls, EDR, antimalware",
      "Encryption & Access Control — VPNs, SSL/TLS, disk encryption",
      "Data Loss Prevention (DLP) — policies & tools",
      "Security Monitoring — SIEM & incident response",
      "Identity Management — AD/LDAP, SSO, MFA",
      "Compliance Support — GDPR, HIPAA, PCI-DSS",
      "Disaster Recovery (DR) — cloud-based DR strategies",
    ],
  },
  {
    id: "digital",
    title: "Digital & Marketing Services",
    items: [
      "Web Design & Development — UI/UX, front/back-end",
      "Graphic & Multimedia Design — logos, branding, video",
      "Search Engine Optimization (SEO)",
      "Social Media Management — Facebook, LinkedIn, Instagram",
      "Email Marketing — campaigns, automations, newsletters",
      "Digital Advertising — PPC (Google Ads, social ads)",
    ],
  },
  {
    id: "emerging",
    title: "Emerging Technology & Innovation",
    items: [
      "Artificial Intelligence & Machine Learning",
      "Blockchain & Cryptocurrency — smart contracts, wallets",
      "Internet of Things (IoT) — sensors, cloud/edge",
      "AR/VR & 3D Visualization",
      "Robotic Process Automation (RPA)",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions & Consulting",
    items: [
      "IT Consulting & Strategy — roadmaps & architecture",
      "Managed IT Services — service desk & admin",
      "E-commerce & B2B/B2C Platforms — portals & ERPs",
      "Hardware/Software Sales & Leasing",
      "Migration Services — Exchange -> Office365/Google",
      "Professional Services — training, project mgmt, contracts",
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile
  const [isMegaOpen, setIsMegaOpen] = useState(false); // desktop hover/focus
  const [activeCategory, setActiveCategory] = useState(servicesData[0].id);
  const megaTimeout = useRef(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
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
                  className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
                >
                  Services
                </button>

                {/* FIXED Mega menu: centered, responsive width, high z-index */}
                <div
                  className={`absolute top-full left-1/2 z-50 transform -translate-x-1/2 mt-3
                    w-[88vw] md:w-[80vw] lg:w-[70vw] max-w-6xl
                    rounded-lg shadow-2xl border border-slate-200 bg-white
                    transition-all duration-300 ease-out
                    ${isMegaOpen ? "opacity-100 translate-y-0 visible pointer-events-auto" : "opacity-0 -translate-y-2 invisible pointer-events-none"}`}
                >
                  <div className="grid grid-cols-3 gap-6 p-6">
                    {/* Left: categories */}
                    <div className="col-span-1">
                      <ul className="space-y-2">
                        {servicesData.map((cat) => (
                          <li
                            key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            onFocus={() => setActiveCategory(cat.id)}
                          >
                            <button
                              className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors ${activeCategory === cat.id
                                ? "bg-[#eef6ff] text-[#0b63a8]"
                                : "text-gray-700 hover:bg-gray-50"
                                }`}
                            >
                              {cat.title}
                            </button>
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
                to="/#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
              >
                About
              </Link>

              <Link
                to="/career"
                onClick={handlescroll}
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
              >
                Career
              </Link>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
              >
                Contact
              </a>
              <a
                href="https://bitnextro.freshdesk.com/support/home"
                target="_blank"
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
              >
                Support
              </a>
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
                onClick={handlescroll}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="px-4">
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className="w-full text-left py-2 text-gray-700 font-medium"
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

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </a>

              <Link
                to="/career"
                onClick={handlescroll}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Career
              </Link>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
              <a
                href="https://bitnextro.freshdesk.com/support/home"
                target="_blank"
                className="text-gray-700 text-xl font-[play] hover:text-[#168acc] font-medium"
              >
                Support
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* spacer so page content isn't hidden behind fixed nav */}
      <div className="h-20" />
    </div>
  );
}
