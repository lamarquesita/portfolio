import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
const About = () => {
    const scrollToBottom = ()  => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };
    const handleDownload = () => {
      const resumeUrl = 'public/resume_CamilaArroyo.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', true);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <div className="container-fluid"> {/* Utiliza container-fluid para un contenedor de ancho completo */}
      <div className="row"> {/* Utiliza row para una fila de elementos */}
        <div className="col"> 
          <div className="about">
            <div className="div">
            <div className="navigation">
              <Link to="/" className="text-wrapper1">Camila Arroyo</Link>
              <div className="column">
                <div className="div1">
                <Link to="/about" className="link">About</Link>
                <a style={{ cursor: 'pointer' }} className="link" onClick={scrollToBottom}>Contact</a>
                </div>
              </div>
            </div>
            <div className="overlap-group">
            <img className="IMG" alt="Img" src="IMG-5728-1.png" />
          </div>
          <div className="text-wrapper">About me</div>
          <div className="frame">
            <div className="div-2">
              <p className="i-am-a-front-end">
                I am a front-end developer based in Miami.&nbsp;&nbsp; Has Information Technology background.
              </p>
              <p className="p">
                I am a front-end developer based in Miami looking for exciting opportunities. Has Information Technology
                background. Likes to focus on accessibility when developing. Passionate and curious about solving
                problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I
                enjoy swimming, hiking and going to the beach. Learning more to improve skills.
              </p>
            </div>
            <div className="frame-2">
              <a href="public/resume_CamilaArroyo.pdf" download>
              <Button
                arrow="arrow-2.svg"
                arrowClassName="design-component-instance-node"
                className="button-instance"
                stateProp="default"
                text="DOWNLOAD RESUME"
                onClick={handleDownload}
              />
              </a>
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
          <div className="overlap">
            <div className="frame-4">
              <div className="text-wrapper-2">My Capabilities</div>
              <div className="frame-5">
                <p className="text-wrapper-3">
                  I am always looking to add more skills. Proficient in making designs responsive and functional across
                  devices. Experience working with APIs to integrate external services and enhance the functionality of
                  web applications.
                </p>
                <div className="frame-6">
                  <div className="title-wrapper">
                    <div className="title-2">HTML</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title-2">CSS</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title-2">JAVASCRIPT</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title-2">JQUERY</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title-2">ACCESSIBILITY</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title-2">FIGMA</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title-2">REACT.JS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-2">My Experience</div>
              <div className="frame-8">
                <div className="title-and-wrapper">
                  <div className="div-2">
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="title-3">Freelance Developer</div>
                        <div className="text-wrapper-4">Jan 2024 — Present</div>
                      </div>
                    </div>
                    <div className="title-4">Synerge</div>
                    <p className="p">
                      I translate wireframes and mockups into interactive, pixel-perfect layouts using HTML, CSS, and
                      JavaScript. Integrate third-party APIs and services to enhance the functionality.
                    </p>
                  </div>
                </div>
                <div className="div-2">
                  <div className="frame-9">
                    <div style={{ marginTop: '20px' }} className="frame-10">
                      <div className="title-3">BS, Information Technology</div>
                      <p className="text-wrapper-4">Aug 2021 — May 2025</p>
                    </div>
                  <div className="title-4">Nova Southeastern University, FL</div>
                  <p className="p">Minors in Data analysis, Cybersecurity, Computer Informtion Systems and Business.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <img className="line-2" alt="Line" src="line-8.svg" />
            <div className="frame-4">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="div-2">
                    <div className="text-wrapper-5">Let’s connect</div>
                    <div className="frame-13">
                      <div className="frame-14">
                        <div className="text-wrapper-4">Say hello at</div>
                        <div className="frame-15">
                          <div className="text-wrapper-6">
                          <a
                            className="mail"
                            href="mailto:camilaarroyo1@hotmail.com?subject=Job Opportunity "
                          >
                            camilaarroyo1@hotmail.com
                          </a>
                          </div>
                          <img className="img-2" alt="Underline" src="underline.svg" />
                        </div>
                      </div>
                      <div className="frame-14">
                        <p className="text-wrapper-4">For more info, here’s my</p>
                        <div className="frame-15">
                          <a href="public/resume_CamilaArroyo.pdf" download className="text-wrapper-6">resume</a>
                          <img className="img-3" alt="Underline" src="underline.svg" />
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
                <div className="text-wrapper-7">© 2024 Camila Arroyo</div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-12">
                <form action="https://formspree.io/f/xeqyrebw" method="POST">
                  <div className="frame-17">
                    <div className="frame-9">
                      <div className="description">Name</div>
                      <div className="div-wrapper">
                        <input name="name" className="text" type="text"/>
                      </div>
                    </div>
                    <div className="frame-9">
                      <div className="description">Email</div>
                      <div className="div-wrapper">
                        <input name="email" className="text" type="email"/>
                      </div>
                    </div>
                    <div className="frame-9">
                      <div className="description">Subject</div>
                      <div className="div-wrapper">
                        <input name="_replyto" className="text" type="text"/>
                      </div>
                    </div>
                    <div className="frame-9">
                      <div className="description">Message</div>
                      <div className="div-wrapper">
                        <textarea name="message" className="text-2"/>
                      </div>
                    </div>
                  </div>
                  <button style={{ marginTop: '40px' }} type="submit" className="button-2">
                    <div className="title-5">SUBMIT</div>
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>   
  );
 };

  export default About;
  
