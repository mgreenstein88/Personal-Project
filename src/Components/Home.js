import React from 'react'
import {connect} from 'react-redux'
import photo from '../media/photo1.PNG'

function Home () {
      
    return (
        <div className='photo'>
            <img src={photo}/>
            <h1 className='slc'>Salt Lake City, Utah</h1>
        </div>
    )
    
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Home)