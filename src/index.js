import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from "./pages/images/plainLogo.png"
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

const newFavicon = document.createElement('link');
newFavicon.rel = 'icon';
newFavicon.type = 'image/png'; // Set the type attribute for the favicon
newFavicon.sizes = '16x16';   // Set the sizes attribute for the favicon
newFavicon.href = logo;       // Use the imported logo image

// Find the existing favicon link (if any)
const existingFavicon = document.querySelector('link[rel="icon"]');
if (existingFavicon) {
  // Remove the existing favicon
  document.head.removeChild(existingFavicon);
}

// Add the new favicon to the head
document.head.appendChild(newFavicon);

document.title = 'SpyconSecurity'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
