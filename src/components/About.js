import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
        <div>
          <h1 style={{textAlign: 'center'}}>About Me</h1>
          <p className="about-me">
            I am a Full-Stack Software Developer who is passionate about designing and executing front-end (Javascript/ReactJS) interfaces and back-end (Python/Django/Node.js) services to build efficient, scalable Web Applications.
            <br />
            <br />
            <p>TECHNICAL STACK:</p>
            <ul>
              <li>Programming Languages: Python, Django, Javascript, React, Redux, JQuery, HTML/CSS, Ruby, Rails, Bootstrap, Git, SQL</li>
              <li>Operating Systems: Mac OS, Linux, Windows 10</li>
              <li>Design and IDE Tools: PyCharm, WebStorm, VS Code, Atom</li>
              <li>ADDITIONAL: Build REST APIs using Model Driven Development, Agile, Feature Driven Development</li>
              <li>Implementing best practices to help businesses reach their full potential.</li>
            </ul>
            
          </p>
        </div>
    );
  }
}


export default About;
