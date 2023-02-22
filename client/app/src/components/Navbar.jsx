import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {

console.log(user)
const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
}

  return (
    <div className='navbar'>
        <span className='logo'><Link className ='link' to='/'>Your Social Sign In</Link></span>
        {user ? (
        <ul className='list'>
            <li className='listitem'>
                <img src='https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='avatar'/>
            </li>
            <li className='listitem'>
                {user.name.givenName}
            </li>
            <li className='listitem' onClick={logout}>
                Logout
            </li>   
        </ul>
        
        ) : (
            <ul className='list'>
            <li className='listitem'>
                <Link to='/login' className='link'>Login</Link>
            </li>
        </ul>)}
    </div>
  )
}

export default Navbar