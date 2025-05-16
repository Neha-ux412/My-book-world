import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Reading from './pages/Reading';
import Read from './pages/Read';
import FavoritePicks from './pages/FavoritePicks';
import Feedback from './pages/Feedback';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-fixed" style={{ 
        backgroundImage: 'url("/home.jpg")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4">
          <h1 className="bg-[#eddeca] text-4xl font-bold text-center py-5 rounded-lg mb-4">Welcome to the book World!!!</h1>
          <nav className="bg-[#eddeca] p-4 flex justify-center space-x-4 rounded-lg">
            <Link to="/" className="px-6 py-2 rounded-lg text-black hover:bg-[#d4c4a9]">Home</Link>
            <Link to="/reading" className="px-6 py-2 rounded-lg text-black hover:bg-[#d4c4a9]">Reading</Link>
            <Link to="/read" className="px-6 py-2 rounded-lg text-black hover:bg-[#d4c4a9]">Read</Link>
            <Link to="/favorite" className="px-6 py-2 rounded-lg text-black hover:bg-[#d4c4a9]">Favorite Picks</Link>
            <Link to="/feedback" className="px-6 py-2 rounded-lg text-black hover:bg-[#d4c4a9]">Feedback</Link>
          </nav>
        </div>
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/read" element={<Read />} />
            <Route path="/favorite" element={<FavoritePicks />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

