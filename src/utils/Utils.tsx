import {useMediaQuery, useTheme} from "@mui/material";

export const useBreakpoints = () => {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('sm'));
    const sm = useMediaQuery(theme.breakpoints.down('md'));
    const md = useMediaQuery(theme.breakpoints.down('lg'));
    const lg = useMediaQuery(theme.breakpoints.down('xl'));
    const xl = true;
    return {
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
    }
}