import { lazy, Suspenses } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import Navigation from "./components/Navigation"

import './App.css'

const HomePage = lazy(() => import("./pages/HomePage/Homepage"));

function App() {

  return (
    <>
     
    </>
  )
}

export default App
