import React from 'react'

const Ico = ({ d, size = 22, color = '#60a5fa' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
)

const ic = {
  support:  <Ico d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>}/>,
  network:  <Ico d={<><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></>}/>,
  patch:    <Ico d={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>}/>,
  helpdesk: <Ico d={<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>}/>,
  asset:    <Ico d={<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>}/>,
  consult:  <Ico d={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>}/>,
  lock:     <Ico d={<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>}/>,
  zap:      <Ico d={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>}/>,
  globe:    <Ico d={<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}/>,
  server:   <Ico d={<><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></>}/>,
  arrow:    <Ico d={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} size={15} color="#3b82f6"/>,
  clock:    <Ico d={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}/>,
  discover: <Ico d={<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>}/>,
  plan:     <Ico d={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>}/>,
  deploy:   <Ico d={<><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}/>,
  monitor:  <Ico d={<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>}/>,
  logo:     <Ico d={<><rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/><rect x="2" y="14" width="7" height="7" rx="1"/><rect x="15" y="14" width="7" height="7" rx="1"/></>} size={16} color="#fff"/>,
}

const services = [
  { k:'support',  name:'Managed IT Support',  desc:'Your dedicated IT team without the overhead — proactive maintenance, lifecycle planning, and continuous optimisation on a fixed monthly cost.' },
  { k:'network',  name:'Network Monitoring',  desc:'Real-time visibility and proactive resolution across your entire network fabric with AI-assisted anomaly detection and instant alerting.' },
  { k:'patch',    name:'Patch Management',    desc:'Automated OS and software updates deployed in tested rollout windows — zero disruptions, full compliance coverage, every time.' },
  { k:'helpdesk', name:'Helpdesk Services',   desc:"Multi-tiered support for all your staff's needs — from password resets to complex incident escalation, around the clock, 365 days." },
  { k:'asset',    name:'Asset Management',    desc:'Track hardware inventory, software licences, and warranty expiry across your entire estate from a single live, unified dashboard.' },
  { k:'consult',  name:'IT Consulting',       desc:'Technology roadmaps aligned with your business objectives, budget constraints, and long-term digital transformation ambitions.' },
]

const steps = [
  { icon:'discover', n:'01', title:'Discovery & Audit',       desc:'Deep-dive assessment of your infrastructure, mapping every asset, risk, and gap before we write a single line of policy.', tag:'Week 1–2' },
  { icon:'plan',     n:'02', title:'Strategy & Design',       desc:'Tailored managed services blueprint with defined SLAs, escalation paths, tooling stack, and phased implementation roadmap.', tag:'Week 2–3' },
  { icon:'deploy',   n:'03', title:'Onboarding & Deployment', desc:'Zero-disruption cutover. Agents, integrations, and automation workflows live within days — your team barely notices.', tag:'Week 3–5' },
  { icon:'monitor',  n:'04', title:'Monitor & Optimise',      desc:'24/7 monitoring, executive monthly reports, and continuous service improvements that scale with your business.', tag:'Ongoing' },
]

const feats = [
  { k:'lock',   title:'Zero-Trust Security',      desc:'Compliance-ready controls and layered posture management across every endpoint and workload.' },
  { k:'zap',    title:'Sub-15min P1 Response',    desc:'Guaranteed by SLA — not just a promise, a contractual commitment we meet every single month.' },
  { k:'globe',  title:'Vendor-Neutral Expertise', desc:'We work with your existing stack. No forced migrations, no hidden lock-in, no agenda.' },
  { k:'server', title:'Certified Engineering',    desc:'Multi-certified engineers across cloud, on-premise, hybrid, and edge infrastructure.' },
]

const metrics = [
  { name:'Network Uptime (30d)', val:'80%' },
  { name:'Avg. Response Time',   val:'48 hours' },
  { name:'Patch Compliance',     val:'98.4%'  },
  { name:'Active Endpoints',     val:'247'    },
  { name:'Open Critical Alerts', val:'0'      },
  { name:'Monthly SLA Score',    val:'100%'   },
]

const miniStats = [
  { num:'<15m', label:'Average P1 incident response time' },
  { num:'100%', label:'Automated patch compliance rate' },
  { num:'24/7', label:'NOC and helpdesk availability' },
  { num:'500+', label:'Managed endpoints under active care' },
]

export default function Managedservice() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        .font-syne { font-family:'Syne',sans-serif !important; }

        /* ── Palette
           Black:  #000000  (pure black base)
           Navy:   #050d1f, #081028, #0a1535  (deep navy layers)
           Blue:   #1d4ed8, #2563eb, #3b82f6, #60a5fa  (blue accents)
        ── */

        /* Gradient text */
        .text-grad {
          background: linear-gradient(120deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .num-grad {
          background: linear-gradient(130deg, #ffffff 0%, #93c5fd 60%, #60a5fa 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .mini-grad {
          background: linear-gradient(120deg, #bfdbfe, #60a5fa);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        /* ── Glass card — navy-black tinted with blue border glow ── */
        .glass-card {
          background: linear-gradient(135deg, rgba(8,16,40,0.75) 0%, rgba(3,7,20,0.85) 100%);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          border: 1px solid rgba(59,130,246,0.14);
          border-radius: 20px;
          transition: all 0.38s cubic-bezier(0.23,1,0.32,1);
        }
        .glass-card:hover {
          background: linear-gradient(135deg, rgba(13,27,65,0.80) 0%, rgba(5,12,35,0.90) 100%);
          border-color: rgba(59,130,246,0.38);
          box-shadow:
            0 24px 64px rgba(0,0,0,0.75),
            0 0 40px rgba(37,99,235,0.12),
            0 0 0 1px rgba(59,130,246,0.10) inset,
            0 1px 0 rgba(147,197,253,0.10) inset;
          transform: translateY(-4px);
        }

        /* ── Dot grid — blue tinted ── */
        .dot-grid {
          background-image: radial-gradient(rgba(59,130,246,0.10) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
        }

        /* ── Atmospheric orbs ── */
        @keyframes float {
          0%,100% { transform:translateY(0) scale(1); }
          50%      { transform:translateY(-18px) scale(1.03); }
        }
        .orb-1 {
          position:fixed; top:-140px; left:-140px; width:520px; height:520px; border-radius:50%;
          background: radial-gradient(circle, rgba(29,78,216,0.30) 0%, rgba(17,50,150,0.12) 45%, transparent 70%);
          pointer-events:none; z-index:0; animation:float 10s ease-in-out infinite;
        }
        .orb-2 {
          position:fixed; bottom:-160px; right:-160px; width:600px; height:600px; border-radius:50%;
          background: radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(15,40,120,0.10) 45%, transparent 68%);
          pointer-events:none; z-index:0; animation:float 13s ease-in-out infinite 3s;
        }
        .orb-3 {
          position:fixed; top:40%; left:60%; width:400px; height:300px; border-radius:50%;
          background: radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%);
          pointer-events:none; z-index:0;
        }

        /* ── Pulse ── */
        @keyframes pulse-blue {
          0%,100% { box-shadow:0 0 0 0 rgba(96,165,250,0.60); }
          50%      { box-shadow:0 0 0 6px rgba(96,165,250,0); }
        }
        @keyframes pulse-green {
          0%,100% { box-shadow:0 0 0 0 rgba(74,222,128,0.55); }
          50%      { box-shadow:0 0 0 5px rgba(74,222,128,0); }
        }
        .pulse-blue  { animation:pulse-blue  2s ease-in-out infinite; }
        .pulse-green { animation:pulse-green 2s ease-in-out infinite; }

        /* ── Service card shimmer + top edge ── */
        .svc-card { position:relative; overflow:hidden; cursor:default; }
        .svc-card::before {
          content:''; position:absolute; top:0; left:-100%; width:55%; height:100%;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.07), transparent);
          transition:left 0.65s ease; pointer-events:none; z-index:0;
        }
        .svc-card:hover::before { left:150%; }
        .svc-card > * { position:relative; z-index:1; }
        .svc-card::after {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.50), transparent);
          opacity:0; transition:opacity 0.35s; z-index:2;
        }
        .svc-card:hover::after { opacity:1; }

        /* ── Learn more ── */
        .learn-more { opacity:0; transform:translateY(6px); transition:opacity .3s, transform .3s; }
        .svc-card:hover .learn-more { opacity:1; transform:translateY(0); }

        /* ── Step cell ── */
        .step-cell { position:relative; overflow:hidden; cursor:default; transition:background .3s ease; }
        .step-cell::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          transform:scaleX(0); transition:transform 0.45s cubic-bezier(.23,1,.32,1);
        }
        .step-cell:hover::after { transform:scaleX(1); }
        .step-cell:hover { background:rgba(29,78,216,0.12) !important; }

        .step-num {
          font-family:'',sans-serif; font-size:52px; font-weight:800; line-height:1;
          color:rgba(59,130,246,0.12); transition:color .3s;
        }
        .step-cell:hover .step-num { color:rgba(59,130,246,0.28); }

        /* ── Feat row ── */
        .feat-row { transition:padding-left .28s, background .28s; border-radius:10px; padding-left:0; }
        .feat-row:hover { padding-left:10px; background:rgba(29,78,216,0.08); }

        /* ── Metric row ── */
        .metric-row { transition:background .25s, padding-left .25s; border-radius:8px; padding-left:0; }
        .metric-row:hover { background:rgba(29,78,216,0.10); padding-left:6px; }

        /* ── Icon box ── */
        .icon-box {
          background: rgba(29,78,216,0.16);
          border: 1px solid rgba(59,130,246,0.20);
          backdrop-filter:blur(12px);
          transition: all .3s ease;
        }
        .svc-card:hover .icon-box, .glass-card:hover .icon-box {
          background: rgba(37,99,235,0.28);
          border-color: rgba(96,165,250,0.42);
          box-shadow: 0 0 20px rgba(37,99,235,0.25);
        }

        /* ── Navbar ── */
        .nav-glass {
          background: rgba(0,0,0,0.86);
          backdrop-filter:blur(30px) saturate(1.8);
          -webkit-backdrop-filter:blur(30px) saturate(1.8);
          border-bottom:1px solid rgba(59,130,246,0.10);
        }
        .nav-link {
          position:relative; text-decoration:none;
          color:rgba(255,255,255,0.32); font-size:14px; font-weight:500; transition:color .2s;
        }
        .nav-link::after {
          content:''; position:absolute; bottom:-2px; left:0;
          width:0; height:1px;
          background: linear-gradient(90deg,#3b82f6,#60a5fa);
          transition:width .3s ease;
        }
        .nav-link:hover { color:#93c5fd; }
        .nav-link:hover::after { width:100%; }

        /* ── Buttons ── */
        .btn-primary {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #3b82f6 100%);
          color:#fff; border:none; font-weight:700; cursor:pointer;
          position:relative; overflow:hidden; transition:all .25s ease;
        }
        .btn-primary::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,transparent,rgba(255,255,255,0.10));
          opacity:0; transition:opacity .25s;
        }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(37,99,235,0.50); }
        .btn-primary:hover::before { opacity:1; }

        .btn-ghost {
          background: rgba(8,16,40,0.55);
          backdrop-filter:blur(12px);
          border:1px solid rgba(59,130,246,0.20);
          color:rgba(147,197,253,0.80); cursor:pointer;
          transition:all .25s ease;
        }
        .btn-ghost:hover {
          border-color:rgba(96,165,250,0.45);
          background:rgba(29,78,216,0.14);
          color:#bfdbfe;
          box-shadow:0 4px 24px rgba(37,99,235,0.18);
        }

        /* ── Divider ── */
        .sep { border:none; height:1px; background:linear-gradient(90deg,transparent,rgba(59,130,246,0.18),transparent); }

        /* ── Eyebrow label ── */
        .eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:12px; }
        .eyebrow-line { display:block; width:24px; height:1px; background:linear-gradient(90deg,#3b82f6,transparent); flex-shrink:0; }
        .eyebrow-text { font-size:10px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#60a5fa; }

        /* ── CTA ── */
        .cta-wrap { position:relative; overflow:hidden; }
        .cta-wrap::before {
          content:''; position:absolute; top:-90px; right:-90px; width:350px; height:350px; border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 65%); pointer-events:none;
        }
        .cta-wrap::after {
          content:''; position:absolute; bottom:-80px; left:-80px; width:280px; height:280px; border-radius:50%;
          background:radial-gradient(circle,rgba(29,78,216,0.10) 0%,transparent 60%); pointer-events:none;
        }

        /* ── Grain ── */
        .grain {
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* ── ROOT ── */}
      <div
        style={{ background:'linear-gradient(160deg,#000000 0%,#020a1e 35%,#030c22 65%,#000000 100%)', fontFamily:"'DM Sans',sans-serif" }}
        className="relative min-h-screen overflow-x-hidden text-white">

        {/* Background layers */}
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="orb-3" />
        <div className="dot-grid fixed inset-0 z-0 pointer-events-none" />
        <div className="grain fixed inset-0 z-0 pointer-events-none opacity-[0.022]" />

        <div className="relative z-10">

          {/* ══ NAV ══ */}
          <header className="nav-glass sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4">
            <div className="font-syne flex items-center gap-3 text-xl font-extrabold tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background:'linear-gradient(135deg,#1e3a8a,#3b82f6)', boxShadow:'0 0 18px rgba(59,130,246,0.40)' }}>
                {ic.logo}
              </div>
              NexusTech
            </div>
            <ul className="hidden md:flex gap-8 list-none">
              {['Services','Solutions','About','Insights'].map(l=>(
                <li key={l}><a href="#" className="nav-link">{l}</a></li>
              ))}
            </ul>
            <button className="btn-ghost px-5 py-2 rounded-lg text-sm font-semibold">Free IT Audit</button>
          </header>

          {/* ══ HERO ══ */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center px-6 md:px-16 py-24">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full"
                style={{ background:'rgba(29,78,216,0.16)', border:'1px solid rgba(59,130,246,0.28)', backdropFilter:'blur(12px)' }}>
                <span className="pulse-blue w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-blue-300">
                  Managed IT Services
                </span>
              </div>
              <h1 className="text-5xl xl:text-[66px] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                IT That <span className="text-grad">Never Sleeps.<br /></span>
                Partners That Never Leave.
              </h1>
              <p className="text-base leading-relaxed font-light max-w-lg mb-10" style={{ color:'rgba(191,219,254,0.45)' }}>
                A fully outsourced technology partner that monitors, protects, and evolves your
                infrastructure 24/7 — so your team stays focused on what truly moves the business forward.
              </p>
              <div className="flex gap-4 flex-wrap items-center">
                <button className="btn-primary px-8 py-3.5 rounded-xl text-sm">Contact us </button>
                {/* <button className="btn-ghost flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium">
                  View SLA Details {ic.arrow}
                </button> */}
              </div>
            </div>

            {/* Live metrics panel */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="pulse-green w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-blue-400/70">
                  Live Platform Status
                </span>
                <div className="flex-1 h-px" style={{ background:'linear-gradient(90deg,rgba(59,130,246,0.22),transparent)' }} />
              </div>
              {metrics.map((m,i)=>(
                <div key={i} className="metric-row flex items-center justify-between py-3.5 border-b last:border-0"
                  style={{ borderColor:'rgba(59,130,246,0.08)' }}>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-blue-500/50" />
                    <span className="text-xs" style={{ color:'rgba(191,219,254,0.45)' }}>{m.name}</span>
                  </div>
                  <span className="font-syne text-sm font-bold text-blue-300 tracking-tight">{m.val}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="sep mx-6 md:mx-16" />

          {/* ══ SERVICES ══ */}
          <section className="px-6 md:px-16 py-24">
            <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
              <div>
                <div className="eyebrow"><span className="eyebrow-line"/><span className="eyebrow-text">Core Services</span></div>
                <h2 className=" text-4xl xl:text-[46px] font-extrabold tracking-tight text-white leading-[1.08]">
                  Six Pillars of<br /><span className="text-grad">Managed Excellence</span>
                </h2>
              </div>
              <p className="text-sm leading-relaxed font-light max-w-xs" style={{ color:'rgba(191,219,254,0.38)' }}>
                Specialist service lines unified under one responsive account team — with transparent SLA reporting and a dedicated engineer on your account.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {services.map((s,i)=>(
                <div key={s.k} className="svc-card glass-card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center shrink-0">{ic[s.k]}</div>
                    <span className="font-syne text-xs font-bold tracking-wide" style={{ color:'rgba(59,130,246,0.28)' }}>
                      {String(i+1).padStart(2,'0')}
                    </span>
                  </div>
                  <h3 className="font-syne text-base font-bold text-white mb-2.5">{s.name}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color:'rgba(191,219,254,0.40)' }}>{s.desc}</p>
                  <div className="learn-more flex items-center gap-1.5 mt-5 text-xs font-semibold text-blue-400">
                    Learn more {ic.arrow}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="sep mx-6 md:mx-16" />

          {/* ══ PROCESS ══ */}
          <section className="px-6 md:px-16 py-24">
            <div className="mb-14">
              <div className="eyebrow"><span className="eyebrow-line"/><span className="eyebrow-text">Our Methodology</span></div>
              <h2 className="text-4xl xl:text-[46px] font-extrabold tracking-tight text-white leading-[1.08]">
                From Discovery<br />to <span className="text-grad">Always-On</span>
              </h2>
              <p className="text-sm leading-relaxed font-light max-w-lg mt-3" style={{ color:'rgba(191,219,254,0.38)' }}>
                A proven four-phase onboarding and service delivery model refined across hundreds of enterprise deployments.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 rounded-2xl overflow-hidden"
              style={{ border:'1px solid rgba(59,130,246,0.12)' }}>
              {steps.map((s,i)=>(
                <div key={i} className="step-cell group flex flex-col p-10 border-b xl:border-b-0 xl:border-r last:border-r-0"
                  style={{ background:'rgba(5,10,28,0.90)', backdropFilter:'blur(20px)', borderColor:'rgba(59,130,246,0.09)' }}>
                  <div className="step-num mb-5">{s.n}</div>
                  <div className="icon-box w-11 h-11 rounded-full flex items-center justify-center mb-5 shrink-0">{ic[s.icon]}</div>
                  <h4 className="font-syne text-sm font-bold text-white mb-2.5">{s.title}</h4>
                  <p className="text-xs leading-relaxed font-light flex-1" style={{ color:'rgba(191,219,254,0.40)' }}>{s.desc}</p>
                  <span className="mt-5 w-fit px-2.5 py-1 rounded text-[10px] font-bold tracking-[0.18em] uppercase"
                    style={{ color:'rgba(147,197,253,0.50)', border:'1px solid rgba(59,130,246,0.20)', background:'rgba(29,78,216,0.10)' }}>
                    {s.tag}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="sep mx-6 md:mx-16" />

          {/* ══ WHY US ══ */}
          <section className="px-6 md:px-16 py-24">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-start">
              <div>
                <div className="eyebrow"><span className="eyebrow-line"/><span className="eyebrow-text">Why Partner With Us</span></div>
                <div className="flex flex-col gap-4">
                  {/* Big SLA stat */}
                    <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="pulse-green w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-blue-400/70">
                  Live Platform Status
                </span>
                <div className="flex-1 h-px" style={{ background:'linear-gradient(90deg,rgba(59,130,246,0.22),transparent)' }} />
              </div>
              {metrics.map((m,i)=>(
                <div key={i} className="metric-row flex items-center justify-between py-3.5 border-b last:border-0"
                  style={{ borderColor:'rgba(59,130,246,0.08)' }}>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-blue-500/50" />
                    <span className="text-xs" style={{ color:'rgba(191,219,254,0.45)' }}>{m.name}</span>
                  </div>
                  <span className="font-syne text-sm font-bold text-blue-300 tracking-tight">{m.val}</span>
                </div>
              ))}
            </div>
                  {/* <div className="glass-card flex gap-6 items-center p-7 cursor-default">
                    <div className="icon-box w-14 h-14 rounded-xl flex items-center justify-center shrink-0">{ic.clock}</div>
                    <div>
                      <div className="font-syne text-5xl font-extrabold tracking-tight leading-none mb-1.5 num-grad">99.9%</div>
                      <div className="text-xs font-light mb-3" style={{ color:'rgba(191,219,254,0.44)' }}>
                        Uptime SLA across all managed environments and service tiers
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase"
                        style={{ background:'rgba(29,78,216,0.20)', border:'1px solid rgba(59,130,246,0.30)', color:'#93c5fd' }}>
                        <span className="pulse-blue w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        SLA Guaranteed
                      </div>
                    </div>
                  </div> */}

                  {/* Mini stats */}
                  {/* <div className="grid grid-cols-2 gap-4">
                    {miniStats.map((m,i)=>(
                      <div key={i} className="glass-card p-6 cursor-default">
                        <div className="font-syne text-3xl font-extrabold tracking-tight mb-1.5 mini-grad">{m.num}</div>
                        <div className="text-xs font-light leading-snug" style={{ color:'rgba(191,219,254,0.40)' }}>{m.label}</div>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>

              <div>
                <h2 className=" text-4xl xl:text-[46px] font-extrabold tracking-tight text-white leading-[1.08] mb-5">
                  The Numbers<br /><span className="text-grad">Prove Everything</span>
                </h2>
                <p className="text-sm font-light leading-relaxed mb-9" style={{ color:'rgba(191,219,254,0.40)' }}>
                  We are not a break-fix vendor — we are a long-term technology partner. Our model is built on proactive prevention,
                  measurable outcomes, and radical transparency. Fixed monthly pricing means predictable IT spend with no hidden costs
                  and no surprises. Our clients trust us not because we promise results — but because our numbers consistently prove it,
                  month after month.
                </p>
                <div className="flex flex-col">
                  {feats.map((f,i)=>(
                    <div key={i} className="feat-row flex items-start gap-4 py-5 cursor-default border-b first:border-t"
                      style={{ borderColor:'rgba(59,130,246,0.09)' }}>
                      <div className="icon-box w-10 h-10 rounded-xl shrink-0 flex items-center justify-center mt-0.5">{ic[f.k]}</div>
                      <div>
                        <h5 className="font-syne text-sm font-bold text-white mb-1">{f.title}</h5>
                        <p className="text-xs font-light leading-relaxed" style={{ color:'rgba(191,219,254,0.40)' }}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══ CTA ══ */}
          <div className="px-6 md:px-16 py-16">
            <div className="cta-wrap glass-card p-10 md:p-14 flex items-center justify-between gap-9 flex-wrap">
              <div className="relative z-10">
                <h3 className="text-3xl xl:text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight">
                  Ready to Hand Off Your IT?
                </h3>
                <p className="text-sm font-light" style={{ color:'rgba(191,219,254,0.42)' }}>
                  Book a free infrastructure audit — no obligation, no sales pitch. Just total clarity.
                </p>
              </div>
              <div className="flex gap-3 shrink-0 flex-wrap relative z-10">
                <button className="btn-primary px-8 py-3.5 rounded-xl text-sm">Contact us</button>
                <button className="btn-ghost flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium">
                  Talk to an Engineer {ic.arrow}
                </button>
              </div>
            </div>
          </div>

          <div className="h-8" />
        </div>
      </div>
    </>
  )
}