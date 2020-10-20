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
    
     
      console.log(stats)
    return(
      <>
        <h1>Warzone Stats</h1>
        {loading ? "Loading Stats...":
        <ul>
          <li>Kills: {stats.br.kills}</li>
          <li>Wins: {stats.br.wins}</li>  
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