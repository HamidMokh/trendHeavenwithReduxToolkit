import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null, // Ensures the currentUser property is defined
};

export const userSlice = createSlice({
  name: 'user', // Namespace for the slice.
  initialState: INITIAL_STATE, // The initial state of the slice.
  reducers: {
    setCurrentUser(state, action) {
      // Although this looks like a direct mutation of state, Immer.js ensures immutability.
      state.currentUser = action.payload;
    }
  },
});

// Export the action
export const { setCurrentUser } = userSlice.actions;

// Correctly export the reducer
export const userReducer = userSlice.reducer;
