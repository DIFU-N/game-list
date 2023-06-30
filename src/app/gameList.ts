import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Filter, Game } from "../types";
import { Reducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  gameList: [] as Game[],
  error: "",
  filter: {
    platform: "browser",
    sortBy: "relevance",
  } as Filter,
};
const apiKey = process.env.REACT_APP_API_KEY;
export const fetchGameList = createAsyncThunk(
  "gameList/fetchGameList",
  async () => {
    const options = {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    );
    console.log(response.data);
    return response.data;
  }
);

const filterGameList = createAsyncThunk(
  "gameList/fetchGameList/filterGameList",
  async (props: { tag: string; }) => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
      params: {
        tag: props.tag
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
)

const gameListSlice = createSlice({
  name: "game-list",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<Filter>>) => {
      console.log(action.payload);
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGameList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGameList.fulfilled, (state, action) => {
      state.loading = false;
      state.gameList = [...action.payload];
      state.error = "";
    });
    builder.addCase(fetchGameList.rejected, (state, action) => {
      state.loading = false;
      state.gameList = [];
      state.error = action.error.message || "";
      console.log(action.error.message);
    });
    builder.addCase(filterGameList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(filterGameList.fulfilled, (state, action) => {
      state.loading = false;
      state.gameList = [...action.payload];
      state.error = "";
    });
    builder.addCase(filterGameList.rejected, (state, action) => {
      state.loading = false;
      state.gameList = [];
      state.error = action.error.message || "";
      console.log(action.error.message);
    });
  },
});

export const { setFilter } = gameListSlice.actions;
export default gameListSlice.reducer as Reducer;
