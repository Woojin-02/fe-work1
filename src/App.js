import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Home from './pages/Home';
import IssueDetailPage from './pages/IssueDetailPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issue/:issueNumber" element={<IssueDetailPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;