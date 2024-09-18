import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import AccessibilityButton from './components/AccessibilityButton/AccessibilityButton.js';
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

      {/* Botón de accesibilidad */}
      <AccessibilityButton />
    </>
  );
}

export default App;
