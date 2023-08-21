// importing teh components
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Importing action creators
import { deposit, withdraw, addInterest, applyCharges } from "./redux/actions";
// import the style
import "./App.css";

function App() {
  // Local state for input amount
  const [amount, setAmount] = useState("");
  // Accessing balance from Redux store
  const balance = useSelector((state) => state.balance);
  // Getting the dispatch function from Redux
  const dispatch = useDispatch();

  const handleDeposit = () => {
    if (amount !== "") {
      // Dispatching deposit action with parsed amount
      dispatch(deposit(parseFloat(amount)));
      // Clearing the input field after deposit
      setAmount("");
    }
  };

  const handleWithdraw = () => {
    if (amount !== "") {
      // Dispatching withdraw action with parsed amount
      dispatch(withdraw(parseFloat(amount)));
      // Clearing the input field after withdrawal}
      setAmount("");
    }
  };

  return (
    <div className="App">
      <h1>Graceffa Bank</h1>
      <h2>Cash Balance App</h2>
      <p>Interest : 5% and Charges : 15%</p>
      <h3>
        <b>Current Balance is: R {balance.toFixed(2)}</b>
      </h3>
      <input
        type="number"
        placeholder="Enter Deposit or Withdrawal Amount"
        value={amount}
        // Updating amount in local state
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={() => dispatch(addInterest())}>Add 5% Interest</button>
      <button onClick={() => dispatch(applyCharges())}>15% Charges</button>
    </div>
  );
}

export default App;
