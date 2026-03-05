import React, { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'CI/CD Pipeline Setup',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="6" cy="16" r="4" stroke="#00e5ff" strokeWidth="1.5"/>
        <circle cx="26" cy="16" r="4" stroke="#00e5ff" strokeWidth="1.5"/>
        <circle cx="16" cy="6" r="4" stroke="#00e5ff" strokeWidth="1.5"/>
        <circle cx="16" cy="26" r="4" stroke="#00e5ff" strokeWidth="1.5"/>
        <line x1="10" y1="16" x2="22" y2="16" stroke="#00e5ff" strokeWidth="1.2" strokeDasharray="2 2"/>
        <line x1="16" y1="10" x2="16" y2="22" stroke="#00e5ff" strokeWidth="1.2" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    title: 'Infrastructure as Code',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="#00e5ff" strokeWidth="1.5"/>
        <polyline points="10,14 14,18 10,22" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="22" x2="22" y2="22" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Container Orchestration',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="11" height="11" rx="2" stroke="#00e5ff" strokeWidth="1.5"/>
        <rect x="17" y="4" width="11" height="11" rx="2" stroke="#00e5ff" strokeWidth="1.5"/>
        <rect x="4" y="17" width="11" height="11" rx="2" stroke="#00e5ff" strokeWidth="1.5"/>
        <rect x="17" y="17" width="11" height="11" rx="2" stroke="#00e5ff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Automation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 22a6 6 0 010-12 6 6 0 0111.3-2.5A5 5 0 1124 22H8z" stroke="#00e5ff" strokeWidth="1.5" strokeLinejoin="round"/>
        <polyline points="16,26 16,18 13,21" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="18" x2="19" y2="21" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Monitoring & Observability',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polyline points="4,22 9,14 13,18 18,10 23,16 28,8" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="12" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    ),
  },
  {
    title: 'DevSecOps Integration',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L6 8v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L16 4z" stroke="#00e5ff" strokeWidth="1.5" strokeLinejoin="round"/>
        <polyline points="11,16 14,19 21,12" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animFrame
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    const nodes = Array.from({length: 22}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      dx: (Math.random() - 0.5) * 0.18, dy: (Math.random() - 0.5) * 0.18,
    }))
    const particles = Array.from({length: 45}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.25, dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.45 + 0.08,
    }))
    const clouds = Array.from({length: 4}, (_, i) => ({
      x: (i / 3) * W, y: Math.random() * H * 0.5,
      dx: (Math.random() - 0.5) * 0.08,
      rx: 120 + Math.random() * 80, ry: 50 + Math.random() * 40,
    }))
    function draw() {
      ctx.clearRect(0, 0, W, H)
      clouds.forEach(c => {
        const grad = ctx.createRadialGradient(c.x, c.y, 10, c.x, c.y, c.rx)
        grad.addColorStop(0, 'rgba(0,100,180,0.07)')
        grad.addColorStop(1, 'rgba(0,100,180,0)')
        ctx.beginPath()
        ctx.ellipse(c.x, c.y, c.rx, c.ry, 0, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        c.x += c.dx
        if (c.x > W + c.rx) c.x = -c.rx
        if (c.x < -c.rx) c.x = W + c.rx
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 160) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,229,255,${0.06 * (1 - dist/160)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,229,255,0.2)'
        ctx.fill()
        n.x += n.dx; n.y += n.dy
        if (n.x < 0 || n.x > W) n.dx *= -1
        if (n.y < 0 || n.y > H) n.dy *= -1
      })
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
      })
      animFrame = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize) }
  }, [])
  return (
    <canvas ref={canvasRef} style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none',
    }} />
  )
}

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: '38px 30px 34px',
        background: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: hovered ? '1px solid rgba(0,229,255,0.55)' : '1px solid rgba(255,255,255,0.1)',
        boxShadow: hovered
          ? '0 16px 48px rgba(0,229,255,0.2), 0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
          : '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
        transform: hovered ? 'translateY(-10px) scale(1.04)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 20,
        animation: `cardIn 0.65s ease both`,
        animationDelay: `${index * 0.1}s`,
        overflow: 'hidden',
      }}
    >
      {/* Top-right shimmer */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 80, height: 80,
        background: hovered ? 'radial-gradient(circle at top right, rgba(0,229,255,0.18), transparent 70%)' : 'none',
        transition: 'all 0.4s',
        borderRadius: '0 20px 0 0',
        pointerEvents: 'none',
      }} />
      {/* Icon */}
      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: 'rgba(0,229,255,0.08)',
        border: '1px solid rgba(0,229,255,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {service.icon}
      </div>
      {/* Text */}
      <div style={{ color: '#e8f4ff', fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
        {service.title}
      </div>
    </div>
  )
}

export default function Devops() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #050b18 0%, #071020 40%, #060d1c 70%, #04080f 100%)',
        fontFamily: "'', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}>
        <ParticleCanvas />

        {/* Ambient light blobs — navy-blue toned */}
        <div style={{
          position: 'absolute', top: -180, left: -120,
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(0,60,140,0.35) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -200, right: -100,
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(0,40,100,0.3) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 500, height: 300,
          background: 'radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '60px 32px 80px' }}>

          {/* Logo top right */}
          <div style={{
            position: 'absolute', top: 60, right: 32,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13, fontWeight: 500,
            color: 'rgba(0,229,255,0.7)',
            letterSpacing: '0.15em',
            animation: 'fadeUp 0.6s ease both',
          }}>
            CLOUDFORGE
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,229,255,0.08)',
            border: '1px solid rgba(0,229,255,0.25)',
            borderRadius: 100, padding: '6px 16px',
            marginBottom: 28,
            marginTop:'20px',
            animation: 'fadeUp 0.5s ease both',
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00e5ff', animation: 'pulse 2s infinite' }} />
            <span style={{ color: 'rgba(0,229,255,0.9)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono', monospace" }}>
              BITNEXTRO Cloud Services
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: 20,
            maxWidth: 700,
            animation: 'fadeUp 0.6s ease both',
            animationDelay: '0.05s',
          }}>
            DevOps &{' '}
            <span style={{ color: '#00e5ff' }}>Cloud Engineering</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 18,
            color: 'rgba(180,210,240,0.75)',
            maxWidth: 520,
            lineHeight: 1.6,
            marginBottom: 44,
            animation: 'fadeUp 0.6s ease both',
            animationDelay: '0.1s',
          }}>
            Automating Infrastructure for Scalable Innovation
          </p>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 40, flexWrap: 'wrap',
            marginBottom: 56,
            animation: 'fadeUp 0.6s ease both',
            animationDelay: '0.15s',
          }}>
            {[['70%', 'Uptime SLA'], ['10x', 'Faster Deploy'], ].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#00e5ff', letterSpacing: '-0.02em' }}>{val}</div>
                <div style={{ fontSize: 12, color: 'rgba(160,200,230,0.6)', marginTop: 2, letterSpacing: '0.06em', fontFamily: "'JetBrains Mono', monospace" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: 1,
            background: 'linear-gradient(90deg, rgba(0,229,255,0.3) 0%, rgba(0,229,255,0.05) 60%, transparent 100%)',
            marginBottom: 52,
            animation: 'fadeUp 0.6s ease both',
            animationDelay: '0.18s',
          }} />

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 64,
          }}>
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.6s ease both', animationDelay: '0.7s' }}>
            <button
              style={{
                padding: '14px 32px', borderRadius: 12, border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #00e5ff, #0099cc)',
                color: '#04080f', fontWeight: 700, fontSize: 15,
                fontFamily: "'', sans-serif",
                letterSpacing: '0.01em',
                boxShadow: '0 8px 30px rgba(0,229,255,0.35)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 14px 40px rgba(0,229,255,0.5)' }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 30px rgba(0,229,255,0.35)' }}
            >
              contact us
            </button>
            {/* <button
              style={{
                padding: '14px 32px', borderRadius: 12, cursor: 'pointer',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#e8f4ff', fontWeight: 600, fontSize: 15,
                fontFamily: "'', sans-serif",
                letterSpacing: '0.01em',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,229,255,0.6)'; e.target.style.background = 'rgba(0,229,255,0.08)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
            >
              View Architecture Docs
            </button> */}
          </div>

        </div>
      </div>
    </>
  )
}