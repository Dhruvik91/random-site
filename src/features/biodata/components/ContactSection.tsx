"use client";

import React from "react";
import { Biodata } from "@/lib/data/biodata";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import SocialLinks from "./SocialLinks";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

interface Props {
  data: Biodata;
}

export default function ContactSection({ data }: Props) {
  return (
    <section className="container mx-auto px-4 py-8 content-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="organic-card glass-card border-white/[0.08] p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <div className="text-gray-300 space-y-2">
            <p>Phone: {data.contact.phone}</p>
            <p>Email: {data.contact.email}</p>
            {data.contact.fatherPhone && (
              <p>Father: {data.contact.fatherPhone}</p>
            )}
            <div className="pt-4">
              <p className="text-gray-400">Address</p>
              <p>{data.personal.address.line1}</p>
              <p>
                {data.personal.address.area}, {data.personal.address.city}
              </p>
              <p>
                {data.personal.address.district}{" "}
                {data.personal.address.postalCode}
              </p>
            </div>
          </div>
          <SocialLinks contact={data.contact} />
        </Card>
        {/* <div className="organic-card glass-card border border-white/[0.08] p-2">
          <div className="w-full h-80 md:h-full">
            <LeafletMap />
          </div>
        </div> */}
      </div>
    </section>
  );
}
