import {AppBar, Badge, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Logout, Settings} from "@mui/icons-material";

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        backgroundColor: 'neutral.main',
        color: 'neutral.light',

    },
    appLogo: {
        borderRadius: 2,
        width: "80px",
        height: "50px",
        ml: "5px",

    }
}

const AppHeader = () => {
    return (
        <AppBar position='sticky' sx={styles.appBar}>
            <Toolbar >
                <IconButton onClick={() => {
                }} color='secondary'>
                    <MenuIcon/>
                </IconButton>
                <Box component={'img'}
                     sx={styles.appLogo}
                     src="./src/assets/logo.jpg"
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