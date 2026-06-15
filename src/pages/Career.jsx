import React from 'react';
import { Briefcase, Cpu, ArrowRight, CheckCircle2, Globe, Users, Zap } from 'lucide-react';

export default function Career() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeTbeJ0pxg5WvL3IP0Sw1mPWr91sBsoRKEkJWLqZapUS1_WkQ/viewform?usp=dialog" 

  const positions = [
    {
      title: "Sales Internship / Full time",
      icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
      type: "Internship / Full time",
      location: "Remote / Hybrid",
      description: "Drive business growth, build client relationships, and develop your sales expertise in the competitive tech industry.",
      requirements: [
        "Strong communication skills",
        "Lead generation & outreach",
        "Client relationship management",
        "Goal-oriented mindset"
      ],
      color: "emerald"
    },
    {
      title: "Technical Support Internship / Full time",
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      type: "Internship / Full time",
      location: "Remote / Hybrid",
      description: "Provide exceptional technical assistance, troubleshoot software issues, and ensure customer satisfaction.",
      requirements: [
        "Basic IT & networking knowledge",
        "Troubleshooting software issues",
        "Customer service skills",
        "Documentation & reporting"
      ],
      color: "blue"
    }
  ];

  const perks = [
    { icon: <Zap className="w-5 h-5" />, label: "High Impact Work" },
    { icon: <Users className="w-5 h-5" />, label: "Collaborative Team" },
    { icon: <Globe className="w-5 h-5" />, label: "Remote Options" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-indigo-900/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-160 h-160 bg-blue-900/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm mb-8 hover:bg-green-500/20 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Hiring Now: Applications Open
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Build the Future at <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
              BitNextro Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            We are looking for curious minds and bold thinkers. Join our team to shape the future of IT, cybersecurity, and digital innovation.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {positions.map((job, index) => (
            <div 
              key={index}
              className="group relative bg-white backdrop-blur-xl border border-slate-200 hover:border-indigo-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200 group-hover:scale-110 transition-transform duration-300">
                  {job.icon}
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-700">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-700">
                    {job.location}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-400 transition-colors">
                {job.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {job.description}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <CheckCircle2 className={`w-4 h-4 text-${job.color}-500 shrink-0`} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={GOOGLE_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-700 border border-slate-200 text-slate-900 font-medium transition-all group-hover:bg-indigo-600 group-hover:border-indigo-500"
              >
                Apply for {job.title.split(' ')[0]}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Culture / CTA Section */}
        <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-indigo-900 via-blue-900 to-white border border-white/10 p-10 md:p-16 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-10 text-lg">
              Don't miss this opportunity to work with industry experts and kickstart your career in technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium text-slate-900">
                  {perk.icon}
                  {perk.label}
                </div>
              ))}
            </div>

            <a 
              href={GOOGLE_FORM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-950 font-bold rounded-full hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-900/20"
            >
              Apply Now via Google Form
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="mt-6 text-sm text-indigo-300/80">
              * Applications are reviewed on a rolling basis.
            </p>
          </div>
          
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[url('https://grainy-linears.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
        </div>

      </div>
    </div>
  );
}
