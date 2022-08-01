import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Development from './pages';

export default function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Development />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
