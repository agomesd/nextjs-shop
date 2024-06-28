import { Herobox } from "@/components/Herobox";
import HomeHeroboxImg from "../public/home-herobox.avif";
import content from "@/public/content.json";
import FeaturedProducts from "@/components/FeaturedProducts";
import { db } from "@/db";
import { HoverCard } from "@/components/HoverCard";
import { H2 } from "@/components/H2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Herobox
        title={content.home.herobox.title}
        subtitle={content.home.herobox.subtitle}
        content={content.home.herobox.description}
        imageAlt=""
        imageSide="right"
        imageUrl={HomeHeroboxImg}
      />
      <FeaturedProducts products={db.products} />
      <section className="w-full p-8 container">
        <H2 label="Featured Services" />
        <ul className="flex p-6 gap-6 items-center">
          {db.services.map((service) => (
            <HoverCard
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              title={service.name}
              key={service.id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

// const gridBoxItems = [
//   {
//     imageUrl: Printing,
//     imageAlt: "",
//     title: `Printing`,
//     description: `Cupcake ipsum dolor sit amet bear claw
//       cupcake cupcake chocolate…`,
//   },
//   {
//     imageUrl: WideFormat,
//     imageAlt: "",
//     title: `Wide Format`,
//     description: `Cupcake ipsum dolor sit amet bear claw
//       cupcake cupcake chocolate…`,
//   },
//   {
//     imageUrl: Menu,
//     imageAlt: "",
//     title: `Menu`,
//     description: `Cupcake ipsum dolor sit amet bear claw
//       cupcake cupcake chocolate…`,
//   },
//   {
//     imageUrl: Specialty,
//     imageAlt: "",
//     title: `Specialty`,
//     description: `Cupcake ipsum dolor sit amet bear claw
//       cupcake cupcake chocolate…`,
//   },
// ];
