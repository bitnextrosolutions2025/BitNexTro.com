import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Search Engine Optimization",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
        <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.6" />
        <line x1="29" y1="29" x2="42" y2="42" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="20" x2="26" y2="20" stroke="white" strokeWidth="1.3" opacity="0.7" />
        <line x1="14" y1="16" x2="22" y2="16" stroke="white" strokeWidth="1.3" opacity="0.5" />
        <line x1="14" y1="24" x2="24" y2="24" stroke="white" strokeWidth="1.3" opacity="0.4" />
        <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Pay-Per-Click Advertising",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
        <rect x="4" y="10" width="40" height="28" rx="4" stroke="white" strokeWidth="1.6" />
        <line x1="4" y1="18" x2="44" y2="18" stroke="white" strokeWidth="1" opacity="0.4" />
        <circle cx="10" cy="14" r="2" fill="white" opacity="0.8" />
        <circle cx="16" cy="14" r="2" fill="white" opacity="0.5" />
        <path d="M12 28l6-6 5 4 6-8 5 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="30" r="3" stroke="white" strokeWidth="1.4" />
        <line x1="36.1" y1="32.1" x2="39" y2="35" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
        <circle cx="36" cy="10" r="5" stroke="white" strokeWidth="1.6" />
        <circle cx="10" cy="24" r="5" stroke="white" strokeWidth="1.6" />
        <circle cx="36" cy="38" r="5" stroke="white" strokeWidth="1.6" />
        <line x1="15" y1="21.5" x2="31" y2="12.5" stroke="white" strokeWidth="1.4" />
        <line x1="15" y1="26.5" x2="31" y2="35.5" stroke="white" strokeWidth="1.4" />
        <circle cx="36" cy="10" r="2" fill="white" opacity="0.5" />
        <circle cx="10" cy="24" r="2" fill="white" opacity="0.5" />
        <circle cx="36" cy="38" r="2" fill="white" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="white" strokeWidth="1.6" />
        <line x1="14" y1="16" x2="34" y2="16" stroke="white" strokeWidth="1.3" opacity="0.8" />
        <line x1="14" y1="22" x2="34" y2="22" stroke="white" strokeWidth="1.3" opacity="0.6" />
        <line x1="14" y1="28" x2="26" y2="28" stroke="white" strokeWidth="1.3" opacity="0.4" />
        <circle cx="32" cy="32" r="7" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.4" />
        <line x1="30" y1="32" x2="34" y2="32" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="32" y1="30" x2="32" y2="34" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
        <rect x="4" y="12" width="40" height="28" rx="4" stroke="white" strokeWidth="1.6" />
        <polyline points="4,14 24,28 44,14" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
        <line x1="4" y1="40" x2="16" y2="28" stroke="white" strokeWidth="1" opacity="0.35" />
        <line x1="44" y1="40" x2="32" y2="28" stroke="white" strokeWidth="1" opacity="0.35" />
        <circle cx="38" cy="10" r="5" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="1.2" />
        <line x1="36" y1="10" x2="40" y2="10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="38" y1="8" x2="38" y2="12" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Analytics & Reporting",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
        <rect x="6" y="28" width="8" height="14" rx="2" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="1.4" />
        <rect x="18" y="20" width="8" height="22" rx="2" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.4" />
        <rect x="30" y="12" width="8" height="30" rx="2" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.4" />
        <polyline points="10,26 22,18 34,10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="10" r="2.5" fill="white" />
        <line x1="6" y1="44" x2="44" y2="44" stroke="white" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
];

function AnimatedBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.35 + 0.08,
      color: Math.random() > 0.5 ? "255,255,255" : "96,165,250",
    }));

    const shapes = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: 30 + Math.random() * 60,
      dx: (Math.random() - 0.5) * 0.12,
      dy: (Math.random() - 0.5) * 0.12,
      rot: Math.random() * Math.PI * 2,
      drot: (Math.random() - 0.5) * 0.005,
      type: i % 3,
    }));

    function drawWave(y, amp, freq, phase, alpha) {
      ctx.beginPath();
      for (let x = 0; x <= W; x += 4) {
        const wy = y + Math.sin((x / W) * freq * Math.PI * 2 + phase) * amp;
        x === 0 ? ctx.moveTo(x, wy) : ctx.lineTo(x, wy);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      ctx.fillStyle = `rgba(59,130,246,${alpha})`;
      ctx.fill();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      drawWave(H * 0.7, 28, 1.5, t, 0.04);
      drawWave(H * 0.75, 22, 2, t * 1.3 + 1, 0.03);
      drawWave(H * 0.82, 18, 2.5, t * 0.8 + 2, 0.02);

      shapes.forEach((s) => {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.strokeStyle = "rgba(96,165,250,0.1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (s.type === 0) ctx.rect(-s.size / 2, -s.size / 2, s.size, s.size);
        else if (s.type === 1) ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
        else { ctx.moveTo(0, -s.size / 2); ctx.lineTo(s.size / 2, s.size / 2); ctx.lineTo(-s.size / 2, s.size / 2); ctx.closePath(); }
        ctx.stroke();
        ctx.restore();
        s.x += s.dx; s.y += s.dy; s.rot += s.drot;
        if (s.x < -100) s.x = W + 100;
        if (s.x > W + 100) s.x = -100;
        if (s.y < -100) s.y = H + 100;
        if (s.y > H + 100) s.y = -100;
      });

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });

      animFrame = requestAnimationFrame(draw);
    }
    draw();

    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-start gap-5 rounded-2xl overflow-hidden cursor-default"
      style={{
        padding: "38px 28px 34px",
        background: hovered ? "rgba(30,58,138,0.28)" : "rgba(255,255,255,0.06)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        border: hovered ? "1px solid rgba(96,165,250,0.5)" : "1px solid rgba(255,255,255,0.1)",
        boxShadow: hovered
          ? "0 20px 60px rgba(29,78,216,0.35), 0 6px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(147,197,253,0.3)"
          : "0 6px 28px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
        transform: hovered ? "translateY(-10px) scale(1.05)" : "translateY(0) scale(1)",
        transition: "all 0.42s cubic-bezier(0.23,1,0.32,1)",
        animation: "cardIn 0.7s ease both",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Blue glow corner */}
      <div
        className="absolute bottom-[-20px] right-[-20px] w-28 h-28 rounded-full pointer-events-none transition-opacity duration-400"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 65%)",
          opacity: hovered ? 1 : 0,
        }}
      />
      {/* Top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-400"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent)",
          opacity: hovered ? 1 : 0.2,
        }}
      />

      {/* Icon */}
      <div
        style={{
          transform: hovered ? "scale(1.18) rotate(-5deg)" : "scale(1) rotate(0deg)",
          transition: "transform 0.42s cubic-bezier(0.23,1,0.32,1)",
          filter: hovered
            ? "drop-shadow(0 0 14px rgba(96,165,250,0.9))"
            : "drop-shadow(0 0 4px rgba(96,165,250,0.4))",
        }}
      >
        {service.icon}
      </div>

      {/* Title + bar */}
      <div>
        <div
          className="text-white font-bold"
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "1.08rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            textShadow: hovered ? "0 0 20px rgba(96,165,250,0.5)" : "0 1px 4px rgba(0,0,0,0.2)",
            transition: "text-shadow 0.35s",
          }}
        >
          {service.title}
        </div>
        <div
          className="mt-2 h-0.5 rounded-full transition-all duration-400"
          style={{
            width: hovered ? 46 : 24,
            background: hovered
              ? "linear-gradient(90deg, #fff, rgba(96,165,250,0.8))"
              : "rgba(255,255,255,0.4)",
            boxShadow: hovered ? "0 0 8px rgba(96,165,250,0.6)" : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Digital() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Outfit:wght@400;600;700;800;900&display=swap');

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(32px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes navyShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes logoPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(96,165,250,0.45); }
          50%      { box-shadow: 0 0 0 7px rgba(96,165,250,0); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <section
        className="relative min-h-screen w-full overflow-hidden flex flex-col items-center px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #010a1f 0%, #020d26 25%, #051535 50%, #071a42 75%, #020d26 100%)",
          backgroundSize: "300% 300%",
          animation: "navyShift 12s ease infinite",
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        {/* Grid overlay */}
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

        {/* Ambient blobs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "-12%", right: "-5%",
            width: 520, height: 520,
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: "-8%", left: "-6%",
            width: 480, height: 480,
            background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "40%", left: "50%",
            width: 300, height: 300,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)",
          }}
        />

        <AnimatedBackground />

        {/* Spinning ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 60, left: "8%",
            width: 80, height: 80,
            border: "1px solid rgba(96,165,250,0.2)",
            borderRadius: "50%",
            animation: "spinSlow 18s linear infinite",
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              top: -4, left: "50%", marginLeft: -4,
              width: 8, height: 8,
              background: "rgba(96,165,250,0.7)",
            }}
          />
        </div>

        {/* Logo */}
        <div className="absolute top-7 right-9 flex items-center gap-2.5 z-10">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-xl"
            style={{
              background: "rgba(37,99,235,0.2)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(96,165,250,0.35)",
              animation: "logoPulse 2.5s ease infinite",
            }}
          >
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M3 14l4-5 4 3 3-5 3 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="5" r="2.5" stroke="white" strokeWidth="1.4" />
            </svg>
          </div>
          <span
            className="text-white/90 font-bold tracking-widest text-sm"
            style={{ fontFamily: '"Outfit", sans-serif' }}
          >
            GROWTHLAB
          </span>
        </div>

        {/* Badge */}
        <div
          className="relative z-10 mb-7 px-5 py-1.5 rounded-full border"
          style={{
            border: "1px solid rgba(96,165,250,0.4)",
            background: "rgba(37,99,235,0.15)",
            backdropFilter: "blur(10px)",
            animation: "heroIn 0.55s ease 0.1s both",
          }}
        >
          <span
            className="text-white font-semibold uppercase tracking-[0.2em]"
            style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.7rem" }}
          >
            Full-Funnel Marketing Agency
          </span>
        </div>

        {/* Title */}
        <h1
          className="relative z-10 text-white text-center font-black leading-tight"
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            maxWidth: 740,
            textShadow: "0 4px 30px rgba(59,130,246,0.2)",
            animation: "heroIn 0.65s ease 0.2s both",
          }}
        >
          Digital{" "}
          <span
            className="relative inline-block"
            style={{ animation: "floatY 4.5s ease-in-out infinite" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #fff 0%, #bfdbfe 50%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Marketing
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="relative z-10 text-center font-light mt-4"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "clamp(0.98rem, 2vw, 1.18rem)",
            color: "rgba(148,163,184,0.8)",
            maxWidth: 480,
            lineHeight: 1.65,
            letterSpacing: "0.01em",
            animation: "heroIn 0.65s ease 0.35s both",
          }}
        >
          Driving Growth Through Data &amp; Creativity
        </p>

        {/* Metric pills */}
        <div
          className="relative z-10 flex gap-3.5 flex-wrap justify-center mt-8"
          style={{ animation: "heroIn 0.65s ease 0.45s both" }}
        >
          {[
            ["340%", "Avg. ROAS"],
            ["1M+", "Leads Generated"],
            ["70%", "Client Retention"],
          ].map(([val, label]) => (
            <div
              key={label}
              className="flex flex-col items-center gap-0.5 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(96,165,250,0.2)",
              }}
            >
              <span
                className="text-white font-extrabold text-2xl"
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  letterSpacing: "-0.02em",
                  textShadow: "0 0 20px rgba(96,165,250,0.4)",
                }}
              >
                {val}
              </span>
              <span
                className="text-blue-400/60 uppercase tracking-widest"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.7rem" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Wavy divider dots */}
        <div
          className="relative z-10 flex items-center gap-2.5 mt-11"
          style={{ animation: "heroIn 0.65s ease 0.5s both" }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <div
              key={i}
              className="h-0.5 rounded-full"
              style={{
                width: i === 3 ? 28 : 8,
                background:
                  i === 3
                    ? "linear-gradient(90deg, #fff, rgba(96,165,250,0.8))"
                    : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        {/* Cards grid */}
        <div
          className="relative z-10 mt-14 w-full grid gap-5"
          style={{
            maxWidth: 1080,
            gridTemplateColumns: "repeat(auto-fit, minmax(295px, 1fr))",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTAs */}
        <div
          className="relative z-10 mt-16 flex gap-4 flex-wrap justify-center"
          style={{ animation: "heroIn 0.7s ease 0.95s both" }}
        >
          <button
            className="px-10 py-4 rounded-xl text-white font-bold text-base border-none transition-all duration-200"
            style={{
              fontFamily: '"Outfit", sans-serif',
              letterSpacing: "0.01em",
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
              boxShadow: "0 8px 32px rgba(29,78,216,0.45)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 16px 44px rgba(59,130,246,0.55)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 32px rgba(29,78,216,0.45)";
            }}
          >
            Contact us →
          </button>
          <button
            className="px-10 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200"
            style={{
              fontFamily: '"Outfit", sans-serif',
              border: "1px solid rgba(96,165,250,0.35)",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(96,165,250,0.7)";
              e.target.style.background = "rgba(30,58,138,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(96,165,250,0.35)";
              e.target.style.background = "rgba(255,255,255,0.06)";
            }}
          >
            View Case Studies
          </button>
        </div>
      </section>
    </>
  );
}