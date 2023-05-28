import PropTypes from 'prop-types';
import MoviesListItem from "components/MoviesListItem/MoviesListItem";
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
    return (
        <List>
            {movies.map(({ id, title, poster_path}) => (
                <MoviesListItem
                    key={id}
                    id={id}
                    title={title}
                    url={poster_path} />
            ))}
        </List>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array,
};

export default MoviesList;