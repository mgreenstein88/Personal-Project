import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
            this.props.history.push('/login')
        }).catch( err => {
            alert('Could Not Register')
        })
    }

    render(){

        const {email, password} = this.state

        return (
            <div>
                Register.js

                <form
                    onSubmit={ (e) => this.login(e) } >
            
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
                        type='submit'
                        value='Register'/>
                </form>
                
                <span>Already an admin? Login here:</span>

                <Link to='/login'>
                    Login
                </Link>
            </div>
        )
    }
}

export default Register