import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LearnMoreProps {
  href: string;
}

export function LearnMore({ href }: LearnMoreProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 text-muted-foreground mt-4"
    >
      <span>LEARN MORE</span>
      <ArrowRight size={24} />
    </Link>
  );
}
