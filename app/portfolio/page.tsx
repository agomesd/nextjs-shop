import { Herobox } from "@/components/Herobox";
import { content } from "@/lib/content";
import React from "react";
import { ImageCard } from "@/components/ImageCard";
import { Testimonials } from "@/components/Testimonials";

export default function Portfolio() {
  return (
    <section>
      {/* <Herobox
        content={content.portfolio.herobox.content}
        title={content.portfolio.herobox.title}
        imageAlt="Boxed water on yellow background"
        imageSide="right"
        imageUrl={BoxedWater}
      /> */}
      <ul className="grid grid-cols-5 p-20 bg-card gap-8">
        {/* {gridItems.map((item) => (
          <ImageCard
            key={item.title}
            imageAlt={item.imageAlt}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))} */}
      </ul>
      <Testimonials />
    </section>
  );
}

// const gridItems = [
//   {
//     title: "Brochures",
//     imageUrl: Brochures,
//     imageAlt: "Banner on overpass in the city",
//   },
//   {
//     title: "Pocket Folders",
//     imageUrl: PocketFolders,
//     imageAlt: "Shiny snowflake paper cut out",
//   },
//   {
//     title: "Menus",
//     imageUrl: Menus,
//     imageAlt: "Menu cover on hot pink backgrounf",
//   },
//   {
//     title: "Magazines",
//     imageUrl: Magazines,
//     imageAlt: "Interior design magazine front page",
//   },
//   {
//     title: "Boxes/POP Display",
//     imageUrl: Popdisplay,
//     imageAlt: "POP Displays",
//   },
//   {
//     title: "Business Cards",
//     imageUrl: Business,
//     imageAlt: "It's your day! cards",
//   },
//   {
//     title: "Flyers",
//     imageUrl: Flyers,
//     imageAlt: "Flyer on blue background",
//   },
//   {
//     title: "Signs/Banners",
//     imageUrl: Brochures,
//     imageAlt: "Banner on overpass in the city",
//   },
//   {
//     title: "Cards/Stationery",
//     imageUrl: Stationery,
//     imageAlt: "Gold and silver kisses on black cards",
//   },
//   {
//     title: "Scratch Off",
//     imageUrl: ScratchCard,
//     imageAlt: "Scratch card",
//   },
// ];
