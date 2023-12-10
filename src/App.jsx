import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import MainMenu from './pages/MainMenu.jsx';
import ManageUsers from './pages/ManageUsers.jsx';
import RealGame from './pages/RealGame.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<MainMenu />} /> 
          <Route path="manageusers" element={<ManageUsers />} />
		      <Route path="realgame" element={<RealGame />} />
		      <Route path="*" element={<MainMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
