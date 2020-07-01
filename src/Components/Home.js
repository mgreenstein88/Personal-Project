import React from 'react'
import {connect} from 'react-redux'
import photo from '../media/photo1.PNG'
import Chart from './Chart'
import ChartTwo from './ChartTwo'

function Home () {
      
    return (
        <div className='photo'>
            <img src={photo}/>
            <h1 className='slc'>Salt Lake City, Utah</h1>
            <ChartTwo />
            <Chart />
        </div>
    )
    
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Home)