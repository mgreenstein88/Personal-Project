import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Degrees () {
      
    return (
        <div className='Master'>
            <Link className='degreeList' to='/degrees/Masters'>Masters</Link>
            <Link className='degreeList' to='/degrees/Bachelor%20of%20Arts'>Bachelor of Arts</Link>
            <Link className='degreeList' to='/degrees/Bachelor%20of%20Science'>Bachelor of Science</Link>
        </div>
    )
    
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Degrees)