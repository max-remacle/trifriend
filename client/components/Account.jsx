import React,{useState} from "react";
// import { connect } from 'react-redux'
import { FaUserMinus } from "react-icons/fa";
// import { deleteAccount } from '../api'

const Account = (props) =>{

    const [showControls, setShowControls] = useState(false)
    const {account} = props
    const deleteStyle = {color: 'red', marginLeft:'7px', cursor:'pointer', fontSize:'25px'}
    return (
        <li
        style={{cursor:'pointer'}}
        onMouseEnter={() => setShowControls(!showControls)}
        onMouseLeave={() => setShowControls(!showControls)}
        >
            {account}
            {showControls ?
            <FaUserMinus
              role = 'button'
              style={deleteStyle}  
            /> : ''}
        </li>
    )
}

export default Account