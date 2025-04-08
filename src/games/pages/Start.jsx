import React from 'react'
import '../all-css/gamming.css'
import { useLocation ,useNavigate} from 'react-router-dom'
const Start = () => {
  const location = useLocation()
  const {number} = location.state
  const navigate = useNavigate()
  let value;
  let input

  if(number == 1 ){
    value ="ROCK PAPER SISSOR"
  }
  else if(number == 2){
    value = "MEMORY GAME"
  }
  else if(number == 3){
    value = "BIRD SHOOTING GAME"
  }
  else if(number == 4){
    value = "DINO SURVIVAL"
  }
  else if(number == 5){
    value = 'BOUNCING BUG'
  }

  function checkinput(){
    input = document.getElementsByClassName("slider")[0].value
  }
  
  return (
    <div className='startdiv'>
    <div>
      <section1>
        <h1>{value}</h1>
      </section1>
      <section2>
        <button onClick={calling}>START</button>
        <section8>
          <section9><span>EASY</span><span>MEDIUM</span><span>EVIL</span></section9>
          
          <input type="range" min="1" max="3" className='slider' onChange={checkinput}></input>
        </section8>
        
        <button onClick={goback}>GO BACK</button>
        <button onClick={error}>MORE</button>
      </section2>
    </div></div>
  )
  function calling(){
    navigate(`/game_${number}`, {state:{level : input}})
  }
  function goback(){
    navigate("/")
  }
  function error(){
    navigate("/")
  }
}

export default Start