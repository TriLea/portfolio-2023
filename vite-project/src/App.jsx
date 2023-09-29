import './assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ParallaxProvider } from 'react-scroll-parallax';
//need to remove this ^ later

//components
import Nav from './components/Nav.jsx';

//pages
import Home from './Pages/Home.jsx';
import Portfolio from './Pages/Portfolio.jsx';
// import Contact from './Pages/Contact';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}