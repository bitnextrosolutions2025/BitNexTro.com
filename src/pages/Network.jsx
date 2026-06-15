import React from 'react';

export default function Network() {
  const services = [
    {
      id: 1,
      title: "Cybersecurity Audit",
      description: "Comprehensive vulnerability testing and risk assessment to identify and eliminate security gaps before they become threats.",
      features: [
        "Penetration testing & vulnerability scans",
        "Compliance assessment (GDPR, HIPAA)",
        "Detailed security roadmap"
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Managed Firewall",
      description: "Next-generation protection with real-time threat monitoring and automated response systems to keep your network secure 24/7.",
      features: [
        "Advanced threat detection & blocking",
        "24/7 monitoring & incident response",
        "Traffic analysis & reporting"
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "SD-WAN Solutions",
      description: "Optimized connectivity for multi-site businesses with intelligent traffic routing and enhanced application performance.",
      features: [
        "Intelligent path selection",
        "Cloud-optimized connectivity",
        "Centralized management portal"
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <circle cx="12" cy="5" r="2"/>
          <circle cx="5" cy="19" r="2"/>
          <circle cx="19" cy="19" r="2"/>
          <path d="M12 8v1M5.5 17.5l5-5M18.5 17.5l-5-5"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Zero Trust Architecture",
      description: "Modern security protocols designed for remote work with continuous verification and least-privilege access controls.",
      features: [
        "Multi-factor authentication (MFA)",
        "Micro-segmentation & access control",
        "Continuous identity verification"
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="11" width="14" height="10" rx="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M12 13v-1M8 11V7a4 4 0 0 1 8 0v4"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Cloud Security",
      description: "Protecting your assets across AWS, Azure, and GCP with comprehensive security posture management and compliance monitoring.",
      features: [
        "Multi-cloud security management",
        "Data encryption & key management",
        "Compliance automation"
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          <path d="M12 14v4M12 10h.01"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Network Monitoring",
      description: "Proactive performance monitoring with real-time analytics and automated alerts to prevent downtime before it impacts your business.",
      features: [
        "Real-time performance metrics",
        "Predictive analytics & alerts",
        "Bandwidth optimization"
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M2 12h4l3-9 4 18 3-9h4"/>
          <circle cx="12" cy="12" r="0"/>
        </svg>
      )
    }
  ];

  const trustItems = [
    
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      label: "24/7 Support",
      value: "Expert Team Ready"
    },
    
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      label: "500+ Clients",
      value: "Trusted Worldwide"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

       

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
          background: #FFFFFF ;
        }

        .network-section {
          position: relative;
          min-height: 100vh;
          padding: 100px 20px;
          overflow: hidden;
        }

        .gradient-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: #ffff;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s infinite ease-in-out;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%);
          bottom: -5%;
          right: -5%;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%);
          top: 40%;
          right: 10%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeInUp 0.8s ease-out;
        }

        .section-badge {
          display: inline-block;
          padding: 10px 24px;
          background: #b9b9a6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          color: black;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0f172a, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: black;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border:1px solid rgb(1 11 23);
          border-radius: 24px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.6s ease-out backwards;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 24px;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
        .service-card:nth-child(5) { animation-delay: 0.5s; }
        .service-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid rgba(59, 130, 246, 0.3);
          transition: all 0.4s ease;
        }

        .service-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }

        .icon-wrapper svg {
          width: 40px;
          height: 40px;
          stroke: #3b82f6;
          stroke-width: 2;
          fill: none;
          transition: all 0.4s ease;
        }

        .service-card:hover .icon-wrapper svg {
          stroke: #60a5fa;
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.6));
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .service-description {
          font-size: 1rem;
          color: black;
          line-height: 1.7;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .service-features {
          list-style: none;
          position: relative;
          z-index: 1;
        }

        .service-features li {
          color: black;
          font-size: 0.95rem;
          margin-bottom: 10px;
          padding-left: 24px;
          position: relative;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #3b82f6;
          font-weight: bold;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .trust-section {
          margin-top: 100px;
          text-align: center;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 24px;
          animation: fadeInUp 0.8s ease-out 0.7s backwards;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }

        .trust-item {
          display: flex;
          padding: 15px;
          border: 1px solid rgb(0 0 0);
          border-radius: 10px;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .trust-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .trust-icon svg {
          width: 30px;
          height: 30px;
          stroke: #3b82f6;
          fill: none;
          stroke-width: 2;
        }

        .trust-label {
          font-size: 1rem;
          font-weight: 600;
        }

        .trust-value {
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .network-section {
            padding: 60px 15px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card {
            padding: 30px;
          }

          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .section-header {
            margin-bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="network-section">
        {/* Animated Background */}
        <div className="gradient-bg"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-badge">Premium IT Solutions</span>
            <h1 className="section-title">Networking & Security</h1>
            <p className="section-subtitle">
              Robust infrastructure and iron-clad protection for your data. 
              Enterprise-grade solutions backed by 24/7 expert support.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="cta-button">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="trust-section">
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>
              Why Choose Us
            </h2>
            <div className="trust-grid">
              {trustItems.map((item, index) => (
                <div key={index} className="trust-item">
                  <div className="trust-icon">
                    {item.icon}
                  </div>
                  <div className="trust-label">{item.label}</div>
                  <div className="trust-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
