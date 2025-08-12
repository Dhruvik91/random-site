"use client";

import React from "react";
import Image from "next/image";
import { Biodata } from "@/lib/data/biodata";
import { Card } from "@/components/ui/card";

interface Props {
  data: Biodata;
}

export default function FamilySection({ data }: Props) {
  return (
    <section className="container mx-auto px-4 py-8 content-section">
      <Card className="organic-card glass-card border-white/[0.08] p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Family Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.family.map((member, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl glass-card border border-white/[0.06] hover:border-cyan-500/20 transition-all"
            >
              {/* {member.photo && (
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )} */}
              <div className="p-4">
                <p className="text-white font-medium">
                  {member.relation}: {member.name}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.occupation || member.notes || ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
