import axios from 'axios';

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.



const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4bf7f5d1496efdab827169a7539a0778';

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchMoviesWithQuery = async (query) => {
    const searchParams = new URLSearchParams({
        include_adult: false,
        language: 'en-US',
        page: 1,
        query: query,
        api_key: API_KEY,
    });

    const response = await axios.get(`${BASE_URL}search/movie?${searchParams}`);
    return response.data.results;
};

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export const fetchMovieCast = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
};

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmY3ZjVkMTQ5NmVmZGFiODI3MTY5YTc1MzlhMDc3OCIsInN1YiI6IjY0NzEyN2RhZGQ3MzFiMDExNzhlYzZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RrkdZNtfUqvCldRS1DqYNffe8qOP4511snz_qPb9ze0'
//   }
// };

// fetch('https://api.themoviedb.org/3/movie/447277/reviews?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const fetchMovieReview = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
    return response.data.results;
};

// class FetchTheMovieDbAPI {
//     #period = 'day';
//     #BASE_URL = 'https://api.themoviedb.org/3/';
//     #API_KEY = '4bf7f5d1496efdab827169a7539a0778';
//     poster_sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];

//     search = null;
//     page = 1;

//     async fetchPopMovies() {
//         try {
//         return await axios.get(
//             `${this.#BASE_URL}trending/movie/${this.#period}?api_key=${this.#API_KEY}&page=${this.page}`
//         );
//         } catch (error) {
//         throw new Error(error.message);
//         }
//     };

//     async fetchMovie(searchQuery) {
//         try {
//             const response = await axios.get(`${this.#BASE_URL}/search/movie?api_key=${this.#API_KEY}&language=en-US&page=${this.page}&query=${searchQuery}`);
//             return response.data;
//         } catch (error) {
//             throw new Error(error.message);
//         };
//     };
// }

// export const api = new FetchTheMovieDbAPI();