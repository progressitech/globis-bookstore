import React from "react";
import { AvengersCard } from "./AvengersCard";

export function Avengers() {
  const avengers = [
    {
      name: "Iron Man",
      image: "https:",
      info: "A wealthy American business magnate, playboy, philanthropist, inventor and ingenious scientist, Anthony Edward Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually publicly reveals himself to be Iron Man.",
    },
    {
      name: "Hulk",
      image: "https:",
      info: "Following his accidental exposure to gamma rays while saving the life of Rick Jones during the detonation of an experimental bomb, Banner is physically transformed into the Hulk when subjected to emotional stress, at or against his will. This transformation often leads to destructive rampages and to conflicts that complicate Banner's civilian life. The Hulk's level of strength is normally conveyed as proportionate to his level of anger.",
    },
    {
      name: "Thor",
      image: "https:",
      info: "Thor Odinson or simply Thor, is a fictional character appearing in American comic books published by Marvel Comics. The character is based on the Norse deity of the same name, the Asgardian god of thunder whose enchanted hammer Mjolnir enables him to fly and manipulate weather, among his other superhuman attributes. A founding member of the superhero team the Avengers, Thor has a host of supporting characters and enemies. ",
    },
    {
      name: "Captain America",
      image: "https:",
      info: 'Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the peak of human perfection by an experimental "super-soldier serum" after joining the military to aid the United States government\'s efforts in World War II. Near the end of the war, he was trapped in ice and survived in suspended animation until he was revived in modern times. Although Captain America often struggles to maintain his ideals as a man out of his time, he remains a highly respected figure both with the American public and in the superhero community, which includes becoming the long-time leader of the Avengers.',
    },
  ];
  
  return (
    <>
        {avengers.map((avenger) => (
          <AvengersCard avenger={avenger} key={avenger.name} />
        ))}
    </>
  );
}

