// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  return moviesArray.map(e => e.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(e => e.director == "Steven Spielberg" && e.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if ( moviesArray.length == 0 ) return 0;
  let total = moviesArray.reduce( (total, elemento) => total + ( elemento.score || 0) , 0 );
  return parseFloat( ( total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(moviesArray.filter(e=>e.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   return moviesArray.slice().sort((a, b) => ( 
     a.year == b.year ? (a.title > b.title ? 1 : -1) : (a.year > b.year ? 1 : -1)
   ));  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(e=>e.title).sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map( e => { 
      i = {...e};
      i.duration = eval(i.duration.replace("h","*60").replace("min","").replace(" ","+"));
      return i; 
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

  if ( moviesArray.length == 0 ) return null;
  if ( moviesArray.length == 1 ) return "The best year was " + moviesArray[0].year + " with an average score of " + moviesArray[0].score + "";

  const listaAnos = [...(new Set (moviesArray.map(e => e.year)))];
  const listaMediaAnual = listaAnos.map( ano => scoresAverage(moviesArray.filter(i => i.year == ano)) );
  const melhorIndice = listaMediaAnual.reduce( (acu, ele, ind, arr) => ele < arr[acu] ? acu : ( ele > arr[acu] ? ind : ( listaAnos[acu] >= listaAnos[ind] ? acu : ind ) ) );

  return "The best year was " + listaAnos[melhorIndice] + " with an average score of " + listaMediaAnual[melhorIndice] + "";
    
}
 
