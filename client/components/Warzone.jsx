import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import {getWarzoneStats} from '../api'
import {setStats} from '../actions'


const Warzone = ({dispatch, stats}) =>{

    useEffect(() => {
          getWarzoneStats()
            .then(stats => {
              dispatch(setStats(stats))
              return null
            })
            .catch(err => console.log(err))
      }, [])

      console.log(stats.br)

    return(
      <>
        <h1>Warzone Stats</h1>
        <ul>
         {/* {stats.br.kills? <li>Kills: {stats.br.kills}</li>:"no stats"} */}
        </ul>
      </>
    )
}


const mapStateToProps = (state)=>{
    return {
      stats: state.stats
    }
  }
  export default connect(mapStateToProps)(Warzone)