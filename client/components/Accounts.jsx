import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {getUserAccounts} from '../api'
import {setAccounts} from '../actions'


const Accounts = ({dispatch, accounts}) =>{
    // Get all the accounts for a given account id for all games
    // Display accounts for a given account id
    // Ability to add accounts to database
    // Ability to remove accounts
    // Stretch ability to update accounts
    
    useEffect(() =>{
        getUserAccounts()
        .then(accounts =>{
            console.log(accounts);
            dispatch(setAccounts(accounts))
        })
        .catch(err => console.log(err))
    },[])
    return(
        <ul>{accounts.map(account => <li>{account.user_name}</li>)}</ul>
    )
}

const mapStateToProps = (state)=>{
    return {
      accounts: state.accounts
    }
  }
export default connect(mapStateToProps)(Accounts)