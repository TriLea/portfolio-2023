import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Home from './Pages/Home'
import './assets/styles/index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// //components
// import Nav from './components/Nav';
// import Header from './components/Header';
// import Footer from './components/Footer';
// //pages
// import Portfolio from './Pages/ProjectItem';
// import Resume from './Pages/Resume';
// import AboutMe from './Pages/AboutMe';
// import Contact from './Pages/Contact';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// export default function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Nav /> 
//           <Routes>
//             <Route exact path="/" element={<AboutMe />} />
//             <Route exact path="/Nav" element={<Nav />} />
//             <Route exact path="/Portfolio" element={<Portfolio />} />
//             <Route exact path="/Contact" element={<Contact />} />
//             <Route exact path="/Resume" element={<Resume />} />
//           </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }
