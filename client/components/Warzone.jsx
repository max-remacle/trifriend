import React , {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getWarzoneStats} from '../api'
import {setStats} from '../actions'


const Warzone = ({dispatch, stats}) =>{

    const [loading, setLoading] = useState(true)

    useEffect(() => {
          getWarzoneStats()
            .then(stats => {
              dispatch(setStats(stats))
              setLoading(false)
            })
            .catch(err => console.log(err))
      }, [])
    
     
    return(
      <>
        <h1>Warzone Stats</h1>
        {loading ? "Loading Stats...":  
        <ul>
          <li>Wins: {stats.br.wins}</li>  
          <li>Top Five: {stats.br.topFive}</li>  
          <li>Top Ten: {stats.br.topTen}</li>  
          <li>Kills: {stats.br.kills}</li>
          <li>Downs: {stats.br.downs}</li>  
          <li>Deaths: {stats.br.deaths}</li>  
          <li>K/D Ratio: {stats.br.kdRatio}</li>  
          <li>Games Played: {stats.br.gamesPlayed}</li>  
          <li>Time Played: {(stats.br.timePlayed)/3600}</li>  
        </ul>}
      </>
    )
}


const mapStateToProps = (state)=>{
    return {
      stats: state.stats
    }
  }
  export default connect(mapStateToProps)(Warzone)