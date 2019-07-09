import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
			
				<Cell col={8}>
					
				</Cell>
      </Grid>
    )
  }
}

export default Experience;
