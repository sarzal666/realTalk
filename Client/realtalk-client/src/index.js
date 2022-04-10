import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalCss from './global/global.css';
import CssBaseline from '@mui/material/CssBaseline';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <CssBaseline />
        <GlobalCss />
        <App tab="home" />
    </>
);