import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAdmin} from '../redux/reducer'
import photo from '../media/photo1.PNG'

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
            alert('Incorrect Username or Password, Sorry!')
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
                        >Login Here!</h3>
                    
                    <form className='form'
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
                            style={{backgroundColor: 'white'}}
                            type='submit'
                            value='Login'/>
                    </form>

                    <span>Not an admin? Register here:</span>

                    <Link 
                        style={{color: 'black'}}
                        to='/register'
                        className='links'>
                        Register
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {loginAdmin})(Login)