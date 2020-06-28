import React, {Component} from 'react'
import {connect} from 'react-redux'

class Academics extends Component {

    render(){
        return (
            <div>
                Academics.js
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Academics)