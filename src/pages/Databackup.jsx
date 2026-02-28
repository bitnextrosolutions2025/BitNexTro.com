import React, { useEffect, useRef, useState } from 'react'

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');



  :root {
    --deep: #0d0520;
    --void: #110828;
    --violet: #1a0a3c;
    --purple: #2d1163;
    --royal: #4a1fa8;
    --accent: #7c3aed;
    --bright: #a855f7;
    --glow: #c084fc;
    --lavender: #e9d5ff;
    --white: #f5f0ff;
    --muted: #c4b5fd;
    --card: rgba(255,255,255,0.04);
    --border: rgba(167,139,250,0.15);
  }

  .db-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--deep);
    color: var(--white);
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* NAV */
  .db-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 64px;
    background: rgba(13,5,32,0.7);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  .db-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800; font-size: 22px;
    background: linear-gradient(135deg, var(--glow), var(--bright));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    display: flex; align-items: center; gap: 10px;
  }
  .db-logo-icon { width: 32px; height: 32px; flex-shrink: 0; }
  .db-nav-links { display: flex; gap: 36px; list-style: none; }
  .db-nav-links a {
    color: var(--muted); text-decoration: none; font-size: 15px;
    transition: color 0.2s;
  }
  .db-nav-links a:hover { color: var(--white); }
  .db-nav-cta {
    background: var(--accent); color: #fff; border: none;
    padding: 10px 24px; border-radius: 8px; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
    transition: background 0.2s, transform 0.2s;
  }
  .db-nav-cta:hover { background: var(--bright); transform: translateY(-1px); }

  /* HERO */
  .db-hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 120px 64px 80px;
    position: relative;
    background: radial-gradient(ellipse 80% 60% at 60% 40%, rgba(124,58,237,0.18) 0%, transparent 70%),
                radial-gradient(ellipse 50% 50% at 20% 80%, rgba(74,31,168,0.2) 0%, transparent 60%),
                linear-gradient(160deg, var(--void) 0%, var(--deep) 50%, #0a0218 100%);
    overflow: hidden;
  }

  .db-grid-bg {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
  }

  .db-glowline {
    position: absolute; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.4;
    animation: glowpulse 4s ease-in-out infinite;
  }
  .db-glowline:nth-child(1) { top: 35%; animation-delay: 0s; }
  .db-glowline:nth-child(2) { top: 55%; animation-delay: 1.5s; }
  .db-glowline:nth-child(3) { top: 70%; animation-delay: 3s; opacity: 0.2; }

  @keyframes glowpulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.5; }
  }

  .db-hero-content {
    max-width: 580px; position: relative; z-index: 2;
    animation: fadeUp 0.9s ease both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .db-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(124,58,237,0.15); border: 1px solid rgba(168,85,247,0.3);
    color: var(--glow); font-size: 13px; font-weight: 500;
    padding: 6px 16px; border-radius: 100px; margin-bottom: 28px;
    letter-spacing: 0.5px;
  }
  .db-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--glow); animation: blink 1.5s infinite; }
  @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

  .db-hero h1 {
 
    font-size: clamp(40px, 5.5vw, 68px);
    font-weight: 800; line-height: 1.08;
    margin-bottom: 24px;
    letter-spacing: -1.5px;
  }
  .db-hero h1 span {
    background: linear-gradient(135deg, var(--lavender) 0%, var(--bright) 50%, var(--glow) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }

  .db-hero p {
    font-size: 18px; color: var(--muted); line-height: 1.7;
    margin-bottom: 44px; font-weight: 300;
  }

  .db-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
  .db-btn-primary {
    background: linear-gradient(135deg, var(--accent), var(--bright));
    color: #fff; border: none; padding: 16px 36px;
    border-radius: 10px; font-size: 16px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    box-shadow: 0 0 40px rgba(124,58,237,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .db-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(124,58,237,0.6); }
  .db-btn-outline {
    background: transparent; color: var(--lavender);
    border: 1px solid var(--border); padding: 16px 36px;
    border-radius: 10px; font-size: 16px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s, background 0.2s;
  }
  .db-btn-outline:hover { border-color: var(--accent); background: rgba(124,58,237,0.08); }

  /* HERO ILLUSTRATION */
  .db-hero-visual {
    position: absolute; right: 64px; top: 50%; transform: translateY(-50%);
    width: min(580px, 45vw); z-index: 2;
    animation: fadeUp 0.9s 0.3s ease both;
  }

  /* SECTION BASE */
  .db-section {
    padding: 100px 64px;
    position: relative;
  }
  .db-section-label {
    font-size: 12px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--bright);
    margin-bottom: 12px;
  }
  .db-section-title {
    
    font-size: clamp(28px, 3.5vw, 44px);
    font-weight: 800; line-height: 1.15;
    margin-bottom: 16px; letter-spacing: -0.5px;
  }
  .db-section-sub {
    font-size: 17px; color: var(--muted); max-width: 520px; line-height: 1.7;
    font-weight: 300; margin-bottom: 60px;
  }
  .db-center { text-align: center; }
  .db-center .db-section-sub { margin: 0 auto 60px; }

  /* SERVICES */
  .db-services { background: var(--void); }
  .db-services-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  }
  .db-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px; padding: 36px 28px;
    position: relative; overflow: hidden;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    cursor: default;
  }
  .db-card::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at top left, rgba(124,58,237,0.1), transparent 60%);
    opacity: 0; transition: opacity 0.3s;
  }
  .db-card:hover { transform: translateY(-6px); border-color: rgba(168,85,247,0.4); box-shadow: 0 20px 60px rgba(74,31,168,0.25); }
  .db-card:hover::before { opacity: 1; }
  .db-card-icon {
    width: 56px; height: 56px; border-radius: 14px;
    background: linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15));
    border: 1px solid rgba(168,85,247,0.2);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px;
  }
  .db-card h3 {
    font-family: 'Syne', sans-serif; font-size: 19px; font-weight: 700;
    margin-bottom: 12px;
  }
  .db-card p { font-size: 14px; color: var(--muted); line-height: 1.65; }
  .db-card-tag {
    margin-top: 24px; display: inline-block;
    font-size: 12px; color: var(--glow); font-weight: 500;
    letter-spacing: 0.5px;
  }

  /* FEATURES */
  .db-features { background: linear-gradient(180deg, var(--deep) 0%, var(--void) 100%); }
  .db-features-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px;
    border: 1px solid var(--border); border-radius: 24px; overflow: hidden;
  }
  .db-feat {
    padding: 48px 44px;
    background: var(--card);
    border: 1px solid var(--border);
    display: flex; gap: 24px; align-items: flex-start;
    transition: background 0.3s;
  }
  .db-feat:hover { background: rgba(124,58,237,0.06); }
  .db-feat-icon {
    width: 52px; height: 52px; flex-shrink: 0;
    background: linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.1));
    border-radius: 14px; border: 1px solid rgba(168,85,247,0.2);
    display: flex; align-items: center; justify-content: center;
  }
  .db-feat-body h4 {
    font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700;
    margin-bottom: 10px;
  }
  .db-feat-body p { font-size: 14px; color: var(--muted); line-height: 1.65; }

  /* WHY US */
  .db-why {
    background: var(--void);
    overflow: hidden;
  }
  .db-why-inner {
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
  }
  .db-stats {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 40px;
  }
  .db-stat {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 24px;
    transition: border-color 0.3s;
  }
  .db-stat:hover { border-color: rgba(168,85,247,0.4); }
  .db-stat-num {
    font-size: 34px; font-weight: 800;
    background: linear-gradient(135deg, var(--lavender), var(--bright));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    display: block; margin-bottom: 6px;
  }
  .db-stat-label { font-size: 13px; color: var(--muted); }

  .db-why-visual {
    position: relative; display: flex; align-items: center; justify-content: center;
  }
  .db-orb {
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(74,31,168,0.1) 50%, transparent 70%);
    border: 1px solid rgba(168,85,247,0.15);
    display: flex; align-items: center; justify-content: center;
    position: relative;
    animation: orbpulse 6s ease-in-out infinite;
  }
  @keyframes orbpulse {
    0%,100%{ box-shadow: 0 0 60px rgba(124,58,237,0.2); }
    50%{ box-shadow: 0 0 120px rgba(124,58,237,0.4); }
  }
  .db-orb-inner {
    width: 280px; height: 280px; border-radius: 50%;
    background: radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%);
    border: 1px solid rgba(192,132,252,0.2);
    display: flex; align-items: center; justify-content: center;
  }
  .db-orb-core {
    width: 160px; height: 160px; border-radius: 50%;
    background: linear-gradient(135deg, rgba(124,58,237,0.5), rgba(168,85,247,0.3));
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 80px rgba(124,58,237,0.5);
  }

  /* FOOTER */
  .db-footer {
    background: #080215;
    border-top: 1px solid var(--border);
    padding: 70px 64px 32px;
  }
  .db-footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px;
    margin-bottom: 60px;
  }
  .db-footer-brand p {
    font-size: 14px; color: var(--muted); line-height: 1.7; margin-top: 16px;
    max-width: 280px;
  }
  .db-footer-col h5 {
    font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
    margin-bottom: 20px; color: var(--lavender);
  }
  .db-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .db-footer-col ul a {
    color: var(--muted); text-decoration: none; font-size: 14px;
    transition: color 0.2s;
  }
  .db-footer-col ul a:hover { color: var(--glow); }
  .db-footer-bottom {
    border-top: 1px solid var(--border); padding-top: 28px;
    display: flex; justify-content: space-between; align-items: center;
  }
  .db-footer-bottom p { font-size: 13px; color: rgba(196,181,253,0.5); }
  .db-footer-socials { display: flex; gap: 12px; }
  .db-social-btn {
    width: 36px; height: 36px; border-radius: 8px;
    background: var(--card); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: border-color 0.2s, background 0.2s;
  }
  .db-social-btn:hover { border-color: var(--accent); background: rgba(124,58,237,0.15); }

  @media (max-width: 1100px) {
    .db-services-grid { grid-template-columns: repeat(2,1fr); }
    .db-hero-visual { display: none; }
    .db-why-inner { grid-template-columns: 1fr; }
    .db-footer-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 768px) {
    .db-nav { padding: 16px 24px; }
    .db-nav-links { display: none; }
    .db-hero { padding: 100px 24px 60px; }
    .db-section { padding: 70px 24px; }
    .db-services-grid, .db-features-grid { grid-template-columns: 1fr; }
    .db-stats { grid-template-columns: 1fr 1fr; }
    .db-footer { padding: 50px 24px 24px; }
    .db-footer-grid { grid-template-columns: 1fr; gap: 36px; }
  }
`;

// SVG Icons
const CloudIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
  </svg>
);
const ServerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const AutoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);
const LockIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const MonitorIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const ZapIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const ScaleIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

// Hero SVG Illustration
const HeroIllustration = () => (
  <svg viewBox="0 0 560 460" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
    <defs>
      <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#4a1fa8" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4"/>
      </linearGradient>
      <filter id="blur1">
        <feGaussianBlur stdDeviation="8"/>
      </filter>
    </defs>

    {/* Glow background */}
    <ellipse cx="280" cy="230" rx="200" ry="180" fill="url(#glow1)" filter="url(#blur1)"/>

    {/* Central cloud */}
    <g transform="translate(150, 100)">
      <path d="M130 80 Q130 40 90 40 Q80 10 50 10 Q20 10 15 35 Q-10 35 -10 60 Q-10 80 15 80 Z" fill="url(#grad1)" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5"/>
      <path d="M130 80 Q130 40 90 40 Q80 10 50 10 Q20 10 15 35 Q-10 35 -10 60 Q-10 80 15 80 Z" fill="none" stroke="rgba(192,132,252,0.3)" strokeWidth="1"/>
    </g>

    {/* Server racks */}
    <g transform="translate(60, 220)">
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(0, ${i*50})`}>
          <rect width="120" height="38" rx="6" fill="rgba(74,31,168,0.5)" stroke="rgba(168,85,247,0.3)" strokeWidth="1"/>
          <rect x="8" y="10" width="18" height="18" rx="3" fill="rgba(124,58,237,0.4)" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
          <rect x="34" y="15" width="60" height="3" rx="2" fill="rgba(192,132,252,0.3)"/>
          <rect x="34" y="22" width="40" height="3" rx="2" fill="rgba(192,132,252,0.2)"/>
          <circle cx="104" cy="19" r="4" fill={i===0 ? '#34d399' : i===1 ? '#a855f7' : '#fbbf24'}/>
        </g>
      ))}
    </g>

    {/* Shield */}
    <g transform="translate(360, 180)">
      <path d="M60 120 Q60 150 0 170 Q-60 150 -60 120 V40 L0 10 L60 40 Z" fill="rgba(124,58,237,0.25)" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5"/>
      <path d="M30 85 L10 105 L-20 75" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </g>

    {/* Connection lines */}
    {[
      [220, 150, 360, 190],
      [180, 240, 360, 220],
      [220, 290, 360, 250],
    ].map(([x1,y1,x2,y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(168,85,247,0.25)" strokeWidth="1" strokeDasharray="6 4"/>
    ))}

    {/* Floating data dots */}
    {[
      [290,60], [420,140], [80,180], [460,300], [150,380], [380,380]
    ].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(192,132,252,0.5)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2+i*0.5}s`} repeatCount="indefinite"/>
      </circle>
    ))}

    {/* Labels */}
    <text x="155" y="200" fontSize="11" fill="rgba(192,132,252,0.7)" fontFamily="DM Sans, sans-serif">Cloud Storage</text>
    <text x="62" y="215" fontSize="11" fill="rgba(192,132,252,0.7)" fontFamily="DM Sans, sans-serif">Server Backup</text>
    <text x="320" y="175" fontSize="11" fill="rgba(192,132,252,0.7)" fontFamily="DM Sans, sans-serif">Encrypted</text>
  </svg>
);

export default function Databackup() {
  return (
    <>
      <style>{style}</style>
      <div className="db-root">

        

        {/* HERO */}
        <section className="db-hero">
          <div className="db-grid-bg"/>
          <div className="db-glowline"/>
          <div className="db-glowline"/>
          <div className="db-glowline"/>

          <div className="db-hero-content">
            <div className="db-badge">
              <span className="db-badge-dot"/>
              Enterprise-Grade Security
            </div>
            <h1>Secure Data Backup <span>Solutions</span></h1>
            <p>Protect your business data with reliable, automated, and encrypted backup systems that ensure zero data loss and instant recovery.</p>
            <div className="db-hero-btns">
              <button className="db-btn-primary">Get Started →</button>
              <button className="db-btn-outline">Contact Us</button>
            </div>
          </div>

          <div className="db-hero-visual">
            <HeroIllustration/>
          </div>
        </section>

        {/* SERVICES */}
        <section className="db-section db-services">
          <div className="db-center">
            <p className="db-section-label">What We Offer</p>
            <h2 className="db-section-title">Comprehensive Backup Services</h2>
            <p className="db-section-sub">Tailored backup solutions designed to protect every layer of your infrastructure with enterprise-level reliability.</p>
          </div>
          <div className="db-services-grid">
            {[
              {
                icon: <CloudIcon/>, title: "Cloud Backup",
                desc: "Seamlessly back up all your data to geographically distributed cloud nodes with automatic redundancy and failover.",
                tag: "Most Popular"
              },
              {
                icon: <ServerIcon/>, title: "Server Backup",
                desc: "Full-image and incremental server backups with deduplication technology to minimize storage costs and transfer times.",
                tag: "Enterprise Ready"
              },
              {
                icon: <ShieldIcon/>, title: "Disaster Recovery",
                desc: "Rapid recovery protocols ensuring your systems are restored in minutes, not hours, with pre-tested failover environments.",
                tag: "RTO < 15 min"
              },
              {
                icon: <AutoIcon/>, title: "Automated Backup",
                desc: "Set it and forget it. Intelligent scheduling adapts to your workload patterns for zero-impact automated protection.",
                tag: "Zero Touch"
              }
            ].map((s, i) => (
              <div className="db-card" key={i}>
                <div className="db-card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="db-card-tag">→ {s.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="db-section db-features">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start'}}>
            <div>
              <p className="db-section-label">Core Technology</p>
              <h2 className="db-section-title">Built for Security & Speed</h2>
              <p className="db-section-sub">Every feature is engineered to meet the demands of modern enterprise environments.</p>
            </div>
            <div/>
          </div>
          <div className="db-features-grid">
            {[
              {
                icon: <LockIcon/>, title: "End-to-End Encryption",
                desc: "Military-grade AES-256 encryption in transit and at rest ensures your data is never accessible to unauthorized parties — not even us."
              },
              {
                icon: <MonitorIcon/>, title: "24/7 Monitoring",
                desc: "Our AI-powered monitoring engine watches every backup job, storage node, and replication stream around the clock with instant alerting."
              },
              {
                icon: <ZapIcon/>, title: "Fast Recovery",
                desc: "Granular file-level and bare-metal recovery options deliver your data back exactly where you need it, typically within minutes."
              },
              {
                icon: <ScaleIcon/>, title: "Scalable Storage",
                desc: "Start with gigabytes, grow to petabytes. Our elastic storage architecture scales automatically with your business — no migrations needed."
              }
            ].map((f, i) => (
              <div className="db-feat" key={i}>
                <div className="db-feat-icon">{f.icon}</div>
                <div className="db-feat-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="db-section db-why">
          <div className="db-why-inner">
            <div>
              <p className="db-section-label">Why Choose Us</p>
              <h2 className="db-section-title">Trusted by Hundreds of Businesses</h2>
              <p style={{fontSize:'16px', color:'var(--muted)', lineHeight:'1.7', fontWeight:300}}>
                From startups to enterprises, organizations rely on VaultSync to protect their most critical assets with industry-leading guarantees and round-the-clock expert support.
              </p>
              {/* <div className="db-stats">
                {[
                  {num: "99.9%", label: "Guaranteed Uptime SLA"},
                  {num: "256-bit", label: "AES Encryption Standard"},
                  {num: "24/7", label: "Expert Support Team"},
                  {num: "<15min", label: "Average Recovery Time"},
                ].map((s, i) => (
                  <div className="db-stat" key={i}>
                    <span className="db-stat-num">{s.num}</span>
                    <span className="db-stat-label">{s.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="db-why-visual">
              <div className="db-orb">
                <div className="db-orb-inner">
                  <div className="db-orb-core">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e9d5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </>
  )
}