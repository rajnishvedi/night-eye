import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Chat from './pages/Chat';
import Feedback from './pages/Feedback';
import Interaction from './pages/Interaction';
import NearbyBars from './pages/NearbyBars';
import QuickMenu from './pages/QuickMenu';
import Splash from './pages/Splash';
import Stream from './pages/Stream';
import Desktop from './pages/Desktop';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const RoutesComponent = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the threshold according to your design
      };
  
      // Initial check on mount
      handleResize();
  
      // Listen to window resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <Routes>
        <Route path="/" element={isMobile ? <Splash /> : <Desktop />} />
        {/* <Route path="/" Component={Splash} /> */}
        <Route path="/quick-menu" Component={QuickMenu} />
        <Route path="/interaction" element={<Interaction />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/near-by-bars" element={<NearbyBars />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/stream" element={<Stream />} />
      </Routes>
    );
  }

  return (
    <div>
      <RoutesComponent />
      <ToastContainer />
    </div>
  );
}

export default App;
