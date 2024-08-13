export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster: "/images/airplane.png",
    name: "Airplane",
  },
  {
    poster: "/images/family-man.png",
    name: "Family Man",
  },
  {
    poster: "/images/laboratory.png",
    name: "Laboratory",
  },
  {
    poster: "/images/napoleon.png",
    name: "Napoleon",
  },
  {
    poster: "/images/person-in-darkness.png",
    name: "Person in Darkness",
  },
  {
    poster: "/images/scary-building.png",
    name: "Scary Building",
  },
  {
    poster: "/images/stars.png",
    name: "Stars",
  },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
