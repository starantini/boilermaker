import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../components/allUsers/allUsersSlice";
// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

// applyMiddleware(thunkMiddleware, createLogger());
export default store;
