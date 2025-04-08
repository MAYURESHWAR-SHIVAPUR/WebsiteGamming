import React from 'react'
import '../all-css/gamming.css'
const Error = () => {
  function fun(){
    window.history.back()
  }
  return (
    <div className='error'>
        <h1>COULD NOT LOAD THIS PAGE</h1>
        <h1>PLZ TRY AGAIN LATER</h1>
    </div>
  )
}

export default Error