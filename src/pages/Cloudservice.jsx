import React, { useEffect, useRef } from 'react'

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

 

  :root {
    --p0: #09020f;
    --p1: #100520;
    --p2: #1a0838;
    --p3: #270d52;
    --primary: #6D28D9;
    --vivid: #7c3aed;
    --accent: #C4B5FD;
    --glow: #a78bfa;
    --lavender: #ede9fe;
    --white: #ffffff;
    --muted: #c4b5fd;
    --dim: rgba(196,181,253,0.6);
    --glass: rgba(109,40,217,0.12);
    --glass-border: rgba(167,139,250,0.18);
    --glass-hover: rgba(109,40,217,0.22);
  }

  .cs-wrap {
    font-family: 'Outfit', sans-serif;
    background:
      radial-gradient(ellipse 90% 60% at 80% 10%, rgba(109,40,217,0.22) 0%, transparent 55%),
      radial-gradient(ellipse 60% 50% at 10% 90%, rgba(76,29,149,0.28) 0%, transparent 55%),
      radial-gradient(ellipse 40% 40% at 50% 50%, rgba(109,40,217,0.08) 0%, transparent 60%),
      linear-gradient(170deg, #09020f 0%, #130628 35%, #1b0940 65%, #0d0320 100%);
    min-height: 100vh;
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  /* ── Network canvas ── */
  .cs-canvas {
    position: fixed; inset: 0;
    pointer-events: none; z-index: 0;
    opacity: 0.55;
  }

  /* ── Grain overlay ── */
  .cs-grain {
    position: fixed; inset: 0; z-index: 1; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.35;
  }

  /* ── Content wrapper ── */
  .cs-content { position: relative; z-index: 2; }

  /* ── Shared section styles ── */
  .cs-section { padding: 100px 80px; }
  @media (max-width: 900px) { .cs-section { padding: 70px 28px; } }

  .cs-eyebrow {
    font-family: 'Fira Code', monospace;
    font-size: 12px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--glow); margin-bottom: 14px;
    display: flex; align-items: center; gap: 10px;
  }
  .cs-eyebrow::before {
    content: ''; display: inline-block; width: 32px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--glow));
  }
  .cs-title {
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 800; line-height: 1.1;
    letter-spacing: -1px;
  }
  .cs-title-grad {
    background: linear-gradient(135deg, #fff 30%, var(--accent) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .cs-sub {
    font-size: 17px; color: var(--dim); line-height: 1.75;
    font-weight: 300; max-width: 560px;
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━
     SECTION 1 — OUR CLOUD SOLUTIONS
  ━━━━━━━━━━━━━━━━━━━━━━━━ */
  .cs-solutions {
    background: transparent;
  }
  .cs-solutions-head { text-align: center; margin-bottom: 64px; }
  .cs-solutions-head .cs-eyebrow { justify-content: center; }
  .cs-solutions-head .cs-eyebrow::before { display: none; }
  .cs-solutions-head .cs-sub { margin: 16px auto 0; text-align: center; }

  .cs-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
  }
  @media (max-width: 1100px) { .cs-cards { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 600px) { .cs-cards { grid-template-columns: 1fr; } }

  .cs-card {
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 38px 28px 32px;
    position: relative; overflow: hidden;
    transition: transform 0.35s cubic-bezier(.22,.9,.36,1),
                border-color 0.35s, box-shadow 0.35s, background 0.35s;
    cursor: default;
  }
  .cs-card::after {
    content: '';
    position: absolute; inset: 0; border-radius: inherit;
    background: radial-gradient(ellipse at top left, rgba(167,139,250,0.12) 0%, transparent 65%);
    opacity: 0; transition: opacity 0.35s;
  }
  .cs-card:hover {
    transform: translateY(-8px);
    border-color: rgba(167,139,250,0.45);
    background: var(--glass-hover);
    box-shadow: 0 24px 80px rgba(109,40,217,0.32), 0 0 0 1px rgba(167,139,250,0.12);
  }
  .cs-card:hover::after { opacity: 1; }

  .cs-card-top {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 26px;
  }
  .cs-card-icon {
    width: 54px; height: 54px; border-radius: 14px;
    background: linear-gradient(135deg, rgba(109,40,217,0.45), rgba(124,58,237,0.2));
    border: 1px solid rgba(167,139,250,0.25);
    display: flex; align-items: center; justify-content: center;
    transition: box-shadow 0.35s;
  }
  .cs-card:hover .cs-card-icon {
    box-shadow: 0 0 28px rgba(109,40,217,0.55);
  }
  .cs-card-num {
    font-family: 'Fira Code', monospace;
    font-size: 12px; color: rgba(196,181,253,0.35);
    letter-spacing: 1px;
  }
  .cs-card h3 {
    font-size: 19px; font-weight: 700; margin-bottom: 12px;
    color: var(--white);
  }
  .cs-card p {
    font-size: 14px; color: var(--dim); line-height: 1.65; font-weight: 300;
  }
  .cs-card-footer {
    margin-top: 26px; display: flex; align-items: center; gap: 6px;
    font-size: 13px; color: var(--glow); font-weight: 500;
    transition: gap 0.2s;
  }
  .cs-card:hover .cs-card-footer { gap: 10px; }

  /* card accent stripe */
  .cs-card-stripe {
    position: absolute; top: 0; left: 28px; right: 28px; height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    opacity: 0; transition: opacity 0.35s;
    border-radius: 0 0 4px 4px;
  }
  .cs-card:hover .cs-card-stripe { opacity: 1; }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━
     SECTION 2 — KEY FEATURES
  ━━━━━━━━━━━━━━━━━━━━━━━━ */
  .cs-features {
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
    background: linear-gradient(180deg, rgba(109,40,217,0.05) 0%, rgba(109,40,217,0.0) 100%);
  }
  .cs-features-head { margin-bottom: 56px; }

  .cs-feat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    border: 1px solid var(--glass-border);
    border-radius: 22px;
    overflow: hidden;
    background: var(--glass-border);
  }
  @media (max-width: 900px) { .cs-feat-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 500px) { .cs-feat-grid { grid-template-columns: 1fr; } }

  .cs-feat {
    background: rgba(9,2,15,0.7);
    padding: 44px 36px;
    display: flex; flex-direction: column;
    gap: 20px;
    transition: background 0.3s;
    position: relative; overflow: hidden;
  }
  .cs-feat::before {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    transform: scaleX(0); transition: transform 0.35s;
  }
  .cs-feat:hover { background: rgba(109,40,217,0.1); }
  .cs-feat:hover::before { transform: scaleX(1); }

  .cs-feat-icon-wrap {
    width: 50px; height: 50px; border-radius: 13px;
    background: linear-gradient(135deg, rgba(109,40,217,0.4), rgba(76,29,149,0.2));
    border: 1px solid rgba(167,139,250,0.2);
    display: flex; align-items: center; justify-content: center;
  }
  .cs-feat-pct {
    font-family: 'Outfit', sans-serif;
    font-size: 36px; font-weight: 800; letter-spacing: -1px;
    background: linear-gradient(135deg, var(--white), var(--accent));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    line-height: 1;
  }
  .cs-feat h4 {
    font-size: 17px; font-weight: 700; color: var(--white); margin-bottom: 6px;
  }
  .cs-feat p { font-size: 13px; color: var(--dim); line-height: 1.6; font-weight: 300; }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━
     SECTION 3 — WHY CHOOSE US
  ━━━━━━━━━━━━━━━━━━━━━━━━ */
  .cs-why { }
  .cs-why-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 900px) { .cs-why-inner { grid-template-columns: 1fr; gap: 52px; } }

  .cs-why-left .cs-sub { max-width: 100%; margin-top: 20px; }
  .cs-why-checklist { margin-top: 36px; display: flex; flex-direction: column; gap: 16px; }
  .cs-check {
    display: flex; align-items: center; gap: 14px;
    font-size: 15px; color: var(--lavender); font-weight: 400;
  }
  .cs-check-dot {
    width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
    background: linear-gradient(135deg, var(--primary), var(--vivid));
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 16px rgba(109,40,217,0.5);
  }

  .cs-why-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: 500px) { .cs-why-right { grid-template-columns: 1fr; } }

  .cs-stat-card {
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 18px;
    padding: 30px 24px;
    position: relative; overflow: hidden;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  }
  .cs-stat-card:hover {
    transform: translateY(-4px);
    border-color: rgba(167,139,250,0.4);
    box-shadow: 0 16px 48px rgba(109,40,217,0.28);
  }
  .cs-stat-card:first-child {
    grid-column: span 2;
    display: flex; align-items: center; gap: 24px;
  }
  @media (max-width: 500px) { .cs-stat-card:first-child { grid-column: span 1; flex-direction: column; } }

  .cs-stat-icon {
    width: 48px; height: 48px; flex-shrink: 0; border-radius: 12px;
    background: linear-gradient(135deg, rgba(109,40,217,0.45), rgba(124,58,237,0.15));
    border: 1px solid rgba(167,139,250,0.2);
    display: flex; align-items: center; justify-content: center;
  }
  .cs-stat-num {
    font-family: 'Outfit', sans-serif;
    font-size: 38px; font-weight: 800; letter-spacing: -1.5px;
    background: linear-gradient(135deg, #fff 20%, var(--accent));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    line-height: 1; margin-bottom: 6px;
  }
  .cs-stat-label {
    font-size: 14px; color: var(--dim); font-weight: 400; line-height: 1.4;
  }
  .cs-stat-badge {
    margin-top: 14px; display: inline-block;
    background: rgba(109,40,217,0.25); border: 1px solid rgba(167,139,250,0.25);
    color: var(--accent); font-size: 11px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; padding: 4px 12px; border-radius: 100px;
  }

  /* glow pulse on stat cards */
  .cs-stat-card::before {
    content: ''; position: absolute; inset: -1px; border-radius: inherit;
    background: linear-gradient(135deg, rgba(109,40,217,0.2), transparent, rgba(167,139,250,0.1));
    opacity: 0; transition: opacity 0.35s;
  }
  .cs-stat-card:hover::before { opacity: 1; }

  /* ── Dividers ── */
  .cs-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.2) 30%, rgba(109,40,217,0.4) 50%, rgba(167,139,250,0.2) 70%, transparent 100%);
    margin: 0 80px;
    width: calc(100% - 160px);
  }
  @media (max-width: 900px) {
    .cs-divider { margin: 0 28px; width: calc(100% - 56px); }
  }
`

// ── SVG Icons ──
const IconCloud = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
    <path d="M12 13v4M10 15l2-2 2 2" stroke="#c4b5fd" strokeWidth="1.4"/>
  </svg>
)
const IconMigrate = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
)
const IconShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10" stroke="#c4b5fd"/>
  </svg>
)
const IconManaged = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <circle cx="12" cy="10" r="3" stroke="#c4b5fd"/>
  </svg>
)
const IconUptime = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)
const IconScale = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" y1="21" x2="21" y2="3"/>
    <line x1="15" y1="21" x2="15" y2="8"/>
    <line x1="9" y1="21" x2="9" y2="14"/>
    <line x1="3" y1="21" x2="3" y2="17"/>
  </svg>
)
const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)
const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)
const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 6 5 9 10 3"/>
  </svg>
)
const IconServer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
)
const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

// ── Animated network canvas ──
function NetworkCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')
    let W = c.width = window.innerWidth
    let H = c.height = window.innerHeight
    const onResize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight }
    window.addEventListener('resize', onResize)

    const N = 38
    const nodes = Array.from({length: N}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
    }))
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx*dx+dy*dy)
          if (d < 180) {
            const alpha = (1 - d/180) * 0.35
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(109,40,217,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI*2)
        ctx.fillStyle = 'rgba(167,139,250,0.5)'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={ref} className="cs-canvas"/>
}

export default function Cloudservice() {
  const solutions = [
    {
      icon: <IconCloud/>, num: '01',
      title: 'Cloud Hosting',
      desc: 'Ultra-fast, geo-redundant hosting environments with auto-scaling and zero-downtime deployments.',
      cta: 'Explore Hosting',
    },
    {
      icon: <IconMigrate/>, num: '02',
      title: 'Cloud Migration',
      desc: 'Seamless lift-and-shift or re-architecture migration with zero data loss and minimal disruption.',
      cta: 'Start Migration',
    },
    {
      icon: <IconShield/>, num: '03',
      title: 'Cloud Security',
      desc: 'Multi-layer security posture with real-time threat detection, compliance, and zero-trust architecture.',
      cta: 'Secure Your Cloud',
    },
    {
      icon: <IconManaged/>, num: '04',
      title: 'Managed Cloud',
      desc: 'End-to-end cloud operations managed by certified engineers so your team stays focused on growth.',
      cta: 'Get Managed',
    },
  ]

  const features = [
    {
      icon: <IconUptime/>, pct: '99.9%',
      title: '99.9% Uptime',
      desc: 'Guaranteed SLA-backed availability with multi-region failover and proactive incident response.'
    },
    {
      icon: <IconScale/>, pct: '∞',
      title: 'High Scalability',
      desc: 'Elastic compute and storage that scales in seconds to match any workload demand, no over-provisioning.'
    },
    {
      icon: <IconLock/>, pct: 'AES',
      title: 'Advanced Encryption',
      desc: 'AES-256 encryption at rest and in transit with customer-managed keys and hardware security modules.'
    },
    {
      icon: <IconClock/>, pct: '24/7',
      title: '24/7 Monitoring',
      desc: 'AI-augmented observability stack providing instant anomaly detection and automated remediation.'
    },
  ]

  // const stats = [
  //   {
  //     icon: <IconServer/>, num: '99.9%', label: 'Guaranteed uptime across all service tiers',
  //     badge: 'SLA Backed', wide: true,
  //   },
  //   {
  //     icon: <IconShield/>, num: '256-bit', label: 'Enterprise-grade AES encryption standard',
  //     badge: 'Security', wide: false,
  //   },
  //   {
  //     icon: <IconGlobe/>, num: '∞ Scale', label: 'Limitless elastic infrastructure on demand',
  //     badge: 'Scalable', wide: false,
  //   },
  // ]

  return (
    <>
      <style>{css}</style>
      <div className="cs-wrap">
        <NetworkCanvas/>
        <div className="cs-grain"/>
        <div className="cs-content">

          {/* ══ SECTION 1: OUR CLOUD SOLUTIONS ══ */}
          <section className="cs-section cs-solutions">
            <div className="cs-solutions-head">
              <p className="cs-eyebrow">What We Deliver</p>
              <h2 className="cs-title cs-title-grad">Our Cloud Solutions</h2>
              <p className="cs-sub">
                Purpose-built cloud services engineered for the demands of modern enterprise IT — secure, scalable, and always on.
              </p>
            </div>

            <div className="cs-cards">
              {solutions.map((s, i) => (
                <div className="cs-card" key={i} style={{animationDelay:`${i*0.1}s`}}>
                  <div className="cs-card-stripe"/>
                  <div className="cs-card-top">
                    <div className="cs-card-icon">{s.icon}</div>
                    <span className="cs-card-num">{s.num}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="cs-card-footer">
                    {s.cta}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="cs-divider"/>

          {/* ══ SECTION 2: KEY FEATURES ══ */}
          <section className="cs-section cs-features">
            <div className="cs-features-head">
              <p className="cs-eyebrow">Platform Capabilities</p>
              <h2 className="cs-title cs-title-grad" style={{maxWidth:480}}>Key Features</h2>
            </div>

            <div className="cs-feat-grid">
              {features.map((f, i) => (
                <div className="cs-feat" key={i}>
                  <div className="cs-feat-icon-wrap">{f.icon}</div>
                  <div className="cs-feat-pct">{f.pct}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="cs-divider"/>

          {/* ══ SECTION 3: WHY CHOOSE US ══ */}
          <section className="cs-section cs-why">
            <div className="cs-why-inner">

              {/* LEFT */}
              <div className="cs-why-left">
                <p className="cs-eyebrow">Our Advantage</p>
                <h2 className="cs-title cs-title-grad">Why Choose Our<br/>Cloud Platform</h2>
                <p className="cs-sub">
                  Our platform is built on a decade of enterprise infrastructure expertise. We deliver not just technology, but a partnership — proactive support, transparent SLAs, and infrastructure that evolves with your business. From regulated industries to high-growth startups, our cloud meets you where you are and scales where you're going.
                </p>
                <div className="cs-why-checklist">
                  {[
                    'ISO 27001 & SOC 2 Type II certified infrastructure',
                    'Dedicated cloud architect assigned to your account',
                    'Real-time cost optimization and FinOps reporting',
                    'Multi-cloud and hybrid deployment flexibility',
                  ].map((item, i) => (
                    <div className="cs-check" key={i}>
                      <div className="cs-check-dot"><IconCheck/></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: stat cards */}
              {/* <div className="cs-why-right">
                {stats.map((s, i) => (
                  <div className={`cs-stat-card${s.wide ? ' cs-stat-wide' : ''}`} key={i}
                    style={s.wide ? {gridColumn:'span 2'} : {}}>
                    <div className="cs-stat-icon">{s.icon}</div>
                    <div>
                      <div className="cs-stat-num">{s.num}</div>
                      <div className="cs-stat-label">{s.label}</div>
                      <span className="cs-stat-badge">{s.badge}</span>
                    </div>
                  </div>
                ))}
              </div> */}

            </div>
          </section>

        </div>
      </div>
    </>
  )
}
