import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider} from "@mui/material";
import {theme} from "./utils/Theme.tsx";
import './index.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
