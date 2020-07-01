import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import axios from 'axios'

export default class Chart extends Component {
    constructor(){
        super()
        this.state = {
            chart: [],
            Data: {}          
        }
    }

    componentDidMount(){
        axios.get(`/api/chart`)
        .then( res => {
            const chart = res.data
            console.log(res)
            
                let lax = [];
                let hockey = [];
                let soccer = [];
                let mlax = [];
        

                for (let i = 0; i < chart.length; i++){

                    if (chart[i].sport_name === 'W Lacrosse'){
                        lax.push(chart[i])
                    } else if (chart[i].sport_name === 'M Hockey'){
                        hockey.push(chart[i])
                    } else if (chart[i].sport_name === 'W Soccer'){
                        soccer.push(chart[i])
                    } else {
                        mlax.push(chart[i])
                    }
                }
                    let lCount = lax.length;
                    let hCount = hockey.length;
                    let sCount = soccer.length;
                    let mCount = mlax.length;
                    
                this.setState({
                    Data: {
                        labels: ['Womens Lacrosse', 'Mens Hockey', 'Womens Soccer', 'Mens Lacrosse'],

                        datasets: [
                            {
                                label: 'Athletes',
                                backgroundColor: [
                                    '#N22F00',
                                    '#35014F',
                                    '#00A6B7',
                                    '#B22F00'
                                ],
                                data: [lCount, hCount, sCount, mCount]
                            }
                        ] 
                    } 
                })
        })
    }

    render() {
        return (
            <div className='chart'>
                <Doughnut 
                    data={this.state.Data}
                    options={{
                        title:{
                            display: true,
                            text: 'Endless Oppotunities at DevMountain',
                            fontSize: 20
                        },
                        legend:{
                            display: true,
                            position: 'left'
                        }
                    }}
                />
            </div>
        )
    }
}
