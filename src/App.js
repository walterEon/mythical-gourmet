import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';

function App() {
  return (
    <>
      <Navbar />  
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
