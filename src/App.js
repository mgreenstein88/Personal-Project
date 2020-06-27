import React from 'react';
import './App.css';
import routes from './routes'
import {connect} from 'react-redux'

function App (props) {
    console.log('LOOK HERE', props)

  return (
    <div>
      {routes}
    </div>
  )
  
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App)
