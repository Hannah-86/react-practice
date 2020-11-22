import React from 'react'
import {Link} from 'react-router-dom'

import './member.css'

function Main() {
  return(
    <div className="body">
      <h1>main</h1>
      <Link to="/sub">subページへ</Link>
    </div>
  )
}

export default Main
