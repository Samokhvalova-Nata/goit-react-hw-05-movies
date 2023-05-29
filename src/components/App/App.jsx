import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Container } from './App.styled';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'components/ErrorPage/ErrorPage';


const Home = lazy(() => import("../../pages/Home"));
const Movies = lazy(() => import("../../pages/Movies"));
const MoviesDetails = lazy(() => import("../../pages/MoviesDetails"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Container>
      
  );
};
