import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { Image, Info, ItemLink, MoviesItem } from './MoviesListItem.styled';

const DEFAULT_POSTER_URL =
    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MoviesListItem = ({ id, url, title }) => {
    const location = useLocation();

    return (
        <MoviesItem>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
                <Image src={url ? `https://image.tmdb.org/t/p/w342/${url}` : DEFAULT_POSTER_URL} alt={title} loading="lazy" />
                <Info>{title}</Info>
            </ItemLink>
        </MoviesItem>
    );
};

MoviesListItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
};

export default MoviesListItem;
