import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/pages/components/Navbar';
import Footer from "./pages/components/Footer.jsx"
import React, { lazy, Suspense, useEffect } from 'react';
import ScrollToTop from"./pages/components/ScrollToTop.jsx";
import L from "./pages/images/plainLogo.png";
const GlobalPreloadingComponent = ({ children }) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      {children}
    </Suspense>
  );
};

const LoadingComponent = () => (
  <div style={{  width:"100%", height:"1000%" ,  display:"flex", justifyContent:"center" ,alignItems:"center" , marginInline:"auto" , paddingTop:"200px" }}>
    <img src={L} style={{width:"40%" , height:"40%"  } }></img>
  </div>
);

const About = lazy(() => import ('./pages/components/about.jsx'));
const Home = lazy(() => import ('./pages/Home'));
const Contact =lazy(() => import ('./pages/components/Contact.jsx'));
const Services =lazy(() => import ('./pages/services'));

const App = () => {
  

  return (
    <Router>
      <GlobalPreloadingComponent>
      <ScrollToTop />
      <Navbar />
      <div style={{ paddingTop: '75px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer/>
      </GlobalPreloadingComponent>
    </Router>
  );
};

export default App;