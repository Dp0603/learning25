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
import HWFormDemo1 from './components/forms/HWFormDemo1'
import HWFormDemo2 from './components/forms/HWFormDemo2'
import HWFormDemo3 from './components/forms/HWFormDemo3'
import HWFormDemo4 from './components/forms/HWFormDemo4'
import { SearchMovie } from './components/apis/omdb/SearchMovie'
import { MovieDetails } from './components/apis/omdb/MovieDetails'
import { ApiDemo1 } from './components/apis/ApiDemo1'



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
      <Route path='/hwformdemo1' element={<HWFormDemo1/>}></Route>
      <Route path='/hwformdemo2' element={<HWFormDemo2/>}></Route>
      <Route path='/hwformdemo3' element={<HWFormDemo3/>}></Route>
      <Route path='/hwformdemo4' element={<HWFormDemo4/>}></Route>
      <Route path="/apidemo1" element ={<ApiDemo1/>}></Route>
      <Route path='/searchmovies' element={<SearchMovie/>}></Route>
      <Route path='/moviedetails/:id' element={<MovieDetails/>}></Route>
      </Routes>
    </div>
  )
}
export default App