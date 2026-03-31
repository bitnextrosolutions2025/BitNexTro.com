import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { handleError } from '../components/ErrorMessage';

// Mocking the data you provided
const blogData = {
  blog_description: "gffu ug ygyu  uguguy g uyg uy gu g. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  blog_image_url: "https://res.cloudinary.com/dfnylmooi/image/upload/v1774776881/user_profiles/cdf8htu6rkzryy5u1lzw.jpg",
  blog_title: "test",
  createdAt: "2026-03-29T09:34:44.564Z",
  updatedAt: "2026-03-29T09:34:44.564Z",
  __v: 0,
  _id: "69c8f234c8f1e78023156876"
};

// Helper function to format the ISO date
const formatDate = (isoString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(isoString).toLocaleDateString('en-US', options);
};

// Main Page Component
export default function DetailBlogPage() {
  const { id } = useParams()
  const [BlogData, setBlogData] = useState({})
  const [mainloder, setMainloder] = useState(false)
  useEffect(() => {
    const FetchWholeBlogData = async () => {
      try {


        setMainloder(true)
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/v5/blog/details-blog/${id}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          },
        });
        const data = await response.json();
        setBlogData(data.Blogdata)
        return setMainloder(false)
      } catch (error) {
        console.error(error);
        handleError("Server error ! Refresh the page!!")
        return setMainloder(false)
      }
    }
    FetchWholeBlogData();
  }, [])
  // Using the mock data
  const { blog_title, blog_description, blog_image_url, createdAt } = blogData;

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 font-sans selection:bg-teal-500/30">

      {/* Simple Navigation Bar */}
      <nav className="relative top-[70px] z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
          <Link to="/blog" className='cursor-pointer'> <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span>Back to Articles</span>
          </button></Link>
        </div>
      </nav>
      {/* Main Content Area */}
      {mainloder ? <>

        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-gray-800">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mb-4"></div>
            <p className="text-white text-lg font-semibold">Loading...</p>
          </div>
        </div>
      </> : <main className="max-w-4xl mx-auto px-6 py-10 md:py-16">

        {/* Article Header */}
        <header className="mb-10">
          {/* Category/Tags (Optional placeholder since it's not in the JSON yet) */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 mt-4 capitalize">
            {BlogData.blog_title}
            {/* Note: Added a fallback realistic title if it's just "test" for better visual preview */}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm md:text-base mb-10 border-b border-slate-800/50 pb-8">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>{formatDate(BlogData.createdAt)}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span>3 min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-2xl md:rounded-3xl overflow-hidden mb-12 shadow-2xl border border-slate-800/50 bg-[#0d1526]">
          <img
            src={BlogData.blog_image_url}
            alt={blog_title}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback if the Cloudinary image fails to load
              e.target.src = `${BlogData.blog_image_url}`;
            }}
          />
          {/* Subtle gradient overlay at the bottom of the image for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-[#070b14] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-headings:text-white prose-a:text-teal-400 hover:prose-a:text-teal-300 prose-img:rounded-xl">
          {/* Since your description might just be raw text, we render it directly.
            If you start using rich text (HTML) later, you would use dangerouslySetInnerHTML here.
          */}
          <p className="whitespace-pre-wrap text-lg md:text-xl text-slate-300 leading-loose">
            {BlogData.blog_description}
          </p>
   
        </article>

      </main>}

      {/* Simple Footer */}
      <footer className="border-t border-slate-800/50 mt-20 bg-[#0d1526]/50">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2026 Tech Insights Blog. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}