import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
// import { Notify } from "notiflix";
import { fetchMovieDetails } from "API";
import Loader from "components/Loader/Loader";
import MovieCard from "components/MovieCard/MovieCard";
import { BackLink } from "./MoviesDetails.styled";


const MoviesDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? "/");

    useEffect(() => {
        fetchhMoviesInfo();
        async function fetchhMoviesInfo() {
            setIsLoading(true);
            try {
                const responseMovie = await fetchMovieDetails(movieId);

                if (responseMovie.length === 0) {
                    const error = new Error('Sorry, there is no info about movie you are searching for.')
                    setError(error);
                    return;
                };
                setMovieDetails(responseMovie);
            } catch (error) {
                console.log('error', error)
                setError(error);
            } finally {
                setIsLoading(false);
            };
        };
    }, [movieId]);

    return (
        <>
            {error && <Navigate to='/404'/>}
            {/* {error && Notify.failure(`${error.message}`)} */}
            <BackLink to={backLinkHref.current}>Back</BackLink>
            {isLoading && <Loader />}
            <MovieCard info={movieDetails} />
        </>
    );
};

export default MoviesDetails;