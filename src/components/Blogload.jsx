import React from 'react';

const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col w-full bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200/80 shadow-md animate-pulse">
      {/* Image Skeleton Area */}
      <div className="relative w-full h-56 bg-slate-200/70" />

      {/* Content Skeleton Area */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta Data (Date & Read Time) */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-4 w-24 bg-slate-200/80 rounded-md" />
          <div className="h-4 w-16 bg-slate-200/60 rounded-md" />
        </div>

        {/* Title Skeleton */}
        <div className="space-y-2.5 mb-4">
          <div className="h-5 w-full bg-slate-200/90 rounded-md" />
          <div className="h-5 w-3/4 bg-slate-200/80 rounded-md" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-6 flex-1">
          <div className="h-3.5 w-full bg-slate-100 rounded-md" />
          <div className="h-3.5 w-full bg-slate-100 rounded-md" />
          <div className="h-3.5 w-2/3 bg-slate-100 rounded-md" />
        </div>

        {/* Action Link Skeleton */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="h-4 w-28 bg-slate-200/70 rounded-md" />
          <div className="h-6 w-6 bg-slate-200/70 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default function Blogload() {
  return (
    <div className="w-full">
      {/* Featured Skeleton */}
      <div className="mb-12 w-full bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-md animate-pulse grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 h-64 md:h-80 bg-slate-200/70 rounded-2xl" />
        <div className="md:col-span-5 space-y-4">
          <div className="h-4 w-28 bg-slate-200/80 rounded-md" />
          <div className="h-8 w-full bg-slate-200/90 rounded-md" />
          <div className="h-8 w-4/5 bg-slate-200/80 rounded-md" />
          <div className="space-y-2 pt-2">
            <div className="h-3.5 w-full bg-slate-100 rounded-md" />
            <div className="h-3.5 w-full bg-slate-100 rounded-md" />
          </div>
          <div className="h-10 w-36 bg-slate-200/80 rounded-xl pt-2" />
        </div>
      </div>

      {/* Grid Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    </div>
  );
}
