import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import CustomNavbar from './components/Navbar'; // Import Navbar

const App = () => {
    return (
        <Router>
            <CustomNavbar /> {/* Add Navbar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects/" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
};

export default App;