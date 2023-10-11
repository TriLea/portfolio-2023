import '../assets/styles/App.css';
import MyScene from './MyScene.jsx';
// import { Parallax } from 'react-scroll-parallax';
import React, { useState, useEffect } from 'react';

function Home() {

    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const parallaxShift = scrollY * 0.4;

  return (
    <>
    {/* <MyScene id="cube" className='my-scene' style={{transform: `translateY(${parallaxShift}px)` }} /> */}
    <div className='my-scene'>
        <MyScene id="cube"/>
    </div>

    {/* <Parallax y={[50, -50]}>
        <MyScene id="cube"/>
    </Parallax> */}
        
    <div className='card'>
        <h2>About Me</h2>
        <p>Hello, I'm Tristan Lea, welcome to my website</p>
        <p>Above are links to my resume, portfolio, and contact details</p>
        <p>I look forward to working with you</p>
    </div>

    {/* <div id="projects-card">
        <h2>Projects</h2>
        <p>Here are some of my projects</p>
    </div> */}

    {/* <div id="resume-card">
        <h2>Resume</h2>
        <p>Here is my resume</p>
    </div> */}

    {/* <div id="contact-card">
        <h2>Contact</h2>
        <p>Tlea5@uw.edu</p>
    </div> */}
    </>
  )
}

export default Home
