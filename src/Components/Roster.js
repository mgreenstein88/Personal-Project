import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Roster extends Component {
    constructor(){
        super()

        this.state = {
            isEditing: false,
            userInput: '',
            
        }
    }

    render(){

        return (
            <div>
                <div className='Master'>
                    <Link className='sports' to='/roster/W%20Lacrosse'>W Lacrosse</Link>
                    <Link className='sports' to='/roster/M%20Lacrosse'>M Lacrosse</Link>
                    <Link className='sports' to='/roster/W%20Soccer'>W Soccer</Link>
                    <Link className='sports' to='/roster/M%20Hockey'>M Hockey</Link>
                </div>   
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Roster)