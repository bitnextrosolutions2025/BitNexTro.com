import React, { useState, useMemo } from 'react';
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
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink,
} from 'lucide-react';

const FAQ_DATA = [
  // ── General & Onboarding ─────────────────────────────────────
  {
    id: 'gen-1',
    category: 'general',
    categoryLabel: 'General',
    question: 'What core services does BitNexTro Solutions provide?',
    answer:
      'BitNexTro Solutions is an end-to-end IT services & technology consulting partner. We provide Managed IT Services, Comprehensive IT AMC, Enterprise Cybersecurity, Cloud Migration & Infrastructure (AWS/Azure/GCP), SD-WAN & Network Architecture, Data Backup & Disaster Recovery, and Custom Web & Software Engineering.',
    tags: ['services', 'overview', 'it support'],
  },
  {
    id: 'gen-2',
    category: 'general',
    categoryLabel: 'General',
    question: 'Where is BitNexTro located, and do you support clients globally?',
    answer:
      'Our headquarters is located at Park Street, Kolkata, West Bengal, India. In addition to on-site rapid response teams across West Bengal, we deliver 24/7 remote managed IT services, cloud operations, and cybersecurity monitoring to clients across India, North America, Europe, and the Middle East.',
    tags: ['location', 'kolkata', 'global', 'remote'],
  },
  {
    id: 'gen-3',
    category: 'general',
    categoryLabel: 'General',
    question: 'How quickly can we onboard BitNexTro for our company’s IT needs?',
    answer:
      'Our standard onboarding process takes between 24 to 72 hours. We begin with a complimentary IT infrastructure audit, identify immediate security or hardware bottlenecks, deploy remote monitoring agents, and establish dedicated communication channels with our support engineers.',
    tags: ['onboarding', 'audit', 'timeline'],
  },

  // ── Managed IT & AMC ──────────────────────────────────────────
  {
    id: 'amc-1',
    category: 'managed-it',
    categoryLabel: 'Managed IT & AMC',
    question: 'What is covered under an Annual Maintenance Contract (AMC)?',
    answer:
      'Our IT AMC covers proactive hardware health checks, workstation & laptop troubleshooting, operating system updates, server maintenance, firewall tuning, router/switch configuration, virus removal, regular data backups, and unlimited remote and on-site engineer visits with guaranteed response SLAs.',
    tags: ['amc', 'maintenance', 'hardware', 'support'],
  },
  {
    id: 'amc-2',
    category: 'managed-it',
    categoryLabel: 'Managed IT & AMC',
    question: 'Do you offer emergency on-site engineer visits for critical downtime?',
    answer:
      'Yes. For businesses in Kolkata and surrounding business hubs, our certified field engineers guarantee on-site arrival within 2 to 4 hours for priority-1 critical emergencies (such as server failure or network-wide outages), backed by 24/7 phone and remote dispatch.',
    tags: ['emergency', 'on-site', 'dispatch', 'sla'],
  },
  {
    id: 'amc-3',
    category: 'managed-it',
    categoryLabel: 'Managed IT & AMC',
    question: 'Can you maintain multi-vendor and legacy hardware systems?',
    answer:
      'Absolutely. Our team has deep hands-on expertise supporting heterogeneous multi-vendor environments — including Dell, HP, Lenovo, Cisco, Fortinet, Synology, Ubiquiti, Apple Mac, and custom server racks, ensuring maximum longevity and ROI from your existing capital investments.',
    tags: ['hardware', 'dell', 'hp', 'cisco', 'legacy'],
  },

  // ── Cybersecurity & Data ──────────────────────────────────────
  {
    id: 'sec-1',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    question: 'How does BitNexTro protect our business from ransomware and phishing?',
    answer:
      'We deploy a multi-layered Zero-Trust defense matrix: AI-driven Next-Gen Endpoint Detection & Response (EDR), managed perimeter firewalls, automated DNS filtering, email security gateways against spoofing/phishing, and staff cybersecurity awareness training.',
    tags: ['ransomware', 'cybersecurity', 'edr', 'phishing'],
  },
  {
    id: 'sec-2',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    question: 'How do your automated data backup and disaster recovery solutions work?',
    answer:
      'We follow the gold-standard 3-2-1 backup rule: three copies of your critical data, across two different storage media, with one copy isolated in an immutable cloud vault. Backups run automatically and undergo weekly test-restores so you can recover within minutes of any accidental loss or system crash.',
    tags: ['backup', 'disaster recovery', 'cloud backup', 'ransomware recovery'],
  },
  {
    id: 'sec-3',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    question: 'Can you help our company achieve regulatory compliance (ISO, HIPAA, GDPR)?',
    answer:
      'Yes. We perform comprehensive security gap analyses, data access reviews, log retention setup, encryption audits, and provide detailed technical documentation needed to clear statutory IT audits and compliance certifications.',
    tags: ['compliance', 'iso', 'hipaa', 'gdpr', 'audit'],
  },

  // ── Cloud & Infrastructure ────────────────────────────────────
  {
    id: 'cloud-1',
    category: 'cloud',
    categoryLabel: 'Cloud & Network',
    question: 'Can you migrate our physical servers and legacy databases to the cloud?',
    answer:
      'Yes, our certified cloud architects manage seamless lift-and-shift or refactored migrations to AWS, Microsoft Azure, and Google Cloud with near-zero business downtime. We optimize cloud configurations to avoid unnecessary recurring billing costs.',
    tags: ['cloud', 'migration', 'aws', 'azure', 'server'],
  },
  {
    id: 'cloud-2',
    category: 'cloud',
    categoryLabel: 'Cloud & Network',
    question: 'What is SD-WAN and how does it benefit multi-branch companies?',
    answer:
      'Software-Defined WAN (SD-WAN) intelligently routes traffic over multiple connections (leased line, broadband, 4G/5G), eliminating branch downtime, reducing expensive MPLS circuit costs, and boosting cloud application speed by up to 3x.',
    tags: ['sd-wan', 'network', 'branch', 'connectivity'],
  },
  {
    id: 'cloud-3',
    category: 'cloud',
    categoryLabel: 'Cloud & Network',
    question: 'Do you configure virtual machines (VMware / Hyper-V) and remote workspaces?',
    answer:
      'Yes. We set up VMware ESXi, Microsoft Hyper-V, and Virtual Desktop Infrastructure (VDI), allowing your hybrid workforce to access secure corporate workstations remotely with military-grade encryption and access controls.',
    tags: ['virtualization', 'vmware', 'hyper-v', 'remote work'],
  },

  // ── Pricing & SLAs ───────────────────────────────────────────
  {
    id: 'bill-1',
    category: 'billing',
    categoryLabel: 'Pricing & SLAs',
    question: 'How is BitNexTro’s pricing structured for IT support and AMC?',
    answer:
      'We offer flexible, transparent models: per-device/per-user monthly retainers, annual fixed AMC contracts, or project-based milestones for one-time migrations and network setups. We provide clear, itemized quotes with zero hidden charges.',
    tags: ['pricing', 'cost', 'quote', 'retainer'],
  },
  {
    id: 'bill-2',
    category: 'billing',
    categoryLabel: 'Pricing & SLAs',
    question: 'How do our team members open a support ticket or reach technical support?',
    answer:
      'Users can submit requests instantly via our dedicated web portal (support.bitnextro.com), direct email (info@bitnextro.com), WhatsApp support desk, or our priority toll phone line (+91 93308 55877). Every ticket is assigned an SLA timer and automated status tracking.',
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
          content="Find answers to common questions about BitNexTro's Managed IT Services, IT AMC, Cybersecurity, Cloud Infrastructure, SLAs, and 24/7 technical support."
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
            Knowledge Hub & Support
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">
              Questions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Have questions about our IT services, AMC contracts, or cybersecurity?
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
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
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
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white shadow-lg shadow-blue-500/5 border-blue-200/90 ring-1 ring-blue-500/10'
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
                          className={`mt-0.5 p-1 rounded-lg shrink-0 transition-colors ${
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
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 ml-12">
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
                className="text-center py-16 bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8"
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Still Have Questions? Helpdesk Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl overflow-hidden"
        >
          {/* Ambient Glows Inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-blue-300 mb-6">
              <Headphones className="w-4 h-4 text-emerald-400" />
              24/7 Dedicated IT Assistance
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Can't find the exact answer you're looking for? Speak directly with our IT support engineers or schedule a complimentary tech audit for your office.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
              <a
                href="tel:+919330855877"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Call Priority Desk</p>
                  <p className="text-sm font-bold text-white">+91 93308 55877</p>
                </div>
              </a>

              <a
                href="mailto:info@bitnextro.com"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Inquiries</p>
                  <p className="text-sm font-bold text-white">info@bitnextro.com</p>
                </div>
              </a>

              <a
                href="https://support.bitnextro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Client Helpdesk</p>
                  <p className="text-sm font-bold text-white">support.bitnextro.com ↗</p>
                </div>
              </a>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
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
