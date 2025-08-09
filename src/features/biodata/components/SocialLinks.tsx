"use client";

import Link from "next/link";
import { Biodata } from "@/lib/data/biodata";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Ghost } from "lucide-react";

interface Props {
  contact: Biodata["contact"];
}

export default function SocialLinks({ contact }: Props) {
  const social = [
    {
      key: "linkedin",
      href: contact.linkedin,
      Icon: Linkedin,
      label: "LinkedIn",
    },
    {
      key: "instagram",
      href: contact.instagram,
      Icon: Instagram,
      label: "Instagram",
    },
    { key: "snapchat", href: contact.snapchat, Icon: Ghost, label: "Snapchat" },
  ] as const;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {social.map(({ key, href, Icon, label }) => (
        <Button
          key={key}
          asChild
          variant="outline"
          className="organic-button border-white/10 text-gray-200 hover:bg-white/5"
          disabled={!href}
        >
          <Link href={href || "#"} target="_blank" rel="noopener noreferrer">
            <Icon className="w-4 h-4 mr-2 text-cyan-400" />
            {label}
          </Link>
        </Button>
      ))}
    </div>
  );
}
