import React, {Component} from 'react';
import './App.css';
import routes from './routes'
import {connect} from 'react-redux'
import Header from './Components/Header'
import {getAdmin} from './redux/reducer'
import {logoutAdmin} from './redux/reducer'
import axios from 'axios';

class App extends Component {

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
      <div>
        <Header />
        {routes}
        <h2>Hey, {this.props.admin.email} ! </h2>
        <button onClick={ () => this.logout() } >Logout</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getAdmin, logoutAdmin})(App)
