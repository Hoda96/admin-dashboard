import {AppBar, Badge, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Logout, Settings} from "@mui/icons-material";
import { useProSidebar } from "react-pro-sidebar";

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        backgroundColor: 'neutral.main',
        color: 'neutral.light',

    },
    appLogo: {
        borderRadius: 2,
        width: "40px",
        height: "40px",
        ml: "5px",

    }
}

const AppHeader = () => {
    const {collapseSidebar, toggleSidebar,broken}= useProSidebar();

    return (
        <AppBar position='sticky' sx={styles.appBar}>
            <Toolbar >
                <IconButton onClick={() =>broken? toggleSidebar(): collapseSidebar()} color='secondary'>
                    <MenuIcon/>
                </IconButton>
                <Box component={'img'}
                     sx={styles.appLogo}
                     src="./src/assets/logo.png"
                />
                <Box sx={{flexGrow:1}}/>
                <IconButton title="notification" color="secondary">
                    <Badge badgeContent={14} color="error">
                        <NotificationsNoneIcon/>
                    </Badge>
                </IconButton>
                <IconButton title="settings" color="secondary">
                    <Settings/>
                </IconButton>
                <IconButton title="settings" color="secondary">
                    <Logout/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;