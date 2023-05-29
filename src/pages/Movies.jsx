import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Notify } from "notiflix";
import { fetchMoviesWithQuery } from '../API';
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import SearchBox from "components/SearchBox/SearchBox";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        if (query) fetchSearchMovies();

        async function fetchSearchMovies() {
            setIsLoading(true);
            try {
                const responseMovies = await fetchMoviesWithQuery(query);

                if (responseMovies.length === 0) {
                    const error = new Error('Sorry, there are no movies matching your search query.')
                    setError(error);
                    return;
                };

                setMovies(responseMovies);
            } catch (error) {
                setError(error);
            } finally {
        setIsLoading(false);
        };
        };
    }, [query])
    
    const updateQueryString = searchQuery => {
        if (searchQuery === query) {
        Notify.failure(`This word has already been searched for. Try another one.`)
        return;
        };
        setSearchParams({ query: searchQuery });
    };

    return (
        <main>
            {error && Notify.failure(`${error.message}`)}
            <SearchBox value={query} onSubmit={updateQueryString} />
            {isLoading && <Loader />}
            <MoviesList movies={movies} />
        </main>
    );
};

export default Movies;