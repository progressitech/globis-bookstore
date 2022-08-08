import React from "react";
import { BookCard } from "./BookCard";

export function Books() {
  const books = [
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
      {books.map((book) => (
        <BookCard avenger={book} key={book.name} />
      ))}
    </>
  );
}