// Action creator function to generate a "DEPOSIT" action
export const deposit = (amount) => ({
  type: "DEPOSIT", // Action type indicating a deposit
  payload: amount, // Payload containing the amount to be deposited
});

// Action creator function to generate a "WITHDRAW" action
export const withdraw = (amount) => ({
  type: "WITHDRAW", // Action type indicating a withdrawal
  payload: amount, // Payload containing the amount to be withdrawn
});

// Action creator function to generate an "ADD_INTEREST" action
export const addInterest = () => ({
  type: "ADD_INTEREST", // Action type indicating the addition of interest
});

// Action creator function to generate an "APPLY_CHARGES" action
export const applyCharges = () => ({
  type: "APPLY_CHARGES", // Action type indicating the application of charges
});
