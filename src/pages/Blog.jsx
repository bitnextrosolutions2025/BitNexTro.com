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
import Blogload from '../components/Blogload';
import { Link } from 'react-router';

// --- MOCK DATA ---


const galleryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
];

export default function Blog() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogPosts, setBlogPosts] = useState([])
  const handlescroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
const formatDate = (isoString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(isoString).toLocaleDateString('en-US', options);
};

  useEffect(() => {
    const FetchBlogData = async () => {
      setIsLoaded(true)
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/v5/blog/fetch-all-blog`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      const revBlogdata= data.blogdata.reverse();
      setBlogPosts(revBlogdata);
      setIsLoaded(false)
    }
    FetchBlogData();
  }, [])


  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-[#00DF82] selection:text-[#050B14]">
      {/* --- INLINE STYLES FOR EXACT MATCHING & ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
      <div className="dot-bg min-h-screen pb-20">


        {/* --- FEATURED VIDEO SECTION --- */}

        {/* --- LATEST BLOG POSTS --- */}

        <section className="max-w-7xl mx-auto px-6 mb-32 ">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-3xl font-bold text-white tracking-tight  pt-[77px]">Latest <span className="text-[#00DF82]">Blog</span></h2>
              <div className="h-px flex-1 bg-linear-to-r from-[#1e293b] to-transparent max-w-md"></div>
            </div>

          </div>

          {isLoaded ? <Blogload /> : <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post._id} className="group bg-[#0a0f1c] border border-[#1e293b] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#00DF82]/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,223,130,0.15)] flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={post.blog_image_url}
                    alt={post.blog_title}
                    className="w-full h-full  transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1c] to-transparent opacity-80"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.createdAt)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00DF82] transition-colors line-clamp-2">
                    {post.blog_title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.blog_description}
                  </p>
                  <Link to={`/blog/${post._id}`} onClick={handlescroll} className="pt-4 border-t border-[#1e293b] flex items-center text-[#00DF82] text-sm font-semibold mt-auto">
                    Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>}
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