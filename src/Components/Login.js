import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAdmin} from '../redux/reducer'

class Login extends Component {

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

    login = (e) => {
        e.preventDefault()

        const {email, password} = this.state

        axios.post('/auth/login', {email, password})
        .then( res => {
            this.props.loginAdmin(res.data)
            this.props.history.push('/')
        }).catch( err => {
            alert('Incorrect Something !! Ha')
        })
    }

    render(){

        const {email, password} = this.state

        return (
            <div>
                Login.js

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
                        value='Login'/>
                </form>

                <span>Not an admin? Register here:</span>

                <Link to='/register'>
                    Register
                </Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = {loginAdmin, getAdmin}

export default connect(mapStateToProps, mapDispatchToProps)(Login)