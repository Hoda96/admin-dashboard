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


/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
        display: "flex",
        bgcolor: "neutral.light",
        height: "calc(100% - 64px)"
    },
    mainSection: {
        p:1,
        width:"100%",
        height:"100%",
        overflow:"auto"
    }
}

function App() {

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppHeader/>
                <Box sx={styles.container}>
                    <SideNav/>
                    <Box component={'main'} sx={styles.mainSection}></Box>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App
