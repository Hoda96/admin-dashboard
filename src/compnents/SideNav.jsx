import {Menu, MenuItem, Sidebar} from 'react-pro-sidebar';
import {AnalyticsOutlined, DashboardOutlined, SourceOutlined, StyleOutlined} from "@mui/icons-material";
import {useTheme} from "@emotion/react";
import {Avatar, Box, Typography} from "@mui/material";

/** @type {import("@mui/material").SxProps} */
const styles = {
    avatarContainer: {
        display: "flex",
        bgcolor: "neutral.light",
        height: "calc(100% - 64px)"
    },
}
const SideNav = () => {

    const theme = useTheme();
    return (
        <Sidebar style={{
            height: "100%",
            top: "auto"
        }}
                 breakPoint="md"
                 backgroundColor={theme.palette.neutral.light}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar alt="Channle Owner" src="./src/assets/avatar.jpg"/>
                <Typography varient="body2">Your Channel</Typography>
            </Box>

            <Menu>
                <MenuItem active icon={<DashboardOutlined/>}>
                    <Typography varient="body2">Dashboard</Typography>
                </MenuItem>
                <MenuItem icon={<SourceOutlined/>}>
                    <Typography varient="body2">Content</Typography>
                </MenuItem>
                <MenuItem icon={<AnalyticsOutlined/>}>
                    <Typography varient="body2">Analytics</Typography>
                </MenuItem>
                <MenuItem icon={<StyleOutlined/>}>
                    <Typography varient="body2">Customization</Typography>
                </MenuItem>

            </Menu>
        </Sidebar>

    );
};

export default SideNav;