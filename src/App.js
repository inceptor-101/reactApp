import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <header className="header-content">
          <a className="logo" href="">
            <img src="/images/StudySyn.svg" alt="" className="logo-icon" />
            <span className="logo-text">StudySync</span>
          </a>
          <nav className="navbar">
            <a className="navlink" href="#home">Networks and Systems</a>
            <a className="navlink" href="#features">Power Systems</a>
            <a className="navlink" href="#pricing">ADA</a>
            <a className="navlink" href="#blog">Electrical Machines</a>
            <a className="navlink" href="#about">Economics</a>
          </nav>
          <a href="#contact" className="contact-button">Contact us</a>
          <button type="button" className="menu-button">
            <img src="/images/Hamburger.svg" alt="Hamburger" className="menu-icon" />
          </button>
        </header>
      </div>

      <div className="content">
        <section className="main-section">
          <div className="content-left">
            <p className="section-label">One note at a time, the symphony of life unfolds</p>
            <h1 className="section-title">Embrace the journey, for every step brings you closer to your dreams.</h1>
            <p className="section-description">
              In the quiet moments of life, when the world seems to slow down and the noise fades away, we often find
              the most profound insights and deepest connections. It's in these instances that we reflect on our journey,
              appreciate the small victories, and understand the importance of resilience. Every challenge faced and
              every obstacle overcome becomes a note in the symphony of our existence, creating a harmonious blend of
              experiences that shape who we are.
            </p>
            <div className="button-group">
              <a href="" className="start-button">Upload Notes</a>
              <a className="tour-button" href="">Take tour</a>
            </div>
          </div>
          <div className="content-right">
            <div className="image-container">
              <img src="/images/usgs-hoS3dzgpHzw-unsplash.jpg" alt="" className="section-image" />
            </div>
          </div>
        </section>
      </div>

      <div className="company-container">
        <h1>Trusted by the best</h1>
        <div className="company-grid">
          <div className="company-logo">
            <img src="/images/Google.svg" alt="" className="svg-image" />
            <span className="logo-text">Google</span>
          </div>
          <div className="company-logo">
            <img src="/images/Microsoft.svg" alt="" className="svg-image" />
            <span className="logo-text">Microsoft</span>
          </div>
          <div className="company-logo">
            <img src="/images/linkedin.svg" alt="" className="svg-image" />
            <span className="logo-text">LinkedIn</span>
          </div>
          <div className="company-logo">
            <img src="/images/VectorEdu.svg" alt="" className="svg-image" />
            <span className="logo-text">VectorEdu</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
