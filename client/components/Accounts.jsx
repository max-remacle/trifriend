import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserAccounts } from "../api";
import { setAccounts } from "../actions";
import AddAccount from "./AddAccounts";

const Accounts = ({ dispatch, accounts, user }) => {
  // Get all the accounts for a given account id for all games
  // Display accounts for a given account id
  // Ability to add accounts to database
  // Ability to remove accounts
  // Stretch ability to update accounts
  useEffect(() => {
    getUserAccounts(1)
      .then((accounts) => {
        dispatch(setAccounts(accounts));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <ul>
        {accounts.map((account) => (
          <li>{account.user_name.replace("%2523", "#")}</li>
        ))}
      </ul>
      <AddAccount user={user} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    user: state.user
  };
};
export default connect(mapStateToProps)(Accounts);
