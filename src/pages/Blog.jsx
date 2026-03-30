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
  return (
    // Main Container with dark background, centered content, and hidden overflow for background effects
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-[#00DF82] selection:text-[#050B14] flex flex-col items-center justify-center relative overflow-hidden p-6">

      {/* Decorative Background Orbs (Glowing Blurs) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#00DF82]/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-teal-600/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">

        {/* Pulsing "Work in Progress" Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-800/40 border border-slate-700/50 mb-10 backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-300 cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DF82] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00DF82] shadow-[0_0_10px_#00DF82]"></span>
          </span>
          <span className="text-sm font-semibold tracking-wide text-[#00DF82] uppercase">
            Work in progress
          </span>
        </div>

        {/* Glowing & Pulsing Main Title */}
        <div className="relative mb-8">
          {/* The glowing shadow layer (pulsing) */}
          <h1 className="absolute inset-0 text-5xl md:text-7xl font-extrabold tracking-tight blur-xl md:blur-2xl opacity-60 bg-linear-to-r from-[#00DF82] to-teal-400 bg-clip-text text-transparent animate-pulse select-none">
            Our Blog page is coming soon..
          </h1>
          {/* The crisp top layer */}
          <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight bg-linear-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Our Blog page is coming soon..
          </h1>
        </div>

        {/* Subtitle text */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We're busy crafting insightful articles, tutorials, and the latest tech news just for you. Get ready for something amazing.
        </p>

        {/* Beautiful Hover Button */}
        <button className="group relative px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1">
          {/* Button Outer Glow on Hover */}
          <span className="absolute inset-0 w-full h-full bg-linear-to-br from-[#00DF82] to-teal-600 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-md"></span>

          {/* Button Border / Base background */}
          <span className="absolute inset-0 w-full h-full bg-[#070b14] rounded-xl border border-[#00DF82]/50 group-hover:border-[#00DF82] group-hover:bg-[#00DF82]/10 transition-colors duration-300"></span>

          {/* Button Content */}
          <span className="relative flex items-center gap-3 text-[#00DF82] group-hover:text-white transition-colors duration-300">
            Notify Me When It's Ready
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="m5 12 7-7 7 7"/>
              <path d="M12 19V5"/>
            </svg>
          </span>
        </button>

      </div>
    </div>
  );
}
// export default function Blog() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [blogPosts, setBlogPosts] = useState([])
//   const handlescroll = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const dataformat = (date) => {
//     const formattedDate = new Date(date).toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       day: "2-digit",
//       month: "long",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//     // safely extract first two parts for short date
//     const shortUDate = formattedDate.split(" ").slice(0, 2).join(" ");
//     return shortUDate;
//   }

//   useEffect(() => {
//     const FetchBlogData = async () => {
//       setIsLoaded(true)
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/v5/blog/fetch-all-blog`;
//       const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//           "Content-Type": "application/json"
//         },
//       });
//       const data = await response.json();
//       console.log(data);
//       setBlogPosts(data.blogdata);
//       setIsLoaded(false)
//     }
//     FetchBlogData();
//   }, [])


//   return (
//     <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-[#00DF82] selection:text-[#050B14]">
//       {/* --- INLINE STYLES FOR EXACT MATCHING & ANIMATIONS --- */}
//       <style dangerouslySetInnerHTML={{
//         __html: `
//         .dot-bg {
//           background-color: #050B14;
//           background-image: radial-linear(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
//           background-size: 32px 32px;
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-up {
//           opacity: 0;
//           animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//         .delay-100 { animation-delay: 100ms; }
//         .delay-200 { animation-delay: 200ms; }
//         .delay-300 { animation-delay: 300ms; }
//         .delay-400 { animation-delay: 400ms; }
        
//         .card-glow:hover {
//           box-shadow: 0 0 30px rgba(0, 223, 130, 0.08);
//           border-color: rgba(0, 223, 130, 0.3);
//         }
//       `}} />

//       {/* Main Wrapper with Dot Background */}
//       <div className="dot-bg min-h-screen pb-20">


//         {/* --- FEATURED VIDEO SECTION --- */}

//         {/* --- LATEST BLOG POSTS --- */}

//         <section className="max-w-7xl mx-auto px-6 mb-32 ">
//           <div className="flex items-center justify-between mb-10">
//             <div className="flex items-center gap-4 flex-1">
//               <h2 className="text-3xl font-bold text-white tracking-tight  pt-[55px]">Latest <span className="text-[#00DF82]">Blog</span></h2>
//               <div className="h-px flex-1 bg-linear-to-r from-[#1e293b] to-transparent max-w-md"></div>
//             </div>

//           </div>

//           {isLoaded ? <Blogload /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post) => (
//               <article key={post._id} className="group bg-[#0a0f1c] border border-[#1e293b] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#00DF82]/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,223,130,0.15)] flex flex-col">
//                 {/* Image Container */}
//                 <div className="relative h-56 overflow-hidden">

//                   <img
//                     src={post.blog_image_url}
//                     alt={post.blog_title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
//                   />
//                   <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1c] to-transparent opacity-80"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 flex flex-col flex-1">
//                   <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
//                     <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {dataformat(post.createdAt)}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00DF82] transition-colors line-clamp-2">
//                     {post.blog_title}
//                   </h3>
//                   <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
//                     {post.blog_description}
//                   </p>
//                   <Link to={`/blog/${post._id}`} onClick={handlescroll} className="pt-4 border-t border-[#1e293b] flex items-center text-[#00DF82] text-sm font-semibold mt-auto">
//                     Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>}
//         </section>

//         {/* --- COMPANY PICTURE GALLERY --- */}
//         <section className="max-w-7xl mx-auto px-6 mb-20">
//           <div className="flex items-center gap-4 mb-10 text-center justify-center">
//             <h2 className="text-3xl font-bold text-white tracking-tight">Life at <span className="text-[#00DF82]">BitNextro</span></h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
//             {galleryImages.map((img, idx) => (
//               <div
//                 key={idx}
//                 className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#1e293b] bg-[#0a0f1c]
//                   ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}
//                   ${idx === 3 ? 'md:col-span-2' : ''}
//                 `}
//               >
//                 <img
//                   src={img}
//                   alt="Company Culture"
//                   className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-[#050B14] via-transparent to-transparent opacity-60"></div>

//                 {/* Hover overlay text */}
//                 <div className="absolute bottom-0 left-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//                   <span className="bg-[#00DF82] text-[#050B14] text-xs font-bold px-2 py-1 rounded-sm uppercase">
//                     Culture
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//       </div>


//     </div>
//   );
// }