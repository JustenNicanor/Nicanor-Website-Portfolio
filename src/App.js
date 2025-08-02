import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
        </ul>
      </nav>

      <header>
        <h1>Justen L. Nicanor</h1>
        <p>Computer Engineering Graduate | Web Developer | QA Tester</p>

        <div className="header-photo">
          <img src="/image.png" alt="Justen Nicanor" className="profile-img" />
        </div>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I am a fresh graduate of Computer Engineering with internship experience in web development and QA testing. I create efficient, user-focused websites and systems.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>HTML, CSS, JavaScript</li>
          <li>PHP & MySQL</li>
          <li>QA Testing & Debugging</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Material Monitoring System</strong> – For Hayakawa’s local operations</li>
          <li><strong>iDrated App</strong> – Smart water tracker integrated with ESP32</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: justen@example.com</p>
        <p>GitHub: <a href="https://github.com/JustenNicanor" target="_blank" rel="noreferrer">JustenNicanor</a></p>
      </section>
    </div>
  );
}

export default App;
