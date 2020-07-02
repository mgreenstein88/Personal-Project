import React, {Component} from 'react'
import {connect} from 'react-redux'
import photo from '../media/photo1.PNG'

class About extends Component {

    render(){
        return (
            <div>
                <img src={photo}/>
                <p 
                    style={{color: 'white'}}
                    className='about'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>           
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(About)