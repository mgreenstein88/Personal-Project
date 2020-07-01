import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


class Academics extends Component {
    constructor(){
        super()

        this.state = {
            degrees: [],
            type: '',
            name: ''
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

    addDegree(){
        const {type, name} = this.state
        const body = {type, name}

        axios.post('/api/new', body)
        .then( res => {
            this.setState({
                degrees: res.data
            })
        })
    }

    render(){

        const degrees = this.state.degrees.map((degree) => (
            <h3 key={degree.degree_id}>
                {degree.name}
            </h3>
        ))

        return (
            <div>
                <span className='degreeType'>{this.props.match.params.type}</span>
                <p className='degrees'>{degrees}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Academics)