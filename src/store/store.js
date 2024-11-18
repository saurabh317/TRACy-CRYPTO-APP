import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../store/coinStore"

export const store = configureStore({
  reducer: {
    coins: coinReducer
  }
})