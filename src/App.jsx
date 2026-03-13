import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Projects from './pages/Projects';
import DPRForm from './pages/DPRForm';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded z-50"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dpr" element={<DPRForm />} />
      </Routes>
    </Router>
  );
}

export default App;
