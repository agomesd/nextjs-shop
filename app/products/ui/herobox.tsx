import { ActionButton } from "@/components/ActionButton";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroboxProps {
  id: string;
  title: string;
  content: string[];
  imageAlt: string;
  imageUrl: StaticImageData;
  orrientation: "left" | "right";
}

export function Herobox({
  id,
  content,
  imageUrl,
  title,
  imageAlt,
  orrientation,
}: HeroboxProps) {
  return (
    <section className="relative h-screen w-full p-20" id={id}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full"
      />
      <div
        className={`flex h-full ${
          orrientation === "left" ? "justify-start" : "justify-end"
        }`}
      >
        <div className="w-1/2 p-20 z-50 bg-background h-full shadow-md">
          <h3 className="font-bold text-3xl mb-8">{title}</h3>
          <div className="mb-8">
            {content.map((paragraph) => (
              <>
                <p key={paragraph}>{paragraph}</p>
                <br />
              </>
            ))}
          </div>

          <ActionButton label="GET A QUOTE" />
        </div>
      </div>
    </section>
  );
}
