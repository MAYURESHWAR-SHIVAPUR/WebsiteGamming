import { createContext } from 'react';
import React, {useRef} from 'react'
import './Game_3.css'
import {useLocation  , useNavigate } from 'react-router-dom';
const Game_3 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {level} = location.state
  let finish;
  if(level == 1){
    finish = 1500
  }
  else if(level == 2){
    finish = 1000
  }
  else if(level == 3|| level == undefined){
    finish = 500
  }


  let scoreref = useRef(0)
  let timeref = useRef(30)

  //seting all intervals or function calls
  let start = setInterval(bird,finish)
  let stop = setInterval(timer,1000)
  
  //display bird on game-area
  function bird(){
    document.getElementsByClassName("bird")[0].style.visibility = "visible"
    let x = Math.random()*450;
    let y = Math.random()*1400;
    document.getElementsByClassName("bird")[0].style.top = x+"px"
    document.getElementsByClassName("bird")[0].style.left= y+"px"
    document.getElementsByClassName("bird")[0].style.color = "transparent"
  }
  //display aim on mouse
  document.addEventListener("mousemove",(e)=>{
    let moveX = e.clientX;
    let moveY = e.clientY;
    // document.getElementsByClassName("wepon")[0].style.left = (moveX - 200)+"px"
    document.getElementsByClassName("aim")[0].style.left = (moveX - 77)+"px"
    document.getElementsByClassName("aim")[0].style.top = (moveY - 225)+"px"
}) 

  // on hitting the bird
    function hit(){
      scoreref.current++
      document.getElementsByClassName("bird")[0].style.visibility = "hidden"
      document.getElementById("score").textContent = `score : ${scoreref.current}`
      document.getElementsByClassName("bird")[0].style.color = "black"

    }
  //setting time
    function timer(){
      timeref.current--

      document.getElementById("stopwatch").textContent=`time left : ${timeref.current}`
      if(timeref.current==0){
        clearInterval(start)
        clearInterval(stop)
        document.getElementsByClassName("bird")[0].style.visibility = "hidden"
        setTimeout(()=> navigate("/Result",{state:{gamenumber:3,message: scoreref.current,leveled : level }}),1000)
        props.finscore = scoreref.current
        console.log(props.finscore)
      }
    }
  return (

    <div className='area'>      
      <div className='score-area'>
        <h1 id='score'>SCORE : </h1>
        <h1 id='stopwatch'>TIME LEFT: sec</h1>
      </div>
      <div className='game-area'>
         <div onClick={hit} className='bird'></div>
         <div className='aim'></div>
      </div>
      {/* <div className='gun-area'>
        <div className='wepon'></div>
      </div> */}
    </div>
  )
}

export default Game_3