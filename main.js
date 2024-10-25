let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }

  // Присваиваем значение numberOfFilms свойству count объекта personalMovieDB
  personalMovieDB.count = numberOfFilms;
}

// start();

function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log(`непрвильно заполнен фильм № ${i + 1}`);
      i--;
    }
  }
}

// rememberFilms();

function detectLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов...");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы обычный зритель.");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ого, да вы киноман!!!");
  } else {
    console.log("Ошибка!!!!!!");
  }
}

// detectLevel();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}
// showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ""
    );
  }
}

writeYourGenres();

console.log(personalMovieDB);
