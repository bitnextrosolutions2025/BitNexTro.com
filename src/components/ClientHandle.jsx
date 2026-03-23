import React, { useState } from 'react';
import { ArrowRight, Star, ExternalLink, Briefcase } from 'lucide-react';
import msm from "../assets/msm.png"
// --- Mock Data ---
const CLIENTS = [
  {
    id: 1,
    name: "Manmalka Salt Pvt. Ltd.",

    description: "One of the best salt manufacturing & distribution firm India",
    logo: msm,
    color: "bg-indigo-50 text-indigo-700",
    url: "https://www.msmsalt.com/"
  },
];

const ClientCard = ({ client }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden
                 bg-linear-to-br from-white/80 via-white/50 to-white/30 
                 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]
                 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:border-white/90 scrollanimate"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glossy Top Highlight (The "Sheen") - Simulates overhead light reflection */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/60 to-transparent opacity-70 pointer-events-none" />

      {/* Internal highlight glow on hover */}
      <div className={`absolute inset-0 bg-linear-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Header: Logo & Industry Tag */}
      <div className="flex items-start justify-center mb-6 relative z-10">
        <div className={`p-3 rounded-xl ${client.color} bg-opacity-90 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
          <img className='h-18' src={client.logo} alt="bitnextro-client-logo" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl text-center font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors drop-shadow-sm">
          {client.name}
        </h3>
        <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
          {client.description}
        </p>

        {/* Footer / Action */}
        <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
          <a href={client.url} target='_blank'><button className="text-sm font-bold text-slate-900 flex items-center gap-1 group/btn hover:text-blue-600 transition-colors  cursor-pointer">
            Explore
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-transparent font-sans text-slate-900 overflow-hidden">


      <div className="absolute inset-0 w-full h-full bg-transparent z-0">
        {/* Large flowing blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-700/50 blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-slate-900/50 blur-[100px]"></div>

        {/* Additional decorative floating elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
     
        </div>
      </div>

      {/* --- Main Content --- */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 text-blue-600 text-sm font-semibold mb-6 shadow-sm">
            <Briefcase className="w-4 h-4" />
            <span>Portfolio Highlights</span>
          </div> */}
          <h1 className="text-3xl md:text-5xl  font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400 mb-6">
            Trusted by industry leaders.
          </h1>
          <p className="text-lg text-green-500 leading-8">
            we partner with forward-thinking companies to build scalable solutions.
            From early-stage startups to established enterprises.
          </p>
        </div>

        {/* Grid Layout */}
        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-6"> */}
        <div className='flex justify-center '>
          {CLIENTS.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>


      </section>
    </div>
  );
}
