import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Degrees () {
      
    return (
        <div >
            <Link to='/degrees/:Masters'>Masters</Link>
            <Link to='/degrees/Bachelors_of_Arts'>Bachelor of Arts</Link>
            <Link to='/degrees/Masters'>Masters</Link>
        </div>
    )
    
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Degrees)