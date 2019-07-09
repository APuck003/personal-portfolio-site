import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience;
import Skills from './Skills';

class Resume extends Component {
  
  render() {
    return (
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}>
//                 <img>
              </div>
              <h2 style={{paddingTop: '2em'}}>Austin Puckett</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Cell>
          </Grid>
        </div>
    );
  }
}


export default Resume;
