import React, { useEffect, useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Calendar, 
  Clock, 
  ChevronRight,
  PlayCircle
} from 'lucide-react';

// --- MOCK DATA ---
const blogPosts = [
  {
    id: 1,
    title: "Scaling Enterprise Infrastructure for 2026",
    excerpt: "Discover how top-tier organizations are leveraging scalable cloud architectures to handle unprecedented workloads and data processing.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    category: "Cloud Computing",
    date: "Mar 24, 2026",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Rise of Edge AI in Modern Solutions",
    excerpt: "Analyzing the shift from centralized data centers to edge computing for real-time artificial intelligence processing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    category: "Artificial Intelligence",
    date: "Mar 20, 2026",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Cybersecurity Protocols: Zero Trust Architecture",
    excerpt: "Why the 'never trust, always verify' approach is becoming the gold standard for corporate network security.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    category: "Security",
    date: "Mar 15, 2026",
    readTime: "6 min read"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
];

const featureCards = [
  { icon: Mail, title: "Global Support", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-800/50" },
  { icon: Phone, title: "Priority Line", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-800/50" },
  { icon: MapPin, title: "Headquarters", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-800/50" },
  { icon: Globe, title: "Digital Presence", color: "text-amber-400", bg: "bg-amber-900/30", border: "border-amber-800/50" }
];

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-[#00DF82] selection:text-[#050B14]">
      {/* --- INLINE STYLES FOR EXACT MATCHING & ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .dot-bg {
          background-color: #050B14;
          background-image: radial-linear(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        
        .card-glow:hover {
          box-shadow: 0 0 30px rgba(0, 223, 130, 0.08);
          border-color: rgba(0, 223, 130, 0.3);
        }
      `}} />

      {/* Main Wrapper with Dot Background */}
      <div className="dot-bg min-h-screen pb-24">


        {/* --- FEATURED VIDEO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 mb-32 mt-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured <span className="text-[#00DF82]">Video</span></h2>
            <div className="h-px flex-1 bg-linear-to-r from-[#1e293b] to-transparent"></div>
          </div>
          <div className=' flex items-center justify-center'>
          <div className="group relative rounded-3xl overflow-hidden aspect-video border border-[#1e293b] bg-[#0a0f1c] cursor-pointer shadow-2xl h-[70vh]">
            {/* Background Image / Thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Video Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
            />
            {/* Overlay linear */}
            <div className="absolute inset-0 bg-linear-to-t from-[#050B14] via-[#050B14]/40 to-transparent"></div>
            
            {/* Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#00DF82]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#00DF82]/50 group-hover:bg-[#00DF82]/30 group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(0,223,130,0.3)]">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-[#00DF82] ml-1 md:ml-2" fill="currentColor" />
              </div>
            </div>

            {/* Video Text Info */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00DF82]/10 text-[#00DF82] border border-[#00DF82]/20 text-xs font-bold uppercase tracking-wider mb-3">
                <PlayCircle className="w-4 h-4" /> Company Keynote
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 max-w-2xl">BitNextro 2026: The Future of Digital Infrastructure</h3>
              <p className="text-slate-300 max-w-xl hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Join our CEO as we unveil the next generation of enterprise tools, AI integrations, and our roadmap for global expansion.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* --- LATEST BLOG POSTS --- */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-3xl font-bold text-white tracking-tight">Latest <span className="text-[#00DF82]">Insights</span></h2>
              <div className="h-px flex-1 bg-linear-to-r from-[#1e293b] to-transparent max-w-md"></div>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group">
              View all posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-[#0a0f1c] border border-[#1e293b] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#00DF82]/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,223,130,0.15)] flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1c] to-transparent opacity-80"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00DF82] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-[#1e293b] flex items-center text-[#00DF82] text-sm font-semibold mt-auto">
                    Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- COMPANY PICTURE GALLERY --- */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
           <div className="flex items-center gap-4 mb-10 text-center justify-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">Life at <span className="text-[#00DF82]">BitNextro</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#1e293b] bg-[#0a0f1c]
                  ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                  ${idx === 3 ? 'md:col-span-2' : ''}
                `}
              >
                <img 
                  src={img} 
                  alt="Company Culture" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050B14] via-transparent to-transparent opacity-60"></div>
                
                {/* Hover overlay text */}
                <div className="absolute bottom-0 left-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="bg-[#00DF82] text-[#050B14] text-xs font-bold px-2 py-1 rounded-sm uppercase">
                    Culture
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      

    </div>
  );
}