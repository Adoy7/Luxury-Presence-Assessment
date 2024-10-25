import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './top-banner';
import CMP from './CMP'; 
import Collage from './CollageSection';
import TSP from './TSP.js';
import Fifth from './FifthSec.js';
import SixthSec from './SixthSec.js';
import WorkwUs from './WorkwUs.js';
import Footer from './footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <CMP />
    <Collage />
    <TSP />
    <Fifth />
    <SixthSec />
    <WorkwUs />
    <Footer />
    <App />
  </React.StrictMode>
);


