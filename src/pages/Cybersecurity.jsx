import { useState } from "react";

const services = [
  {
    id: 1,
    icon: "🛡️",
    title: "Threat Detection & Response",
    desc: "Real-time monitoring with AI-powered threat intelligence to detect, analyze, and neutralize cyber threats before they cause damage.",
    stat: "99.8% Detection Rate",
  },
  {
    id: 2,
    icon: "🔍",
    title: "Security Audits & Assessments",
    desc: "Comprehensive evaluation of your security posture — identifying vulnerabilities, gaps, and compliance failures across your entire infrastructure.",
    stat: "360° Coverage",
  },
  {
    id: 3,
    icon: "⚔️",
    title: "Penetration Testing",
    desc: "Ethical hackers simulate real-world attacks to expose weaknesses in your systems, applications, and networks before adversaries do.",
    stat: "500+ CVEs Found",
  },
  {
    id: 4,
    icon: "💻",
    title: "Endpoint Protection",
    desc: "Advanced protection for every device on your network — from workstations to mobile endpoints — with behavioral analysis and zero-day defense.",
    stat: "10M+ Endpoints Secured",
  },
  {
    id: 5,
    icon: "📧",
    title: "Email Security & Anti-Phishing",
    desc: "Block phishing, BEC attacks, malware, and social engineering before they reach your inbox with intelligent email filtering and user training.",
    stat: "98.5% Phish Blocked",
  },
  {
    id: 6,
    icon: "📋",
    title: "Compliance Management",
    desc: "Stay audit-ready with automated compliance workflows for GDPR, HIPAA, ISO 27001, SOC 2, and PCI-DSS regulations.",
    stat: "40+ Frameworks",
  },
];

const tickerItems = [
  "THREAT LEVEL: ELEVATED",
  "SYSTEMS SECURED: 10M+",
  "ACTIVE MONITORING: 24/7",
  "ZERO-DAY PROTECTION: ACTIVE",
  "ENCRYPTION: AES-256",
  "SOC OPERATIONS: LIVE",
  "INTRUSION PREVENTION: ON",
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: "fadeInUp 0.6s ease forwards",
        opacity: 0,
      }}
      className={`
        relative rounded-2xl p-8 cursor-default overflow-hidden
        border transition-all duration-500
        backdrop-blur-xl
        ${hovered
          ? "border-blue-400/60 bg-blue-950/40 shadow-[0_0_40px_rgba(59,130,246,0.25),0_20px_60px_rgba(0,0,0,0.6)] -translate-y-2 scale-[1.02]"
          : "border-blue-800/30 bg-slate-900/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        }
      `}
    >
      {/* Corner accents */}
      {[
        "top-2 left-2 border-t-2 border-l-2",
        "top-2 right-2 border-t-2 border-r-2",
        "bottom-2 left-2 border-b-2 border-l-2",
        "bottom-2 right-2 border-b-2 border-r-2",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 transition-colors duration-300 ${cls} ${
            hovered ? "border-blue-400/80" : "border-blue-700/40"
          }`}
        />
      ))}

      {/* Top glow line */}
      <div
        className={`absolute top-0 left-1/4 right-1/4 h-px transition-all duration-400 ${
          hovered
            ? "bg-gradient-to-r from-transparent via-blue-400/90 to-transparent"
            : "bg-gradient-to-r from-transparent via-blue-700/30 to-transparent"
        }`}
      />

      {/* Icon */}
      <div
        className="text-4xl mb-4 inline-block transition-all duration-300"
        style={{
          filter: hovered
            ? "drop-shadow(0 0 12px rgba(96,165,250,0.9))"
            : "drop-shadow(0 0 4px rgba(59,130,246,0.4))",
          animation: hovered ? "floatUp 2s ease-in-out infinite" : "none",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className={`font-mono text-sm font-bold uppercase tracking-wider mb-3 transition-colors duration-300 ${
          hovered ? "text-white" : "text-blue-100/80"
        }`}
        style={{ fontFamily: "'Orbitron', 'Courier New', monospace" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`font-mono text-xs leading-relaxed mb-5 transition-colors duration-300 ${
          hovered ? "text-blue-100/90" : "text-slate-400/80"
        }`}
      >
        {service.desc}
      </p>

      {/* Stat badge */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
          hovered
            ? "border-blue-400/60 bg-blue-900/50 text-blue-300"
            : "border-blue-800/30 bg-blue-950/20 text-blue-500/70"
        }`}
        style={{ fontFamily: "'Orbitron', monospace" }}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            hovered ? "bg-blue-400 shadow-[0_0_8px_#60a5fa]" : "bg-blue-700"
          }`}
        />
        {service.stat}
      </div>
    </div>
  );
}

export default function Cybersecurity() {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020818 0%, #050d24 40%, #030a1a 70%, #020510 100%)",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        @keyframes glitch1 {
          0%, 90%, 100% { clip-path: none; transform: none; }
          92% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translateX(-4px); }
          94% { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); transform: translateX(4px); }
          96% { clip-path: none; transform: none; }
        }
        @keyframes pulseGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(96,165,250,0.8), 0 0 40px rgba(59,130,246,0.4); }
          50% { text-shadow: 0 0 40px rgba(96,165,250,1), 0 0 80px rgba(59,130,246,0.6), 0 0 120px rgba(59,130,246,0.3); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 6px #3b82f6; }
          50% { box-shadow: 0 0 16px #60a5fa, 0 0 30px rgba(96,165,250,0.4); }
        }
        .glitch-text {
          animation: glitch1 8s infinite, pulseGlow 3s ease-in-out infinite;
        }
        .fade-in-1 { animation: fadeInUp 0.6s ease 0.1s forwards; opacity: 0; }
        .fade-in-2 { animation: fadeInUp 0.6s ease 0.3s forwards; opacity: 0; }
        .fade-in-3 { animation: fadeInUp 0.6s ease 0.5s forwards; opacity: 0; }
        .fade-in-4 { animation: fadeInUp 0.6s ease 0.7s forwards; opacity: 0; }
        .fade-in-5 { animation: fadeInUp 0.6s ease 0.9s forwards; opacity: 0; }
      `}</style>

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial glow */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle, rgba(30,64,175,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Top corner glow accents */}
      <div
        className="fixed top-0 right-0 pointer-events-none z-0"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle at top right, rgba(59,130,246,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="fixed bottom-0 left-0 pointer-events-none z-0"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle at bottom left, rgba(99,102,241,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Ticker bar */}
      <div
        className="relative z-10 overflow-hidden py-2 border-b"
        style={{
          background: "rgba(15,30,80,0.7)",
          backdropFilter: "blur(10px)",
          borderColor: "rgba(59,130,246,0.25)",
        }}
      >
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{ animation: "ticker 25s linear infinite" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="text-blue-300/80 tracking-widest"
              style={{ fontFamily: "'Orbitron', monospace", fontSize: "10px", letterSpacing: "2px" }}
            >
              ⚡ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-20">

          {/* Badge */}
          <div
            className="fade-in-1 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border mb-7"
            style={{
              border: "1px solid rgba(59,130,246,0.4)",
              background: "rgba(15,30,80,0.35)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full bg-blue-400"
              style={{ animation: "dotPulse 1.5s ease infinite" }}
            />
            <span
              className="text-blue-300 uppercase tracking-[3px]"
              style={{ fontFamily: "'Orbitron', monospace", fontSize: "11px" }}
            >
              Bitnextro PVT.LTD Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            className="fade-in-2 font-black uppercase leading-tight mb-6 text-white"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "clamp(36px, 6vw, 72px)",
              letterSpacing: "2px",
            }}
          >
            <span className="glitch-text">CYBER</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa, #3b82f6, #818cf8, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SECURITY
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="fade-in-3 text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontSize: "clamp(13px, 2vw, 16px)", lineHeight: 1.9 }}
          >
            Advanced threat protection for the modern enterprise. Defend your digital
            perimeter with military-grade security infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-4 flex gap-4 justify-center flex-wrap">
            <button
              className="font-bold uppercase tracking-widest px-8 py-3.5 rounded-lg text-white text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                fontFamily: "'', monospace",
                background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                boxShadow: "0 0 30px rgba(59,130,246,0.45), 0 4px 20px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={e => e.target.style.boxShadow = "0 0 50px rgba(96,165,250,0.75), 0 4px 20px rgba(0,0,0,0.4)"}
              onMouseLeave={e => e.target.style.boxShadow = "0 0 30px rgba(59,130,246,0.45), 0 4px 20px rgba(0,0,0,0.4)"}
            >
              Get Protected Now
            </button>
            <button
              className="font-bold uppercase tracking-widest px-8 py-3.5 rounded-lg text-blue-300 text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
               
                fontFamily: "'',monospace ",
                border: "1px solid rgba(59,130,246,0.4)",
                background: "rgba(15,30,80,0.3)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = "rgba(96,165,250,0.8)";
                e.target.style.background = "rgba(30,58,138,0.35)";
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = "rgba(59,130,246,0.4)";
                e.target.style.background = "rgba(15,30,80,0.3)";
              }}
            >
              View Threat Report
            </button>
          </div>
        </div>

        {/* Stats bar */}
        {/* <div
          className="fade-in-5 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden mb-20 border"
          style={{
            borderColor: "rgba(59,130,246,0.2)",
            background: "rgba(10,20,50,0.5)",
            backdropFilter: "blur(20px)",
            gap: "1px",
            backgroundColor: "rgba(59,130,246,0.1)",
          }}
        >
          {[
            { val: "99%", label: "Uptime SLA" },
            { val: "<30s", label: "Response Time" },
            { val: "500+", label: "Enterprise Clients" },
            { val: "24/7", label: "SOC Monitoring" },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-7 px-5 text-center transition-colors duration-300 cursor-default group"
              style={{ background: "rgba(8,16,40,0.7)" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(20,40,90,0.6)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(8,16,40,0.7)"}
            >
              <div
                className="text-blue-400 font-black mb-1.5"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "28px",
                  textShadow: "0 0 20px rgba(96,165,250,0.6)",
                }}
              >
                {stat.val}
              </div>
              <div
                className="text-slate-500 uppercase tracking-widest"
                style={{ fontSize: "10px", letterSpacing: "2px" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-700/40" />
          <span
            className="text-blue-500/80 uppercase tracking-[4px] text-xs"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Our Services
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-700/40" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 text-center py-16 px-10 rounded-2xl border relative overflow-hidden"
          style={{
            borderColor: "rgba(59,130,246,0.25)",
            background: "rgba(10,20,60,0.45)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            className="absolute top-0 left-1/4 right-1/4 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.7), transparent)" }}
          />
          {/* Glow orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "400px",
              height: "200px",
              background: "radial-gradient(ellipse, rgba(30,64,175,0.15) 0%, transparent 70%)",
            }}
          />
          <h2
            className="font-black uppercase tracking-widest text-white mb-4 relative z-10"
            style={{
              fontFamily: "'', monospace",
              fontSize: "clamp(20px, 4vw, 36px)",
            }}
          >
           Secure your data from attacks?
          </h2>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed max-w-md mx-auto relative z-10">
            Get a free security assessment and discover your vulnerabilities before attackers do.
          </p>
          <button
            className="relative z-10 font-bold uppercase tracking-widest px-12 py-4 rounded-lg text-white text-sm transition-all duration-300"
            style={{
              fontFamily: "'', monospace",
              background: "linear-gradient(135deg, #1e3a8a, #2563eb, #1e3a8a)",
              boxShadow: "0 0 40px rgba(37,99,235,0.55)",
            }}
            onMouseEnter={e => {
              e.target.style.boxShadow = "0 0 70px rgba(96,165,250,0.85)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.target.style.boxShadow = "0 0 40px rgba(37,99,235,0.55)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Schedule Free Assessment →
          </button>
        </div>
      </div>
    </div>
  );
}