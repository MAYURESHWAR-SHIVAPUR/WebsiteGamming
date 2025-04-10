import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import {useState} from 'react'

import Home from './Home'
import Error from './games/pages/Error'
import Navbar from './games/pages/Navbar'
import Start from './games/pages/Start'
import Result from './games/pages/Result'
import Game_1 from './games/game1/Game_1'
import Game_2 from './games/game2/Game_2'
import Game_3 from './games/game3/Game_3'
import Game_4 from './games/game4/Game_4'
//import Game_5 from './games/game5/Game_5'
import Game_6 from './games/game5/Game_5'
import './index.css'
function App() {
let num = localStorage.getItem("coins")
if(num == "NaN"){
  console.log("mayur")
  localStorage.setItem("coins",30)
}
const [coin ,setCoin] = useState(num)
const router = createBrowserRouter(
  
  [{
    path:'/',
    element: (<div>
       <Navbar  coin={coin}/>
       <Home /></div>),
  },
  {
    path:'/Start',
    element: (
      <div>
      <Navbar  coin={coin}/>
      <Start />      
      </div>
  ),
    errorElement: <Error />
  },
  {
    path:'/Result',
    element: (
      <div>
      <Navbar coin={coin}/>    
      <Result setCoin={setCoin}/>
      </div>
  ),
    errorElement: <Error />
  },
  {
    path:'/Game_1',
    element:<Game_1 />,
    errorElement: <Error />
  },
  {
    path:'/Game_2',
    element:<Game_2 />,
    errorElement: <Error />
  },
  {
    path:'/Game_3',
    element:<Game_3 />,
    errorElement: <Error />
  },
  {
    path:'/Game_4',
    element:<Game_4 />,
    errorElement: <Error />
  },
  {
    path:'/Game_5',
    element:<Game_6 />,
    errorElement: <Error />
  },

  {
    path:'/Game_6',
    // element:<Game_5 />,
    element: <Error />
  },
]
)

  
  const [show ,setShow] = useState(false)
  setTimeout(() => {
    setShow(true)
  }, 3500);
  return (
      <div> 
        {show?(<RouterProvider router={router}/>):(
          <div className='heading'>
              <h1>WELCOME</h1>
            <h1>GAMMING HUB</h1>
            
          </div>
        )}
      </div>
  )
}

export default App
