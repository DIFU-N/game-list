import { configureStore } from "@reduxjs/toolkit";
import gameListReducer from "./gameList";
import themeReducer from "./themeSlice";

const store = configureStore({
    reducer: {
        gameList: gameListReducer,
        theme: themeReducer,
    }
})

export type AppDispatch = typeof store.dispatch;

export default store;