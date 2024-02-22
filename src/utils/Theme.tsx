import {alpha, createTheme, responsiveFontSizes} from "@mui/material";

const COLOR_PRIMARY = 'rgba(96, 96, 96)';
const COLOR_SECONDARY = 'rgba(255, 255, 255)';

export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: alpha(COLOR_PRIMARY, 0.7),
            light: alpha(COLOR_PRIMARY, 0.9),
            dark: alpha(COLOR_PRIMARY, 0.6),
        },
        secondary: {
            main: alpha(COLOR_SECONDARY, 0.7),
            light: alpha(COLOR_SECONDARY, 0.9),
            dark: alpha(COLOR_SECONDARY, 0.6),
        }
    },
    typography: {
        fontFamily: 'inherit',
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: `0px 0px 12px 0px ${alpha(COLOR_PRIMARY, 0.9)}`,
                    fontWeight: 'medium',
                    '&:hover': {
                        boxShadow: `0px 0px 12px 0px ${alpha(COLOR_PRIMARY, 0.7)}`,
                    },
                }
            }
        }
    }

}));