import { fetchMovieCast } from "API";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { CastList, Image, Name, Role } from "./Cast.styled";

const DEFAULT_PROFILE_URL =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';

const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        fetchCast();

        async function fetchCast() {
            setIsLoading(true);
            try {
                const responseMovie = await fetchMovieCast(movieId);

                if (responseMovie.length === 0) {
                    const error = new Error('Sorry, there is no info about movie you are searching for.')
                    setError(error);
                    return;
                };
                setMovieCast(responseMovie);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            };
        };
    }, [movieId]);

    return (
        <>
            {error && Notify.failure(`${error.message}`)}
            {isLoading && <Loader />}
            <CastList>
            {movieCast.map(({ id, profile_path, name, character}) => (
                <li key={id}>
                    <Image
                        src={profile_path ? `https://image.tmdb.org/t/p/w154/${profile_path}` : DEFAULT_PROFILE_URL}
                        alt={name} width={154}/>
                    <Name>{name}</Name>
                    <Role>{character}</Role>
                </li>
            ))}
            </CastList>
        </>
    );
};

export default Cast;