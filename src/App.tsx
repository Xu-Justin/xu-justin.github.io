import {Box, Typography} from "@mui/material";

function App() {
    return (
        <Box sx={{ml: 4}}>
            <Typography variant={"h1"} className={"animate__animated animate__fadeInUp"}>
                Hi,
            </Typography>
            <Typography variant={"h1"} className={"animate__animated animate__fadeInUp animate__delay-1s"}>
                William Justin is here 👋
            </Typography>
        </Box>
    )
}

export default App;
