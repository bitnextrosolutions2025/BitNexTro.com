import React, { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Machine Learning Solutions',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:42,height:42}}>
        <circle cx="24" cy="24" r="6" stroke="#00F5FF" strokeWidth="1.5"/>
        <circle cx="8" cy="12" r="3" stroke="#9D4EDD" strokeWidth="1.5"/>
        <circle cx="40" cy="12" r="3" stroke="#9D4EDD" strokeWidth="1.5"/>
        <circle cx="8" cy="36" r="3" stroke="#9D4EDD" strokeWidth="1.5"/>
        <circle cx="40" cy="36" r="3" stroke="#9D4EDD" strokeWidth="1.5"/>
        <line x1="11" y1="13.5" x2="20" y2="21" stroke="#00F5FF" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="37" y1="13.5" x2="28" y2="21" stroke="#00F5FF" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="11" y1="34.5" x2="20" y2="27" stroke="#00F5FF" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="37" y1="34.5" x2="28" y2="27" stroke="#00F5FF" strokeWidth="1" strokeDasharray="3 2"/>
        <circle cx="24" cy="24" r="10" stroke="#00F5FF" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Natural Language Processing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:42,height:42}}>
        <rect x="6" y="10" width="36" height="8" rx="4" stroke="#00F5FF" strokeWidth="1.5"/>
        <rect x="6" y="22" width="28" height="8" rx="4" stroke="#9D4EDD" strokeWidth="1.5"/>
        <rect x="6" y="34" width="20" height="8" rx="4" stroke="#00F5FF" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="12" cy="14" r="1.5" fill="#00F5FF"/>
        <circle cx="18" cy="14" r="1.5" fill="#00F5FF" opacity="0.6"/>
        <circle cx="24" cy="14" r="1.5" fill="#00F5FF" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Computer Vision Applications',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:42,height:42}}>
        <path d="M4 24C4 24 10 10 24 10C38 10 44 24 44 24C44 24 38 38 24 38C10 38 4 24 4 24Z" stroke="#00F5FF" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="7" stroke="#9D4EDD" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="#00F5FF" opacity="0.8"/>
        <line x1="4" y1="24" x2="10" y2="24" stroke="#00F5FF" strokeWidth="0.8" opacity="0.5"/>
        <line x1="38" y1="24" x2="44" y2="24" stroke="#00F5FF" strokeWidth="0.8" opacity="0.5"/>
        <rect x="10" y="10" width="6" height="6" rx="1" stroke="#9D4EDD" strokeWidth="1" opacity="0.5"/>
        <rect x="32" y="10" width="6" height="6" rx="1" stroke="#9D4EDD" strokeWidth="1" opacity="0.5"/>
        <rect x="10" y="32" width="6" height="6" rx="1" stroke="#9D4EDD" strokeWidth="1" opacity="0.5"/>
        <rect x="32" y="32" width="6" height="6" rx="1" stroke="#9D4EDD" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'AI Chatbot Development',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:42,height:42}}>
        <rect x="6" y="8" width="30" height="22" rx="5" stroke="#00F5FF" strokeWidth="1.5"/>
        <path d="M12 30L8 40L20 34" stroke="#00F5FF" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="15" cy="19" r="2" fill="#9D4EDD"/>
        <circle cx="21" cy="19" r="2" fill="#9D4EDD"/>
        <circle cx="27" cy="19" r="2" fill="#9D4EDD"/>
        <path d="M30 28H38C40.2 28 42 29.8 42 32V36C42 38.2 40.2 40 38 40H30" stroke="#9D4EDD" strokeWidth="1.2" opacity="0.7"/>
        <line x1="33" y1="32" x2="39" y2="32" stroke="#9D4EDD" strokeWidth="1" opacity="0.5"/>
        <line x1="33" y1="36" x2="37" y2="36" stroke="#9D4EDD" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:42,height:42}}>
        <polyline points="6,36 14,26 22,30 30,18 38,10" stroke="#00F5FF" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="38" cy="10" r="3" fill="#9D4EDD"/>
        <line x1="38" y1="14" x2="44" y2="8" stroke="#9D4EDD" strokeWidth="1.5" strokeDasharray="2 2"/>
        <line x1="6" y1="40" x2="42" y2="40" stroke="rgba(0,245,255,0.3)" strokeWidth="1"/>
        <line x1="6" y1="10" x2="6" y2="40" stroke="rgba(0,245,255,0.3)" strokeWidth="1"/>
        <circle cx="14" cy="26" r="2" fill="#00F5FF" opacity="0.6"/>
        <circle cx="22" cy="30" r="2" fill="#00F5FF" opacity="0.6"/>
        <circle cx="30" cy="18" r="2" fill="#00F5FF" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'AI Model Training & Deployment',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:42,height:42}}>
        <rect x="16" y="6" width="16" height="12" rx="3" stroke="#00F5FF" strokeWidth="1.5"/>
        <rect x="6" y="28" width="14" height="12" rx="3" stroke="#9D4EDD" strokeWidth="1.5"/>
        <rect x="28" y="28" width="14" height="12" rx="3" stroke="#9D4EDD" strokeWidth="1.5"/>
        <line x1="24" y1="18" x2="24" y2="24" stroke="#00F5FF" strokeWidth="1.2"/>
        <line x1="24" y1="24" x2="13" y2="28" stroke="#00F5FF" strokeWidth="1.2"/>
        <line x1="24" y1="24" x2="35" y2="28" stroke="#00F5FF" strokeWidth="1.2"/>
        <circle cx="24" cy="24" r="2" fill="#00F5FF"/>
        <circle cx="24" cy="12" r="1.5" fill="#00F5FF" opacity="0.8"/>
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

    const particles = Array.from({length: 60}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? '#00F5FF' : '#9D4EDD',
      alpha: Math.random() * 0.6 + 0.1,
    }))

    const nodes = Array.from({length: 18}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
    }))

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Neural network lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 180) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,245,255,${0.07 * (1 - dist/180)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,245,255,0.25)'
        ctx.fill()
        n.x += n.dx
        n.y += n.dy
        if (n.x < 0 || n.x > W) n.dx *= -1
        if (n.y < 0 || n.y > H) n.dy *= -1
      })

      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
      })

      animFrame = requestAnimationFrame(draw)
    }

    draw()

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
      }}
    />
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
        borderRadius: 18,
        padding: '36px 28px 32px',
        background: hovered
          ? 'rgba(255,255,255,0.09)'
          : 'rgba(255,255,255,0.045)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: hovered
          ? '1px solid rgba(0,245,255,0.45)'
          : '1px solid rgba(0,245,255,0.13)',
        boxShadow: hovered
          ? '0 8px 48px rgba(0,245,255,0.18), 0 2px 24px rgba(157,78,221,0.18), inset 0 1px 0 rgba(255,255,255,0.1)'
          : '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
        transform: hovered ? 'translateY(-8px) scale(1.025)' : 'translateY(0) scale(1)',
        transition: 'all 0.38s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 18,
        animationDelay: `${index * 0.09}s`,
        animation: 'cardFadeIn 0.7s ease both',
        overflow: 'hidden',
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 80, height: 80,
        background: 'radial-gradient(circle at top right, rgba(157,78,221,0.18), transparent 70%)',
        borderRadius: '0 18px 0 0',
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.38s',
        pointerEvents: 'none',
      }}/>

      <div style={{
        transform: hovered ? 'scale(1.12) rotate(-4deg)' : 'scale(1) rotate(0deg)',
        transition: 'transform 0.38s cubic-bezier(0.23,1,0.32,1)',
        filter: hovered ? 'drop-shadow(0 0 10px #00F5FF)' : 'none',
      }}>
        {service.icon}
      </div>

      <div>
        <div style={{
          fontFamily: '"Syne", "Space Grotesk", sans-serif',
          fontWeight: 700,
          fontSize: '1.05rem',
          letterSpacing: '0.01em',
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.88)',
          textShadow: hovered ? '0 0 18px rgba(0,245,255,0.5)' : 'none',
          transition: 'all 0.3s',
          lineHeight: 1.3,
        }}>
          {service.title}
        </div>
        <div style={{
          marginTop: 6,
          width: hovered ? 40 : 24,
          height: 2,
          background: 'linear-gradient(90deg, #00F5FF, #9D4EDD)',
          borderRadius: 2,
          transition: 'width 0.38s cubic-bezier(0.23,1,0.32,1)',
          opacity: 0.8,
        }}/>
      </div>
    </div>
  )
}

export default function Artifical() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 30px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.2); }
          50% { text-shadow: 0 0 50px rgba(0,245,255,0.7), 0 0 100px rgba(157,78,221,0.4); }
        }
        @keyframes subtitleFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,245,255,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(0,245,255,0); }
        }
       
      `}</style>

      <section style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #0F0C29 0%, #1A1A40 50%, #0F0C29 100%)',
        overflow: 'hidden',
        fontFamily: '"DM Sans", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 24px 100px',
      }}>

        {/* Background radial blobs */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: '0%', right: '-5%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(157,78,221,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>

        <ParticleCanvas />

        {/* Logo top right */}
        <div style={{
          position: 'absolute', top: 28, right: 36,
          display: 'flex', alignItems: 'center', gap: 10,
          zIndex: 10,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #00F5FF, #9D4EDD)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 800, color: '#0F0C29',
            fontFamily: '"Syne", sans-serif',
            animation: 'badgePulse 2.5s ease infinite',
          }}>AI</div>
          <span style={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 700, fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.05em',
          }}>NEXUS</span>
        </div>

        {/* Badge */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginBottom: 28,
          padding: '6px 18px',
          borderRadius: 100,
          border: '1px solid rgba(0,245,255,0.3)',
          background: 'rgba(0,245,255,0.07)',
          backdropFilter: 'blur(8px)',
          animation: 'subtitleFade 0.6s ease 0.1s both',
        }}>
          <span style={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 600,
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#00F5FF',
          }}>BITNEXTRO AI Platform</span>
        </div>

        {/* Title */}
        <h1 style={{
          position: 'relative', zIndex: 2,
          fontFamily: '"", sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
          letterSpacing: '-0.02em',
          color: '#ffffff',
          textAlign: 'center',
          animation: 'titleGlow 3s ease-in-out infinite, subtitleFade 0.7s ease 0.2s both',
          lineHeight: 1.1,
          maxWidth: 700,
        }}>
          Artificial{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00F5FF 20%, #9D4EDD 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Intelligence</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          position: 'relative', zIndex: 2,
          marginTop: 16,
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
          color: 'rgba(255,255,255,0.55)',
          textAlign: 'center',
          letterSpacing: '0.02em',
          maxWidth: 520,
          lineHeight: 1.6,
          animation: 'subtitleFade 0.7s ease 0.35s both',
        }}>
          Transforming Data into Intelligent Decisions
        </p>

        {/* Divider */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 40,
          width: 80, height: 2,
          background: 'linear-gradient(90deg, transparent, #00F5FF, #9D4EDD, transparent)',
          animation: 'subtitleFade 0.7s ease 0.4s both',
        }}/>

        {/* Cards Grid */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 56,
          width: '100%',
          maxWidth: 1080,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 24,
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 64,
          display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
          animation: 'subtitleFade 0.7s ease 0.8s both',
        }}>
          <button
            style={{
              padding: '14px 36px',
              borderRadius: 12,
              border: 'none',
              background: 'linear-gradient(135deg, #00F5FF 0%, #9D4EDD 100%)',
              color: '#0F0C29',
              fontFamily: '"", sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.03em',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,245,255,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 12px 40px rgba(0,245,255,0.45)'
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 32px rgba(0,245,255,0.3)'
            }}
          >
            Contact us
          </button>
          <button
            style={{
              padding: '14px 36px',
              borderRadius: 12,
              border: '1px solid rgba(0,245,255,0.3)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.8)',
              fontFamily: '"Syne", sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              letterSpacing: '0.03em',
              cursor: 'pointer',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = 'rgba(0,245,255,0.6)'
              e.target.style.background = 'rgba(0,245,255,0.07)'
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'rgba(0,245,255,0.3)'
              e.target.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            View Case Studies
          </button>
        </div>
      </section>
    </>
  )
}
