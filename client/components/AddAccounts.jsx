import React, { useState } from "react";

const AddAccount = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [game, setGame] = useState("Choose Game");

  const [account, setAccount] = useState({
    userName: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setGame(event.target.value);
  };
  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>Add Account</button>
      {showForm ? (
        <form>
          <label htmlFor="game">Choose a game:</label>
          <select name="name" id="game" onChange={handleChange}>
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
          ></input>
          <label htmlFor="platform">Platform</label>
          <input
            type="platform"
            id="platform"
            name="platform"
            placeholder="platform"
          ></input>
          <button type="submit">Submit</button>
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
          ></input>
          <button type="submit">Submit</button>
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
          ></input>
          <button type="submit">Submit</button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default AddAccount;
