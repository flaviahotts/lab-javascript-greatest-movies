// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((currentElement) => currentElement.director);
  return allDirectors;
}
//console.log(allDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenMovies = movies.filter((currentElement) => {
    return (
      currentElement.director === 'Steven Spielberg' &&
      currentElement.genre.includes('Drama')
    );
  });

  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const newAvg = movies.map((currentElement) => currentElement.score);
  console.log(newAvg);

  const filteredAvg = newAvg.filter((currentElement) => {
    if (typeof currentElement === 'number') return currentElement;
  });

  const filterReduce = filteredAvg.reduce((a, b) => a + b);
  //return filterReduce;

  const avgMedia = filterReduce / newAvg.length;
  return Number(avgMedia.toFixed(2));
}
//console.log(filteredAverage)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((cur) => {
    return cur.genre.includes('Drama');
  });

  const dramaScores = dramaMovies.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0);
  // ==== Calcular media
  const dramaAvg = dramaScores / dramaMovies.length;
  const dramaAvgFixed = Number(dramaAvg.toFixed(2));

  if (dramaMovies.length === 0) return 0;
  return dramaAvgFixed;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieTitles = movies.map(function (movie) {
    return movie.title;
  });
  movieTitles.sort(function (acc, cur) {
    return acc.localeCompare(cur);
  });
  const first20Movies = movieTitles.splice(0, 20);

  return first20Movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
