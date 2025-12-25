import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppDetail from './pages/AppDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:appId" element={<AppDetail />} />
        <Route path="/app/:appId/privacy" element={<PrivacyPolicy />} />
        <Route path="/app/:appId/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
