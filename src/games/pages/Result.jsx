import React, { useEffect } from 'react'
import '../all-css/gamming.css'
import { useLocation,useNavigate } from 'react-router-dom'
const Result = ({setCoin}) => {
  let val;
  let message1;
  let message2;
  let coins;
  let num;
  const location = useLocation()
  const navigate = useNavigate()
  let {gamenumber,message,leveled} = location.state
  if(leveled == undefined){
    leveled = 3
  }
  if(gamenumber == 1){
    val = "ROCK PAPER SISSIOR"
    message1 = `${message} WON`
    if(message == "YOU"){
      num = parseInt(10)
      add()
    }
    else{
      num = parseInt(-10)
      sub()
    }
  }
  if(gamenumber == 5){
    val = 'BOUNCING BUG'
    num = Math.floor(message/25)
    message1 = `SCORE : ${message}`
    coins = num
  }
  if(gamenumber == 4){
    val = "DINO SURVIAL"
    num = Math.floor(message / 25)
    message1 = `SCORE : ${num}`
    coins = num
  }

  if(gamenumber == 3){
    val = "BIRD SHOOTING GAME"
    message1 = `SCORE ${message}`
     num = Math.floor(parseInt(message)/2)
     add()
  }
  if(gamenumber == 2){
    val = "MEMORY GAME"
    message1 = `SCORE ${message}`
    num = -message + 20
    add()
  }
  if(leveled == 1){
     message2 = 'DIFICULTY : EASY'
  }
  else if(leveled == 2){
    message2 = "DIFICULTY : MEDIUM"
  }
  else if(leveled == 3|| leveled == undefined){
    message2 = "DIFICULTY : EVIL"
  }



  function add(){
      coins = num * parseInt(leveled)
  }
  function sub(){
    coins = num * leveled
  }
  
  useEffect(()=>{     
      setCoin( parseInt(localStorage.getItem("coins")) + coins)
  },[])
  return (
    <div className='startdiv'>
    <div>
      <section1>
        <h1>{val}</h1>
      </section1>
      <section2>
        <button>{message1}</button>
        <button>{message2}</button>
        <button onClick={game}>RETRY</button>
        <button onClick={goback}>HOME</button>
      </section2>
    </div></div>
  )
  function game(){
  navigate('/start' , {state:{number : gamenumber}})
  }
  function goback(){
    navigate('/')
  }
}

export default Result