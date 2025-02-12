import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import HotstarWelcome from './components/hotstar/HotstarWelcome'
import HotstarHome from './components/hotstar/HotstarHome'
import HotstarMovies from './components/hotstar/HotstarMovies'
import HotstarError404 from './components/hotstar/HotstarError404'
import Play from './components/hotstar/Play'
import FormDemo1 from './components/forms/FormDemo1'
import FormDemo2 from './components/forms/FormDemo2'
import FormDemo3 from './components/forms/FormDemo3'
import FormDemo4 from './components/forms/FormDemo4'


function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<HotstarWelcome/>}></Route>
      <Route path='/home' element={<HotstarHome/>}></Route>
      <Route path='/movies' element={<HotstarMovies/>}></Route>
      <Route path='/*' element={<HotstarError404/>}></Route>
      <Route path='/play/:id' element={<Play/>}></Route>
      <Route path='/formdemo1' element={<FormDemo1/>}></Route>
      <Route path='/formdemo2' element={<FormDemo2/>}></Route>
      <Route path='/formdemo3' element={<FormDemo3/>}></Route>
      <Route path='/formdemo4' element={<FormDemo4/>}></Route>
      </Routes>
    </div>
  )
}
export default App