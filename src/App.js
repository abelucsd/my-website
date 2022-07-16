import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">      
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/projects" element={<Projects />} />            
          <Route path="/about" element={<About />} />            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
