import React, {Component} from 'react'
import axios from 'axios'

class Roster extends Component {
    constructor(){
        super()

        this.state = {
            athletes: []
        }
    }

    render(){

        return (
            <div>
                Roster.js
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Roster)