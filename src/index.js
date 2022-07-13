import React from 'react';
import App from './App';
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {createRoot} from "react-dom/client"
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  
   <React.StrictMode>
    <App />
   </React.StrictMode>
);