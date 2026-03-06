import React, { useState } from 'react'

const items = [
  { label: "Server Installation & Configuration", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/>
      <rect x="2" y="17" width="20" height="4" rx="1"/><circle cx="6" cy="5.5" r="0.8" fill="currentColor"/>
      <circle cx="6" cy="12.5" r="0.8" fill="currentColor"/>
    </svg>
  )},
  { label: "Virtual Machine (VM) Setup", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/>
      <rect x="5" y="7" width="6" height="4" rx="0.5"/><rect x="13" y="7" width="6" height="4" rx="0.5"/>
    </svg>
  )},
  { label: "Cloud Server Deployment", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  )},
  { label: "Hypervisor Management (VMware / Hyper-V)", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  )},
  { label: "Server Monitoring & Performance Optimization", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )},
  { label: "Backup & Disaster Recovery Solutions", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )},
  { label: "Security Hardening & Firewall Configuration", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )},
  { label: "Data Center Migration & Maintenance", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
      <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
      <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
    </svg>
  )},
]

export default function Servervirtual() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
 
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a1628 0%, #0d1f3c 45%, #0a1a35 75%, #071220 100%)',
      fontFamily: "'Poppins', sans-serif",
      padding: '72px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        .srv-header { animation: fade-up 0.7s ease both; }
        .srv-badge  { animation: fade-up 0.5s ease both; }

        .srv-card {
          transition: all 0.32s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fade-up 0.55s ease both;
        }
        .srv-card:hover {
          transform: translateY(-5px);
          background: rgba(10, 40, 80, 0.75) !important;
          border-color: rgba(56, 189, 248, 0.45) !important;
          box-shadow: 0 16px 48px rgba(4, 18, 45, 0.6), 0 0 0 1px rgba(56,189,248,0.1) !important;
        }
        .srv-card:hover .card-icon-wrap {
          background: rgba(56,189,248,0.18) !important;
          border-color: rgba(56,189,248,0.45) !important;
          color: #38bdf8 !important;
        }
        .srv-card:hover .card-label {
          color: #ffffff !important;
        }
        .srv-card:hover .card-bar {
          opacity: 1 !important;
        }
        .srv-cta {
          transition: all 0.28s ease;
        }
        .srv-cta:hover {
          background: linear-gradient(135deg, #0ea5e9, #38bdf8) !important;
          color: #fff !important;
          border-color: transparent !important;
          box-shadow: 0 8px 28px rgba(14,165,233,0.4) !important;
          transform: translateY(-2px);
        }
        .tag-pill {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .tag-pill:hover {
          background: rgba(56,189,248,0.15) !important;
          border-color: rgba(56,189,248,0.45) !important;
          color: #7dd3fc !important;
        }
      `}</style>

      {/* Soft radial glow behind title */}
      <div style={{
        position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />

      {/* Scattered dots */}
      {[...Array(7)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: i % 3 === 0 ? '4px' : '3px',
          height: i % 3 === 0 ? '4px' : '3px',
          borderRadius: '50%',
          background: 'rgba(56,189,248,0.3)',
          top: `${12 + i * 13}%`,
          left: `${6 + i * 13}%`,
          animation: `dot-pulse ${2.8 + i * 0.35}s ease-in-out infinite`,
          animationDelay: `${i * 0.55}s`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* ── Page Header ── */}
      <div className="srv-header" style={{ textAlign: 'center', marginBottom: '64px' }}>

        {/* Top badge — matches image */}
        <div className="srv-badge" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '7px 20px', borderRadius: '999px',
          background: 'rgba(14,165,233,0.1)',
          border: '1px solid rgba(56,189,248,0.28)',
          marginBottom: '24px',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#38bdf8',
            boxShadow: '0 0 8px rgba(56,189,248,0.9)',
            display: 'inline-block',
          }} />
          <span style={{
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '2.8px', textTransform: 'uppercase',
            color: '#7dd3fc',
          }}>
            IT Services
          </span>
        </div>

        {/* Main Title */}
        <h1 style={{
          margin: '0 0 12px',
          fontSize: 'clamp(38px, 6.5vw, 68px)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.5px',
          color: '#ffffff',
        }}>
          Server &{' '}
          <span style={{
            background: 'linear-gradient(90deg, #38bdf8 0%, #7dd3fc 55%, #bae6fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Virtualization
          </span>
        </h1>

        {/* Decorative divider — matches image */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '8px', margin: '20px 0 22px',
        }}>
          <div style={{ width: '44px', height: '1.5px', background: 'rgba(56,189,248,0.35)', borderRadius: '2px' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 12px rgba(56,189,248,0.8)' }} />
          <div style={{ width: '44px', height: '1.5px', background: 'rgba(56,189,248,0.35)', borderRadius: '2px' }} />
        </div>

        {/* Subtitle */}
        <p style={{
          margin: '0 auto',
          maxWidth: '540px',
          fontSize: '16px',
          fontWeight: 300,
          lineHeight: 1.75,
          color: 'rgba(186,230,253,0.6)',
          letterSpacing: '0.15px',
        }}>
          Reliable and Professional IT Server &amp; Virtualization Services — scalable infrastructure built for performance.
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto 52px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
        gap: '18px',
      }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="srv-card"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              animationDelay: `${i * 65}ms`,
              padding: '30px 24px 24px',
              background: 'rgba(10, 25, 55, 0.55)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(56,189,248,0.1)',
              borderRadius: '18px',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top shimmer line */}
            <div style={{
              position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent)',
            }} />

            {/* Icon box */}
            <div
              className="card-icon-wrap"
              style={{
                width: '54px', height: '54px', borderRadius: '14px',
                background: 'rgba(56,189,248,0.07)',
                border: '1px solid rgba(56,189,248,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(125,211,252,0.65)',
                transition: 'all 0.32s ease',
              }}
            >
              {item.icon}
            </div>

            {/* Service label */}
            <span
              className="card-label"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: 1.45,
                color: 'rgba(220,238,255,0.82)',
                transition: 'color 0.3s ease',
              }}
            >
              {item.label}
            </span>

            {/* Hover bottom bar */}
            <div
              className="card-bar"
              style={{
                marginTop: 'auto',
                height: '2px',
                background: 'linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.1))',
                borderRadius: '2px',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        paddingTop: '28px',
        borderTop: '1px solid rgba(56,189,248,0.1)',
      }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['VMware', 'Hyper-V', 'AWS', 'Azure', 'Proxmox'].map((tag) => (
            <span key={tag} className="tag-pill" style={{
              padding: '5px 16px',
              borderRadius: '999px',
              background: 'rgba(10,25,55,0.6)',
              border: '1px solid rgba(56,189,248,0.16)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'rgba(125,211,252,0.75)',
              letterSpacing: '0.3px',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <button
        
        className="srv-cta" style={{
          padding: '13px 34px',
          background: 'transparent',
          border: '1.5px solid rgba(56,189,248,0.45)',
          borderRadius: '10px',
          color: '#7dd3fc',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: '0.4px',
          cursor: 'pointer',
        }}>
          Contact us →
        </button>
      </div>
    </div>
  )
}
