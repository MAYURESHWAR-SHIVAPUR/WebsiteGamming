import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='outer'>
        <Link to='/Start' state={{ number: 1 }}>
          <div className='game1'></div>
        </Link>
        <Link to='/Start' state={{ number: 2 }}>
          <div className='game2'>MEMORY GAME</div>
        </Link>
        <Link to='/Start' state={{ number: 3 }}>
          <div className='game3'></div>
        </Link>
        <Link to='/Start' state={{ number: 4 }}>
          <div className='game4'></div>
        </Link>
        <Link to='/Start' state={{ number: 5 }}>
          <div className='game6'>BOUNCING BUG</div>
        </Link>
        <Link to='/'>
          <div className='game5'>UPCOMING    ICEAGE EVENTS</div>
        </Link>

      </div></div>
  )
}

export default Home