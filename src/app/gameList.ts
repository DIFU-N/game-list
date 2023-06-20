import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    gameList: [],
    error: '',
}

export const fetchGameList = createAsyncThunk('gameList/fetchGameList', async () => {
    const options = {
        headers: {
            // 'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
        }
    };
    const response = await axios.get('', options);
    return response.data;
})

const gameListSlice = createSlice({
    name: 'game-list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGameList.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchGameList.fulfilled, (state, action) => {
            state.loading = false
            state.gameList = action.payload
            state.error = ''
        })
        builder.addCase(fetchGameList.rejected, (state, action) => {
            state.loading = false
            state.gameList = []
            state.error = action.error.message || ''
            console.log(action.error.message);
        })
    }
});

export default gameListSlice.reducer;