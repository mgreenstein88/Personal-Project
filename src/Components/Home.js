import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }

    logout(){
        axios.delete('/auth/logout')
        .then( res => {
          alert('Admin Logout Success!')
        })
      }

    render(){
        return (
            <div>
                Home.js
                <h2>Hey! Admin</h2>
                <button onClick={ () => this.logout() } >Logout</button>
            </div>
        )
    }
}

export default Home