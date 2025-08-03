import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './AboutMe'; // make sure this matches your file name
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMe />
  </React.StrictMode>
);

reportWebVitals();
