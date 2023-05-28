import { fetchMovieReview } from "API";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorHandler, ReviewsList } from "./Reviews.styled";

const Reviews = () => {
    const [movieReview, setMovieReview] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        fetchReviews();
        async function fetchReviews() {
            setIsLoading(true);
            try {
                const responseMovie = await fetchMovieReview(movieId);
                if (responseMovie.length === 0) {
                    const error = new Error('Sorry, we do not have any reviews for this movie.')
                    setError(error);
                    return;
                };
                setMovieReview(responseMovie);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            };
        };
    }, [movieId]);

    return (
        <>
            {error && <ErrorHandler>Sorry, we do not have any reviews for this movie.</ErrorHandler>}
            {isLoading && <Loader />}
            <ReviewsList>
                {movieReview.map(({ id, author, content}) => (
                    <li key={id}>
                        <h4>Author: {author}</h4>
                        <p>{content}</p>
                    </li>
                ))}
            </ReviewsList>
        </>
    );
};

export default Reviews;