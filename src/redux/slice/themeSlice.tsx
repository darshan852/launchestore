// slices/ThemeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

interface InitialState {
  loader: boolean
  themeId: string
}

const initialState: InitialState = {
  themeId: "",
  loader: false,
}

// export const getThemeAsync = createAsyncThunk(
//     "theme/get",
//     async (domain: string, { rejectWithValue }) => {
//         console.log("domain", domain)
//         try {
//             const response = await axios.post(domain, "ulr")
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

export const getThemeAsync = createAsyncThunk(
  "theme/get",
  async (domain: string) => {
    // try {
    //   const response = await axios.post(domain, "url")
    //   return response.data // Assuming you want to return some data from the response
    // } catch (error) {
    //   throw error // Throw the error so that createAsyncThunk handles it
    // }
  },
)

const ThemeSlice = createSlice({
  initialState,
  name: "Theme",
  reducers: {},
  extraReducers: (builder) => {},
})

export default ThemeSlice.reducer
