import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {

    return (
        

        <nav>
            <h1 style={{color: 'black'}} 
                className='Welcome'>Welcome to DevMountain University!</h1>
            <div className='nav'>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/about'>About</Link>
                <Link className='links' to='/degrees'>Academics</Link>
                <Link className='links' to='/athletics'>Athletics</Link>
                <Link className='links' to='/login'>Login</Link>
                <Link className='links' to='/register'>Register</Link>
            </div>
        </nav>
    )
}

export default Header