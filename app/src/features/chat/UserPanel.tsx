import Divider from '@mui/material/Divider'
import React from 'react'

const UserPanel = () => {
  return (
    <div>
      <div className="card">
        <div className="container">
          <h4><b>David</b></h4>
          <p>Interior Designer</p>
        </div>
      </div>
      <Divider />
      <div className="card">
        <div className="container">
          <h4><b>Erik</b></h4>
          <p>Interior Designer</p>
        </div>
      </div>
    </div>
  )
}

export default UserPanel