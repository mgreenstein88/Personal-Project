import React, {Component} from 'react'
import {connect} from 'react-redux'

class Athletics extends Component {

    render(){
        return (
            <div>
                Athletics.js
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Athletics)