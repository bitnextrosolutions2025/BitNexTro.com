// Service page metadata for SEO optimization
export const serviceMetadata = {
  cybersecurity: {
    title: "Cyber Security Services in Kolkata | BitNextro Solutions",
    description: "Expert cybersecurity services in Kolkata - threat detection, penetration testing, compliance management, and endpoint protection. Secure your business from cyber threats with BitNextro's advanced security solutions.",
    keywords: "cybersecurity services kolkata, cyber security, threat detection, penetration testing, email security, compliance management, endpoint protection",
    canonicalUrl: "https://www.bitnextro.com/service/cyber-security-services-kolkata",
    ogTitle: "Cyber Security Services in Kolkata | BitNextro Solutions",
    ogDescription: "Expert cybersecurity services including threat detection, penetration testing, and compliance management.",
    slug: "cybersecurity"
  },
  remote: {
    title: "Remote Desktop Services in Kolkata | BitNextro Solutions",
    description: "Secure remote desktop services in Kolkata - Remote workers support, VPN setup, remote access solutions. Enable flexible work with BitNextro's remote desktop services.",
    keywords: "remote desktop services kolkata, remote access, VPN, remote work support, RDP, virtual desktop",
    canonicalUrl: "https://www.bitnextro.com/service/remote-services-kolkata",
    ogTitle: "Remote Desktop Services in Kolkata | BitNextro Solutions",
    ogDescription: "Secure remote desktop services with VPN and remote access support for flexible work.",
    slug: "remote"
  },
  cloudservices: {
    title: "Cloud Services in Kolkata | Cloud Migration & Management | BitNextro",
    description: "Professional cloud services in Kolkata - Cloud migration, AWS, Azure, Microsoft 365, and cloud infrastructure management. Scale your business with secure cloud solutions by BitNextro.",
    keywords: "cloud services kolkata, cloud migration, aws, azure, microsoft 365, cloud hosting, cloud management",
    canonicalUrl: "https://www.bitnextro.com/service/cloud-services-kolkata",
    ogTitle: "Cloud Services in Kolkata | BitNextro Solutions",
    ogDescription: "Cloud migration, AWS, Azure, and Microsoft 365 management services for scalable infrastructure.",
    slug: "cloud"
  },
  managedservices: {
    title: "Managed IT Services in Kolkata | Managed Service Provider | BitNextro",
    description: "Managed IT services in Kolkata - 24/7 IT support, network monitoring, patch management, helpdesk services. Focus on your business while we manage your IT infrastructure.",
    keywords: "managed IT services kolkata, managed service provider, 24/7 IT support, network monitoring, helpdesk, managed IT support",
    canonicalUrl: "https://www.bitnextro.com/service/managed-services-kolkata",
    ogTitle: "Managed IT Services in Kolkata | BitNextro Solutions",
    ogDescription: "24/7 managed IT services including network monitoring, patch management, and IT support.",
    slug: "managed"
  },
  databackup: {
    title: "Data Backup & Disaster Recovery in Kolkata | BitNextro Solutions",
    description: "Reliable data backup and disaster recovery services in Kolkata - Cloud backup, disaster recovery planning, and data restoration. Protect your critical business data with BitNextro.",
    keywords: "data backup kolkata, disaster recovery, backup services, cloud backup, data recovery, backup solution",
    canonicalUrl: "https://www.bitnextro.com/service/data-backup-disaster-recovery",
    ogTitle: "Data Backup & Disaster Recovery in Kolkata | BitNextro Solutions",
    ogDescription: "Cloud backup and disaster recovery solutions to protect your critical business data.",
    slug: "backup"
  },
  devops: {
    title: "DevOps Services in Kolkata | CI/CD & DevOps Solutions | BitNextro",
    description: "Expert DevOps services in Kolkata - CI/CD pipelines, containerization, infrastructure automation, and deployment solutions. Accelerate your software delivery with BitNextro's DevOps expertise.",
    keywords: "devops services kolkata, CI/CD, docker, kubernetes, infrastructure automation, devops consulting",
    canonicalUrl: "https://www.bitnextro.com/service/devops-services-kolkata",
    ogTitle: "DevOps Services in Kolkata | BitNextro Solutions",
    ogDescription: "CI/CD pipelines, containerization, and infrastructure automation for faster software delivery.",
    slug: "devops"
  },
  artificialintelligence: {
    title: "Artificial Intelligence & Machine Learning Services in Kolkata | BitNextro",
    description: "AI and machine learning services in Kolkata - Custom AI solutions, ML models, predictive analytics, and intelligent automation. Transform your business with AI by BitNextro.",
    keywords: "artificial intelligence kolkata, machine learning, AI solutions, predictive analytics, ML development, AI consulting",
    canonicalUrl: "https://www.bitnextro.com/service/artifical-services-kolkata",
    ogTitle: "Artificial Intelligence Services in Kolkata | BitNextro Solutions",
    ogDescription: "Custom AI and machine learning solutions including predictive analytics and intelligent automation.",
    slug: "ai"
  },
  network: {
    title: "Network Services & Setup in Kolkata | LAN/WAN & Networking | BitNextro",
    description: "Professional network services in Kolkata - LAN/WAN setup, firewall configuration, network security, and network optimization. Build and secure your network infrastructure with BitNextro.",
    keywords: "network services kolkata, LAN WAN setup, firewall, network security, network configuration, networking solutions",
    canonicalUrl: "https://www.bitnextro.com/service/network-setup-kolkata",
    ogTitle: "Network Services in Kolkata | BitNextro Solutions",
    ogDescription: "Professional LAN/WAN setup, firewall configuration, and network security solutions.",
    slug: "network"
  },
  servervirtual: {
    title: "Server & Virtual Server Support in Kolkata | Server Management | BitNextro",
    description: "Expert server support services in Kolkata - Virtual server management, server setup, server maintenance, and server security. Ensure your servers run smoothly with BitNextro's support.",
    keywords: "server support kolkata, virtual server, server management, dedicated server, server maintenance, server hosting",
    canonicalUrl: "https://www.bitnextro.com/service/server-support-kolkata",
    ogTitle: "Server Support Services in Kolkata | BitNextro Solutions",
    ogDescription: "Professional server management, virtual server support, and server maintenance services.",
    slug: "server"
  },
  websitedev: {
    title: "Website Development Services in Kolkata | Web Development | BitNextro",
    description: "Professional website development services in Kolkata - Responsive web design, SEO-friendly websites, e-commerce solutions, and web development. Build your online presence with BitNextro.",
    keywords: "website development kolkata, web development, responsive design, SEO website, web design, e-commerce website",
    canonicalUrl: "https://www.bitnextro.com/service/website-services-kolkata",
    ogTitle: "Website Development in Kolkata | BitNextro Solutions",
    ogDescription: "Responsive website design, SEO optimization, and e-commerce solutions.",
    slug: "website"
  },
  amc: {
    title: "IT AMC Services in Kolkata | Annual Maintenance Contract | BitNextro",
    description: "Comprehensive IT AMC services in Kolkata - 24/7 technical support, preventive maintenance, security monitoring, and priority issue resolution. Keep your IT infrastructure running smoothly.",
    keywords: "IT AMC kolkata, annual maintenance contract, IT support, technical support, AMC services, IT maintenance",
    canonicalUrl: "https://www.bitnextro.com/service/it-amc-services-kolkata",
    ogTitle: "IT AMC Services in Kolkata | BitNextro Solutions",
    ogDescription: "24/7 technical support, preventive maintenance, and priority issue resolution.",
    slug: "amc"
  }
};

export const getServiceMetadata = (serviceKey) => {
  const metadata = serviceMetadata[serviceKey] || {};
  return {
    ...metadata,
    ogImage: "https://www.bitnextro.com/og-image.png",
    ogUrl: metadata.canonicalUrl || "https://www.bitnextro.com",
    twitterImage: "https://www.bitnextro.com/og-image.png",
  };
};

export const getServiceSchema = (serviceName, description, serviceKey) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "BitNextro Solutions Pvt. Ltd.",
      "url": "https://www.bitnextro.com",
      "telephone": "+91-9330855877"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kolkata"
    },
    "priceRange": "Custom Quote"
  };
};
