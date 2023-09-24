import './assets/styles/App.css';
//using react-router-dom to display different components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Home from './Pages/Home.jsx';
import Nav from './components/Nav.jsx';
// import Header from './components/Header';
// import Footer from './components/Footer';
//pages
// import Portfolio from './Pages/ProjectItem';
// import Resume from './Pages/Resume';
// import AboutMe from './Pages/AboutMe';
// import Contact from './Pages/Contact';



export default function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Nav /> 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Nav" element={<Nav />} />
            {/* <Route exact path="/Portfolio" element={<Portfolio />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Resume" element={<Resume />} /> */}
          </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}