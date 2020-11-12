import React,{useState} from "react";
// import { connect } from 'react-redux'
import { FaUserMinus } from "react-icons/fa";
import { deleteAccount } from '../api'

const Account = (props) =>{

    const [showControls, setShowControls] = useState(false)
    const {account} = props
    const deleteStyle = {color: 'red', marginLeft:'7px', cursor:'pointer', fontSize:'25px'}

    const removeAccount = () =>{
        const {id, game_id} = props.account
        deleteAccount(id, game_id)
            .then(() =>{
                console.log('deleted');
            })     
    }
    
    return (
        <li
        style={{cursor:'pointer'}}
        onMouseEnter={() => setShowControls(!showControls)}
        onMouseLeave={() => setShowControls(!showControls)}
        >
            {account.user_name}
            {showControls ?
            <FaUserMinus
              role = 'button'
              style={deleteStyle} 
              onClick={removeAccount} 
            /> : ''}
        </li>
    )
}

export default Account