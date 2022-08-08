import React from "react";
import { AvengersCard } from "./AvengersCard";

export function Avengers() {
  const avengers = [
    {
      name: "Iron Man",
      image: "https:",
      info: "A wealthy American business magnate, playboy, philanthropist, inventor and ingenious scientist.",
    },
    {
      name: "Hulk",
      image: "https:",
      info: "Following his accidental exposure to gamma rays while saving the life of.",
    },
    {
      name: "Thor",
      image: "https:",
      info: "Thor Odinson or simply Thor, is a fictional character appearing in American comic books publ. ",
    },
    {
      name: "Captain America",
      image: "https:",
      info: 'Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the peak.',
    },
    {
      name: "Captain America",
      image: "https:",
      info: 'Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to t.',
    },
    {
      name: "Captain America",
      image: "https:",
      info: 'Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the pea.',
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
