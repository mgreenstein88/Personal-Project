import React from 'react'
import {connect} from 'react-redux'

function Home (props) {
      
    return (
        <div>
            Home.js
        </div>
    )
    
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Home)