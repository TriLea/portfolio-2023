import '../assets/styles/App.css';
import MyScene from '../components/MyScene.jsx';

function Home() {
  return (
    <>
      <MyScene />
        
      <div id="about-card">
          <h2>About Me</h2>
          <p>Hello, I'm Tristan Lea</p>
      </div>

      <div id="projects-card">
          <h2>Projects</h2>
          <p>Here are some of my projects</p>
      </div>

      <div id="resume-card">
          <h2>Resume</h2>
          <p>Here is my resume</p>
      </div>

      <div id="contact-card">
          <h2>Contact</h2>
          <p>Tlea5@uw.edu</p>
      </div>
    </>
  )
}

export default Home
