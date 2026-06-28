import { lazy, Suspenses } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import Navigation from "./components/Navigation"

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
     
    </>
  )
}

export default App
