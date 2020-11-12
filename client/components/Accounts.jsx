import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserAccounts } from "../api";
import { setAccounts } from "../actions";
import AddAccount from "./AddAccounts";
import Account from './Account'

const Accounts = ({ dispatch, accounts, user }) => {
  // Ability to remove accounts
  // Stretch ability to update accounts
  useEffect(() => {
    getUserAccounts(user.id)
      .then((accounts) => {
        dispatch(setAccounts(accounts));
      })
      .catch((err) => console.log(err));
  }, []);

  let n = 0
  return (
    <>
      <h3>Warzone</h3>
      <ul>
        {accounts.map((account) =>
          account.game_id == 1 ? (
            <Account key={n += 1} account={account} />
          ) : (
            ""
          )
        )}
      </ul>
      <h3>League of Legends</h3>
      <ul>
        {accounts.map((account) =>
          account.game_id == 2 ? (
            <Account key={n += 1} account={account} />
          ) : (
            ""
          )
        )}
      </ul>
      <h3>Valorant</h3>
      <ul>
        {accounts.map((account) =>
          account.game_id == 3 ? (
            <Account key={n += 1} account={account} />
          ) : (
            ""
          )
        )}
      </ul>
      <AddAccount user={user} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Accounts);
