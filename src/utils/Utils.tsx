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

export const scroll = (position: number, smooth: boolean = true) => {
    window.scrollTo({top: position, behavior: smooth ? 'smooth' : 'instant'});
}

export const scrollToTop = (smooth: boolean = true) => {
    scroll(0, smooth);
}

export const scrollToContent = (smooth: boolean = true) => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    scroll(vh, smooth);
}
