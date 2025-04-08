
import '../all-css/gamming.css'
const Navbar = ({coin}) => {
    localStorage.setItem("coins",coin)
  return (
    <div className='navbar'>
        <div className='workplace'>
            <div className='border1'>
                <div className='userimage'></div>
                <h4>MAYURESHWAR</h4>       
            </div>
            <div className='border2'>
                <div className='coins'>

                </div>
                <h4>{coin}</h4>
                <button>+</button> 
            </div>
            
        </div>
    </div>
  )
}

export default Navbar