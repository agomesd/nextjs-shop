import { Herobox } from "@/components/Herobox";
import { content } from "@/lib/content";
import Link from "next/link";
import React from "react";
import { Herobox as SolutionsHerobox } from "./ui/herobox";
import { ImageCard } from "@/components/ImageCard";
import { LearnMore } from "@/components/LearnMore";

export default function Products() {
  return (
    <section>
      {/* <Herobox
        content={content.solutions.herobox.content}
        title={content.solutions.herobox.title}
        imageAlt="Solutions"
        imageSide="right"
        imageUrl={SolutionsIMG}
      /> */}
      <div className="relative">
        <nav className="bg-card p-12 z-50">
          <ul className="flex items-center justify-between py-4 border-b border-muted-foreground">
            {sublinks.map((sublink) => (
              <Link href={sublink.hash} key={sublink.hash}>
                <span className="text-muted-foreground">{sublink.label}</span>
              </Link>
            ))}
          </ul>
        </nav>
        {/* <SolutionsHerobox
          id="printing"
          content={content.solutions.sections.printing.content}
          imageAlt="Game day"
          imageUrl={GameDay}
          title={content.solutions.sections.printing.title}
          orrientation="left"
        />
        <SolutionsHerobox
          id="wide-format"
          content={content.solutions.sections.wideFormat.content}
          imageAlt="Wide format"
          imageUrl={Wide}
          title={content.solutions.sections.wideFormat.title}
          orrientation="right"
        />
        <SolutionsHerobox
          id="menu"
          content={content.solutions.sections.menu.content}
          imageAlt="Menu"
          imageUrl={Menu}
          title={content.solutions.sections.menu.title}
          orrientation="left"
        /> */}
        <section
          className="h-screen w-full bg-secondary p-20 flex flex-col"
          id="specialty"
        >
          <div className=" flex flex-col justify-center items-center w-1/2 mx-auto p-16 border-b border-secondary-foreground">
            <h3 className="text-secondary-foreground text-3xl font-bold mb-4">
              Specialty
            </h3>
            <p className="text-secondary-foreground-muted text-center">
              {` Grab pompom in mouth and put in water dish i heard this rumor
              where the humans are our owners, pfft, what do they know?! and cat
              gets stuck in tree firefighters try to get cat down firefighters
              get stuck in tree cat eats firefighters' slippers.`}
            </p>
          </div>
          {/* <div className="flex-1  grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-8 p-16">
            {gridItems.map((gi) => (
              <ImageCard
                imageAlt={gi.imageAlt}
                imageUrl={gi.imageUrl}
                title={gi.title}
                key={gi.title}
                action={<LearnMore href="/about" />}
              />
            ))}
          </div> */}
        </section>
        {/* <SolutionsHerobox
          id="fulfillment"
          content={content.solutions.sections.fulfillment.content}
          imageAlt="Shipping containers on a ship"
          imageUrl={Fulfillment}
          title={content.solutions.sections.fulfillment.title}
          orrientation="right"
        /> */}
      </div>
    </section>
  );
}

// const gridItems = [
//   {
//     title: "Scratch Off Printing",
//     imageUrl: Scratch,
//     imageAlt: "Scratch off card",
//   },
//   {
//     title: "Playing Card Printing",
//     imageUrl: Playing,
//     imageAlt: "A hand holding playing cards",
//   },
//   {
//     title: "Promotional",
//     imageUrl: Promotional,
//     imageAlt: "WAluminum water bottles in different colours",
//   },
//   {
//     title: "Photo based Printing",
//     imageUrl: PhotoBased,
//     imageAlt: "Cute pictures of a couple",
//   },
// ];

const sublinks = [
  {
    label: "Printing",
    hash: `#printing`,
  },
  {
    label: "Wide Format",
    hash: `#wide-format`,
  },
  {
    label: "Menu",
    hash: `#menu`,
  },
  {
    label: "Specialty",
    hash: `#specialty`,
  },
  {
    label: "Fulfillment",
    hash: `#fulfillment`,
  },
];
