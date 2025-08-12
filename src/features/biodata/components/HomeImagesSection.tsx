"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { homePhotos } from "@/lib/data/home";

export default function HomeImagesSection() {
  return (
    <section className="container mx-auto px-4 py-8 content-section">
      <div className="space-y-8">
        <Card className="organic-card glass-card border-white/[0.08] p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Home</h2>
          <ImageCarousel images={homePhotos} heightClass="h-64 md:h-80" />
        </Card>
      </div>
    </section>
  );
}
