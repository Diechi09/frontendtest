import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DatabasePage from './pages/DatabasePage';
import UploadPage from './pages/UploadPage';
import QueryPage from './pages/QueryPage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/database" element={<DatabasePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;