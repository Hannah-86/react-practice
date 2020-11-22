import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
  return(
    <>
      <p>main</p>
      <Link to="/sub">subページへ</Link>
    </>
  )
}

export default Main
