import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {loginAdmin} from '../redux/reducer'
import photo from '../media/photo1.PNG'

class Register extends Component {

    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault()

        const {email, password} = this.state

        axios.post('/auth/register', {email, password})
        .then( res => {
            this.props.loginAdmin(res.data)
            this.props.history.push('/login')
        }).catch( err => {
            alert('Email in use, please try again.')
        })
    }

    render(){

        const {email, password} = this.state

        return (

            <div>
                <img src={photo}/>
                <div className='openView'>
                    <h3
                        style={{fontWeight: '300'},
                        {fontSize: '1rem'}}
                        >Register Here!</h3>
                    
                    <form className='form'
                        onSubmit={ (e) => this.register(e) } >
                
                        <input 
                            type='text'
                            placeholder='email'
                            name='email'
                            value={email}
                            onChange={ e => this.changeHandler(e) } />
                        <input 
                            type='password'
                            placeholder='password'
                            name='password'
                            value={password}
                            onChange={ e => this.changeHandler(e) } />
                        <input 
                            style={{backgroundColor: 'white'}}
                            type='submit'
                            value='Register'/>
                    </form>
                    
                    <span>Already an admin? Login here:</span>

                    <Link 
                        style={{color: 'black'}}
                        to='/login'
                        className='links'>
                        Login
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {loginAdmin})(Register)