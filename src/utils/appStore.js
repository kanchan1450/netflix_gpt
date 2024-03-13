import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";

const appStore = configureStore({
    reducer : {
        user : userInfoReducer,

    },
})

export default appStore;