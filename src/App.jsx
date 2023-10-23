import "./App.css"
import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./config/theme.js";
import SideNav from "./compnents/SideNav.jsx";
import AppHeader from "./compnents/AppHeader.jsx";

function App() {

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppHeader/>
                <Box>
                    <SideNav/>
                    <Box component={'main'}></Box>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App
