import React from 'react';

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
}

export default function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  if (!gallery.length) return null;
  return (
    <div className="mt-12">
      <h4 className="text-xl font-semibold text-white mb-6">Project Gallery</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gallery.map((image, index) => (
          <div key={index} className="relative organic-feature overflow-hidden group">
            <img 
              src={image} 
              alt={`${title} gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
} 