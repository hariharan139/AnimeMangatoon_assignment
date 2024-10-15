import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from './Sections/Slides';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Home'; // Importing Home component
import About from './About'; // Importing About component
import Characters from './Characters'; // Importing Characters component
import Contact from './Contact';
import CharacterSection from './CharacterSection';
import CTAButton from './CTAButton';
import ReadMore from './ReadMore';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className='wrapper'> {/* Use wrapper for full-height layout */}
        <Navbar />
        <div className='content'> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <CharacterSection /> {/* Assuming this is part of the main content */}
          <Slides />
          <br/>
        </div>
        <Footer /> {/* Footer will stay at the bottom */}
      </div>
    </Router>
  );
}

export default App;

