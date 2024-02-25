import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ImageCardProps {
  title: string;
  imageUrl: StaticImageData;
  imageAlt: string;
  description?: string;
  action?: React.ReactNode;
}

export function ImageCard({
  title,
  imageAlt,
  imageUrl,
  description,
  action,
}: ImageCardProps) {
  return (
    <li key={title} className=" bg-popover flex flex-col">
      <div className="h-3/5">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4  h-2/5">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className=" text-muted-foreground">{description}</p>
        {action}
      </div>
    </li>
  );
}
