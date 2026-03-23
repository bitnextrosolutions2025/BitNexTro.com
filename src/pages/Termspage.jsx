import React, { useState, useEffect } from 'react';
import { FileText, Shield, AlertCircle, ChevronRight, Clock, Scale, Users, Globe } from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 1,
      icon: Users,
      title: "Acceptance of Terms",
      content: "By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions.",
      color: "blue"
    },
    {
      id: 2,
      icon: Shield,
      title: "Service Availability",
      content: "All services provided by Bitnextro Solutions Pvt Ltd are subject to availability and confirmation.",
      color: "green"
    },
    {
      id: 3,
      icon: AlertCircle,
      title: "Information Accuracy",
      content: "The information on this website is for general informational purposes only and may be changed without prior notice.",
      color: "amber"
    },
    {
      id: 4,
      icon: Clock,
      title: "Validity of Proposals",
      content: "Any service, quotation, or proposal shared is valid only for the specified period mentioned and may be revised thereafter.",
      color: "purple"
    },
    {
      id: 5,
      icon: FileText,
      title: "Payment Terms",
      content: "Payments for services must be made as per the agreed terms. Delayed payments may result in service suspension and penalty as well.",
      color: "red"
    },
    {
      id: 6,
      icon: Globe,
      title: "Service Interruptions",
      content: "Bitnextro Solutions Pvt Ltd is not responsible for delays or service interruptions caused by factors beyond our control, including third-party services, internet failure, or force majeure events.",
      color: "indigo"
    },
    {
      id: 7,
      icon: Shield,
      title: "Intellectual Property",
      content: "Unauthorized use, copying, or distribution of website content, logos, or materials is strictly prohibited.",
      color: "rose"
    },
    {
      id: 8,
      icon: Users,
      title: "Client Responsibilities",
      content: "Clients are responsible for providing accurate information required for service delivery. The company is not liable for issues arising from incorrect or incomplete information.",
      color: "cyan"
    },
    {
      id: 9,
      icon: Globe,
      title: "Third-Party Services",
      content: "Any third-party software, hardware, or services used during project execution will be governed by the respective third-party terms and licenses.",
      color: "teal"
    },
    {
      id: 10,
      icon: Scale,
      title: "Limitation of Liability",
      content: "Bitnextro Solutions Pvt Ltd shall not be liable for indirect, incidental, or consequential damages arising from the use of our services or website.",
      color: "orange"
    },
    {
      id: 11,
      icon: FileText,
      title: "Right to Modify",
      content: "The company reserves the right to modify, suspend, or discontinue any service or part of the website at any time without prior notice.",
      color: "pink"
    },
    {
      id: 12,
      icon: Scale,
      title: "Governing Law",
      content: "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of courts located in India.",
      color: "violet"
    },
    {
      id: 13,
      icon: Clock,
      title: "Updates and Acceptance",
      content: "Continued use of the website or services indicates acceptance of any updated Terms and Conditions.",
      color: "emerald"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    amber: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
    rose: "from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700",
    cyan: "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700",
    teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
    orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
    violet: "from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700",
    emerald: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
  };

  const iconBgClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    amber: "bg-amber-100 text-amber-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
    indigo: "bg-indigo-100 text-indigo-600",
    rose: "bg-rose-100 text-rose-600",
    cyan: "bg-cyan-100 text-cyan-600",
    teal: "bg-teal-100 text-teal-600",
    orange: "bg-orange-100 text-orange-600",
    pink: "bg-pink-100 text-pink-600",
    violet: "bg-violet-100 text-violet-600",
    emerald: "bg-emerald-100 text-emerald-600"
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[40px_40px]" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-50 animate-pulse" />
                <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-white">
              Terms and Conditions
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-3 sm:mb-4 font-light">
              Bitnextro Solutions Pvt Ltd
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last Updated: January 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full" />
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span>Governed by Laws of India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Important Notice */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-linear-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="shrink-0">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                    Please read these terms and conditions carefully before using our services. 
                    Your continued use of this website constitutes acceptance of these terms. 
                    If you do not agree with any part of these terms, please discontinue use of our services immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className={`h-2 bg-linear-to-r ${colorClasses[section.color]} transition-all duration-300`} />
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`shrink-0 ${iconBgClasses[section.color]} p-3 rounded-xl transition-transform duration-300 ${activeSection === section.id ? 'scale-110' : ''}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="shrink-0 bg-gray-100 text-gray-700 text-xs sm:text-sm font-bold px-2.5 py-1 rounded-full">
                          {String(section.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read more</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative p-6 sm:p-8 lg:p-12">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[30px_30px]" />
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/50 to-transparent" />
            
            <div className="relative text-center text-white">
              <div className="inline-block bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-6">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Questions About Our Terms?
              </h2>
              
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                If you have any questions regarding these Terms and Conditions, please contact Bitnextro Solutions Pvt Ltd. 
                Our legal team is here to help and we're committed to transparency and clarity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a 
                  href="mailto:support@bitnextro.com"
                  className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Contact Legal Team
                </a>
                <a 
                  href="mailto:support@bitnextro.com"
                  className="w-full sm:w-auto bg-blue-500/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-500/30 transition-all duration-300 border border-white/20 text-center"
                >
                  support@bitnextro.com
                </a>
              </div>
              
              <div className="pt-6 sm:pt-8 border-t border-white/20">
                <p className="text-xs sm:text-sm text-blue-200">
                  © 2026 Bitnextro Solutions Pvt Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 bg-linear-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-40 ${
          scrollProgress > 20 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90" />
      </button>
    </div>
  );
}