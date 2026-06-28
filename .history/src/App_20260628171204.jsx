import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import Navigation from "./components/Navigation/Navigation"

import './App.css'

const HomePage = lazy(() => import("./pages/HomePage/Homepage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailesPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {

  return (
    <>
      <Navigation /> 
      <Suspense fallback={<RingLoader color="#d422e3" size={60} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailesPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
