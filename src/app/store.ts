import { configureStore } from "@reduxjs/toolkit";
import gameListReducer from "./gameList";

const store = configureStore({
    reducer: {
        gameList: gameListReducer
    }
})

export default store;