import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Athletics extends Component {
    constructor(){
        super()

        this.state = {
            athletes: [],
        }

        this.saveName=this.saveName.bind(this)
        this.getAthletes=this.getAthletes.bind(this)
        this.deleteAthlete=this.deleteAthlete.bind(this)
    }

    componentDidMount(){
        axios.get(`/api/athletes`)
        .then( res => {
            this.setState({
                athletes: res.data
            })
        })
    }

    getAthletes(player_id, name, sport_id, sport_name){
        const body = {player_id, name, sport_id, sport_name}
    
        axios.post('/api/athlete', body)
        .then( res => {
          this.setState({
            athletes: res.data
          })
        })
      }  
    
    saveName(player_id, newName){
    const body = {newName}

    axios.put(`/api/athlete/${player_id}`, body)
    .then( res => {
        this.setState({
        athletes: res.data
        })
    })
    }
    
    deleteAthlete(player_id){
    axios.delete(`/api/athlete/${player_id}`)
    .then( res => {
        this.setState({
        athletes: res.data
        })
    })
    }

    render(){

        return (
            <div>

                Athletics.js
                <Link to='/roster/WLacrosse'>
                    <button>W Lacrosse</button>
                </Link>
                <Link to='/roster/MLacrosse'>
                    <button>M Lacrosse</button>
                </Link>
                <Link to='/roster/WSoccer'>
                    <button>W Soccer</button>
                </Link>
                <Link to='/roster/MHockey'>
                    <button>M Hockey</button>
                </Link>


            </div>
        )
        }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Athletics)