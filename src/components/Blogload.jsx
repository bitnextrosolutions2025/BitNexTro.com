import React from 'react';

const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col w-full bg-[#0d1526] rounded-2xl overflow-hidden border border-slate-800/50 shadow-lg animate-pulse">
      
      {/* Image Skeleton Area */}
      <div className="relative w-full h-52 bg-slate-800/50">
       
      </div>

      {/* Content Skeleton Area */}
      <div className="p-6 flex flex-col">
        
        {/* Meta Data (Date & Read Time) */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            {/* Icon placeholder */}
            <div className="h-4 w-4 bg-slate-700/50 rounded-full"></div>
            {/* Text placeholder */}
            <div className="h-3 w-20 bg-slate-700/50 rounded-md"></div>
          </div>
          <div className="flex items-center gap-2">
            {/* Icon placeholder */}
            <div className="h-4 w-4 bg-slate-700/50 rounded-full"></div>
            {/* Text placeholder */}
            <div className="h-3 w-16 bg-slate-700/50 rounded-md"></div>
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 mb-5">
          <div className="h-6 w-full bg-slate-700/70 rounded-md"></div>
          <div className="h-6 w-4/5 bg-slate-700/70 rounded-md"></div>
        </div>

        {/* Description / Excerpt Skeleton */}
        <div className="space-y-2 mt-auto">
          <div className="h-3.5 w-full bg-slate-800/80 rounded-md"></div>
          <div className="h-3.5 w-full bg-slate-800/80 rounded-md"></div>
          <div className="h-3.5 w-2/3 bg-slate-800/80 rounded-md"></div>
        </div>

      </div>
    </div>
  );
};

export default function Blogload() {
  return (
    // Main container with the dark background matching your screenshot
    <div className="min-h-screen  p-8 sm:p-12 font-sans text-slate-200 flex  justify-center">
      <div className="max-w-7xl w-full ">
    
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Rendering 3 skeleton cards to match your screenshot layout */}
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
        
      </div>
    </div>
  );
}