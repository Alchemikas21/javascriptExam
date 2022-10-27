/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    const isExpensive = 100_000_000;

    this.wasExpensive = () => {
      const createdparagraphElement = document.createElement("p");
      document.body.appendChild(createdparagraphElement);
      if (budget > isExpensive) {
        createdparagraphElement.innerText = "the movie is expensive";
      } else {
        createdparagraphElement.innerText = "the movie is inexpensive";
      }
    };
  }
}

const firstMovie = new Movie("movie", "director", 100_000_001);
firstMovie.wasExpensive();

const secondMovie = new Movie("movie", "director", 100_000);
secondMovie.wasExpensive();
