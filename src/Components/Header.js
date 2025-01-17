import React, { Component } from "react";
// import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <img className="bg-img" src="../images/World_map.svg" alt="World map decoration" />
        {/* <ParticlesBg type="circle" bg={true} /> */}
          {/* <div className="nav-responsive">
          </div> */}

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          {/* <img className="logo-responsive mobile-btn" src="../images/DS-Favicon-blanco.svg" alt="logo" /> */}
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <span>Daily Sales</span>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <div className="banner-flex">
              <Fade bottom>
                <div>
                  <h1 className="responsive-headline">Daily Sales<br />Online</h1>
                  <h3>{description}</h3>
                </div>
              </Fade>
              <div>
                <img src="images/logo-azul.svg" alt="Daily Sales Logo" />
              </div>
            </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
