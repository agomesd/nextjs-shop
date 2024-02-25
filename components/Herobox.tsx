import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface HeroboxProps {
  imageSide: "left" | "right";
  imageUrl: StaticImport;
  imageAlt: string;
  title: string;
  subtitle?: string;
  content: string[];
}

export function Herobox({
  imageSide = "right",
  imageAlt,
  imageUrl,
  title,
  subtitle,
  content,
}: HeroboxProps) {
  return (
    <div
      className={cn(
        "flex ",
        imageSide === "left"
          ? "lg:flex-row-reverse flex-col"
          : "lg:flex-row flex-col-reverse"
      )}
    >
      <div className="w-full lg:w-2/5 flex  justify-center py-8 px-16 lg:px-20 lg:py-12 flex-col">
        <h2 className="font-bold text-foreground text-4xl  mb-2">{title}</h2>
        {subtitle ? (
          <p className="text-muted-foreground text-xl">{subtitle}</p>
        ) : null}
        <div className="mt-8">
          {content.map((paragraph) => (
            <p key={paragraph} className=" text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
