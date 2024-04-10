import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        isHomePage: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        toggleHomePage: (state) => {
            state.isHomePage = !state.isHomePage;
        }
    }
});

export const { toggleMenu, closeMenu,toggleHomePage } = appSlice.actions;
export default appSlice.reducer;