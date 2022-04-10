import { createRoot } from 'react-dom/client';
// import './index.css';

import App from './App';
import GlobalCss from './global/global.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <GlobalCss />
        <App tab="home" />
    </>
);