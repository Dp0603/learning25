import React from 'react'
import { useParams } from 'react-router-dom'

const Play = () => {
    const id = useParams().id;
  return (
    <div>
      <h1>Playing.................{id}</h1>
    </div>
  )
}

export default Play
