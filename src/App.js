import React, {Component} from 'react';
import routes from './routes'
import {connect} from 'react-redux'
import Header from './Components/Header'
import {getAdmin} from './redux/reducer'
import {logoutAdmin} from './redux/reducer'
import axios from 'axios';
import './App.scss'

class App extends Component {
  constructor(){
    super()

    this.state = {

    }
  }
  
  componentDidMount(){
    this.props.getAdmin()
  }

  logout(){
    axios.delete('/auth/logout')
    .then( () => {
      this.props.logoutAdmin()
      alert('Admin Logout Success!')
    })
  }


  render() {
    return (
      <div className='App'>

        <Header/>

        {routes}
        <h2 className='login'>
          {this.props.admin.email ? `Hey, ${this.props.admin.email}!` : `Hey there, Friend!`}
        </h2>
        <button className='logout' onClick={ () => this.logout() }>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = {getAdmin, logoutAdmin}

export default connect(mapStateToProps, mapDispatchToProps)(App)
