import PropTypes from 'prop-types';
import { Outlet,  } from "react-router-dom";
import { AddInfo, AddLink, Image, Info, Wrap } from "./MovieCard.styled";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

const DEFAULT_POSTER_URL =
    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MovieCard = ({ info }) => {
    const { title, poster_path, vote_average, overview, genres } = info;

    // console.log('info', info)
    const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
    : DEFAULT_POSTER_URL;
    
    const getGenres = (genres) => {
        if (genres) {
            const genresList = genres.map(genre => genre.name).join(', ');
            // console.log('genresList', genresList);
            return genresList;
        } return;
    };

    const vote = Math.round((vote_average * 10));
    
    return (
        <main>
            <Wrap>
                <Image src={posterUrl} alt={title} width={342} />
                <Info>
                    <h1>{title}</h1>
                    <p>User Score: {vote}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{getGenres(genres)}</p>
                </Info>
            </Wrap>
            <AddInfo>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <AddLink to="cast" >Cast</AddLink>
                    </li>
                    <li>
                        <AddLink to="reviews" >Reviews</AddLink>
                    </li>
                </ul>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </AddInfo>
        </main>
    );
};

MovieCard.propTypes = {
    info: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string,
        })),
    })
};

export default MovieCard;