import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Academics extends Component {
    constructor(){
        super()
        this.state = {
            degrees: []
        }
    }

    componentDidMount(){
        axios.get(`/api/degree?type=${this.props.match.params.type}`)
        .then( res => {
            this.setState({
                degrees: res.data
            })
        })
    }

    render(){

        const degrees = this.state.degrees.map((degree) => (
            <h2 key={degree.degree_id}>
                {degree.name}
            </h2>
        ))

        return (
            <div>
                Academics.js
                {degrees}
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Academics)