import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <nav>
            <h1>Welcome to DevMountain College!</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/acadmics'>Academics</Link>
                <Link to='/athletics'>Athletics</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </nav>
    )
}

export default Header