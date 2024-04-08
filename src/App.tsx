import Profile from "./components/Profile.tsx";
import Project from "./components/Project.tsx";
import Footer from "./components/Footer.tsx";
import {useEffect} from "react";
import {scrollToTop} from "./utils/Utils.tsx";
import {Divider} from "@mui/material";

function App() {

    useEffect(() => {
        scrollToTop(false);
        console.info('Crafted with 🧡 by William Justin');
    });

    return (
        <>
            <Profile/>
            <Project/>
            <Divider flexItem style={{marginBlock: "32px"}}/>
            <Footer/>
        </>
    )
}

export default App;
