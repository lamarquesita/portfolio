import "./Home.css";
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const scrollToBottom = ()  => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container-fluid"> {/* Utiliza container-fluid para un contenedor de ancho completo */}
      <div className="row"> {/* Utiliza row para una fila de elementos */}
        <div className="col"> 
          <div className="home">
            <div className="navigation">
              <div className="camila-arroyo">CAMILA aRROYO</div>
              <div className="column">
                <div className="column1">
                <Link to="/about" className="link">About</Link>
                  <a style={{ cursor: 'pointer' }} className="link1" onClick={scrollToBottom}>Contact</a>
                  <div className="nav-link-dropdown">
                    <div className="description">Link Four</div>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevron-down.svg"
                    />
                  </div>
                </div>
                <div className="column2">
                  <div className="button">
                    <div className="description">Button</div>
                  </div>
                  <div className="button2">
                    <div className="description">Button</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <div className="bg" />
              <img className="img-5557-1-icon" alt="" src="/img-5557-1@2x.png" />
            </div>
            <div className="hero-content">
              <div className="header-and-sub-header">
                <div className="hi-i-am-container">
                  <p className="hi-i-am">{`hi, i am `}</p>
                  <p className="hi-i-am">Camila Arroyo.</p>
                </div>
                <div className="a-miami-based">
                  A Miami based front-end developer passionate about building
                  accessible and user friendly websites.
                </div>
              </div>
              <div className="action">
                <button className="button4" onClick={scrollToBottom}>
                  <b className="title">Contact Me</b>
                  <img className="circle-icon" alt="" src="/circle.svg" />
                </button>
                <div className="title-parent">
                  <div className="title1">View Resume</div>
                  <div className="line" />
                </div>
                <a  href="https://www.linkedin.com/in/camarroyo/">
                <div className="bxl-linkedinsvg-wrapper">
                  <img
                    className="bxl-linkedinsvg-icon"
                    alt="LinkedIn"
                    src="/bxllinkedinsvg.svg"
                  />
                </div>
                </a>
                <a href="https://github.com/lamarquesita">
                <div className="bxl-linkedinsvg-wrapper">
                  <img
                    className="bxl-linkedinsvg-icon"
                    alt=""
                    src="/bxlgithubsvg.svg"
                  />
                </div>
                </a>
              </div>
            </div>
            <div className="home-child" />
            <div className="home-item" />
            <div className="home-inner" />
            <div className="frame-parent">
              <div className="frame-group">
                <div className="frame-container">
                  <div className="lets-connect-parent">
                    <div className="lets-connect">Let’s connect</div>
                    <div className="frame-div">
                      <div className="description-parent">
                        <div className="description">Say hello at</div>
                        <div className="mail-parent">
                          <a
                            className="mail"
                            href="mailto:camilaarroyo1@hotmail.com?subject=Job Opportunity "
                          >
                            camilaarroyo1@hotmail.com
                          </a>
                          <div className="underline" />
                        </div>
                      </div>
                      <div className="description-parent">
                        <div className="description">For more info, here’s my</div>
                        <div className="mail-parent">
                          <a href="public/resume_CamilaArroyo.pdf" download className="description">resume</a>
                          <div className="underline" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bxl-linkedinsvg-parent">
                    <a href="https://www.linkedin.com/in/camarroyo/">
                    <img
                      className="bxl-instagramsvg-icon"
                      alt=""
                      src="/bxllinkedinsvg.svg"
                    />
                  </a>
                  <a href="https://github.com/lamarquesita">
                    <img
                      className="bxl-instagramsvg-icon"
                      alt=""
                      src="/bxlgithubsvg.svg"
                    />
                    </a>
                    <a href="https://twitter.com/camarroyoo/">
                    <img
                      className="bxl-instagramsvg-icon"
                      alt=""
                      src="/bxlx.svg.svg"
                    />
                    </a>
                    <a href="https://www.instagram.com/designsby.camila/">
                    <img
                      className="bxl-instagramsvg-icon"
                      alt=""
                      src="/bxlinstagramsvg.svg"
                    />
                    </a>
                </div>
                </div>
                <div className="camila-arroyo2">© 2024 Camila Arroyo</div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-container">
                <form action="https://formspree.io/f/xeqyrebw" method="POST">
                  <div className="frame-parent2">
                    <div className="header-and-sub-header">
                    <div className="description3">Name</div>
                    <div className="nnknklmlmlkm-wrapper">
                        <input name="name" className="nnknklmlmlkm" type="text" />
                      </div>
                    </div>
                    <div className="header-and-sub-header">
                      <div className="description3">Email</div>
                      <div className="nnknklmlmlkm-wrapper">
                        <input name="_replyto" className="nnknklmlmlkm" type="email" />
                      </div>
                    </div>
                    <div className="header-and-sub-header">
                      <div className="description3">Subject</div>
                      <div className="nnknklmlmlkm-wrapper">
                        <input name="subject" className="nnknklmlmlkm" type="text" />
                      </div>
                    </div>
                    <div className="header-and-sub-header">
                      <div className="description3">Message</div>
                      <div className="nnknklmlmlkm-wrapper">
                        <textarea name="message" className="nnknklmlmlkm3" />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '40px' }}> 
                  <button type="submit" className="button5">
                    <b className="title">Submit</b>
                  </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="about-me">About me</div>
            <div className="home-inner1">
              <div className="lets-connect-parent">
                <div className="i-am-a">{`I am a front-end developer based in Miami.   Has Information Technology background. `}</div>
                <div className="i-am-a1">
                  I am a front-end developer based in Miami looking for exciting
                  opportunities. Has Information Technology background. Likes to focus
                  on accessibility when developing. Passionate and curious about
                  solving problems. Currently, I’m exploring Reactjs, Webflow and a
                  bit of Designing. While I am not programming, I enjoy swimming,
                  hiking and going to the beach. Learning more to improve skills.
                </div>
              </div>
            </div>
            <div className="view-project">
              <Link to="/about" className="title3">More about me</Link>
              <div className="line" />
            </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default Home;
