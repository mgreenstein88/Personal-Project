import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import axios from 'axios'

export default class ChartTwo extends Component {
    constructor(){
        super()
        this.state = {
            chart: [],
            Data: {}          
        }
    }

    componentDidMount(){
        axios.get(`/api/degrees`)
        .then( res => {
            const chart = res.data
            console.log(res)
            
                let masters = [];
                let arts = [];
                let science = [];
        

                for (let i = 0; i < chart.length; i++){

                    if (chart[i].type === 'Masters'){
                        masters.push(chart[i])
                    } else if (chart[i].type === 'Bachelor of Arts'){
                        arts.push(chart[i])
                    } else {
                        science.push(chart[i])
                    }
                }
                    let mCount = masters.length;
                    let aCount = arts.length;
                    let sCount = science.length;
                    
                this.setState({
                    Data: {
                        labels: ['Masters Degrees', 'Bachelor of Arts', 'Bachelor of Science'],

                        datasets: [
                            {
                                label: 'Degrees',
                                backgroundColor: [
                                    '#N22F00',
                                    '#35014F',
                                    '#00A6B7'
                                ],
                                data: [mCount, aCount, sCount]
                            }
                        ] 
                    } 
                })
        })
    }

    render() {
        return (
            <div className='chart2'>
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
