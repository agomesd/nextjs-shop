import { Herobox } from "@/components/Herobox";
import HomeHeroboxImg from "../public/home-herobox.avif";
import Image from "next/image";
import { ImageCard } from "@/components/ImageCard";
import { LearnMore } from "@/components/LearnMore";
import content from "@/public/content.json";
import FeaturedProducts from "@/components/FeaturedProducts";
import { db } from "@/db";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Herobox
        title={content.home.herobox.title}
        subtitle={content.home.herobox.subtitle}
        content={content.home.herobox.content}
        imageAlt=""
        imageSide="right"
        imageUrl={HomeHeroboxImg}
      />
      <FeaturedProducts products={db.products} />
      {/* <ul
        className={`grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 bg-card p-12`}
      >
        {gridBoxItems.map((item) => (
          <ImageCard
            key={item.title}
            imageAlt={item.imageAlt}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            action={<LearnMore href="/about" />}
          />
        ))}
      </ul> */}
      <section className="bg-card p-8 w-full">
        <div className="w-1/2 mx-auto flex items-center">
          {/* <div className="w-1/2">
            <Image src={Commitment} alt="Our commitment" />
          </div> */}

          {/* <div className="w-1/2">
            <h3 className="text-4xl font-bold p-4">
              {content.home.commitment.title}
            </h3>
            <div className="p-4">
              {content.home.commitment.content.map((paragraph) => (
                <>
                  <p key={paragraph}>{paragraph}</p>
                  <br />
                </>
              ))}
            </div>
          </div> */}
        </div>
      </section>
      {/* <ListBox
        footer={content.home.listbox.footer}
        header={content.home.listbox.header}
        items={content.home.listbox.items}
      /> */}
      <section className="h-screen bg-background p-12 container">
        <h2 className="text-4xl font-bold ">Sister Companies</h2>
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
