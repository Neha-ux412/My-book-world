import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReadLaterPage from './pages/ReadLaterPage';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Book World</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read-later" element={<ReadLaterPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;