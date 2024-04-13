import { createSlice } from "@reduxjs/toolkit";

const searchVideoSlice = createSlice({
    name: 'searchVideo',
    initialState: {
        videos: [],
        category: 'All',
    },
    reducers: {
        setHomeVideo: (state, action) => {
            state.videos = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload; 
        }
    }
});

export const { setHomeVideo, setCategory } = searchVideoSlice.actions;
export default searchVideoSlice.reducer;