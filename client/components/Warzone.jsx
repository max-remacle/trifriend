import React , {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getWarzoneStats} from '../api'
import {setStats} from '../actions'

const Warzone = ({dispatch, stats, accounts}) =>{

    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(accounts[0].id)


    useEffect(() => {
          setLoading(true)
          getWarzoneStats(account)
            .then(stats => {
              dispatch(setStats(stats))
              setLoading(false)
            })
            .catch(err => console.log(err))
      }, [account])
    
      const handleAccountSelection = (event) =>{
        event.preventDefault();
        setAccount(event.target.value);
      }


    return(
      <>
        <h1>Warzone Stats</h1>
        <form>
          <label htmlFor="account">Choose an Account:</label>
          <select name="name" id="account" onChange={handleAccountSelection}>
            {accounts.map(account => account.game_id == 1 ? <option key={account.id} value={account.id}>{account.user_name}</option>:'')}
          </select>
        </form>

        {loading ? "Loading Stats...":  
        <ul>
          <li>Wins: {stats.br.wins}</li>  
          <li>Top Five: {stats.br.topFive}</li>  
          <li>Top Ten: {stats.br.topTen}</li>  
          <li>Kills: {stats.br.kills}</li>
          <li>Downs: {stats.br.downs}</li>  
          <li>Deaths: {stats.br.deaths}</li>  
          <li>K/D Ratio: {(stats.br.kdRatio).toFixed(2)}</li>  
          <li>Games Played: {stats.br.gamesPlayed}</li>  
          <li>Time Played: {((stats.br.timePlayed)/3600).toFixed(0)}</li>   
        </ul>}
      </>
    )
}


const mapStateToProps = (state)=>{
    return {
      stats: state.stats,
      user:state.user,
      accounts: state.accounts
    }
  }
export default connect(mapStateToProps)(Warzone)