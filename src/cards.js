import { shuffle } from "./shuffle.js";

const imageUrl = (name) => new URL(`./img/${name}`, import.meta.url).href;

export const CARD_IMAGES = [
  { id: "dino1", src: imageUrl("dinosaur1.png"), alt: "Dinosaur 1" },
  { id: "dino2", src: imageUrl("dinosaur2.png"), alt: "Dinosaur 2" },
  { id: "dino3", src: imageUrl("dinosaur3.png"), alt: "Dinosaur 3" },
  { id: "dino4", src: imageUrl("dinosaur4.png"), alt: "Dinosaur 4" },
  { id: "dino5", src: imageUrl("dinosaur5.png"), alt: "Dinosaur 5" },
  { id: "dino6", src: imageUrl("dinosaur6.png"), alt: "Dinosaur 6" },
  { id: "dino7", src: imageUrl("dinosaur7.png"), alt: "Dinosaur 7" },
  { id: "dino8", src: imageUrl("dinosaur8.png"), alt: "Dinosaur 8" },
];

export function createDeck() {
  const pairs = CARD_IMAGES.flatMap((image, index) => [
    { uid: index * 2, ...image },
    { uid: index * 2 + 1, ...image },
  ]);
  return shuffle(pairs);
}
