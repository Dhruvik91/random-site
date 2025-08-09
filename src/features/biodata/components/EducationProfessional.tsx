"use client";

import React from "react";
import { Biodata } from "@/lib/data/biodata";
import { Card } from "@/components/ui/card";

interface Props {
  data: Biodata;
}

export default function EducationProfessional({ data }: Props) {
  return (
    <section className="container mx-auto px-4 py-8 content-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="organic-card glass-card border-white/[0.08] p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-300">{data.education.highestQualification}</p>
          <p className="text-gray-400">{data.education.institution}</p>
        </Card>
        <Card className="organic-card glass-card border-white/[0.08] p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Professional</h2>
          <div className="text-gray-300 space-y-1">
            <p>Occupation: {data.professional.occupation}</p>
            <p>Organization: {data.professional.organization}</p>
            <p>Location: {data.professional.workLocation}</p>
            <p>Experience: {data.professional.experience}</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
