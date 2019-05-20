import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
  render() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                  src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508359/77700258-young-man-casual-avatar-with-glasses-vector-illustration-design.jpg"
                  alt="avatar"
                  className="avatar-img" />
              
              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                
                <hr />
                
                <p>Python | Django | Javascript | React | Ruby | Rails | PostgreSQL | HTML/CSS</p>
                
                <div className="social-links">
                  
                  {/*LinkedIn*/}
                  <a href="https://www.linkedin.com/in/austin-puckett-694746157/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
  
                  {/*GitHub*/}
                  <a href="https://github.com/APuck003" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
  
                  {/*Codepen*/}
                  <a href="https://codepen.io/APuck003/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-codepen" aria-hidden="true" />
                  </a>
                  
                  
                  
                </div>
                
              </div>
            </Cell>
          </Grid>
        </div>
    );
  }
}


export default LandingPage;
