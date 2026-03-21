import React, { useState, useEffect, useRef } from 'react'

const categories = ['All', 'IT Infrastructure', 'Cloud', 'AI', 'Web Development', 'Cybersecurity']

const blogPosts = [
  {
    id: 1,
    title: 'Cloud Computing: The Future of Business Operations',
    excerpt: 'Cloud technology helps businesses scale faster, reduce costs, and improve collaboration across global teams.',
    category: 'Cloud',
    date: 'March 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    alt: 'Cloud computing infrastructure with glowing server nodes and data connections',
  },
  {
    id: 2,
    title: 'Top 5 Cybersecurity Practices Every Company Must Follow',
    excerpt: 'Protect your business from cyber threats with these essential security practices and proven frameworks.',
    category: 'Cybersecurity',
    date: 'March 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    alt: 'Cybersecurity concept showing digital lock and network protection shield',
  },
  {
    id: 3,
    title: 'How AI is Transforming Modern Businesses',
    excerpt: 'Artificial Intelligence is revolutionizing decision-making, automation, and customer experience at scale.',
    category: 'AI',
    date: 'February 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    alt: 'Artificial intelligence visualization with neural network and glowing circuits',
  },
  {
    id: 4,
    title: 'Web Development Trends You Should Know in 2026',
    excerpt: 'Explore the latest trends shaping modern websites and applications in an AI-driven development landscape.',
    category: 'Web Development',
    date: 'February 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    alt: 'Web development code on dual monitors in a modern workspace setup',
  },
  {
    id: 5,
    title: 'Importance of Network Security in IT Infrastructure',
    excerpt: 'Secure networks are critical for protecting sensitive business data and maintaining operational continuity.',
    category: 'IT Infrastructure',
    date: 'January 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    alt: 'Network security with server racks and fiber optic cables in a data center',
  },
  {
    id: 6,
    title: 'Why Businesses are Moving to Hybrid Cloud',
    excerpt: 'Hybrid cloud offers unmatched flexibility, enterprise-grade security, and proven cost-efficiency for growth.',
    category: 'Cloud',
    date: 'January 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=80',
    alt: 'Hybrid cloud concept showing connected servers and cloud infrastructure',
  },
]

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, { threshold: 0.1, ...options })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function CategoryBadge({ category }) {
  const colors = {
    Cloud: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Cybersecurity: 'bg-red-500/20 text-red-300 border-red-500/30',
    AI: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Web Development': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'IT Infrastructure': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  }
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors[category] || 'bg-white/10 text-white/70 border-white/20'}`}>
      {category}
    </span>
  )
}

function BlogCard({ post, delay }) {
  const [hovered, setHovered] = useState(false)
  return (
    <AnimatedSection delay={delay}>
      <div
        className="group relative rounded-2xl overflow-hidden border h-full flex flex-col"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: hovered ? '0 16px 48px rgba(56,189,248,0.15)' : '0 4px 24px rgba(0,0,0,0.18)',
          borderColor: hovered ? 'rgba(56,189,248,0.35)' : 'rgba(255,255,255,0.1)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 to-transparent" />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={post.category} />
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3 text-xs text-white/40">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-white font-bold text-base leading-snug mb-2 line-clamp-2 group-hover:text-sky-300 transition-colors duration-200"
            style={{ fontFamily: " sans-serif" }}>
            {post.title}
          </h1>
          <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
            {post.excerpt}
          </p>
          <button
            className="mt-auto w-full py-2.5 rounded-xl text-sm font-semibold border border-sky-500/40 text-sky-300 transition-all duration-200 hover:bg-sky-500 hover:text-white hover:border-sky-500"
            style={{ letterSpacing: '0.02em' }}
          >
            Read More →
          </button>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <main
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(135deg, #0A1F44 0%, #0d2657 40%, #081836 100%)',
        fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        .line-clamp-2 { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
        .line-clamp-3 { display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden; }
        .grid-bg {
          background-image: linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px);
          background-size:64px 64px;
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes pulse-glow { 0%,100%{opacity:.3} 50%{opacity:.7} }
        .float-1 { animation: float 7s ease-in-out infinite; }
        .float-2 { animation: float 9s ease-in-out 1.5s infinite; }
        .glow-pulse { animation: pulse-glow 4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO HEADER ─────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg">
        <div className="pointer-events-none absolute inset-0">
          <div className="float-1 absolute top-10 left-1/4 w-72 h-72 rounded-full glow-pulse"
            style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)' }} />
          <div className="float-2 absolute bottom-0 right-1/4 w-96 h-96 rounded-full glow-pulse"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 text-sky-400 text-xs font-semibold mb-6 tracking-widest uppercase"
              style={{ background: 'rgba(56,189,248,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
              BitNextro Editorial
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1
              className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "sans-serif", letterSpacing: '-0.02em' }}
            >
              Insights &amp;{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}
              >
                Innovations
              </span>
              <br />from BitNextro
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest trends in IT Infrastructure, Cloud Solutions, AI, and Web Development.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            {/* <div className="flex justify-center gap-10 mt-12 flex-wrap">
              {[['120+', 'Articles'], ['50K+', 'Monthly Readers'], ['6', 'Categories']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-extrabold text-white" style={{ fontFamily: " sans-serif" }}>{num}</div>
                  <div className="text-white/40 text-sm mt-0.5">{label}</div>
                </div>
              ))}
            </div> */}
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED POST ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-sky-400" />
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Featured Story</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            className="group relative rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row cursor-pointer"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.3)',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 16px 64px rgba(56,189,248,0.12)'
              e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,0,0,0.3)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
                alt="Modern data center server room with rows of illuminated server racks and networking equipment"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1F44]/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/70 to-transparent lg:hidden" />
            </div>
            <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold px-3 py-1 rounded-full">IT Infrastructure</span>
                <span className="text-white/35 text-xs">March 2026 · 8 min read</span>
              </div>
              <h1
                className="text-white text-2xl lg:text-3xl font-extrabold leading-tight mb-4"
                style={{ fontFamily: " sans-serif" }}
              >
                Why Modern Businesses Need Strong IT Infrastructure in 2026
              </h1>
              <p className="text-white/55 leading-relaxed mb-8 text-sm lg:text-base">
                In today's digital world, a strong IT infrastructure is the backbone of every successful business. From secure data storage to seamless communication, companies must invest in scalable and reliable systems to stay competitive.
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}>
                    BN
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">BitNextro Team</div>
                    <div className="text-white/35 text-xs">Official Editorial</div>
                  </div>
                </div>
                <button
                  className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                    boxShadow: '0 4px 16px rgba(56,189,248,0.3)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(56,189,248,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(56,189,248,0.3)'}
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── VIDEO SECTION ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-purple-400" />
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Watch &amp; Learn</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            className="rounded-3xl overflow-hidden border border-white/10 p-6 lg:p-10 flex flex-col lg:flex-row gap-8 items-center"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.3)',
            }}
          >
            <div className="lg:w-3/5 w-full">
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-white/10"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/M988_fsOSWo"
                  title="IT Infrastructure Explained - BitNextro Video Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 text-purple-400 text-xs font-semibold mb-5"
                style={{ background: 'rgba(139,92,246,0.08)' }}>
                ▶ Video Guide
              </span>
              <h1
                className="text-white text-xl lg:text-2xl font-extrabold leading-snug mb-4"
                style={{ fontFamily: " sans-serif" }}
              >
                IT Infrastructure Explained
              </h1>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Understand how IT infrastructure works and why it is essential for business growth. This quick guide covers servers, networks, cloud, and security fundamentals every business leader needs to know.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Servers', 'Networking', 'Cloud', 'Security'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/50">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── CATEGORIES FILTER ───────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Explore Topics</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
                style={
                  activeCategory === cat
                    ? {
                        background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                        color: '#fff',
                        borderColor: 'transparent',
                        boxShadow: '0 4px 16px rgba(56,189,248,0.3)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.05)',
                        color: 'rgba(255,255,255,0.55)',
                        borderColor: 'rgba(255,255,255,0.12)',
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── BLOG GRID ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i * 80} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30 text-lg">
            No articles in this category yet.
          </div>
        )}
      </section>
    </main>
  )
}
