import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        videoData:null,
    },
    reducers:{
        setVideoData:(state, action) => {
            state.videoData=action.payload;
        }
    }
})

export const {setVideoData} = videoSlice.actions;
export default videoSlice.reducer;