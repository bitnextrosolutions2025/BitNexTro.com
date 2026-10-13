import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
} from 'lucide-react';
import { handleError } from '../components/ErrorMessage';

const FALLBACK_ARTICLES = {
  'zero-trust-security-2026': {
    blog_title: 'The Zero-Trust Security Roadmap for Modern Enterprises in 2026',
    blog_description:
      'Why traditional perimeter firewalls are no longer sufficient. Learn how identity-driven micro-segmentation, continuous authentication, and Next-Gen EDR shield your critical data from sophisticated multi-stage ransomware.\n\nIn the era of distributed remote workforces and multi-cloud infrastructure, the classic network perimeter has dissolved. The foundational tenet of Zero-Trust is simple yet uncompromising: Never trust, always verify.\n\nKey Pillars of the 2026 Architecture:\n1. Strict Identity Verification: Enforcing phishing-resistant multi-factor authentication (MFA) on every endpoint and API connection.\n2. Least-Privilege Access: Granting staff and service accounts access only to the explicit systems they need to perform their duties.\n3. Micro-Segmentation: Isolating critical databases and server segments so an attacker cannot pivot laterally across your local network.\n4. Endpoint Telemetry & EDR: Deploying continuous machine learning monitors to detect behavioral anomalies in real-time.\n\nBy adopting a phased zero-trust migration, enterprises reduce their breach blast radius by up to 85% while satisfying statutory ISO 27001 and SOC2 compliance audits.',
    blog_image_url:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-24T10:00:00.000Z',
    category: 'Cybersecurity',
    author: 'BitNexTro SecOps',
  },
  'cloud-cost-optimization-strategies': {
    blog_title: 'Cloud Cost Optimization: Strategies to Trim 30%+ from AWS & Azure Bills',
    blog_description:
      'Discover how right-sizing computing instances, eliminating orphaned storage volumes, and implementing automated scheduling can slash your cloud infrastructure expenditure without sacrificing performance.\n\nCloud sprawl is one of the most common budget leaks in modern engineering teams. Unmonitored testing instances, unattached EBS/disk volumes, and oversized compute nodes quietly drain capital every month.\n\nActionable Cost Reduction Tactics:\n- Reserved Instances & Savings Plans: Commit to predictable baseline workloads to achieve up to 72% discounts over on-demand rates.\n- Automated Schedule Triggers: Spin down non-production dev and staging clusters during weekends and non-business hours.\n- Storage Tiering: Automatically transition aged log archives and backup snapshots to cold archive tiers (such as AWS Glacier or Azure Archive).\n\nRegular architectural reviews with BitNexTro cloud engineers ensure you achieve optimal performance at the leanest possible unit cost.',
    blog_image_url:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-18T14:30:00.000Z',
    category: 'Cloud Architecture',
    author: 'Cloud Solutions Team',
  },
  'preventing-business-downtime-amc': {
    blog_title: 'Preventing Business Downtime: The Tangible Value of Comprehensive IT AMC',
    blog_description:
      'Unplanned downtime costs businesses thousands every single hour. Explore how proactive hardware diagnostics, server health telemetry, and guaranteed engineer response SLAs safeguard daily productivity.\n\nFor growing businesses, waiting for an IT asset to fail before fixing it (break-fix) leads to unexpected delays, lost customer trust, and spiraling emergency repair costs. An Annual Maintenance Contract (AMC) transitions your infrastructure into a proactive, monitored asset.\n\nWhat a Professional AMC Delivers:\n- Scheduled monthly on-site hardware inspections and thermal cleanup.\n- Patch deployment and automated vulnerability updates for Windows and Linux servers.\n- Priority SLAs with on-site technician arrival within 2 to 4 hours for priority outages.\n- Routine disaster recovery drill validation.\n\nInvest in prevention rather than recovery to keep your team operating at peak performance.',
    blog_image_url:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-12T09:15:00.000Z',
    category: 'Managed IT & AMC',
    author: 'Infrastructure Desk',
  },
  'sd-wan-vs-legacy-mpls': {
    blog_title: 'SD-WAN vs. Legacy MPLS: Accelerating Multi-Branch Connectivity',
    blog_description:
      'How software-defined WAN architectures deliver intelligent traffic steering across multi-carrier broadband, automated failover, and lower operational overhead for growing enterprises.\n\nTraditional MPLS circuits are rigid, slow to provision, and expensive. With SD-WAN, businesses can combine standard fiber broadband, 4G/5G, and dedicated leased lines into a unified high-throughput network tunnel.\n\nBenefits include instantaneous link failover without dropped VoIP calls, intelligent SaaS traffic prioritization (Zoom, Microsoft 365, Salesforce), and centralized cloud portal management for all branch routers.',
    blog_image_url:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-05T11:45:00.000Z',
    category: 'Network Engineering',
    author: 'Network Operations',
  },
  'automated-backup-ransomware-insurance': {
    blog_title: 'Automated 3-2-1 Data Backup: Your Ultimate Insurance Against Ransomware',
    blog_description:
      'Why immutable air-gapped backups are the single most dependable defense against extortion malware, accompanied by our battle-tested recovery drills and disaster recovery blueprint.\n\nModern ransomware actively targets local backup repositories before encrypting primary servers. If your backups are accessible on the same domain, they will be deleted or locked.\n\nThe 3-2-1-1 Rule:\n- 3 copies of business data.\n- 2 different media formats.\n- 1 copy off-site in the cloud.\n- 1 copy immutable and completely air-gapped with write-once-read-many (WORM) locks.\n\nBitNexTro configures end-to-end automated backups that cannot be modified or encrypted by unauthorized software.',
    blog_image_url:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-02-28T08:20:00.000Z',
    category: 'Disaster Recovery',
    author: 'Data Resilience Team',
  },
  'ai-powered-it-helpdesk-automation': {
    blog_title: 'AI-Powered IT Helpdesk: Transforming Response Times & Ticket Resolution',
    blog_description:
      'How machine learning and predictive issue detection resolve Tier-1 tickets in seconds, empowering engineers to focus on high-impact digital transformation initiatives.\n\nAutomating password resets, software access permissions, and initial network diagnostics removes friction for your employees while dramatically reducing mean-time-to-resolution (MTTR).',
    blog_image_url:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-02-20T16:00:00.000Z',
    category: 'AI & Innovation',
    author: 'BitNexTro Labs',
  },
};

export default function DetailBlogPage() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

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
          // If no backend configured, check fallback or pick default
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
    if (!isoString) return 'Recent';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(isoString).toLocaleDateString('en-US', options);
  };

  const calculateReadTime = (desc) => {
    if (!desc) return '3 min read';
    const words = desc.trim().split(/\s+/).length;
    const minutes = Math.max(2, Math.ceil(words / 40));
    return `${minutes} min read`;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 overflow-hidden">
      <Helmet>
        <title>{blogData.blog_title} | BitNexTro Tech Insights</title>
        <meta
          name="description"
          content={blogData.blog_description ? blogData.blog_description.slice(0, 160) : 'BitNexTro Tech Blog'}
        />
      </Helmet>

      {/* ── Background Ambient Glows ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[130px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      {/* ── Main Article Container ── */}
      <div className="relative z-10 pt-20 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider">
              {blogData.category || 'Technology'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {blogData.blog_title}
          </h1>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200/80 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-500" />
                {formatDate(blogData.createdAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" />
                {calculateReadTime(blogData.blog_description)}
              </span>
              <span className="hidden sm:inline-block text-slate-400">
                Author: <strong className="text-slate-800">{blogData.author || 'BitNexTro Tech Desk'}</strong>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer text-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              {copied ? 'Link Copied!' : 'Share Article'}
            </button>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-200/80 bg-slate-900">
          <img
            src={blogData.blog_image_url}
            alt={blogData.blog_title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>

        {/* Article Content */}
        <article className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed mb-16">
          <div className="whitespace-pre-line text-base sm:text-lg leading-relaxed text-slate-700">
            {blogData.blog_description}
          </div>
        </article>

        {/* Author / BitNexTro Advisory Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border border-blue-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-md shrink-0">
              BN
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">BitNexTro Solutions Desk</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Specialized Enterprise IT, Cybersecurity Audits & Cloud Migration Solutions
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:scale-105 transition-all shrink-0"
          >
            Speak with an Engineer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
