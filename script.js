'use strict';

const PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        PersonalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');

        while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count)) {
            PersonalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        }
    },
    RememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Название фильма', ''),
                  b = prompt('Оцените его по 10 бальной шкале', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                PersonalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (PersonalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (PersonalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    ShowMyDB: function (hidden) {
        if (!hidden) {
            console.log(PersonalMovieDB);
        }
    },

    ToggleVisibleMyDB: function () {
        if (PersonalMovieDB.privat) {
            PersonalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    WriteYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres == '' || genres == null) {
                console.log('Вы введи некорренетные данные или не ввели их вовсе');
                i--;
            } else {
                PersonalMovieDB.genres = genres.split(', ');
                PersonalMovieDB.genres.sort();
            }
        }
        PersonalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });  
    }
};