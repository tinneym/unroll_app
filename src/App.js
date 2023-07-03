import './App.css';
import Home from "./pages/Home.js"
import React from 'react';
import Study from "./pages/Study.js"
import FindSpot from "./pages/FindSpot.js"
import LoadingPage from './pages/LoadingPage';
import WalkingPage from './pages/WalkingPage';
import { Route, Routes, HashRouter } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path = "/" element = {<Home />} />
      </Routes>
      <Routes>
        <Route exact path = "/study" element = {<Study />} />
      </Routes>
      <Routes>
        <Route exact path = "/findSpot" element = {<FindSpot />} />
      </Routes>
      <Routes>
        <Route exact path = "/loading" element = {<LoadingPage />} />
      </Routes>
      <Routes>
        <Route exact path = "/walking" element = {<WalkingPage />} />
      </Routes>
    </HashRouter>
  )
}

