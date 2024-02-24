import Profile from "./components/Profile.tsx";
import Project from "./components/Project.tsx";
import {useEffect} from "react";
import {scrollToTop} from "./utils/Utils.tsx";

function App() {

    useEffect(() => {
        scrollToTop(false);
    });

    return (
        <>
            <Profile/>
            <Project/>
        </>
    )
}

export default App;
