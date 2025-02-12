import React from 'react'
import { Link } from 'react-router-dom'

const HotstarMovies = () => {
  return (
    <div style={{textAlign:'center', color:'pink', backgroundColor:'brown', height:'100px',}}>
      <h1>Movies Piroooooooz</h1>
      <ul>
        <li>
          <h1><Link to ="/play/Avengers">Avengers</Link></h1>
        </li>
        <li>
          <h1><Link to ="/play/Avatar">Avatar</Link></h1>
        </li>
        <li>
          <h1><Link to ="/play/X-men">X-men</Link></h1>
        </li>
      </ul>
    </div>
  )
}

export default HotstarMovies
