import React, { useState } from "react";

import {postAccount} from '../api'

const AddAccount = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [game, setGame] = useState("Choose Game");
  const [account, setAccount] = useState({
    username:'',
    platform:''
  });

  const handleGameSelection = (event) => {
    event.preventDefault();
    setGame(event.target.value);
  };

  const handleChange = (event) =>{
      event.preventDefault()
      const { name, value } = event.target;
      setAccount({ ...account, [name]: value });
  }


  const handleSumbit = (event) =>{
      event.preventDefault()
      const { id } = user
      postAccount(id, account, game)
        .then(account =>{
          location.reload()
        })
        .catch(err => console.log(err.message))
  }
  
 console.log(account);
 
  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>Add Account</button>
      {showForm ? (
        <form>
          <label htmlFor="game">Choose a game:</label>
          <select name="name" id="game" onChange={handleGameSelection}>
            <option value="Choose Game">Choose Game</option>
            <option value="Warzone">Warzone</option>
            <option value="League of Legends">League of Legends</option>
            <option value="Valorant">Valorant</option>
          </select>
        </form>
      ) : (
        ""
      )}
      {showForm && game == "Warzone" ? (
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Username"
            value={account.username}
            onChange={handleChange}
          ></input>
          <label htmlFor="platform">Platform</label>
          <select name="platform" id="platform" onChange={handleChange}>
            <option value="Choose Platform">Choose Platform</option>
            <option value="battle">Battle.net</option>
            <option value="psn">PSN</option>
            <option value="xbl">Xbox Live</option>
            <option value="steam">Steam</option>
            <option value="uno">Activision ID</option>
            <option value="acti">Activision Tag</option>
          </select>
          <button type="submit" onClick={handleSumbit}>Submit</button>
        </form>
      ) : (
        ""
      )}
      {showForm && game == "League of Legends" ? (
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Username"
            value={account.username}
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={handleSumbit}>Submit</button>
        </form>
      ) : (
        ""
      )}
      {showForm && game == "Valorant" ? (
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Username"
            value={account.username}
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={handleSumbit}>Submit</button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default AddAccount;
