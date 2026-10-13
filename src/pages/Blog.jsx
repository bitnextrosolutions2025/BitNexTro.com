import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ChevronRight,
  Search,
  Sparkles,
  ArrowRight,
  BookOpen,
  Shield,
  Cloud,
  Server,
  Cpu,
  X,
  Send,
  CheckCircle2,
  Share2,
  TrendingUp,
} from 'lucide-react';
import Blogload from '../components/Blogload';

// ── FALLBACK CURATED ARTICLES (Used if API is initializing or offline) ──
const FALLBACK_POSTS = [
  {
    _id: 'zero-trust-security-2026',
    blog_title: 'The Zero-Trust Security Roadmap for Modern Enterprises in 2026',
    blog_description:
      'Why traditional perimeter firewalls are no longer sufficient. Learn how identity-driven micro-segmentation, continuous authentication, and Next-Gen EDR shield your critical data from sophisticated multi-stage ransomware.',
    blog_image_url:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-24T10:00:00.000Z',
    category: 'Cybersecurity',
    readTime: '5 min read',
    author: 'BitNexTro SecOps',
  },
  {
    _id: 'cloud-cost-optimization-strategies',
    blog_title: 'Cloud Cost Optimization: Strategies to Trim 30%+ from AWS & Azure Bills',
    blog_description:
      'Discover how right-sizing computing instances, eliminating orphaned storage volumes, and implementing automated scheduling can slash your cloud infrastructure expenditure without sacrificing performance.',
    blog_image_url:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-18T14:30:00.000Z',
    category: 'Cloud Architecture',
    readTime: '4 min read',
    author: 'Cloud Solutions Team',
  },
  {
    _id: 'preventing-business-downtime-amc',
    blog_title: 'Preventing Business Downtime: The Tangible Value of Comprehensive IT AMC',
    blog_description:
      'Unplanned downtime costs businesses thousands every single hour. Explore how proactive hardware diagnostics, server health telemetry, and guaranteed engineer response SLAs safeguard daily productivity.',
    blog_image_url:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-12T09:15:00.000Z',
    category: 'Managed IT & AMC',
    readTime: '6 min read',
    author: 'Infrastructure Desk',
  },
  {
    _id: 'sd-wan-vs-legacy-mpls',
    blog_title: 'SD-WAN vs. Legacy MPLS: Accelerating Multi-Branch Connectivity',
    blog_description:
      'How software-defined WAN architectures deliver intelligent traffic steering across multi-carrier broadband, automated failover, and lower operational overhead for growing enterprises.',
    blog_image_url:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-03-05T11:45:00.000Z',
    category: 'Network Engineering',
    readTime: '5 min read',
    author: 'Network Operations',
  },
  {
    _id: 'automated-backup-ransomware-insurance',
    blog_title: 'Automated 3-2-1 Data Backup: Your Ultimate Insurance Against Ransomware',
    blog_description:
      'Why immutable air-gapped backups are the single most dependable defense against extortion malware, accompanied by our battle-tested recovery drills and disaster recovery blueprint.',
    blog_image_url:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-02-28T08:20:00.000Z',
    category: 'Disaster Recovery',
    readTime: '4 min read',
    author: 'Data Resilience Team',
  },
  {
    _id: 'ai-powered-it-helpdesk-automation',
    blog_title: 'AI-Powered IT Helpdesk: Transforming Response Times & Ticket Resolution',
    blog_description:
      'How machine learning and predictive issue detection resolve Tier-1 tickets in seconds, empowering engineers to focus on high-impact digital transformation initiatives.',
    blog_image_url:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2026-02-20T16:00:00.000Z',
    category: 'AI & Innovation',
    readTime: '4 min read',
    author: 'BitNexTro Labs',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Articles', icon: BookOpen },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
  { id: 'cloud', label: 'Cloud Architecture', icon: Cloud },
  { id: 'managed-it', label: 'Managed IT & AMC', icon: Server },
  { id: 'networking', label: 'Networking', icon: Cpu },
];

const CULTURE_HIGHLIGHTS = [
  {
    title: 'Collaborative Engineering Lab',
    desc: 'Cross-functional engineering pods designing scalable server and cloud architectures.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    tag: 'Engineering',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: '24/7 Security Operations',
    desc: 'Real-time telemetry and firewall monitoring protecting client infrastructure around the clock.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    tag: 'Operations',
    span: '',
  },
  {
    title: 'Client Technical Strategy',
    desc: 'Aligning enterprise IT budgets with measurable cybersecurity and uptime outcomes.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    tag: 'Consulting',
    span: '',
  },
  {
    title: 'Innovation & Continuous Learning',
    desc: 'Weekly hands-on labs covering AWS, virtualization, and zero-day threat mitigation.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    tag: 'Culture',
    span: 'md:col-span-2',
  },
];

export default function Blog() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const handlescroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

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

  const resolveCategory = (post) => {
    if (post.category) return post.category;
    const text = `${post.blog_title} ${post.blog_description}`.toLowerCase();
    if (text.includes('secur') || text.includes('ransom') || text.includes('firewall')) return 'Cybersecurity';
    if (text.includes('cloud') || text.includes('aws') || text.includes('azure')) return 'Cloud Architecture';
    if (text.includes('amc') || text.includes('manage') || text.includes('support')) return 'Managed IT & AMC';
    if (text.includes('network') || text.includes('wan') || text.includes('router')) return 'Networking';
    if (text.includes('ai') || text.includes('automat')) return 'AI & Innovation';
    return 'IT Strategy';
  };

  useEffect(() => {
    handlescroll();
    const FetchBlogData = async () => {
      setIsLoaded(true);
      try {
        const backendBase = import.meta.env.VITE_BACKEND_URL;
        if (!backendBase) {
          setBlogPosts(FALLBACK_POSTS);
          setIsLoaded(false);
          return;
        }
        const url = `${backendBase}/api/v5/blog/fetch-all-blog`;
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data && data.blogdata && data.blogdata.length > 0) {
          const revBlogdata = [...data.blogdata].reverse();
          setBlogPosts(revBlogdata);
        } else {
          setBlogPosts(FALLBACK_POSTS);
        }
      } catch (err) {
        console.warn('Backend blog fetch failed, rendering curated posts:', err);
        setBlogPosts(FALLBACK_POSTS);
      } finally {
        setIsLoaded(false);
      }
    };
    FetchBlogData();
  }, []);

  // Filtered posts based on active category & search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const category = resolveCategory(post).toLowerCase();

      // Category matching
      if (activeCategory !== 'all') {
        if (activeCategory === 'cybersecurity' && !category.includes('secur')) return false;
        if (activeCategory === 'cloud' && !category.includes('cloud')) return false;
        if (activeCategory === 'managed-it' && !category.includes('manage') && !category.includes('amc')) return false;
        if (activeCategory === 'networking' && !category.includes('network')) return false;
      }

      // Search matching
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inTitle = (post.blog_title || '').toLowerCase().includes(q);
      const inDesc = (post.blog_description || '').toLowerCase().includes(q);
      const inCat = category.includes(q);
      return inTitle || inDesc || inCat;
    });
  }, [blogPosts, activeCategory, searchQuery]);

  // Featured spotlight post is the first article when no search query is active
  const featuredPost = !searchQuery && activeCategory === 'all' && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscriberEmail || !subscriberEmail.includes('@')) return;
    setEmailSubscribed(true);
    setSubscriberEmail('');
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 overflow-hidden">
      <Helmet>
        <title>Tech Insights & Engineering Blog | BitNexTro IT Solutions</title>
        <meta
          name="description"
          content="Explore the latest articles on Enterprise IT Management, Cybersecurity, Cloud Infrastructure, IT AMC, and Digital Transformation from BitNexTro Solutions."
        />
      </Helmet>

      {/* ── Background Ambient Glows ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[130px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      {/* ── Main Container ── */}
      <div className="relative z-10 pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 mt-2.5 max-w-7xl mx-auto">
        {/* ── Hero Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-medium text-sm mb-6 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Tech Insights & Innovation Hub
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
            Insights, Trends & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">
              Future-Ready IT
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Expert perspectives, tactical engineering guides, and technology breakdowns covering enterprise cloud, cybersecurity, and infrastructure resilience.
          </p>

          {/* ── Search Input ── */}
          <div className="relative max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-5 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, keyword, or tech..."
                className="w-full pl-13 pr-12 py-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-md shadow-slate-200/40 transition-all text-sm sm:text-base font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-slate-500 mt-2 text-left px-2">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} matching "{searchQuery}"
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

        {/* ── Main Content Area ── */}
        {isLoaded ? (
          <Blogload />
        ) : (
          <>
            {/* ── Featured Spotlight Story (Top Pick) ── */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-14"
              >
                <div className="relative group bg-white/90 backdrop-blur-2xl border border-slate-200/80 hover:border-blue-300/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-blue-500/5 transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Featured Image */}
                    <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                      <img
                        src={featuredPost.blog_image_url}
                        alt={featuredPost.blog_title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                      
                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-md flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Featured Story
                        </span>
                        <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold shadow-md">
                          {resolveCategory(featuredPost)}
                        </span>
                      </div>
                    </div>

                    {/* Featured Content */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            {formatDate(featuredPost.createdAt)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-emerald-500" />
                            {calculateReadTime(featuredPost.blog_description)}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                          <Link to={`/blog/${featuredPost._id}`} onClick={handlescroll}>
                            {featuredPost.blog_title}
                          </Link>
                        </h2>

                        <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3">
                          {featuredPost.blog_description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                            BN
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">BitNexTro Editorial</p>
                            <p className="text-[11px] text-slate-500">Tech Insights Desk</p>
                          </div>
                        </div>

                        <Link
                          to={`/blog/${featuredPost._id}`}
                          onClick={handlescroll}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-md shadow-blue-500/20 group-hover:translate-x-1"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Latest Articles Grid ── */}
            <div className="mb-24">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {searchQuery ? 'Search Results' : 'Latest Articles & Guides'}
                    </h2>
                    <p className="text-xs text-slate-500">Curated by BitNexTro enterprise systems engineers</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  {gridPosts.length} {gridPosts.length === 1 ? 'Article' : 'Articles'}
                </span>
              </div>

              {gridPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridPosts.map((post, idx) => (
                    <motion.article
                      key={post._id || idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group bg-white/80 backdrop-blur-xl border border-slate-200/80 hover:border-blue-300 rounded-3xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
                    >
                      {/* Image Thumbnail */}
                      <div>
                        <div className="relative h-56 overflow-hidden bg-slate-900">
                          <img
                            src={post.blog_image_url}
                            alt={post.blog_title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                          {/* Floating Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold shadow-md">
                              {resolveCategory(post)}
                            </span>
                          </div>

                          {/* Reading Time Badge */}
                          <div className="absolute top-4 right-4">
                            <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1 shadow-md">
                              <Clock className="w-3 h-3 text-emerald-400" />
                              {calculateReadTime(post.blog_description)}
                            </span>
                          </div>
                        </div>

                        {/* Article Text */}
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-blue-500" />
                              {formatDate(post.createdAt)}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                            <Link to={`/blog/${post._id}`} onClick={handlescroll}>
                              {post.blog_title}
                            </Link>
                          </h3>

                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                            {post.blog_description}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Link */}
                      <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <Link
                          to={`/blog/${post._id}`}
                          onClick={handlescroll}
                          className="flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                        >
                          Read Article
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                        <span className="text-xs text-slate-400 font-medium">BitNexTro</span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">No articles found</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                    We couldn't find any articles matching your search query. Try a different keyword or reset filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* ── Culture / Life at BitNexTro Bento Gallery ── */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Behind the Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">BitNexTro</span>
            </h2>
            <p className="text-slate-600 text-base font-light">
              Where curious technologists, cloud architects, and cybersecurity specialists unite to engineer dependable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[220px]">
            {CULTURE_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-slate-200/80 bg-slate-950 shadow-md ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Newsletter / Advisory CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 border border-blue-200/80 rounded-[2.5rem] p-8 sm:p-14 shadow-xl shadow-blue-500/5 overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Stay Informed
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Stay Ahead of Tomorrow's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Technology
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mb-8">
              Join IT decision-makers receiving BitNexTro's bi-weekly briefings on critical cybersecurity advisories, cloud cost optimizations, and infrastructure resilience.
            </p>

            {emailSubscribed ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-sm shadow-xs animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Thank you for subscribing! We'll deliver our next technical briefing straight to your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Enter your corporate email..."
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm shadow-xs"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-xs text-slate-400 mt-4">
              Zero spam. Unsubscribe at any time with one click.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
