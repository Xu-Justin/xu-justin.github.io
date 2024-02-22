import {SxProps, Theme} from "@mui/material";

export const limitLines = (line: number): SxProps<Theme> => {
    return {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
    }
}

export const glow = (blur: number, range: number, color: string): SxProps<Theme> => {
    const value = `0px 0px ${blur}px ${range}px ${color}`;
    return {
        boxShadow: value,
    }
}

export const newTab = {
    target: "_blank",
    rel: "noreferrer"
}
