import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Development from './pages';

export default function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Development />} />
      </Routes>
    </BrowserRouter>
  );
}
