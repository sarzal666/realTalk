import { createRoot } from 'react-dom/client';
import GlobalCss from './global/global.css';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import SignIn from "./components/Pages/SignIn";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
        <CssBaseline />
        <GlobalCss />
    </BrowserRouter>
);