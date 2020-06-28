import React, {Component} from 'react'
import {connect} from 'react-redux'

class About extends Component {

    render(){
        return (
            <div>
                About.js
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(About)