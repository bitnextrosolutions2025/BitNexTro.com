import React, { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Proactive System Monitoring',
    desc: 'Regular health checks, performance review and preventive maintenance..',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:40,height:40}}>
        <circle cx="24" cy="24" r="16" stroke="#00C2A8" strokeWidth="1.6"/>
        <path d="M18 20c0-3.3 2.7-6 6-6s6 2.7 6 6c0 4-6 6-6 8" stroke="#00C2A8" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="24" cy="34" r="1.5" fill="#00C2A8"/>
        <path d="M8 40c1.5-3 5-5 9-5" stroke="#00C2A8" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
        <path d="M40 40c-1.5-3-5-5-9-5" stroke="#00C2A8" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    
  },
  {
    title: 'Priority IT Support',
    desc: 'Fast response remote support with scheduled onsite visits.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:40,height:40}}>
        <path d="M24 6L8 12v12c0 10.5 7.2 18.8 16 21 8.8-2.2 16-10.5 16-21V12L24 6z" stroke="#00C2A8" strokeWidth="1.6" strokeLinejoin="round"/>
        <polyline points="17,24 22,29 31,20" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 10v4M16 13.5l2 3.5M32 13.5l-2 3.5" stroke="#00C2A8" strokeWidth="1.2" opacity="0.4" strokeLinecap="round"/>
      </svg>
    ),
  
  },
  {
    title: 'Security & Compliance',
    desc: 'Basic firewall review, antivirus management and patch updates.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:40,height:40}}>
        <ellipse cx="24" cy="14" rx="14" ry="5" stroke="#00C2A8" strokeWidth="1.6"/>
        <path d="M10 14v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" stroke="#00C2A8" strokeWidth="1.6"/>
        <path d="M10 22v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" stroke="#00C2A8" strokeWidth="1.6"/>
        <path d="M28 34l4 4 4-4M32 38v-8" stroke="#00C2A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      </svg>
    ),
    
  },
  {
    title: 'Data Backup Assistance',
    desc: 'Daily/weekly backup configuration and recovery guidance..',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:40,height:40}}>
        <path d="M6 38 C10 38, 12 28, 16 28 C20 28, 20 20, 24 20 C28 20, 28 12, 32 12 C36 12, 38 22, 42 22" stroke="#00C2A8" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <circle cx="42" cy="22" r="3" fill="#00C2A8"/>
        <line x1="6" y1="42" x2="44" y2="42" stroke="#00C2A8" strokeWidth="1" opacity="0.3"/>
        <line x1="6" y1="12" x2="6" y2="42" stroke="#00C2A8" strokeWidth="1" opacity="0.3"/>
        <circle cx="16" cy="28" r="1.8" fill="#00C2A8" opacity="0.6"/>
        <circle cx="24" cy="20" r="1.8" fill="#00C2A8" opacity="0.6"/>
        <circle cx="32" cy="12" r="1.8" fill="#00C2A8" opacity="0.6"/>
      </svg>
    ),
    
  },
  {
    title: 'Infrastructure Optimization',
    desc: 'Network tuning, storage cleanup and system optimization..',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:40,height:40}}>
        <circle cx="24" cy="24" r="8" stroke="#00C2A8" strokeWidth="1.6"/>
        <circle cx="24" cy="24" r="2.5" fill="#00C2A8"/>
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="#00C2A8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M11.5 11.5l4.2 4.2M32.3 32.3l4.2 4.2M36.5 11.5l-4.2 4.2M15.7 32.3l-4.2 4.2" stroke="#00C2A8" strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
        <circle cx="24" cy="24" r="14" stroke="#00C2A8" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.25"/>
      </svg>
    ),
    
  },
  {
    title: 'Remote & On-site Support',
    desc: 'Remote troubleshooting plus physical visits when required..',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:40,height:40}}>
        <rect x="6" y="10" width="36" height="24" rx="3" stroke="#00C2A8" strokeWidth="1.6"/>
        <line x1="16" y1="38" x2="32" y2="38" stroke="#00C2A8" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="24" y1="34" x2="24" y2="38" stroke="#00C2A8" strokeWidth="1.4"/>
        <circle cx="34" cy="18" r="5" fill="rgba(0,194,168,0.15)" stroke="#00C2A8" strokeWidth="1.3"/>
        <polyline points="32,18 34,20 37,16" stroke="#00C2A8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="10" y1="20" x2="24" y2="20" stroke="#00C2A8" strokeWidth="1.2" opacity="0.4"/>
        <line x1="10" y1="25" x2="20" y2="25" stroke="#00C2A8" strokeWidth="1.2" opacity="0.3"/>
      </svg>
    ),
   
  },
]

const plans = [
  { name: 'Silver',  color: '#94a3b8', features: ['Email', ' Monthly health check','Remote troubleshooting','Quarterly onsite','Basic backup assistance'] },
  { name: 'Gold', color: '#00C2A8', features: ['Phone + Email support','Monthly reports','Quarterly onsite','Patch update','Firewall basic review'], popular: true },
  { name: 'Platinum',  color: '#818cf8', features: ['Dedicated engineer', 'Weekly visits', 'Server monitoring', 'Backup + DR', 'Priority support'] },
]

function GridCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animFrame
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    let t = 0

    const nodes = Array.from({length: 20}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      dx: (Math.random() - 0.5) * 0.14,
      dy: (Math.random() - 0.5) * 0.14,
    }))
    const particles = Array.from({length: 35}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.3 + 0.05,
      teal: Math.random() > 0.65,
    }))

    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.005

      // Grid dots
      const spacing = 55
      for (let x = 0; x < W; x += spacing) {
        for (let y = 0; y < H; y += spacing) {
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(0,194,168,0.08)'
          ctx.fill()
        }
      }

      // Node connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 170) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,194,168,${0.06*(1-dist/170)})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath(); ctx.arc(n.x, n.y, 1.5, 0, Math.PI*2)
        ctx.fillStyle = 'rgba(0,194,168,0.18)'; ctx.fill()
        n.x += n.dx; n.y += n.dy
        if (n.x < 0 || n.x > W) n.dx *= -1
        if (n.y < 0 || n.y > H) n.dy *= -1
      })

      // Particles
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = p.teal ? `rgba(0,194,168,${p.alpha})` : `rgba(255,255,255,${p.alpha})`
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
  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }}/>
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
        padding: '36px 28px 32px',
        background: hovered ? 'rgba(0,194,168,0.07)' : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: hovered ? '1px solid rgba(0,194,168,0.45)' : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,194,168,0.15), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'all 0.42s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        animation: `cardIn 0.7s ease both`,
        animationDelay: `${index * 0.1}s`,
        overflow: 'hidden',
      }}
    >
      {/* Teal glow orb on hover */}
      <div style={{
        position: 'absolute', top: -30, right: -30,
        width: 110, height: 110,
        background: 'radial-gradient(circle, rgba(0,194,168,0.2), transparent 70%)',
        borderRadius: '50%',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }}/>
      {/* Left teal stripe */}
      <div style={{
        position: 'absolute', left: 0, top: '20%', bottom: '20%',
        width: 3, borderRadius: '0 3px 3px 0',
        background: 'linear-gradient(180deg, transparent, #00C2A8, transparent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
      }}/>

      {/* Icon + stat row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
          transition: 'transform 0.42s cubic-bezier(0.23,1,0.32,1)',
          filter: hovered ? 'drop-shadow(0 0 10px rgba(0,194,168,0.7))' : 'none',
        }}>
          {service.icon}
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700, fontSize: '1.5rem',
            color: '#00C2A8',
            lineHeight: 1,
            textShadow: hovered ? '0 0 16px rgba(0,194,168,0.6)' : 'none',
            transition: 'text-shadow 0.35s',
          }}>{service.stat}</div>
          <div style={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 400, fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: 2,
          }}>{service.statLabel}</div>
        </div>
      </div>

      {/* Title */}
      <div style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700, fontSize: '1.05rem',
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.88)',
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
        transition: 'color 0.3s',
      }}>{service.title}</div>

      {/* Desc */}
      <div style={{
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: 300, fontSize: '0.87rem',
        color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.65,
        transition: 'color 0.3s',
        ...(hovered && { color: 'rgba(255,255,255,0.62)' }),
      }}>{service.desc}</div>

      {/* Bottom divider */}
      <div style={{
        width: hovered ? '100%' : '30%',
        height: 1,
        background: 'linear-gradient(90deg, #00C2A8, transparent)',
        transition: 'width 0.5s cubic-bezier(0.23,1,0.32,1)',
        opacity: hovered ? 0.7 : 0.2,
        marginTop: 4,
      }}/>
    </div>
  )
}

function PlanCard({ plan, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 22,
        padding: plan.popular ? '36px 28px 32px' : '32px 28px 28px',
        background: plan.popular
          ? (hovered ? 'rgba(0,194,168,0.14)' : 'rgba(0,194,168,0.08)')
          : (hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)'),
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        border: plan.popular
          ? `1px solid rgba(0,194,168,${hovered ? 0.7 : 0.4})`
          : `1px solid rgba(255,255,255,${hovered ? 0.15 : 0.07})`,
        boxShadow: plan.popular
          ? (hovered ? '0 24px 70px rgba(0,194,168,0.25)' : '0 8px 40px rgba(0,194,168,0.12)')
          : (hovered ? '0 16px 50px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.2)'),
        transform: hovered ? 'translateY(-8px)' : plan.popular ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        animation: `cardIn 0.7s ease ${0.3 + index * 0.12}s both`,
        overflow: 'hidden',
        flex: 1,
        minWidth: 240,
      }}
    >
      {plan.popular && (
        <div style={{
          position: 'absolute', top: 0, right: 24,
          background: '#00C2A8',
          color: '#0B1D3A',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700, fontSize: '0.65rem',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '0 0 10px 10px',
        }}>Most Popular</div>
      )}
      <div style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700, fontSize: '1rem',
        color: plan.color,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        marginBottom: 12,
      }}>{plan.name}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 24 }}>
        <span style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 800, fontSize: '2.2rem',
          color: '#ffffff',
          lineHeight: 1,
        }}>{plan.price}</span>
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 400, fontSize: '0.82rem',
          color: 'rgba(255,255,255,0.4)',
        }}>{plan.per}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
        {plan.features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              background: `rgba(0,194,168,0.15)`,
              border: '1px solid rgba(0,194,168,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg viewBox="0 0 10 10" width="9" height="9">
                <polyline points="2,5 4,7 8,3" stroke="#00C2A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 400, fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.62)',
            }}>{f}</span>
          </div>
        ))}
      </div>
      <button style={{
        width: '100%',
        padding: '12px',
        borderRadius: 12,
        border: `1px solid ${plan.popular ? '#00C2A8' : 'rgba(255,255,255,0.15)'}`,
        background: plan.popular ? '#00C2A8' : 'transparent',
        color: plan.popular ? '#0B1D3A' : 'rgba(255,255,255,0.7)',
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700, fontSize: '0.88rem',
        letterSpacing: '0.04em',
        cursor: 'pointer',
        transition: 'all 0.25s',
      }}
        onMouseEnter={e => {
          if (!plan.popular) { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.color = '#fff' }
          else { e.target.style.background = '#00d4ba' }
        }}
        onMouseLeave={e => {
          if (!plan.popular) { e.target.style.background = 'transparent'; e.target.style.color = 'rgba(255,255,255,0.7)' }
          else { e.target.style.background = '#00C2A8' }
        }}
      >
        Get  Quote →
      </button>
    </div>
  )
}

export default function Amc() {
    const wphandle=()=>{
    // window.open()
    console.log("Hello")
    window.open(`https://wa.me/${+919330855877}`)
  }
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes cardIn {
          from { opacity:0; transform:translateY(30px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes heroIn {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes gradPulse {
          0%,100% { opacity:0.6; }
          50%      { opacity:1; }
        }
        @keyframes rotateSlow {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes counterUp {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        
      `}</style>

      <section style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(145deg, #0B1D3A 0%, #0D2240 40%, #071428 75%, #0B1D3A 100%)',
        overflow: 'hidden',
        fontFamily: '"DM Sans", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '88px 24px 110px',
      }}>

        {/* Background glow blobs */}
        <div style={{
          position:'absolute', top:'-15%', left:'-8%',
          width:600, height:600,
          background:'radial-gradient(circle, rgba(0,194,168,0.07) 0%, transparent 65%)',
          borderRadius:'50%', pointerEvents:'none',
          animation:'gradPulse 5s ease infinite',
        }}/>
        <div style={{
          position:'absolute', bottom:'-10%', right:'-5%',
          width:500, height:500,
          background:'radial-gradient(circle, rgba(11,29,58,0.9) 0%, rgba(0,100,140,0.08) 50%, transparent 70%)',
          borderRadius:'50%', pointerEvents:'none',
        }}/>
        <div style={{
          position:'absolute', top:'38%', right:'12%',
          width:280, height:280,
          background:'radial-gradient(circle, rgba(0,194,168,0.05) 0%, transparent 70%)',
          borderRadius:'50%', pointerEvents:'none',
          animation:'gradPulse 7s ease infinite 2s',
        }}/>

        {/* Rotating ring decoration */}
        <div style={{
          position:'absolute', top:50, right:'10%',
          width:120, height:120,
          border:'1px solid rgba(0,194,168,0.12)',
          borderRadius:'50%',
          animation:'rotateSlow 22s linear infinite',
          pointerEvents:'none',
        }}>
          <div style={{
            position:'absolute', top:-4, left:'50%', marginLeft:-4,
            width:8, height:8, borderRadius:'50%',
            background:'rgba(0,194,168,0.5)',
            boxShadow:'0 0 8px rgba(0,194,168,0.8)',
          }}/>
        </div>
        <div style={{
          position:'absolute', bottom:'18%', left:'6%',
          width:70, height:70,
          border:'1px solid rgba(0,194,168,0.1)',
          borderRadius:'50%',
          animation:'rotateSlow 16s linear infinite reverse',
          pointerEvents:'none',
        }}>
          <div style={{
            position:'absolute', bottom:-3, left:'50%', marginLeft:-3,
            width:6, height:6, borderRadius:'50%',
            background:'rgba(0,194,168,0.4)',
          }}/>
        </div>

        <GridCanvas />

        {/* Logo top right */}
        <div style={{
          position:'absolute', top:28, right:36,
          display:'flex', alignItems:'center', gap:10, zIndex:10,
        }}>
          <div style={{
            width:36, height:36, borderRadius:10,
            background:'rgba(0,194,168,0.12)',
            border:'1px solid rgba(0,194,168,0.3)',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <svg viewBox="0 0 20 20" fill="none" width="17" height="17">
              <rect x="3" y="3" width="14" height="14" rx="3" stroke="#00C2A8" strokeWidth="1.5"/>
              <path d="M7 10h6M10 7v6" stroke="#00C2A8" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{
            fontFamily:'"Space Grotesk", sans-serif',
            fontWeight:700, fontSize:'0.88rem',
            color:'rgba(255,255,255,0.75)',
            letterSpacing:'0.07em',
          }}>INFRASYNC</span>
        </div>

        {/* Top badge */}
        <div style={{
          position:'relative', zIndex:2, marginBottom:28,
          padding:'6px 22px', borderRadius:100,
          border:'1px solid rgba(0,194,168,0.3)',
          background:'rgba(0,194,168,0.07)',
          backdropFilter:'blur(8px)',
          animation:'heroIn 0.55s ease 0.1s both',
          display:'flex', alignItems:'center', gap:8,
        }}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#00C2A8', boxShadow:'0 0 8px #00C2A8' }}/>
          <span style={{
            fontFamily:'"Space Grotesk", sans-serif',
            fontWeight:600, fontSize:'0.7rem',
            letterSpacing:'0.18em', textTransform:'uppercase',
            color:'#00C2A8',
          }}>Annual Maintenance Contract</span>
        </div>

        {/* Title */}
        <h1 style={{
          position:'relative', zIndex:2,
          fontFamily:'"Space Grotesk", sans-serif',
          fontWeight:800,
          fontSize:'clamp(2.2rem, 5.5vw, 4rem)',
          letterSpacing:'-0.03em',
          color:'#ffffff',
          textAlign:'center',
          lineHeight:1.1,
          maxWidth:720,
          animation:'heroIn 0.65s ease 0.2s both',
        }}>
          Enterprise IT Support{' '}
          <span style={{
            background:'linear-gradient(135deg, #00C2A8 0%, #5eead4 60%, #a7f3d0 100%)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
          }}>You Can Rely On</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          position:'relative', zIndex:2,
          marginTop:18,
          fontFamily:'"DM Sans", sans-serif',
          fontWeight:300,
          fontSize:'clamp(0.97rem, 2vw, 1.14rem)',
          color:'rgba(255,255,255,0.5)',
          textAlign:'center',
          maxWidth:520, lineHeight:1.7,
          animation:'heroIn 0.65s ease 0.32s both',
        }}>
          Protect your IT infrastructure with our comprehensive AMC plans — from proactive monitoring to rapid on-site response.
        </p>

        {/* Trust stats bar */}
        <div style={{
          position:'relative', zIndex:2,
          display:'flex', gap:0, flexWrap:'wrap', justifyContent:'center',
          marginTop:40,
          borderRadius:16,
          border:'1px solid rgba(255,255,255,0.07)',
          background:'rgba(255,255,255,0.03)',
          backdropFilter:'blur(14px)',
          overflow:'hidden',
          animation:'heroIn 0.65s ease 0.42s both',
          maxWidth:680, width:'100%',
        }}>
          {[, ,].map(([val, label], i) => (
            <div key={label} style={{
              flex:1, minWidth:130,
              padding:'20px 16px',
              textAlign:'center',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <div style={{
                fontFamily:'"Space Grotesk", sans-serif',
                fontWeight:800, fontSize:'1.6rem',
                color:'#00C2A8', lineHeight:1,
                animation:`counterUp 0.6s ease ${0.5 + i*0.1}s both`,
              }}>{val}</div>
              <div style={{
                fontFamily:'"DM Sans", sans-serif',
                fontWeight:400, fontSize:'0.68rem',
                color:'rgba(255,255,255,0.38)',
                letterSpacing:'0.07em', textTransform:'uppercase',
                marginTop:5,
              }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Section label */}
        <div style={{
          position:'relative', zIndex:2,
          marginTop:70, marginBottom:10,
          display:'flex', alignItems:'center', gap:14,
          animation:'heroIn 0.65s ease 0.5s both',
          width:'100%', maxWidth:1080,
        }}>
          <div style={{ flex:1, height:1, background:'linear-gradient(90deg, transparent, rgba(0,194,168,0.2))' }}/>
          <span style={{
            fontFamily:'"Space Grotesk", sans-serif',
            fontWeight:600, fontSize:'0.68rem',
            letterSpacing:'0.18em', textTransform:'uppercase',
            color:'rgba(0,194,168,0.6)',
          }}>What's Included</span>
          <div style={{ flex:1, height:1, background:'linear-gradient(90deg, rgba(0,194,168,0.2), transparent)' }}/>
        </div>

        {/* Services Grid */}
        <div style={{
          position:'relative', zIndex:2,
          marginTop:24,
          width:'100%', maxWidth:1080,
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
          gap:20,
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Plans section label */}
        <div style={{
          position:'relative', zIndex:2,
          marginTop:80, marginBottom:10,
          display:'flex', alignItems:'center', gap:14,
          width:'100%', maxWidth:1080,
        }}>
          <div style={{ flex:1, height:1, background:'linear-gradient(90deg, transparent, rgba(0,194,168,0.2))' }}/>
          <span style={{
            fontFamily:'"Space Grotesk", sans-serif',
            fontWeight:600, fontSize:'0.68rem',
            letterSpacing:'0.18em', textTransform:'uppercase',
            color:'rgba(0,194,168,0.6)',
          }}>AMC Plans</span>
          <div style={{ flex:1, height:1, background:'linear-gradient(90deg, rgba(0,194,168,0.2), transparent)' }}/>
        </div>

        <p style={{
          position:'relative', zIndex:2,
          fontFamily:'"DM Sans", sans-serif',
          fontWeight:300, fontSize:'0.95rem',
          color:'rgba(255,255,255,0.38)',
          textAlign:'center', marginBottom:36,
        }}>Choose a plan that fits your infrastructure. All plans include onboarding &amp; SLA agreement.</p>

        {/* Plans */}
        <div style={{
          position:'relative', zIndex:2,
          width:'100%', maxWidth:900,
          display:'flex', gap:20, flexWrap:'wrap', justifyContent:'center',
        }}>
          {plans.map((plan, i) => <PlanCard key={plan.name} plan={plan} index={i} />)}
        </div>

        {/* Bottom CTA */}
        <div style={{
          position:'relative', zIndex:2,
          marginTop:70,
          display:'flex', flexDirection:'column', alignItems:'center', gap:18,
        }}>
          <p style={{
            fontFamily:'"DM Sans", sans-serif',
            fontWeight:300, fontSize:'0.92rem',
            color:'rgba(255,255,255,0.35)', textAlign:'center',
          }}>
            Not sure which plan? Talk to our team for a free infrastructure audit.
          </p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap', justifyContent:'center' }}>
            <button
            onClick={wphandle}
             style={{
              padding:'14px 38px', borderRadius:12,
              border:'none',
              background:'linear-gradient(135deg, #00C2A8, #00a08a)',
              color:'#0B1D3A',
              fontFamily:'"Space Grotesk", sans-serif',
              fontWeight:700, fontSize:'0.95rem',
              cursor:'pointer',
              boxShadow:'0 8px 30px rgba(0,194,168,0.3)',
              transition:'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 14px 40px rgba(0,194,168,0.45)' }}
              onMouseLeave={e => { e.target.style.transform='translateY(0)'; e.target.style.boxShadow='0 8px 30px rgba(0,194,168,0.3)' }}
            >
              Contact us →
            </button>
            <button style={{
              padding:'14px 38px', borderRadius:12,
              border:'1px solid rgba(255,255,255,0.12)',
              background:'rgba(255,255,255,0.04)',
              backdropFilter:'blur(10px)',
              color:'rgba(255,255,255,0.7)',
              fontFamily:'"Space Grotesk", sans-serif',
              fontWeight:600, fontSize:'0.95rem',
              cursor:'pointer',
              transition:'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.target.style.borderColor='rgba(0,194,168,0.4)'; e.target.style.background='rgba(0,194,168,0.06)' }}
              onMouseLeave={e => { e.target.style.borderColor='rgba(255,255,255,0.12)'; e.target.style.background='rgba(255,255,255,0.04)' }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
