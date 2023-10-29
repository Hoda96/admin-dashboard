import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { AnalyticsOutlined, DashboardOutlined, SourceOutlined, StyleOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5
    // bgcolor: "neutral.light",
    // height: "calc(100% - 64px)"
  },
  avatar: {
    width: "40%",
    height: "auto"
  },
  avatarName: {
    mt: 1
  }

};
const SideNav = () => {
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  const location= useLocation();

  return (
    <Sidebar style={{
      height: "100%",
      top: "auto"
    }}
             breakPoint="md"
             backgroundColor={theme.palette.neutral.light}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="Channle Owner" src="./src/assets/avatar.png" />
        {!collapsed ?
          <Typography variant="body2" sx={styles.avatarName}>Your Channel</Typography>
          : null
        }
        {!collapsed ?
          <Typography variant="overline" sx={styles.avatarName}>Everything About YT Thumbnail</Typography> : null }
      </Box>

      <Menu
        menuItemStyles={{
          button: ({active})=>{
            return {
              backgroundColor: active ? theme.palette.neutral.medium : undefined,
            }
          },
        }}
      >
        <MenuItem active={location.pathname === '/'} component={<Link to="/"/>} icon={<DashboardOutlined />}>
          <Typography varient="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem active={location.pathname === '/content'} component={<Link to="/content"/>} icon={<SourceOutlined />}>
          <Typography varient="body2">Content</Typography>
        </MenuItem>
        <MenuItem active={location.pathname === '/analytics'} component={<Link to="/analytics"/>} icon={<AnalyticsOutlined />}>
          <Typography varient="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem active={location.pathname === '/customization'} component={<Link to="/customization"/>} icon={<StyleOutlined />}>
          <Typography varient="body2">Customization</Typography>
        </MenuItem>

      </Menu>
    </Sidebar>

  );
};

export default SideNav;