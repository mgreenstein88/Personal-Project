import React, {Component} from 'react'
import {connect} from 'react-redux'

class Roster extends Component {
    constructor(){
        super()

        this.state = {
            isEditing: false,
            userInput: ''
        }
    }

    toggleEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    handleSaveName(){
        const {data} = this.props
        this.props.saveName(data.player_id, this.state.userInput)
        this.toggleEdit()
    }

    render(){

        return (
            <div>
                Roster.js
                <h2>Roster:</h2>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Roster)