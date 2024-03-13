import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
   name : "user",
   initialState : null,

   reducers : {
    addUser : (state, action) => {
        return action.payload;
    },

    removeUser : (state, action) => {
        return null;
    }
   }
});

export const{addUser,removeUser} = userInfoSlice.actions;
export default userInfoSlice.reducer;