// Initial state for the Redux store
const initialState = {
  balance: 0, // Default balance value
};

// Reducer function that manages state updates based on dispatched actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      // When a "DEPOSIT" , increase the balance by the payload amount
      return { ...state, balance: state.balance + action.payload };

    case "WITHDRAW":
      // When a "WITHDRAW" , decrease the balance by the payload amount
      return { ...state, balance: state.balance - action.payload };

    case "ADD_INTEREST":
      // When an "ADD_INTEREST" , increase the balance by 5% (add interest)
      return { ...state, balance: state.balance * 1.05 };

    case "APPLY_CHARGES":
      // When an "APPLY_CHARGES" , decrease the balance by 15% (apply charges)
      return { ...state, balance: state.balance * 0.85 };

    default:
      // For any other action type, return the current state without modifications
      return state;
  }
};

export default reducer; // Export the reducer function for use in the Redux store
