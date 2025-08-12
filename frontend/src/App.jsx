import { useState } from 'react'
//for routing
import {Routes, Route} from 'react-router-dom'

//parts of website
import { Home } from './components/sections/Home'
import { Navbar } from './components/Navbar'
import {Players} from './components/sections/Players';
import { Position } from './components/sections/Position';
import { FilteredPosition } from './components/sections/FilteredPosition';
import { Teams } from './components/sections/Teams';
import {FilteredTeam} from './components/sections/FilteredTeam';
import { Search } from './components/sections/Search';


import './App.css'

function App() {


  return (
    <>
    <Navbar/>
    {/* Route Paths */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/players" element={<Players />}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path="/teams/:team" element={<FilteredTeam/>}/>
      <Route path="/search" element={<Search/>}/>

      <Route path="/position" element={<Position />}/>
      <Route path="/positions/:position" element={<FilteredPosition/>}/> 
      

    </Routes>
    
    
    </>
  )
}

export default App
