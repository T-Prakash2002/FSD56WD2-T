class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG13");
    }
  }

  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");

  const movies = [
    new Movie("Finding Nemo", "Pixar", "PG13"),
    new Movie("The Lion King", "Disney", "G"),
    new Movie("The Dark Knight", "Warner Bros.", "PG13"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("Shrek", "DreamWorks", "PG"),
    new Movie("Frozen", "Disney", "PG"),
    casinoRoyale
  ];
  
  const pgMovies = Movie.getPG(movies);

  console.log("PG Movies:", pgMovies);
  
/**   
 * Output

PG Movies: [
    Movie { title: 'Finding Nemo', studio: 'Pixar', rating: 'PG13' },
    Movie {
      title: 'The Dark Knight',
      studio: 'Warner Bros.',
      rating: 'PG13'
    },
    Movie {
      title: 'Casino Royale',
      studio: 'Eon Productions',
      rating: 'PG13'
    }
  ]
  */

  