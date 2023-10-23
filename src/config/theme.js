import {createTheme} from "@mui/material";
import {green, grey, indigo} from "@mui/material/colors";

let theme = createTheme({
    palette: {
        primary: {
            main: indigo[500],
            dark: indigo["A700"],
        },
        secondary: {
            main: indigo[50],
        },
        neutral: {
            light: grey[50],
            medium: grey[200],
            dark: grey[700],
            main: grey[900]
        },
        green: {
            main: green[800]
        },
    }
});

theme = createTheme(theme, {
    typography: {
        link: {
            fontSize: "0.8rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "0.9rem",
            },
            fontWeight: 500,
            color: theme.palette.primary.dark,
            dispaly: "block",
            cursor: "pointer",
        },
        cardTitle:{
            fontSize: "1.2rem",
            dispaly: "block",
            fontWeight: 500,
        },
        h6:{
            fontSize: "1rem",
        },
        h7:{
            fontSize: "0.8rem",
        },
        h8:{
            fontSize: "0.7rem",
        },
    }
})


export default theme;