import {createTheme, responsiveFontSizes} from "@mui/material";

export const theme = responsiveFontSizes(createTheme({
    typography: {
        fontFamily: 'inherit'
    },
}));