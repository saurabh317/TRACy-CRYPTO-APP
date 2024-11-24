import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CoinList } from "../config/api";
import sleep from "../common";
let counter = 1

export const fetchAllCoins = createAsyncThunk('fetchAllCoins', async(payload, { getstate, dispatch }) => {
  console.log("fetching coins...")
  const { currency, setLoading } = payload
  try {
    const { data } = await axios.get(CoinList(currency));
    setLoading && setLoading(false)
    return data;
  } catch (err) {
    if(counter === 10) return
    counter++
    console.log("retrying to fetch in", (counter * 5), "seconds")
    await sleep(counter * 5000)
    dispatch(fetchAllCoins({ currency }))
  }
})

const initialState = {
  coin: [],
  darkMode: true,
  filters: {
    sortBy: 'default',
    sortOrder: 'dafault'
  }
}

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setFetchedCoins(state, action) {
      state.coin = action.payload
    },
    setDarkModeStatus(state, action) {
      state.darkMode = action.payload
    },
    setSortingFilters(state, action) {
      const { sortBy, sortOrder } = action.payload
      state.filters.sortBy = sortBy
      state.filters.sortOrder = sortOrder
    }
  },

  extraReducers: builder => {
    builder.addCase(fetchAllCoins.fulfilled, (state, action) => {
      if (action.payload) {
        state.coin = action.payload
      }
    })
    .addCase(fetchAllCoins.rejected, (state, action) => {
      console.log(action)
    })
  }
})

export const { setFetchedCoins, setDarkModeStatus, setSortingFilters } = coinSlice.actions;
export default coinSlice.reducer;