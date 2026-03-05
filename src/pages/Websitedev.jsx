import { useState, useEffect } from "react";

const services = [
  {
    icon: "⬡",
    symbol: "01",
    title: "Custom Web Design",
    desc: "Bespoke digital experiences built from scratch — stunning, responsive, and perfectly on-brand.",
    tag: "Design",
  },
  {
    icon: "◈",
    symbol: "02",
    title: "Frontend Development",
    desc: "Blazing-fast React & Next.js builds with silky animations and pixel-perfect implementation.",
    tag: "Build",
  },
  {
    icon: "◎",
    symbol: "03",
    title: "E-Commerce Solutions",
    desc: "High-converting storefronts with seamless checkout flows and powerful backend integrations.",
    tag: "Sell",
  },
  {
    icon: "⟡",
    symbol: "04",
    title: "CMS Integration",
    desc: "Empower your team with intuitive content management — Sanity, Contentful, and more.",
    tag: "Manage",
  },
  {
    icon: "◇",
    symbol: "05",
    title: "Performance Optimisation",
    desc: "Sub-second load times, Core Web Vitals excellence, and SEO that drives real organic growth.",
    tag: "Optimise",
  },
  {
    icon: "✦",
    symbol: "06",
    title: "Maintenance & Support",
    desc: "Ongoing care packages to keep your site secure, updated, and evolving with your business.",
    tag: "Support",
  },
];

export default function Websitedev() {
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #010510 0%, #030c20 22%, #051228 48%, #071530 68%, #030c20 100%)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33%       { transform: translate(40px, -60px) scale(1.08) rotate(4deg); }
          66%       { transform: translate(-30px, 30px) scale(0.96) rotate(-3deg); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-50px, 40px) scale(1.12); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(30px, -30px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerBlue {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes tagPulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          40%       { transform: translateY(-6px) scale(1.2); }
          70%       { transform: translateY(-2px) scale(1.06); }
        }

        .card-glass {
          position: relative;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(59, 130, 246, 0.12);
          border-radius: 24px;
          padding: 36px 30px 30px;
          cursor: pointer;
          overflow: hidden;
          transition:
            transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.4s,
            background 0.4s;
          animation: fadeUp 0.7s ease both;
        }
        .card-glass:hover {
          transform: translateY(-10px) scale(1.025);
          background: rgba(30, 58, 138, 0.18);
          border-color: rgba(96, 165, 250, 0.5);
          box-shadow:
            0 0 0 1px rgba(96, 165, 250, 0.25),
            0 20px 50px rgba(29, 78, 216, 0.4),
            0 0 80px rgba(59, 130, 246, 0.18),
            inset 0 1px 0 rgba(147, 197, 253, 0.15);
        }
        .card-glass:hover .card-icon {
          animation: iconBounce 0.65s ease forwards;
          color: #60a5fa !important;
          text-shadow: 0 0 20px rgba(96,165,250,0.95), 0 0 50px rgba(59,130,246,0.55) !important;
        }
        .card-glass:hover .card-glow-spot { opacity: 1; }
        .card-glass:hover .card-symbol { color: rgba(96, 165, 250, 0.45); }
        .card-glass:hover .card-bar { transform: scaleX(1); }
        .card-glass:hover .card-tag {
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(96, 165, 250, 0.55);
          color: #bfdbfe;
        }
        .card-glass:hover .card-title {
          background: linear-gradient(135deg, #fff 0%, #bfdbfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-icon {
          font-size: 38px;
          line-height: 1;
          color: rgba(147, 197, 253, 0.75);
          text-shadow: 0 0 14px rgba(59,130,246,0.45);
          display: block;
          margin-bottom: 22px;
          transition: color 0.3s, text-shadow 0.3s;
        }
        .card-symbol {
          position: absolute;
          top: 28px;
          right: 28px;
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(96, 165, 250, 0.18);
          transition: color 0.35s;
        }
        .card-glow-spot {
          position: absolute;
          top: -70px;
          right: -70px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.45s;
          pointer-events: none;
        }
        .card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, #1d4ed8, #60a5fa, #818cf8, #1d4ed8);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 0 0 24px 24px;
        }
        .card-tag {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 2.5px;
          color: rgba(147, 197, 253, 0.7);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 100px;
          padding: 4px 12px;
          margin-bottom: 14px;
          background: rgba(37, 99, 235, 0.08);
          transition: all 0.3s;
          animation: tagPulse 3.5s ease-in-out infinite;
          text-transform: uppercase;
        }
        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.25;
          transition: all 0.3s;
        }

        .stat-num {
          font-family: '', serif;
          font-size: 40px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff 0%, #bfdbfe 55%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200%;
          animation: shimmerBlue 4s linear infinite;
          line-height: 1;
        }

        .cta-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #fff;
          background: linear-gradient(135deg, rgba(29,78,216,0.65), rgba(59,130,246,0.45));
          border: 1px solid rgba(96,165,250,0.4);
          border-radius: 100px;
          padding: 18px 56px;
          cursor: pointer;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 30px rgba(29,78,216,0.45), inset 0 1px 0 rgba(147,197,253,0.15);
          transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
          text-transform: uppercase;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.05);
          background: linear-gradient(135deg, rgba(29,78,216,0.9), rgba(59,130,246,0.75));
          box-shadow: 0 0 60px rgba(59,130,246,0.7), 0 0 120px rgba(29,78,216,0.3), inset 0 1px 0 rgba(147,197,253,0.25);
          border-color: rgba(147,197,253,0.65);
          letter-spacing: 4px;
        }

        .orb1 { animation: drift1 14s ease-in-out infinite; }
        .orb2 { animation: drift2 18s ease-in-out infinite; }
        .orb3 { animation: drift3 10s ease-in-out infinite; }
      `}</style>

      {/* Cursor spotlight */}
      <div
        className="fixed rounded-full pointer-events-none z-10"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(59,130,246,0.055) 0%, transparent 70%)",
          transition: "left 0.08s ease-out, top 0.08s ease-out",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="orb1 absolute rounded-full pointer-events-none"
        style={{
          top: "-15%", left: "-12%",
          width: "650px", height: "650px",
          background: "radial-gradient(circle, rgba(29,78,216,0.32) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      <div
        className="orb2 absolute rounded-full pointer-events-none"
        style={{
          bottom: "-20%", right: "-15%",
          width: "750px", height: "750px",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
      <div
        className="orb3 absolute rounded-full pointer-events-none"
        style={{
          top: "45%", left: "38%",
          width: "380px", height: "380px",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Decorative diagonal lines */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8%", right: "6%",
          width: "1px", height: "220px",
          background: "linear-gradient(to bottom, transparent, rgba(96,165,250,0.25), transparent)",
          transform: "rotate(18deg)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "18%", left: "4%",
          width: "1px", height: "160px",
          background: "linear-gradient(to bottom, transparent, rgba(96,165,250,0.18), transparent)",
          transform: "rotate(-14deg)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-18" style={{ marginBottom: "72px" }}>
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3.5 mb-7">
            <div
              className="w-10 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.55))" }}
            />
            <span
              className="text-blue-400/60 uppercase tracking-[4px] font-semibold"
              style={{ fontSize: "10px" }}
            >
              WEB DEVELOPMENT
            </span>
            <div
              className="w-10 h-px"
              style={{ background: "linear-gradient(90deg, rgba(96,165,250,0.55), transparent)" }}
            />
          </div>

          {/* H1 */}
          <h1
            className="font-black text-white leading-tight mb-6"
            style={{
              fontFamily: "'', serif",
              fontSize: "clamp(42px, 6vw, 82px)",
              lineHeight: 1.07,
              textShadow: "0 0 80px rgba(59,130,246,0.22)",
            }}
          >
            We Build Websites
            <br />
            <em
              style={{
                fontStyle: "serif",
                background: "linear-gradient(135deg, #bfdbfe 0%, #60a5fa 45%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              That Convert.
            </em>
          </h1>

          <p
            className="text-slate-400 max-w-lg mx-auto font-light leading-relaxed mb-12"
            style={{ fontSize: "16.5px", lineHeight: "1.78" }}
          >
            From concept to launch — crafting digital experiences that captivate audiences,
            elevate brands, and drive measurable results for ambitious businesses.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-16 flex-wrap">
            {[
              // { num: "150+", label: "Projects Delivered" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "15s", label: "Avg Load Time" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="stat-num">{s.num}</div>
                <div
                  className="text-blue-400/50 uppercase tracking-widest mt-1.5 font-medium"
                  style={{ fontSize: "10.5px", letterSpacing: "1.5px" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div
          className="grid gap-5 mb-18"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            marginBottom: "72px",
          }}
        >
          {services.map((svc, i) => (
            <div
              key={i}
              className="card-glass"
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-glow-spot" />
              <span className="card-symbol">{svc.symbol}</span>
              <span className="card-icon">{svc.icon}</span>
              <span className="card-tag">{svc.tag}</span>
              <h3 className="card-title">{svc.title}</h3>
              <p
                className="font-light leading-relaxed"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "13.5px",
                  color: "rgba(148,163,184,0.75)",
                  lineHeight: "1.72",
                }}
              >
                {svc.desc}
              </p>
              <div className="card-bar" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <div
            className="relative text-center rounded-3xl overflow-hidden w-full max-w-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(59,130,246,0.15)",
              padding: "64px 72px",
              boxShadow: "0 40px 100px rgba(15,40,120,0.4), inset 0 1px 0 rgba(147,197,253,0.08)",
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: "420px", height: "420px",
                background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)",
              }}
            />

            <p
              className="text-blue-400/55 font-semibold uppercase tracking-[4px] mb-5"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "10px" }}
            >
              READY TO LAUNCH?
            </p>

            <h2
              className="text-white font-black leading-tight mb-4 relative z-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 46px)",
                lineHeight: "1.18",
              }}
            >
              Let's build something
              <br />
              < span
                style={{


                  background: "linear-gradient(135deg, #bfdbfe 0%, #60a5fa 45%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Extraordinary.
              </span>
            </h2>

            <p
              className="font-light leading-relaxed mb-9 relative z-10"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "15px",
                color: "rgba(148,163,184,0.65)",
                lineHeight: "1.72",
              }}
            >
              Book a free discovery call and let's map out your vision together.
            </p>

            <button className="cta-btn relative z-10">Start Your Project</button>

            <p
              className="mt-4 relative z-10"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "11px",
                color: "rgba(96,165,250,0.35)",
                letterSpacing: "0.5px",
              }}
            >
              No commitment required · Response within 48 hrs
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}