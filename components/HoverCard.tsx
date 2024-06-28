import Image from "next/image";
import React from "react";

interface HoverCardProps {
  description: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export function HoverCard({
  description,
  title,
  imageUrl,
  imageAlt,
}: HoverCardProps) {
  return (
    <li className="rounded-2xl h-[500px] w-full flex-1 relative overflow-hidden group hover:grow-[1.25] transition-all duration-300">
      <Image
        className="absolute h-full w-full inset-0 object-cover"
        src={imageUrl}
        alt={imageAlt}
        width={200}
        height={200}
      />
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 from-30% backdrop-blur-sm">
        <div className="w-48">
          <h3 className="text-2xl text-secondary-foreground leading-tight font-medium">
            {title}
          </h3>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
            <p className="text-secondary-foreground-muted overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transsition duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
