import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Athletics extends Component {
    constructor(){
        super()

        this.state = {
            athletes: [],
            isEditing: false,
            userInput: '',
            number: 0,
            name: '',
            position: '',
            year: '',
            town: '',
            isWomens: false,
            sport_name: ''
        }

        this.saveName=this.saveName.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
        this.deleteAthlete=this.deleteAthlete.bind(this)
        this.getAthletes=this.getAthletes.bind(this)
    }

    componentDidMount(){
        axios.get(`/api/athletes?sport_name=${this.props.match.params.sport_name}`)
        .then( res => {
            this.setState({
                athletes: res.data
            })
        })
    }

    getAthletes(){
        const {number, name, position, year, town, isWomens, sport_name} = this.state

        const body = {number, name, position, year, town, isWomens, sport_name}
    
        axios.post('/api/athlete', body)

        .then( res => {
          this.setState({
            athletes: res.data
          })

        })
      }  
    
    saveName(player_id){
        const body = {name: this.state.userInput}

        axios.put(`/api/athlete/${player_id}`, body)
        .then( res => {
            this.setState({
            athletes: res.data
            })
        
        }).catch(err => console.log(err))
    }
    
    deleteAthlete(player_id){
        console.log(player_id)
        axios.delete(`/api/athlete/${player_id}?sport_name=${this.props.match.params.sport_name}`)
        .then( res => {
            this.setState({
                athletes: res.data
            })
        }).catch(err => console.log(err))
    }

    toggleEdit(){
        if(this.props.admin.email){
                this.setState({
                isEditing: !this.state.isEditing
            })
        }         
    }

    handleSaveName(id){

        console.log('save name')

        this.saveName(id)

        const {data} = this.props
        this.toggleEdit()
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    addInputs(e){
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.position]: e.target.value,
            [e.target.year]: e.target.value,
            [e.target.town]: e.target.value,
            [e.target.isWomens]: e.target.value,
            [e.target.sport_name]: e.target.value
        })

    }

    render(){

        const {name, number, position, year, town, isWomens, sport_name} = this.state

        const players = this.state.athletes.map((element, i) => (
            !this.state.isEditing ? (<div key={element.player_id}
                onDoubleClick={() => this.toggleEdit()}
                >
                <div className='athletes'>
                    <p className="number">{element.number}</p>
                    <p className="name">{element.name}</p>
                    <p className="position">{element.position}</p>
                    <p className="year">{element.year}</p>
                    <p className="town">{element.town}</p>
                </div>

            </div>): (
                <div>
                    <p>{element.number}</p>
                    <input placeholder='Player Name' onChange={(e) => this.handleChange(e)} />
                    <button onClick={() => this.handleSaveName(element.player_id)} >Save</button>
                    <button onClick={() => this.deleteAthlete(element.player_id)}>Delete Player</button>
                    
                </div>
            )
        ))

        const addPlayer = 
            <form
                className='addPlayer'
                onSubmit={ (e) => this.getAthletes(e)} >
                
                <input 
                    placeholder='Number'
                    type='text'
                    name='number'
                    value={number}
                    onChange={ e => this.addInputs(e)} />
                <input 
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={name}
                    onChange={ e => this.addInputs(e)} />
                <input 
                    placeholder='Position'
                    type='text'
                    name='position'
                    value={position}
                    onChange={ e => this.addInputs(e)} />
                <input 
                    placeholder='Year'
                    type='text'
                    name='year'
                    value={year}
                    onChange={ e => this.addInputs(e)} />
                <input 
                    placeholder='Town'
                    type='text'
                    name='town'
                    value={town}
                    onChange={ e => this.addInputs(e)} />
                <input 
                    placeholder='isWomens'
                    type='text'
                    name='isWomens'
                    value={isWomens}
                    onChange={ e => this.addInputs(e)} />
                <input 
                    placeholder='sport name'
                    type='text'
                    name='sport_name'
                    value={sport_name}
                    onChange={ e => this.addInputs(e)} />
                <button>Submit</button>
            </form>
console.log(this.state.isEditing)
        return (
            <div>
                <span className='sportTitle'>{this.props.match.params.sport_name}</span>
                    <div className='rosterTitle'>
                        <p className="number">Number</p>
                        <p className="name">Name</p>
                        <p className="position">Position</p>
                        <p className="year">Year</p>
                        <p className="town">Town</p>
                    </div>
                {players}
                {this.state.isEditing && this.props.admin.email ? addPlayer : null }

            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Athletics)