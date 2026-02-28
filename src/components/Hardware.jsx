import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    title: "On-Site Hardware Repair",
    description: "Swift diagnosis and expert repair at your location",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    accent: "#38bdf8",
  },
  {
    id: 2,
    title: "Server & Workstation Setup",
    description: "End-to-end configuration for peak performance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    accent: "#818cf8",
  },
  {
    id: 3,
    title: "Network Device Management",
    description: "Seamless connectivity and infrastructure oversight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <line x1="12" y1="12" x2="12" y2="8" />
      </svg>
    ),
    accent: "#34d399",
  },
  {
    id: 4,
    title: "Hardware Procurement",
    description: "Sourcing premium hardware at competitive pricing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    accent: "#fb923c",
  },
  {
    id: 5,
    title: "Preventive Maintenance",
    description: "Proactive care to maximize hardware lifespan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    accent: "#f472b6",
  },
  {
    id: 6,
    title: "Peripheral Support",
    description: "Complete support for all connected devices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    accent: "#a78bfa",
  },
];

const ParticleField = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.dx;
        d.y += d.dy;
        if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.dy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,200,255,${d.opacity})`;
        ctx.fill();
      });
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(100,200,255,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "rgba(255,255,255,0.09)"
          : "rgba(255,255,255,0.045)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: hovered
          ? `1px solid ${service.accent}55`
          : "1px solid rgba(255,255,255,0.10)",
        borderRadius: "18px",
        padding: "32px 28px",
        cursor: "default",
        transition: "all 0.38s cubic-bezier(0.23,1,0.32,1)",
        transform: visible
          ? hovered
            ? "translateY(-8px) scale(1.025)"
            : "translateY(0) scale(1)"
          : "translateY(30px) scale(0.97)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 80}ms` : "0ms",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.45), 0 0 0 1px ${service.accent}33, inset 0 1px 0 rgba(255,255,255,0.12)`
          : "0 8px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${service.accent}22 0%, transparent 70%)`,
          transition: "opacity 0.38s",
          opacity: hovered ? 1 : 0,
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: hovered
            ? `linear-gradient(135deg, ${service.accent}33, ${service.accent}18)`
            : "rgba(255,255,255,0.07)",
          border: `1px solid ${hovered ? service.accent + "55" : "rgba(255,255,255,0.10)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.38s cubic-bezier(0.23,1,0.32,1)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            color: hovered ? service.accent : "rgba(180,210,240,0.75)",
            transition: "color 0.38s",
          }}
        >
          {service.icon}
        </div>
      </div>

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.05rem",
            fontWeight: 600,
            color: hovered ? "#e8f4ff" : "#c8dff0",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.01em",
            transition: "color 0.3s",
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "0.82rem",
            color: "rgba(160,195,225,0.65)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: "0.01em",
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          width: hovered ? "60%" : "0%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
          transition: "width 0.45s cubic-bezier(0.23,1,0.32,1)",
          borderRadius: "2px",
        }}
      />
    </div>
  );
};

export default function HardwareSupport() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  //  const wphandle=()=>{
     window.open(`https://wa.me/${+919330855877}`)
  //  }
  const wphandle=()=>{
    // window.open()
    console.log("Hello")
    window.open(`https://wa.me/${+919330855877}`)
  }
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #hardware * { box-sizing: border-box; }
        @media (max-width: 900px) {
          .hw-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .hw-grid { grid-template-columns: 1fr !important; }
          .hw-section { padding: 72px 18px !important; }
          .hw-title { font-size: 2rem !important; }
          .hw-badge { font-size: 0.68rem !important; }
        }
      `}</style>

      <section
        id="hardware"
        className="hw-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a1628 0%, #0f2340 30%, #0d2c4a 60%, #102535 100%)",
          padding: "96px 48px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Animated particle canvas */}
        <ParticleField />

        {/* Ambient blobs */}
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: "420px", height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 65%)",
          pointerEvents: "none", zIndex: 0,
          animation: "drift1 12s ease-in-out infinite alternate",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: "380px", height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
          pointerEvents: "none", zIndex: 0,
          animation: "drift2 15s ease-in-out infinite alternate",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 65%)",
          pointerEvents: "none", zIndex: 0,
        }} />

        <style>{`
          @keyframes drift1 { from { transform: translate(0,0); } to { transform: translate(30px,20px); } }
          @keyframes drift2 { from { transform: translate(0,0); } to { transform: translate(-25px,15px); } }
          @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            marginBottom: "64px",
            maxWidth: "700px",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.75s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          {/* Badge */}
          <div
            className="hw-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "rgba(56,189,248,0.1)",
              border: "1px solid rgba(56,189,248,0.25)",
              borderRadius: "100px",
              padding: "6px 18px",
              marginBottom: "22px",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#7dd3fc",
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", display: "inline-block", boxShadow: "0 0 8px #38bdf8" }} />
            IT Services
          </div>

          {/* Title */}
          <h2
            className="hw-title"
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 45%, #38bdf8 75%, #bae6fd 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}
          >
            Hardware Support
          </h2>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "18px" }}>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5))" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 10px #38bdf8" }} />
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, rgba(56,189,248,0.5), transparent)" }} />
          </div>

          {/* Subtitle */}
          <p
            style={{
              margin: 0,
              fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
              color: "rgba(148,195,228,0.75)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              lineHeight: 1.65,
              letterSpacing: "0.01em",
            }}
          >
            Reliable and Professional IT Hardware Services
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="hw-grid"
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: "56px",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.75s cubic-bezier(0.23,1,0.32,1) 0.4s",
          }}
        >
          <button
            onClick={wphandle}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #0ea5e9, #6366f1)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(14,165,233,0.45), 0 0 0 1px rgba(99,102,241,0.4)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #0284c7, #4f46e5)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(14,165,233,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            style={{
              background: "linear-gradient(135deg, #0284c7, #4f46e5)",
              border: "none",
              borderRadius: "100px",
              padding: "14px 38px",
              color: "#fff",
              fontSize: "0.88rem",
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "0.04em",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(14,165,233,0.3)",
              transition: "all 0.32s cubic-bezier(0.23,1,0.32,1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Contact us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}