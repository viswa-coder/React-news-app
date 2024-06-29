import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigationbar from './components/Navigationbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const pageSize = 6;
  const country = "in"; // Define country variable
  const apiKey = "9bc2225317837600fa21813e38c5f326"; // Read API key from environment variable
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navigationbar />
      <Routes>
        <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="general" />} />
        <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="business" />} />
        <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="entertainment" />} />
        <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="general" />} />
        <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="health" />} />
        <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="science" />} />
        <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="sports" />} />
        <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category="technology" />} />
      </Routes>
    </Router>
  );
}

export default App;
