import { Herobox } from "@/components/Herobox";
import { ImageCard } from "@/components/ImageCard";
import { LearnMore } from "@/components/LearnMore";
import content from "@/public/content.json";

export default function About() {
  return (
    <div>
      <Herobox
        content={content.about.herobox.description}
        imageAlt="A road running through green fields and hills with snow cappe"
        imageSide="right"
        imageUrl={
          "https://images.unsplash.com/photo-1548280210-741c035fad0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D"
        }
        title={content.about.herobox.title}
      />
      {/* <section className="h-screen bg-card flex flex-col">
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
            <Image src={WBE} alt="Women Owned Business certificate" />
            <p>
              {content.about.sectionOne.bottom.content.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </p>
          </div>
        </div>
      </section> */}
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
