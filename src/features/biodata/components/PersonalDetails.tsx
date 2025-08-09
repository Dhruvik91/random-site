"use client";

import React from "react";
import { Biodata } from "@/lib/data/biodata";
import { Card } from "@/components/ui/card";

interface Props {
  data: Biodata;
}

export default function PersonalDetails({ data }: Props) {
  const p = data.personal;
  return (
    <section className="container mx-auto px-4 py-8 content-section">
      <Card className="organic-card glass-card border-white/[0.08] p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <p>
              <span className="text-gray-400">Date of Birth:</span>{" "}
              {p.dateOfBirth} ({p.age})
            </p>
            <p>
              <span className="text-gray-400">Height:</span> {p.height}
            </p>
            <p>
              <span className="text-gray-400">Weight:</span> {p.weight}
            </p>
          </div>
          <div>
            <p>
              <span className="text-gray-400">Complexion:</span> {p.complexion}
            </p>
            <p>
              <span className="text-gray-400">Body Type:</span> {p.bodyType}
            </p>
            {p.land && (
              <p>
                <span className="text-gray-400">Land:</span> {p.land}
              </p>
            )}
          </div>
          <div>
            <p className="text-gray-400">Address:</p>
            <p>{p.address.line1}</p>
            <p>
              {p.address.area}, {p.address.city}
            </p>
            <p>
              {p.address.district} {p.address.postalCode}
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
