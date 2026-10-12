import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Server,
  Cloud,
  Headphones,
  CreditCard,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  X,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

const FAQ_DATA = [
  // ── General & Onboarding ─────────────────────────────────────
  {
    id: 'gen-1',
    category: 'general',
    categoryLabel: 'General & Onboarding',
    question: 'What core services does BitNexTro Solutions specialize in?',
    answer:
      'BitNexTro Solutions is an end-to-end enterprise IT service and technology consulting company. We specialize in Managed IT Services, Comprehensive IT AMC, Enterprise Cybersecurity & Threat Defense, Cloud Migrations (AWS, Azure, GCP), SD-WAN & Network Architecture, Data Backup & Disaster Recovery, Server Virtualization, and Custom Software & Web Engineering.',
    tags: ['services', 'overview', 'it support', 'solutions'],
  },
  {
    id: 'gen-2',
    category: 'general',
    categoryLabel: 'General & Onboarding',
    question: 'Where is BitNexTro located, and do you support international clients?',
    answer:
      'Our headquarters is based at Park Street, Kolkata, West Bengal, India. While our rapid-response field engineers provide direct on-site support across Kolkata and Eastern India, our 24/7 remote managed operations and cloud monitoring support clients across India, North America, Europe, and the Middle East.',
    tags: ['location', 'kolkata', 'global', 'remote support'],
  },
  {
    id: 'gen-3',
    category: 'general',
    categoryLabel: 'General & Onboarding',
    question: 'How quickly can we onboard BitNexTro for our company’s IT infrastructure?',
    answer:
      'Our onboarding process typically completes within 24 to 72 hours. We start with a comprehensive health and security audit of your network and workstations, deploy our automated monitoring sensors, and assign dedicated account engineers and escalation protocols to your business.',
    tags: ['onboarding', 'audit', 'timeline', 'sla'],
  },

  // ── Managed IT & AMC ──────────────────────────────────────────
  {
    id: 'amc-1',
    category: 'managed-it',
    categoryLabel: 'Managed IT & AMC',
    question: 'What is covered under an Annual Maintenance Contract (AMC)?',
    answer:
      'Our IT AMC covers proactive hardware health checkups, desktop & laptop troubleshooting, server OS patch management, firewall and router optimization, antivirus & malware remediation, regular automated backups, and unlimited remote and on-site engineer visits backed by strict SLA guarantees.',
    tags: ['amc', 'maintenance', 'hardware', 'preventive'],
  },
  {
    id: 'amc-2',
    category: 'managed-it',
    categoryLabel: 'Managed IT & AMC',
    question: 'Do you offer emergency on-site engineer visits during business-critical downtime?',
    answer:
      'Yes. For businesses in Kolkata and surrounding regions, our certified field engineers guarantee rapid on-site arrival within 2 to 4 hours for Priority-1 emergencies (such as server crash or network-wide failure), supported by 24/7 priority phone and remote dispatch.',
    tags: ['emergency', 'on-site', 'dispatch', 'response time'],
  },
  {
    id: 'amc-3',
    category: 'managed-it',
    categoryLabel: 'Managed IT & AMC',
    question: 'Can you maintain heterogeneous multi-vendor and legacy hardware systems?',
    answer:
      'Yes. Our team has deep hands-on expertise supporting multi-vendor environments — including Dell, HP, Lenovo, Cisco, Fortinet, Synology, Ubiquiti, Apple macOS, and custom rackmount servers, maximizing the longevity and return on investment of your existing hardware.',
    tags: ['hardware', 'dell', 'hp', 'cisco', 'multi-vendor'],
  },

  // ── Cybersecurity & Data ──────────────────────────────────────
  {
    id: 'sec-1',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    question: 'How does BitNexTro protect our business from ransomware and cyber attacks?',
    answer:
      'We deploy a multi-layered Zero-Trust architecture: AI-powered Next-Gen Endpoint Detection & Response (EDR), managed perimeter firewalls, automated DNS and URL filtering, anti-spoofing email security, and regular employee phishing simulation drills.',
    tags: ['ransomware', 'cybersecurity', 'edr', 'phishing'],
  },
  {
    id: 'sec-2',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    question: 'How do your automated data backup and disaster recovery solutions work?',
    answer:
      'We follow the enterprise 3-2-1 backup protocol: three copies of your critical data on two distinct media, with one copy isolated in an immutable cloud vault. Backups run automatically and undergo weekly test-restores so you can recover in minutes if a system failure occurs.',
    tags: ['backup', 'disaster recovery', 'cloud backup', 'ransomware recovery'],
  },
  {
    id: 'sec-3',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    question: 'Can you assist our organization with compliance audits (ISO, HIPAA, GDPR)?',
    answer:
      'Yes. We perform security gap analyses, data access reviews, log retention configuration, encryption verification, and prepare complete technical documentation required to pass statutory IT audits and compliance certifications.',
    tags: ['compliance', 'iso', 'hipaa', 'gdpr', 'audit'],
  },

  // ── Cloud & Infrastructure ────────────────────────────────────
  {
    id: 'cloud-1',
    category: 'cloud',
    categoryLabel: 'Cloud & Network',
    question: 'Can you migrate our physical servers and databases to the cloud?',
    answer:
      'Yes. Our certified architects handle complete migrations to AWS, Microsoft Azure, or Google Cloud with zero or minimal scheduled downtime. We also optimize cloud instances to eliminate runaway recurring cloud costs.',
    tags: ['cloud', 'migration', 'aws', 'azure', 'server'],
  },
  {
    id: 'cloud-2',
    category: 'cloud',
    categoryLabel: 'Cloud & Network',
    question: 'What is SD-WAN and how does it benefit multi-office organizations?',
    answer:
      'Software-Defined WAN (SD-WAN) dynamically routes traffic across broadband, leased line, and 4G/5G connections. It eliminates expensive MPLS line dependencies, provides automatic failover, and speeds up SaaS applications by up to 3x.',
    tags: ['sd-wan', 'network', 'branch', 'connectivity'],
  },
  {
    id: 'cloud-3',
    category: 'cloud',
    categoryLabel: 'Cloud & Network',
    question: 'Do you configure virtual machines (VMware / Hyper-V) and remote desktops?',
    answer:
      'Yes. We configure VMware ESXi, Microsoft Hyper-V, and Virtual Desktop Infrastructure (VDI), giving your distributed team secure, high-speed remote access to corporate workstations from anywhere.',
    tags: ['virtualization', 'vmware', 'hyper-v', 'remote work'],
  },

  // ── Pricing & SLAs ───────────────────────────────────────────
  {
    id: 'bill-1',
    category: 'billing',
    categoryLabel: 'Pricing & SLAs',
    question: 'How is BitNexTro’s pricing structured for IT support and AMC plans?',
    answer:
      'We offer transparent, customized models: per-device or per-user monthly retainers, annual fixed AMC contracts, or project milestone billing for one-off upgrades and deployments. We provide transparent, itemized quotes with zero hidden fees.',
    tags: ['pricing', 'cost', 'quote', 'retainer'],
  },
  {
    id: 'bill-2',
    category: 'billing',
    categoryLabel: 'Pricing & SLAs',
    question: 'How do our employees raise a support ticket or contact engineering?',
    answer:
      'Users can reach us instantly via our dedicated web portal (support.bitnextro.com), direct email (info@bitnextro.com), WhatsApp helpdesk, or our priority helpline (+91 93308 55877). Every ticket is tracked with automated SLA timers and status alerts.',
    tags: ['support portal', 'ticket', 'helpdesk', 'whatsapp'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'general', label: 'General & Onboarding', icon: Sparkles },
  { id: 'managed-it', label: 'Managed IT & AMC', icon: Server },
  { id: 'security', label: 'Cybersecurity', icon: ShieldCheck },
  { id: 'cloud', label: 'Cloud & Network', icon: Cloud },
  { id: 'billing', label: 'Pricing & SLAs', icon: CreditCard },
];

export default function FandQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState(new Set(['gen-1', 'amc-1']));

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const inQuestion = faq.question.toLowerCase().includes(query);
      const inAnswer = faq.answer.toLowerCase().includes(query);
      const inTags = faq.tags.some((t) => t.toLowerCase().includes(query));

      return inQuestion || inAnswer || inTags;
    });
  }, [activeCategory, searchQuery]);

  // Structured JSON-LD FAQPage Schema for Google SEO Rich Results
  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 overflow-hidden">
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | BitNexTro IT Solutions</title>
        <meta
          name="description"
          content="Find clear answers to common questions about BitNexTro's Managed IT Services, IT AMC, Cybersecurity, Cloud Infrastructure, SLAs, and 24/7 technical support."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ── Background Ambient Glows (Matches Site Design System) ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[130px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      {/* ── Main Page Content ── */}
      <div className="relative z-10 pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 mt-2.5 max-w-5xl mx-auto">
        {/* ── Hero Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-medium text-sm mb-6 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Knowledge Hub & FAQ
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">
              Questions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Have questions about our Managed IT, AMC contracts, cloud migration, or cybersecurity?
            Find detailed answers or reach out directly to our engineering desk.
          </p>

          {/* ── Search Input ── */}
          <div className="relative max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-5 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. AMC, ransomware, cloud, SLA)..."
                className="w-full pl-13 pr-12 py-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-md shadow-slate-200/40 transition-all text-sm sm:text-base font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-slate-500 mt-2 text-left px-2">
                Found {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} for "{searchQuery}"
              </p>
            )}
          </div>
        </motion.div>

        {/* ── Category Filter Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white/80 hover:bg-slate-100/80 text-slate-700 border border-slate-200/70 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-500'}`} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── FAQs Accordion ── */}
        <div className="space-y-4 mb-20">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openItems.has(faq.id);
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                      isOpen
                        ? 'bg-white shadow-lg shadow-blue-500/5 border-blue-300 ring-1 ring-blue-500/10'
                        : 'bg-white/80 backdrop-blur-xl hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`mt-0.5 p-2 rounded-xl shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <HelpCircle className="w-5 h-5" />
                        </span>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                            {faq.categoryLabel}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'rotate-180 bg-blue-50 text-blue-600'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 ml-12 sm:ml-14">
                            <p className="mb-4">{faq.answer}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {faq.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  No questions found
                </h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                  We couldn't find any questions matching "{searchQuery}". Try a different keyword or contact our desk directly.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Still Have Questions? Helpdesk Card (Luminous Premium Light Theme) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 border border-blue-200/80 rounded-[2.5rem] p-8 sm:p-14 shadow-xl shadow-blue-500/5 overflow-hidden"
        >
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 mb-6">
              <Headphones className="w-4 h-4 text-blue-600" />
              24/7 Dedicated IT Assistance
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Still Have{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Questions?
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed mb-8">
              Can't find the exact answer you're looking for? Speak directly with our IT support engineers or schedule a complimentary tech audit for your office.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
              <a
                href="tel:+919330855877"
                className="p-5 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Call Priority Desk</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">+91 93308 55877</p>
                </div>
              </a>

              <a
                href="mailto:info@bitnextro.com"
                className="p-5 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Inquiries</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">info@bitnextro.com</p>
                </div>
              </a>

              <a
                href="https://support.bitnextro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Client Helpdesk</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">support.bitnextro.com ↗</p>
                </div>
              </a>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              Get in Touch with Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
