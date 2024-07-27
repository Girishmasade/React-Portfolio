import React from 'react'
import load from '../../assets/load.gif'

function Spinner() {
  return (
    <div className="text-center align-content-center">
  <img src={load} className="my-3" alt="Loading"/>
</div>
  )
}

export default Spinner
