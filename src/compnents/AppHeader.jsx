import React from 'react';
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        backgroundColor: 'neutral.main',
        color: 'neutral.light',
    },
    appLogo:{

    }
}

const AppHeader = () => {
    return (
        <AppBar position='sticky' sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={() => {
                }} color='secondary'>
                    <MenuIcon/>
                </IconButton>
                <Box component={'img'} sx={styles.appLogo}>

                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;