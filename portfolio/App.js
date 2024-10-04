import React from 'react';
import './head.css';

const App = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>Arella Pravalika</h1>
          <p className="tagline">"Creating Solutions Through Code"</p>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <div className="about-content">
            <img src="image.jpg" alt="Your Photo" className="profile-image" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>Hello! I'm a web developer passionate about creating interactive and user-friendly applications. I have experience in HTML, CSS, JavaScript, and more. I love turning ideas into reality and continuously learning new technologies.</p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-item">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio to showcase my projects and skills.</p>
            </div>
            <div className="project-item">
              <h3>Calculator</h3>
              <p>A simple calculator web app built using HTML, CSS, and JavaScript.</p>
            </div>
            <div className="project-item">
              <h3>Landing Page</h3>
              <p>A landing page for a music service, highlighting features and user engagement.</p>
            </div>
            <div className="project-item">
              <h3>Tribute Page</h3>
              <p>A Tribute page for those who have contributed a lot.</p>
            </div>
          </div>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p><a href="resume.pdf" className="btn">Download My Resume</a></p>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Email: pravalikaarella@gmail.com</p>
          <p>Phone: 7569772886</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Arella.Pravalika. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
