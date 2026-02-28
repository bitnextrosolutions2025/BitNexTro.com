import { useState } from "react";

const items = [
  { label: "24/7 Helpdesk", icon: "🛟", desc: "Round-the-clock assistance whenever you need it" },
  { label: "Remote Desktop Support", icon: "🖥️", desc: "Instant screen access to resolve issues fast" },
  { label: "Critical Incident Response", icon: "⚡", desc: "Rapid escalation for high-severity events" },
  { label: "Proactive System Monitoring", icon: "📡", desc: "We catch issues before they affect you" },
  { label: "Software Troubleshooting", icon: "🔧", desc: "Expert diagnosis across all platforms" },
  { label: "Dedicated Account Manager", icon: "👤", desc: "Your personal point of contact, always" },
];

export default function Remote() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 py-16"
      style={{
        background: "linear-gradient(135deg, #020818 0%, #050d24 35%, #071030 65%, #020818 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-40px) scale(1.1); }
        }
        @keyframes float2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-40px,30px) scale(0.9); }
        }
        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(20px,20px); }
        }
        @keyframes pulse {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes badgePulse {
          0%,100% { box-shadow: 0 0 8px rgba(59,130,246,0.4); }
          50% { box-shadow: 0 0 22px rgba(96,165,250,0.85); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .badge-anim { animation: badgePulse 3s ease-in-out infinite; }
        .header-anim { animation: fadeSlideUp 0.8s ease both; }
        .orb1 { animation: float1 10s ease-in-out infinite; }
        .orb2 { animation: float2 13s ease-in-out infinite; }
        .orb3 { animation: float3 8s ease-in-out infinite; }
        .icon-ring { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="orb1 absolute pointer-events-none rounded-full"
        style={{
          top: "-10%", left: "-10%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(29,78,216,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb2 absolute pointer-events-none rounded-full"
        style={{
          bottom: "-15%", right: "-10%",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb3 absolute pointer-events-none rounded-full"
        style={{
          top: "40%", left: "50%",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">

        {/* Header */}
        <div className="header-anim text-center mb-14">
          {/* <span
            className="badge-anim inline-block text-blue-300 border border-blue-500/40 rounded-full px-5 py-1.5 mb-6 text-xs font-semibold tracking-[3px] uppercase"
            style={{ background: "rgba(37,99,235,0.1)" }}
          >
            ALWAYS ON
          </span> */}

          <h1
            className="text-white font-extrabold leading-[1.05] mb-5 tracking-tight"
            style={{
              fontFamily: ", sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
            }}
          >
            24/7 Remote
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa, #3b82f6, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Support
            </span>
          </h1>

          <p
            className="text-slate-400 max-w-lg mx-auto leading-relaxed font-light"
            style={{ fontSize: "17px", lineHeight: "1.75" }}
          >
            Enterprise-grade remote assistance, engineered for zero downtime and maximum peace of mind.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative flex items-start gap-5 rounded-2xl p-8 overflow-hidden cursor-pointer border transition-all duration-300"
              style={{
                background: hovered === i ? "rgba(30,58,138,0.25)" : "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderColor: hovered === i ? "rgba(96,165,250,0.45)" : "rgba(255,255,255,0.08)",
                transform: hovered === i ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: hovered === i
                  ? "0 20px 60px rgba(29,78,216,0.3), 0 0 0 1px rgba(96,165,250,0.25)"
                  : "none",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card inner glow */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background: "radial-gradient(ellipse at top left, rgba(59,130,246,0.12) 0%, transparent 60%)",
                  opacity: hovered === i ? 1 : 0,
                }}
              />

              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div
                  className="flex items-center justify-center w-13 h-13 rounded-xl border text-2xl transition-all duration-300"
                  style={{
                    width: "52px", height: "52px",
                    background: "rgba(37,99,235,0.15)",
                    borderColor: "rgba(59,130,246,0.25)",
                    filter: hovered === i
                      ? "drop-shadow(0 0 16px rgba(96,165,250,0.75))"
                      : "drop-shadow(0 0 6px rgba(59,130,246,0.3))",
                    transform: hovered === i ? "scale(1.12)" : "scale(1)",
                  }}
                >
                  {item.icon}
                </div>
                {/* Ring */}
                <div
                  className="icon-ring absolute rounded-[18px] border border-blue-400/40 transition-opacity duration-300"
                  style={{
                    inset: "-4px",
                    opacity: hovered === i ? 1 : 0,
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex-1 pt-1 relative z-10">
                <h3
                  className="font-bold mb-2 transition-colors duration-300"
                  style={{
                    fontFamily: "'', sans-serif",
                    fontSize: "16px",
                    letterSpacing: "0.2px",
                    color: hovered === i ? "#bfdbfe" : "#fff",
                  }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-slate-400 leading-relaxed font-light transition-all duration-300"
                  style={{
                    fontSize: "13.5px",
                    lineHeight: "1.6",
                    opacity: hovered === i ? 1 : 0.6,
                    transform: hovered === i ? "translateY(0)" : "translateY(4px)",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left transition-transform duration-400"
                style={{
                  background: "linear-gradient(90deg, #1d4ed8, #60a5fa, #6366f1)",
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                  transitionDuration: "0.4s",
                  transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="font-bold tracking-widest uppercase text-white rounded-full px-14 py-5 border transition-all duration-300 text-sm"
            style={{
              fontFamily: "'', sans-serif",
              letterSpacing: "2px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(59,130,246,0.3)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(37,99,235,0.2)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(96,165,250,0.6), 0 0 80px rgba(59,130,246,0.3)";
              e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)";
              e.currentTarget.style.letterSpacing = "3px";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.3)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.letterSpacing = "2px";
            }}
          >
            GET STARTED NOW
          </button>
          <p className="mt-4 text-xs text-slate-600 tracking-wide">
            No setup fees · Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}