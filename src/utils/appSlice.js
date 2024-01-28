import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        searchText:"",
        showSuggestion:true,
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state,action) => {
            state.isMenuOpen = false
        },
        addSearchText:(state,action)=>{
            state.searchText = action.payload
        },
        showSuggestionToggle:(state,action)=>{
            state.showSuggestion = action.payload
        }
    }
})

export const {toggleMenu, closeMenu,addSearchText, showSuggestionToggle} = appSlice.actions;
export default appSlice.reducer;