// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  listaDiretores = moviesArray.map( e => e.director);
  return listaDiretores;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter( e => e.director == "Steven Spielberg" && e.genre.filter( x => x == "Drama").length > 0 ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if ( moviesArray.length == 0 ) return 0;
  let wmat = moviesArray.map(e => e.score);
  const total = wmat.reduce( (p, c) => p + ( typeof c == "number" ? c : 0 ) );
  return parseFloat( (total / wmat.length).toFixed(2));
 }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  dramas = moviesArray.filter ( e => e.genre == "Drama" );
  if ( dramas.length == 0 ) return 0;
  scores = dramas.map ( e => e.score );
  let soma = scores.reduce ( ( acumulador, valorAtual ) => acumulador + valorAtual );
  return parseFloat ((soma/dramas.length).toFixed(2) );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort((a, b) => ( 
            a.year == b.year ? (a.title > b.title ? 1 : -1) : (a.year > b.year ? 1 : -1)
  ));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  n1 = moviesArray.sort( (a, b) => ( a.title > b.title ? 1 : -1 )   );
  n2 = n1.map(e => e.title);
  return n2.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  var cor = function (poi) {
      i = JSON.parse(JSON.stringify(poi));
      let e1 = i.duration;
      e1 = e1.replace("h","*60").replace("min","").replace(" ","+");
      i.duration = eval(e1);
      return i; 
  };
  n1 = moviesArray.map( (e) => ( cor(e) ) );
  return n1;

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

  if ( moviesArray.length == 0 ) return null;
  
  if ( moviesArray.length == 1 ) {
    let resp = "The best year was " + moviesArray[0].year + 
        " with an average score of " + moviesArray[0].score + "";
    return resp;
  }

  let listaano = moviesArray.map( e => e.year);
  let ax = new Set(listaano);
  let ab = [...ax];
  let mediaAnual = [];

  for (let i = 0; i < ab.length; i++ ) {
    let filmesCadaAno = moviesArray.filter( e => e.year == ab[i] );
    mediaAnual.push(scoresAverage(filmesCadaAno));
  }

  let melhorAno = 0;
  let melhorNota = 0;
  for (let i = 0; i < mediaAnual.length; i++ ) {
      if ( mediaAnual[i] > melhorNota ) {
         melhorNota = mediaAnual[i];
         melhorAno = ab[i];
      } else { 
           if ( mediaAnual[i] == melhorNota && ab[i] < melhorAno ) {
              melhorNota = mediaAnual[i];
              melhorAno = ab[i];
            }
      }
  }

  let resp = "The best year was " + melhorAno + " with an average score of " + melhorNota + "";

  return resp;
    
}
 

