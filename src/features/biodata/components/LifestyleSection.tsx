"use client";

import React from "react";
import { Biodata } from "@/lib/data/biodata";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  data: Biodata;
}

export default function LifestyleSection({ data }: Props) {
  return (
    <section className="container mx-auto px-4 py-8 content-section">
      <Card className="organic-card glass-card border-white/[0.08] p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          Lifestyle & Interests
        </h2>
        <p className="text-gray-300 mb-4">
          Food Habits: {data.lifestyle.foodHabits}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.lifestyle.hobbies.map((hobby) => (
            <Badge
              key={hobby}
              className="organic-badge bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
            >
              {hobby}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
}
