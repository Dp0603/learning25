import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import HotstarWelcome from './components/hotstar/HotstarWelcome'
import HotstarHome from './components/hotstar/HotstarHome'
import HotstarMovies from './components/hotstar/HotstarMovies'
import HotstarError404 from './components/hotstar/HotstarError404'


function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<HotstarWelcome/>}></Route>
      <Route path='/home' element={<HotstarHome/>}></Route>
      <Route path='/movies' element={<HotstarMovies/>}></Route>
      <Route path='/*' element={<HotstarError404/>}></Route>
      </Routes>
    </div>
  )
}

export default App
