import './App.css';

function App() {
  return (


      
        
        <div className="header-wrapper">

          <div className="App">
            <nav className="navbar">
              <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#certificates">Certificates</a></li>
              </ul>
            </nav>
        <header className="header">
          <div className="header-left">
            <div className="header-text">
              <p className="intro-text">Hello World, I am...</p>
              <h1>Justen L. Nicanor</h1>
              <p className="subtitle">Aspiring <strong><em>SOFTWARE ENGINEER</em></strong></p>
            </div>
            <div className="header-photo">
            <img src="/profile1.png" alt="Justen Nicanor" className="profile-img" />
          </div>

            
          </div>
          <div className="about-container">
              I'm a Computer Engineering major in Software development graduate from Polytechnic University of the Philippines. I am passionate in development, especially in mobile app and websites. I’ve worked on projects combining hardware and software like smart hydration devices and mobile apps and I enjoy building practical solutions that improve everyday life. I'm always looking to learn, grow, and contribute to real-world tech challenges.
            

            </div>

              <a className="cv-button" href="/Justen-Nicanor-Resume.pdf" download="Justen-Nicanor-Resume.pdf">CV/RESUME</a>
        
              <div className="social-icons">
                <a href="https://github.com/JustenNicanor" target="_blank" rel="noopener noreferrer">
                  <img src="/github.svg" alt="GitHub" />
                  <span className="label">GitHub</span>
                </a>
                <a href="https://www.facebook.com/share/1CLmbedhmg/" target="_blank" rel="noopener noreferrer">
                  <img src="/facebook.svg" alt="Facebook" />
                  <span className="label">Facebook</span>
                </a>
                <a href="mailto:justenlnicanor@gmail.com">
                  <img src="/gmail.svg" alt="Gmail" />
                  <span className="label">Gmail</span>
                </a>
            </div>
            
        </header>

        



          
        </div>
    </div>

  );
}

export default App;
