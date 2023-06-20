import { configureStore } from "@reduxjs/toolkit";
import gameListReducer from "./gameList";

const store = configureStore({
    reducer: {
        gameList: gameListReducer
    }
})

export type AppDispatch = typeof store.dispatch;

export default store;