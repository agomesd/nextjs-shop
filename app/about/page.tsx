import { Herobox } from "@/components/Herobox";
import { content } from "@/lib/content";
import { ImageCard } from "@/components/ImageCard";
import { LearnMore } from "@/components/LearnMore";

export default function About() {
  return (
    <div>
      {/* <Herobox
        content={content.about.herobox.content}
        imageAlt="Black and white photo of Joseph Benjamin Lawton printing."
        imageSide="right"
        imageUrl={Benjamin}
        title={content.about.herobox.title}
      /> */}
      <section className="h-screen bg-card flex flex-col">
        <div className=" bg-warning flex justify-end">
          <div className="w-1/3  flex items-center gap-4 p-10">
            <div className="pr-36">
              {content.about.sectionOne.top.content.map((p) => (
                <>
                  <p key={p}>{p}</p>
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-card flex-1 ">
          <div className="flex w-1/2 mx-auto items-center h-full gap-20">
            {/* <Image src={WBE} alt="Women Owned Business certificate" /> */}
            <p>
              {content.about.sectionOne.bottom.content.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen bg-backround flex flex-col justify-center items-center p-20">
        <div className="border-b border-border p-4 w-full font-bold text-3xl">
          <h2>Sister Companies</h2>
        </div>
        {/* <ul className="grid grid-cols-3 gap-12 mt-12">
          {gridItems.map((item) => (
            <ImageCard
              imageAlt={item.imageAlt}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </ul> */}
      </section>
    </div>
  );
}

// const gridItems = [
//   {
//     title: "Mr. Scratch Off",
//     description: `The anticipation that comes with a scratch off product
//         doesn’t just make the experience memorable, it has
//         them coming back for more. Create custom scratch
//         offs for fundraisers, marketing events, employee
//         incentives and more.`,
//     imageUrl: Scratchoff,
//     imageAlt: "Mr. Scratch off",
//   },
//   {
//     title: "Mr. Playing Card",
//     description: `Whether jokers are wild or you have an ace up your
//         sleeve, you control the game. Create new ways to
//         play and new possibilities designing your custom
//         playing cards.`,
//     imageUrl: PlayingCard,
//     imageAlt: "Mr. Playing Card",
//   },
//   {
//     title: "Pinhole Press",
//     description: `If you're shopping for the perfect gift, heartwarming
//         holiday cards or a photo album to preserve your
//         favorite memories, Pinhole Press is here to help you
//         preserve life's special moments.`,
//     imageUrl: Pinhole,
//     imageAlt: "Pinhole Press",
//   },
// ];
