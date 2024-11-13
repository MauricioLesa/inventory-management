import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from './App';
import './index.css';

const root =  createRoot(document.getElementById("app")!);

root.render(
  <StrictMode>
  <App/>
  </StrictMode>
)