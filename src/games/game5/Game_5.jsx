import React, { useEffect, useRef, useState } from 'react'
import {useLocation  , useNavigate } from 'react-router-dom';

import './Game_5.css'
const Game_5 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {level} = location.state
 
  let ball,div,scoreing , mouse_x ,mouse_y;
  let [score , j , i] = Array(3).fill(0)
  let di = 5 , dj = 5;
  
  useEffect(()=>{
    ball = document.getElementsByTagName("canvas")[0]
    scoreing = document.getElementsByClassName("score")[0]
    div = document.getElementsByClassName("block")[0]

  document.addEventListener("mousemove",(event)=>{   
    mouse_x =  event.clientX
    mouse_y = event.clientY
    div.style.left = mouse_x+"px"
})
const scorecount = setInterval(()=>{
    score = score + 1
    scoreing.textContent = `SCORE : ${score}`
  },200)
const timer = setInterval(()=>{
    i = i + di
    j = j + dj
    ball.style.left = i+"px"
    ball.style.top = j+"px"
    if(i> 1430 || i <0){
        di *= -1
    }
    if(j> 600 ||j <0){
        dj *= -1
    }
    if(j > 450 && i > (mouse_x-100) && i <(mouse_x+200) ){
        dj *= -1
    }
// j > 450 && j< 600


    if(j > 500){
      clearInterval(timer)
      clearInterval(scorer)
      clearInterval(scorecount)
      setTimeout(()=>{
        navigate('/result',{state:{gamenumber : 5 , message : score ,leveled :  level}})
      },500)
        }
    },10)
    let scorer = setInterval(()=>{
        dj *= 1.3;
        di *= 0.9;
    },10000)
     },[]) 
    
    
  return (

    <div className='game6outer'>
    <div className="score"></div>
    <canvas></canvas>
    <div className="block"></div>
    </div>
  )
}

export default Game_5