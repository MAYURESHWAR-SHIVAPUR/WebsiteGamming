

import React from 'react'
import './Game_1.css'
import {useLocation, useNavigate} from 'react-router-dom'
import robo from './robo.png'
import you from './you.png'
import rock from './rock.png'
import paper from './paper.png'
import sissior from './sissior.png'


const Game_1 = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {level} = location.state
  let finish;
  let leveling;
  if(level == 1){
    leveling = 1
    finish = 1
  }
  else if(level == 2){
    leveling = 2
    finish = 4
  }
  else{
    leveling = 3
    finish = 8
  }
  console.log(leveling)
  let scorePy = 0
  let scoreCo = 0
  let winner;
  // document.getElementsByClassName('vs')[0].textContent = "v/s"
  function funcalling(show){
    
    let i = 4;
    let stopvs = setInterval(vsrunner,200)
    function vsrunner(){
      if(i>1){
        i = i -1
      document.getElementsByClassName('vs')[0].textContent = i
      }
      else{
        clearInterval(stopvs)
        i = 4
      }
      
    }  
    



    if(scorePy==finish||scoreCo==finish){
      // <Link to={'./Result'}></Link>
      
    }
    else{
    let ans = document.getElementsByClassName("ansPy")[0].style
    ans.border = "5px solid yellow"
    ans.backgroundImage = `url(${you})`
    ans.backgroundSize = "cover" 

    let com = document.getElementsByClassName("ansCo")[0].style
    com.border = "5px solid yellow"
    com.backgroundImage =  `url(${robo})`
    com.backgroundSize = "cover"



    setTimeout(()=>{
    let choise = ["rock" , "paper", "sissior"]
    let ansPy =  show;
    let ansCo = choise[(Math.floor(Math.random()*3))]
    ans.backgroundImage = `url(/src/games/game1/${show}.png)`
    ans.backgroundSize = 'cover';
    com.backgroundImage = `url(/src/games/game1/${ansCo}.png)`
    com.backgroundSize = 'cover';
    if(ansPy==undefined){
      return
    }
    else if(ansPy == ansCo){
        ans.border = '5px solid blue'
        com.border = '5px solid blue'
        ans.boxShadow = 'blue 0px 0 52px 7px'    
      com.boxShadow = 'blue 0px 0 52px 7px'
      document.getElementsByClassName('vs')[0].textContent = 'TIE'
    }
    else if(((ansPy=="rock")&&(ansCo=="sissior")||(ansPy=="paper")&&(ansCo=="rock")||(ansPy=="sissior")&&(ansCo=="paper"))){
      ans.border = '5px solid green'
      com.border = '5px solid red'
      ans.boxShadow = 'green 0px 0 52px 17px'    
      com.boxShadow = 'red 0px 0 52px 10px' 
      document.getElementsByClassName('vs')[0].textContent = 'WON'
      scorePy += 1
      scoreCo += 0
      if(scorePy==finish){
        gameover('YOU')
      }
  }
  else{
    ans.boxShadow = 'red 0px 0 52px 17px'    
    com.boxShadow = 'green 0px 0 52px 10px'
    ans.border = '5px solid red'    
    com.border = '5px solid green'
    document.getElementsByClassName('vs')[0].textContent = 'LOST'
    scorePy += 0
    scoreCo += 1
    if(scoreCo==finish){
      gameover('COMPUTER')
    }
}

function gameover(val){
  document.getElementsByClassName('vs')[0].textContent = 'WAIT'
  setTimeout(()=>{
    navigate('/Result',{state:{gamenumber:1,message: val,leveled : leveling }})
  },1000)
}
document.getElementsByClassName("scorePy")[0].textContent = scorePy
document.getElementsByClassName("scoreCo")[0].textContent = scoreCo},1000)
  }
  }
  return (
    <div className='game1-back'>
      <div className='outer'>
    <h1>ROCK PAPER SCISSOR</h1>
    <section7>
        <section3>
        <h3>YOU</h3>
        <div className="scorePy">0</div>
    </section3>
     <section4>
        <h3>COMPUTER</h3>
        <div className="scoreCo">0</div>
    </section4>
    </section7>
    <section5>
        <div className="ansPy"></div>
        <h3 className='vs'>V/S</h3>
        <div className="ansCo"></div>
    </section5>
    <section6>
        <button className='rock' onClick={()=>{funcalling("rock")}}></button>
        <button className='paper' onClick={()=>{funcalling("paper")}}></button>
        <button className='sissor' onClick={()=>{funcalling("sissior")}}></button>
    </section6>
    </div>
    </div>
    
  )
  
}
export default Game_1