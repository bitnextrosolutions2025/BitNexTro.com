import React, { useState } from 'react';

export default function Privacypolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      icon: "🛡️",
      title: "Introduction",
      content: "BitNextro Solutions Pvt Ltd (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting the personal information of users who visit our website or contact us for services. This Privacy Policy explains how we collect, use, and safeguard your information."
    },
    {
      id: 2,
      icon: "📊",
      title: "Information We Collect",
      content: "We may collect personal information such as name, phone number, email address, company name, and other details that you voluntarily provide through contact forms, calls, emails, or WhatsApp communication. We may also collect non-personal technical information including IP address, browser type, device details, and website usage data to improve our website performance and user experience."
    },
    {
      id: 3,
      icon: "⚙️",
      title: "How We Use Your Information",
      content: "The information collected is used to respond to enquiries, provide IT services, share quotations, offer support, and communicate regarding our products and services. We are committed to using your information solely for delivering the best service experience to you."
    },
    {
      id: 4,
      icon: "🤝",
      title: "Information Sharing & Third Parties",
      content: "BitNextro Solutions Pvt Ltd does not sell, rent, or trade your personal information to any third party for marketing or commercial purposes. Your information may be shared only with trusted service providers such as website hosting, email, or communication platforms, strictly for business operations and service delivery."
    },
    {
      id: 5,
      icon: "🍪",
      title: "Cookies Policy",
      content: "Our website uses mandatory cookies to analyze traffic and enhance user experience. Cookies help us understand how visitors interact with our website. You can choose to disable cookies through your browser settings if you prefer, though this may affect some functionalities."
    },
    {
      id: 6,
      icon: "🔒",
      title: "Data Security",
      content: "We take reasonable security measures to protect your information from unauthorized access, misuse, loss, or disclosure. While we implement industry-standard security practices, please note that no online transmission is completely secure."
    },
    {
      id: 7,
      icon: "🔗",
      title: "Third-Party Links",
      content: "Our website may contain links to third-party platforms such as WhatsApp, Google Maps, or social media sites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit."
    },
    {
      id: 8,
      icon: "✋",
      title: "Your Rights",
      content: "You have the right to request access, correction, or deletion of your personal data by contacting us directly, subject to applicable legal requirements. We respect your privacy choices and will respond to your requests in a timely manner."
    },
    {
      id: 9,
      icon: "🔄",
      title: "Policy Updates",
      content: "This Privacy Policy may be updated from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically."
    }
  ];

  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.backgroundPattern}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
        <div style={styles.circle3}></div>
      </div>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <span style={styles.badgeDot}></span>
            Last Updated: January 28, 2026
          </div>
          <h1 style={styles.heroTitle}>
            Privacy <span style={styles.gradientText}>Policy</span>
          </h1>
          <p style={styles.heroDescription}>
            Your trust matters. Discover how we protect and respect your personal information with transparency and care.
          </p>
          <div style={styles.heroStats}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Transparent</div>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>0</div>
              <div style={styles.statLabel}>Data Sales</div>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.contentGrid}>
          {sections.map((section, index) => (
            <article 
              key={section.id}
              style={{
                ...styles.card,
                ...(activeSection === section.id ? styles.cardActive : {})
              }}
              onMouseEnter={() => setActiveSection(section.id)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.iconWrapper}>
                  <span style={styles.emoji}>{section.icon}</span>
                </div>
                <div style={styles.cardNumber}>0{section.id}</div>
              </div>
              <h2 style={styles.cardTitle}>{section.title}</h2>
              <p style={styles.cardContent}>{section.content}</p>
              <div style={styles.cardFooter}>
                <div style={styles.readMore}>
                  Read more
                  <svg style={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaCard}>
            <div style={styles.ctaContent}>
              <h3 style={styles.ctaTitle}>Have Questions?</h3>
              <p style={styles.ctaText}>
                We're here to help. Reach out to our team for any privacy-related inquiries or concerns.
              </p>
              <a href="mailto:support@bitnextro.com" style={styles.ctaButton}>
                <svg style={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                support@bitnextro.com
              </a>
            </div>
            <div style={styles.ctaDecoration}>
              <div style={styles.decorCircle1}></div>
              <div style={styles.decorCircle2}></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>
            <div style={styles.footerLogo}>BitNextro</div>
            <p style={styles.footerTagline}>Solutions Pvt Ltd</p>
          </div>
          <div style={styles.footerCopy}>
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .card:hover .arrow {
          transform: translateX(5px);
        }

        .card:hover .readMore {
          gap: 12px;
        }

        .ctaButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }

        @media (max-width: 768px) {
          body {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .statDivider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundPattern: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: 'none',
  },
  circle1: {
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
    animation: 'float 6s ease-in-out infinite',
  },
  circle2: {
    position: 'absolute',
    bottom: '20%',
    left: '5%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(147, 51, 234, 0) 70%)',
    animation: 'float 8s ease-in-out infinite',
    animationDelay: '1s',
  },
  circle3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0) 70%)',
    animation: 'float 10s ease-in-out infinite',
    animationDelay: '2s',
  },
  hero: {
    position: 'relative',
    zIndex: 1,
    padding: 'clamp(60px, 10vw, 120px) 24px clamp(40px, 8vw, 80px)',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 20px',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '50px',
    color: '#60a5fa',
    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
    fontWeight: '500',
    marginBottom: '32px',
    backdropFilter: 'blur(10px)',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#60a5fa',
    animation: 'pulse 2s ease-in-out infinite',
  },
  heroTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '24px',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroDescription: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#475569',
    lineHeight: '1.7',
    maxWidth: '700px',
    margin: '0 auto 48px',
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'clamp(16px, 4vw, 48px)',
    flexWrap: 'wrap',
    padding: '32px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '16px',
    backdropFilter: 'blur(20px)',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
    color: '#64748b',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
  },
  main: {
    position: 'relative',
    zIndex: 1,
    padding: '0 24px 80px',
  },
  contentGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
    gap: 'clamp(20px, 3vw, 32px)',
    marginBottom: '80px',
  },
  card: {
    position: 'relative',
    padding: 'clamp(24px, 4vw, 32px)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '20px',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  cardActive: {
    transform: 'translateY(-8px)',
    borderColor: 'rgba(59, 130, 246, 0.5)',
    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(59, 130, 246, 0.3)',
  },
  emoji: {
    fontSize: '28px',
  },
  cardNumber: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: '700',
    color: 'rgba(59, 130, 246, 0.3)',
  },
  cardTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '16px',
    lineHeight: '1.3',
  },
  cardContent: {
    fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  cardFooter: {
    paddingTop: '16px',
    borderTop: '1px solid rgba(59, 130, 246, 0.1)',
  },
  readMore: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#3b82f6',
    fontSize: 'clamp(0.813rem, 1.6vw, 0.938rem)',
    fontWeight: '600',
    transition: 'gap 0.3s ease',
  },
  arrow: {
    width: '18px',
    height: '18px',
    transition: 'transform 0.3s ease',
  },
  ctaSection: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  ctaCard: {
    position: 'relative',
    padding: 'clamp(40px, 6vw, 64px)',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '24px',
    backdropFilter: 'blur(20px)',
    overflow: 'hidden',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '16px',
  },
  ctaText: {
    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '32px',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: '#0f172a',
    fontSize: 'clamp(0.938rem, 1.8vw, 1.063rem)',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    cursor: 'pointer',
  },
  ctaIcon: {
    width: '20px',
    height: '20px',
  },
  ctaDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  decorCircle1: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0) 70%)',
  },
  decorCircle2: {
    position: 'absolute',
    bottom: '-80px',
    left: '-80px',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
  },
  footer: {
    position: 'relative',
    zIndex: 1,
    padding: '40px 24px',
    borderTop: '1px solid rgba(59, 130, 246, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '24px',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  footerLogo: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  footerTagline: {
    fontSize: 'clamp(0.813rem, 1.6vw, 0.938rem)',
    color: '#64748b',
  },
  footerCopy: {
    fontSize: 'clamp(0.813rem, 1.6vw, 0.938rem)',
    color: '#64748b',
  },
};
