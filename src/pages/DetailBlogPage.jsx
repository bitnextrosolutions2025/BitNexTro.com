import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Bookmark,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Twitter,
  Copy,
  ChevronRight,
  BookOpen,
  Award,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { handleError } from '../components/ErrorMessage';

const FALLBACK_ARTICLES = {
  'zero-trust-security-2026': {
    _id: 'zero-trust-security-2026',
    blog_title: 'The Zero-Trust Security Roadmap for Modern Enterprises in 2026',
    blog_description:
      'Why traditional perimeter firewalls are no longer sufficient. Learn how identity-driven micro-segmentation, continuous authentication, and Next-Gen EDR shield your critical data from sophisticated multi-stage ransomware.\n\nIn the era of distributed remote workforces and multi-cloud infrastructure, the classic network perimeter has dissolved. The foundational tenet of Zero-Trust is simple yet uncompromising: Never trust, always verify.\n\nKey Pillars of the 2026 Architecture:\n1. Strict Identity Verification: Enforcing phishing-resistant multi-factor authentication (MFA) on every endpoint and API connection.\n2. Least-Privilege Access: Granting staff and service accounts access only to the explicit systems they need to perform their duties.\n3. Micro-Segmentation: Isolating critical databases and server segments so an attacker cannot pivot laterally across your local network.\n4. Endpoint Telemetry & EDR: Deploying continuous machine learning monitors to detect behavioral anomalies in real-time.\n\nBy adopting a phased zero-trust migration, enterprises reduce their breach blast radius by up to 85% while satisfying statutory ISO 27001 and SOC2 compliance audits.',
    blog_image_url:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-24T10:00:00.000Z',
    category: 'Cybersecurity',
    author: 'BitNexTro SecOps Desk',
    tags: ['Cybersecurity', 'Zero-Trust', 'EDR', 'Ransomware Protection'],
  },
  'cloud-cost-optimization-strategies': {
    _id: 'cloud-cost-optimization-strategies',
    blog_title: 'Cloud Cost Optimization: Strategies to Trim 30%+ from AWS & Azure Bills',
    blog_description:
      'Discover how right-sizing computing instances, eliminating orphaned storage volumes, and implementing automated scheduling can slash your cloud infrastructure expenditure without sacrificing performance.\n\nCloud sprawl is one of the most common budget leaks in modern engineering teams. Unmonitored testing instances, unattached EBS/disk volumes, and oversized compute nodes quietly drain capital every month.\n\nActionable Cost Reduction Tactics:\n1. Reserved Instances & Savings Plans: Commit to predictable baseline workloads to achieve up to 72% discounts over on-demand rates.\n2. Automated Schedule Triggers: Spin down non-production dev and staging clusters during weekends and non-business hours.\n3. Storage Tiering: Automatically transition aged log archives and backup snapshots to cold archive tiers (such as AWS Glacier or Azure Archive).\n4. Rightsizing Analysis: Analyze CPU and memory utilization thresholds to downgrade over-provisioned virtual machines.\n\nRegular architectural reviews with BitNexTro cloud engineers ensure you achieve optimal performance at the leanest possible unit cost.',
    blog_image_url:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-18T14:30:00.000Z',
    category: 'Cloud Architecture',
    author: 'Cloud Engineering Team',
    tags: ['Cloud Computing', 'AWS', 'Azure', 'Cost Optimization'],
  },
  'preventing-business-downtime-amc': {
    _id: 'preventing-business-downtime-amc',
    blog_title: 'Preventing Business Downtime: The Tangible Value of Comprehensive IT AMC',
    blog_description:
      'Unplanned downtime costs businesses thousands every single hour. Explore how proactive hardware diagnostics, server health telemetry, and guaranteed engineer response SLAs safeguard daily productivity.\n\nFor growing businesses, waiting for an IT asset to fail before fixing it leads to unexpected delays, lost customer trust, and spiraling emergency repair costs. An Annual Maintenance Contract (AMC) transitions your infrastructure into a proactive, monitored asset.\n\nWhat a Professional AMC Delivers:\n1. Scheduled Preventive Inspections: Routine on-site hardware health testing, thermal cleanup, and UPS battery monitoring.\n2. Automated Patch Deployment: Routine operating system and firmware patch management for Windows and Linux servers.\n3. Guaranteed Response SLAs: Rapid technician arrival within 2 to 4 hours for priority network or server emergencies.\n4. Disaster Recovery Validation: Regular test restores to guarantee backups work seamlessly during a crisis.\n\nInvest in proactive prevention rather than emergency recovery to keep your staff productive and your operations resilient.',
    blog_image_url:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-12T09:15:00.000Z',
    category: 'Managed IT & AMC',
    author: 'Infrastructure Operations',
    tags: ['IT AMC', 'Managed IT', 'Hardware Support', 'Uptime SLAs'],
  },
  'sd-wan-vs-legacy-mpls': {
    _id: 'sd-wan-vs-legacy-mpls',
    blog_title: 'SD-WAN vs. Legacy MPLS: Accelerating Multi-Branch Connectivity',
    blog_description:
      'How software-defined WAN architectures deliver intelligent traffic steering across multi-carrier broadband, automated failover, and lower operational overhead for growing enterprises.\n\nTraditional MPLS circuits are rigid, slow to provision, and expensive. With SD-WAN, businesses can combine standard fiber broadband, 4G/5G, and dedicated leased lines into a unified high-throughput network tunnel.\n\nCore Advantages of SD-WAN:\n1. Dynamic Path Steering: Automatically routes critical VoIP and video traffic along the lowest-latency circuit in real-time.\n2. Instant Link Failover: If a primary ISP drops, traffic reroutes in sub-seconds without disconnecting active calls.\n3. Application Optimization: Delivers up to 3x faster response times for Microsoft 365, Salesforce, and AWS workloads.\n4. Centralized Orchestration: Configure firewall policies and QoS rules for all branches from a single unified cloud console.',
    blog_image_url:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-05T11:45:00.000Z',
    category: 'Network Engineering',
    author: 'Network Architecture Desk',
    tags: ['SD-WAN', 'Networking', 'Branch Connectivity', 'MPLS Alternative'],
  },
  'automated-backup-ransomware-insurance': {
    _id: 'automated-backup-ransomware-insurance',
    blog_title: 'Automated 3-2-1 Data Backup: Your Ultimate Insurance Against Ransomware',
    blog_description:
      'Why immutable air-gapped backups are the single most dependable defense against extortion malware, accompanied by our battle-tested recovery drills and disaster recovery blueprint.\n\nModern ransomware actively targets local backup repositories before encrypting primary servers. If your backups are accessible on the same domain, they will be encrypted or deleted alongside everything else.\n\nThe Resilient 3-2-1 Strategy:\n1. 3 Copies of Critical Data: Maintain one primary production copy and two secondary backup versions.\n2. 2 Distinct Media Types: Store data across local NVMe/NAS storage and cloud object vaults.\n3. 1 Air-Gapped / Immutable Copy: Protect cloud copies using Write-Once-Read-Many (WORM) locks that cannot be erased even by root credentials.\n\nBitNexTro configures end-to-end automated backups that guarantee rapid recovery within minutes.',
    blog_image_url:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-02-28T08:20:00.000Z',
    category: 'Disaster Recovery',
    author: 'Data Resilience Team',
    tags: ['Data Backup', 'Disaster Recovery', 'Ransomware Defense', 'WORM Storage'],
  },
  'ai-powered-it-helpdesk-automation': {
    _id: 'ai-powered-it-helpdesk-automation',
    blog_title: 'AI-Powered IT Helpdesk: Transforming Response Times & Ticket Resolution',
    blog_description:
      'How machine learning and predictive issue detection resolve Tier-1 tickets in seconds, empowering engineers to focus on high-impact digital transformation initiatives.\n\nAutomating password resets, software access permissions, and initial network diagnostics removes friction for your employees while dramatically reducing mean-time-to-resolution (MTTR).\n\nKey Innovations in Modern IT Helpdesks:\n1. Intelligent Ticket Triage: Categorizes and assigns urgent outages to specialized engineers automatically.\n2. Self-Healing Endpoints: Pre-configured agents detect recurring disk or memory memory leaks and auto-remediate them before users notice.\n3. Real-Time Telemetry Dashboards: Gives IT leadership full visibility into fleet health, security compliance, and licensing usage.',
    blog_image_url:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-02-20T16:00:00.000Z',
    category: 'AI & Innovation',
    author: 'BitNexTro Labs',
    tags: ['AI in IT', 'Automation', 'Helpdesk SLAs', 'Predictive IT'],
  },
};

export default function DetailBlogPage() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const [allPosts, setAllPosts] = useState(Object.values(FALLBACK_ARTICLES));

  // Reading progress scroll tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Fetch full catalog for recommendations
    const fetchCatalog = async () => {
      try {
        const backendBase = import.meta.env.VITE_BACKEND_URL;
        if (!backendBase) return;
        const res = await fetch(`${backendBase}/api/v5/blog/fetch-all-blog`);
        if (!res.ok) return;
        const data = await res.json();
        if (data && data.blogdata && data.blogdata.length > 0) {
          const rev = [...data.blogdata].reverse();
          const fallbackArr = Object.values(FALLBACK_ARTICLES);
          const merged = [
            ...rev,
            ...fallbackArr.filter(
              (fp) => !rev.some((dp) => dp._id === fp._id || dp.blog_title?.toLowerCase() === fp.blog_title?.toLowerCase())
            ),
          ];
          setAllPosts(merged);
        }
      } catch (e) {
        // fallback catalog remains
      }
    };
    fetchCatalog();

    const fetchWholeBlogData = async () => {
      setLoading(true);
      // Check fallback first for instantaneous preview
      if (FALLBACK_ARTICLES[id]) {
        setBlogData(FALLBACK_ARTICLES[id]);
        setLoading(false);
        return;
      }

      try {
        const backendBase = import.meta.env.VITE_BACKEND_URL;
        if (!backendBase) {
          setBlogData(FALLBACK_ARTICLES['zero-trust-security-2026']);
          setLoading(false);
          return;
        }

        const url = `${backendBase}/api/v5/blog/details-blog/${id}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error('Failed to fetch blog');
        const data = await response.json();
        if (data && data.Blogdata) {
          setBlogData(data.Blogdata);
        } else {
          setBlogData(FALLBACK_ARTICLES['zero-trust-security-2026']);
        }
      } catch (error) {
        console.warn('API detail fetch fallback:', error);
        setBlogData(FALLBACK_ARTICLES[id] || FALLBACK_ARTICLES['zero-trust-security-2026']);
      } finally {
        setLoading(false);
      }
    };

    fetchWholeBlogData();
  }, [id]);

  const formatDate = (isoString) => {
    if (!isoString) return 'Recently Published';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(isoString).toLocaleDateString('en-US', options);
  };

  const calculateReadTime = (desc) => {
    if (!desc) return '3 min read';
    const words = desc.trim().split(/\s+/).length;
    const minutes = Math.max(2, Math.ceil(words / 45));
    return `${minutes} min read`;
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(blogData?.blog_title || 'Check out this tech article:');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${blogData?.blog_title || 'Check out this article'}: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Related recommended articles (exclude current)
  const relatedArticles = useMemo(() => {
    const filtered = allPosts.filter((a) => a._id !== id);
    return filtered.slice(0, 2);
  }, [allPosts, id]);

  // Intelligent Formatter: splits text into structured sections, headings, and clean paragraphs
  const renderFormattedArticleContent = (rawText) => {
    if (!rawText) return null;

    // Split by double newlines or single newlines
    const paragraphs = rawText.split(/\n\s*\n/);

    return paragraphs.map((block, pIdx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Check if block is a section heading (e.g. "Key Pillars...", "What a Professional AMC Delivers:", etc.)
      const isHeading =
        (trimmed.endsWith(':') && trimmed.length < 90) ||
        trimmed.startsWith('## ') ||
        trimmed.startsWith('### ');

      if (isHeading) {
        const cleanHeading = trimmed.replace(/^#+\s*/, '').replace(/:$/, '');
        return (
          <div key={pIdx} className="pt-6 pb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full inline-block" />
              {cleanHeading}
            </h2>
          </div>
        );
      }

      // Check if block contains numbered or bulleted list items (e.g. "1. ", "2. ", "- ")
      const lines = trimmed.split('\n');
      const isList = lines.some((l) => /^\s*(\d+\.|\-|\•)\s+/.test(l));

      if (isList) {
        return (
          <div key={pIdx} className="my-6 space-y-3.5 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7">
            {lines.map((line, lIdx) => {
              const lineTrimmed = line.trim();
              if (!lineTrimmed) return null;

              const isItem = /^\s*(\d+\.|\-|\•)\s+/.test(lineTrimmed);
              if (isItem) {
                // Separate prefix (e.g. "1.", "-") and content
                const match = lineTrimmed.match(/^(\d+\.|\-|\•)\s+(.*)$/);
                const itemContent = match ? match[2] : lineTrimmed;

                // Check if item has bold title (e.g. "Strict Identity Verification: Enforcing...")
                const parts = itemContent.split(/:\s*(.*)/);
                const hasLabel = parts.length > 1;

                return (
                  <div key={lIdx} className="flex items-start gap-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      {hasLabel ? (
                        <>
                          <strong className="font-bold text-slate-900">{parts[0]}: </strong>
                          <span>{parts[1]}</span>
                        </>
                      ) : (
                        <span>{itemContent}</span>
                      )}
                    </div>
                  </div>
                );
              }

              // Normal text inside list block
              return (
                <p key={lIdx} className="text-slate-800 font-semibold mb-2">
                  {lineTrimmed}
                </p>
              );
            })}
          </div>
        );
      }

      // First paragraph callout lead
      if (pIdx === 0) {
        return (
          <div key={pIdx} className="mb-8">
            <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-relaxed border-l-4 border-blue-600 pl-6 py-1 italic bg-blue-50/40 rounded-r-2xl">
              {trimmed}
            </p>
          </div>
        );
      }

      // Standard readable paragraph with comfortable measure and leading
      return (
        <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-[1.85] mb-6 font-normal">
          {trimmed}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-24 pb-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4" />
          <p className="text-slate-900 text-lg font-semibold">Loading Article...</p>
        </div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Article Not Found</h2>
        <p className="text-slate-600 mb-6">The requested article could not be located.</p>
        <Link
          to="/blog"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const categoryName = blogData.category || 'Technology Insights';
  const readTimeStr = calculateReadTime(blogData.blog_description);
  const authorName = blogData.author || 'BitNexTro Systems Engineering Desk';

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 overflow-hidden">
      <Helmet>
        <title>{blogData.blog_title} | BitNexTro Tech Insights</title>
        <meta
          name="description"
          content={blogData.blog_description ? blogData.blog_description.slice(0, 160) : 'BitNexTro Tech Blog'}
        />
      </Helmet>

      {/* Reading Progress Top Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[130px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 pt-20 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-slate-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold">{categoryName}</span>
          </div>
        </div>

        {/* Article Header (Centered & Impactful) */}
        <header className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {categoryName}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-8">
            {blogData.blog_title}
          </h1>

          {/* Author & Publish Metadata Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                BN
              </div>
              <div className="text-left">
                <span className="font-bold text-slate-900 block leading-tight">{authorName}</span>
                <span className="text-[11px] text-slate-400">Verified Technical Desk</span>
              </div>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>{formatDate(blogData.createdAt)}</span>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>{readTimeStr}</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Image Frame */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950">
            <img
              src={blogData.blog_image_url}
              alt={blogData.blog_title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Editorial Layout: Main Content (Col 8) + Sticky Sidebar (Col 4) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Article Body Column */}
          <main className="lg:col-span-8">
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-blue-500/5">
              {renderFormattedArticleContent(blogData.blog_description)}

              {/* Bottom Tags Row */}
              <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-wider">Topics:</span>
                {(blogData.tags || ['Enterprise IT', 'Infrastructure', 'Security']).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 text-xs font-medium transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Signature & Consultation Box */}
            <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-slate-50 border border-blue-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-md shrink-0">
                  BN
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">BitNexTro Solutions Desk</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Enterprise IT Management, Cybersecurity Defense & Cloud Architecture
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:scale-105 transition-all shrink-0 cursor-pointer"
              >
                Speak with an Engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </main>

          {/* Sticky Editorial Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Quick Share Card */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-blue-600" />
                Share This Article
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/70 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>

                <button
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>

                <button
                  onClick={handleShareLinkedIn}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>

                <button
                  onClick={handleShareTwitter}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Twitter className="w-4 h-4" />
                  X (Twitter)
                </button>
              </div>
            </div>

            {/* Need IT Support Assistance Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/20 rounded-full blur-[50px] pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-[11px] font-semibold mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Enterprise IT AMC
              </span>

              <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                Need Help Implementing This Architecture?
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed mb-5 font-light">
                Our certified engineers handle cybersecurity hardening, cloud migrations, and 24/7 infrastructure monitoring for growing businesses.
              </p>

              <div className="space-y-2.5">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-bold transition-all shadow-md"
                >
                  Schedule a Free IT Audit
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="tel:+919330855877"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +91 93308 55877
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Recommended "Read Next" Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-5xl mx-auto mt-20 pt-12 border-t border-slate-200/80">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Continue Reading
                </h3>
                <p className="text-xs text-slate-500">More perspectives from BitNexTro tech desk</p>
              </div>
              <Link
                to="/blog"
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <article
                  key={rel._id}
                  className="group bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-300 rounded-3xl p-6 shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-5 bg-slate-900">
                      <img
                        src={rel.blog_image_url}
                        alt={rel.blog_title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-semibold shadow-xs">
                        {rel.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {formatDate(rel.createdAt)}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 leading-snug">
                      <Link to={`/blog/${rel._id}`}>
                        {rel.blog_title}
                      </Link>
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {rel.blog_description}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${rel._id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 mt-auto pt-2"
                  >
                    Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
