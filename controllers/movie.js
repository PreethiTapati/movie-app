import {v4} from 'uuid';

let movies = [
    {
       id: '1',
       title: 'Dark',
       year: '2017-2020',
       genre:'Sci-Fi',
       src : 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg' ,
       Director : 'Baran bo Odar' ,
       Description:'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations' 
    },
    {
        id: '2',
        title:  'Star Trek',
        year:'2009',
        genre:'Sci-Fi',
        src :'https://m.media-amazon.com/images/I/61X1yhQTRoL._AC_SY879_.jpg',
        Director :'Gene Roddenberry',
        Description:'The brash James T. Kirk tries to live up to his fathers legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.'
    },
    {
        id: '3',
        title: 'Avatar',
        year:'2009',
        genre:'Sci-Fi',
        src :'https://i.etsystatic.com/34708433/r/il/15fb83/4498029997/il_1588xN.4498029997_cjib.jpg',
        Director :'James Cameron',
        Description:'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
    },
    {
        id: '4',
        title: 'Harry Potter',
        year:'2001',
        genre:'Fantasy, Adventure',
        src :'https://img.posterstore.com/zoom/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg',
        Director :'Chris Columbus (1–2)',
        Description:'Harry, a young wizard who discovers his magical heritage on his eleventh birthday, goes to Hogwarts School of Witchcraft and Wizardry to learn magic.'
    },
    {
        id: '5',
        title: 'Barbie',
        year:'2023',
        genre:'Comedy',
        src :'https://www.themoviedb.org/t/p/original/bW0gPbSRXdXqKRNgeHbXsQ3iZP3.jpg',
        Director :'Greta Gerwig',
        Description:'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.'
    },
    {
        id: '6',
        title: 'Home Alone',
        year:'1990',
        genre:'Comedy, Family',
        src :'https://m.media-amazon.com/images/I/81O97m+l4uL.jpg',
        Director :'Chris Columbus',
        Description:'Eight-year-old Kevin is accidentally left behind when his family leaves for France. At first, he is happy to be in charge, but when thieves try to break into his home, he tries to put up a fight.'
    },
    {
        id: '7',
        title: 'Money Heist',
        year:'2017- 2021',
        genre:'Action, Crime , Drama',
        src :'https://scadconnector.com/wp-content/uploads/2021/09/money-heist-season-5.jpeg',
        Director :'Álex Pina',
        Description:'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.'
    },
     {
        id: '8',
        title: 'Mayabazar',
        year: '1957',
        genre:'Drama',
        src : 'https://upload.wikimedia.org/wikipedia/en/b/bb/Mayabazar.jpg',
        Director: 'K. V. Reddy',
        Description: ' "Mayabazar" is a mythological fantasy film that tells the story of the Pandava and Kaurava families from the Indian epic Mahabharata.'
    },
    {
        id: '9',
        title: 'Major',
        year: '2022 ',
        genre:'Biography',
        src : 'https://m.media-amazon.com/images/M/MV5BYWI2ODNjMDktZjcxNS00YThkLTljMDUtMGIyOTg3ZjY2MjlhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
        Director: 'Sashi Kiran Tikka',
        Description: ' The movie is about Major Sandeep Unnikrishnan life who faces his biggest battle when he joins the task force to save the occupants at the Taj Hotel attacked by a terrorist group.'
    },
    {
        id: '10',
        title: 'Sagara Sangamam',
        year: '1983 ',
        genre:'Drama, Musical',
        src : 'https://m.media-amazon.com/images/M/MV5BMzVmNzU1YmEtMDQzYi00NGE5LTlmMjEtOGIzNTJjNGFlODhiXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg',
        Director: 'K. Viswanath',
        Description: ' A classical dancer, Balakrishna, faces many struggles, but is eventually redeemed'
    },
];

const moviesControllers = {
    getMovies: (req, res) => {
        res.status(200).render('movies', { movies: movies });
    },
    getMovie: (req, res) => {
    const { id } = req.params;
    const movieExist = getMovieById(id);

    if (movieExist) {
        res.status(200).render('movie', { movie: movieExist });
    } else {
        res.status(404).render('404', {
            message: `Movie with id ${id} does not exist`,
            title: '📽️ Cine W▶rld'
        });
    }
},

    postMovie: (req, res) => {
        const { title, year, genre, src, Director, Description } = req.body;
        const newMovie = {
            id: v4(),
            title: title,
            year: year,
            genre: genre,
            src: src,
            Director: Director,
            Description: Description
        };
        movies.push(newMovie);
        res.status(201).redirect('/api/movies'); // Redirect to the movies list
    },
    putMovie: (req, res) => {
        const { id } = req.params;
        const { title, year, genre, src, Director, Description } = req.body;

        const movieExist = getMovieById(id);

        if (movieExist) {
            const updatedMovie = {
                id,
                title,
                year,
                genre,
                src,
                Director,
                Description
            };
            const movieToUpdate = movies.find((movie) => movie.id === id);

            if (movieToUpdate) {
                movieToUpdate.id = updatedMovie.id;
                movieToUpdate.title = updatedMovie.title;
                movieToUpdate.year = updatedMovie.year;
                movieToUpdate.genre = updatedMovie.genre;
                movieToUpdate.src = updatedMovie.src;
                movieToUpdate.Director = updatedMovie.Director;
                movieToUpdate.Description = updatedMovie.Description;
                res.status(200).redirect('/api/movies'); // Redirect to the movies list
            } else {
                res.status(500).render('error', {
                    message: `Failed to update movie with id: ${id}`,
                    title: '📽️ Cine W▶rld'
                });
            }
        } else {
            res.status(404).render('404', {
                message: `Movie with id ${id} does not exist`,
                title: '📽️ Cine W▶rld'
            });
        }
    },
    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = getMovieById(id);

        if (movieExist) {
            movies = movies.filter((movie) => movie.id !== id);
            res.status(200).redirect('/api/movies'); // Redirect to the movies list
        } else {
            res.status(404).render('404', {
                message: `Movie with id ${id} does not exist`,
                title: '📽️ Cine W▶rld'
            });
        }
    }
};

export default moviesControllers;
