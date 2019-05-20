import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'

class Projects extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = { activeTab: 0 }
    
  }
  
  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
          <div className="projects-grid">
            
            {/* Python Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(http://robotixacademy.com/wp-content/uploads/2016/12/data-python-3.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Interactive Dictionary Command Line Application made using Python
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/Interactive-Dictionary" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Python Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(http://robotixacademy.com/wp-content/uploads/2016/12/data-python-3.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Rubik's Cube GUI App
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/Rubiks-Cube-GUI" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Python Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(http://robotixacademy.com/wp-content/uploads/2016/12/data-python-3.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Karplus-Strong Musical Algorithm
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/karplus-strong-music-notes" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
          </div>
          
      )
    } else if (this.state.activeTab === 1) {
      return (
          <div className="projects-grid-2">
            
            {/* Django Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://www.valentinog.com/blog/wp-content/uploads/2018/02/django-rest-framework-react-wp.png) center / cover'}}>
              </CardTitle>
              <CardText>
                <strong>GuitHub</strong>: Web Application using Django/React to help people to teach themselves to play guitar.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/GuitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Django Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOyXXLCzOuSmj3o1Z6kYtJXieSNsgJK6uOlo6GcH9MPzlD6U5) center / cover'}}>
              </CardTitle>
              <CardText>
                Website made for an Industrial Waste Management Company
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/IDS_Django_Project" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/*Django Project 3 */}
            {/*<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>*/}
              {/*<CardTitle style={{color: '#FFF', height: '176px', background: 'url() center / cover'}}>*/}
              {/*</CardTitle>*/}
              {/*<CardText>*/}
            
              {/*</CardText>*/}
              {/*<CardActions border>*/}
                {/*<Button colored>*/}
                  {/*<a href="" target="_blank">GitHub</a>*/}
                {/*</Button>*/}
              {/*</CardActions>*/}
              {/*<CardMenu style={{color: '#fff'}}>*/}
                {/*<IconButton name="share" />*/}
              {/*</CardMenu>*/}
            {/*</Card>*/}
            
          </div>
          
          
      )
    } else if (this.state.activeTab === 2) {
      return (
          <div className="projects-grid-3">
            
            {/*Javascript Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Apples-to-Apples inspired game.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/babbles-to-babbles-frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
            {/* Javascript Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Photography Portfolio Page Project
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://codepen.io/APuck003/pen/MmKNwO" target="_blank" rel="noopener noreferrer">CodePen</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            
            {/* Javascript Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Simple Javascript Clock
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://codepen.io/APuck003/pen/LaobRj" target="_blank" rel="noopener noreferrer">CodePen</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
          </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
          <div>
            <h1>This is React</h1>
          </div>
      )
    }
  }
  
  render() {
    return (
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>Python</Tab>
            <Tab>Django</Tab>
            <Tab>Javascript</Tab>
            <Tab>React</Tab>
          </Tabs>
          
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
          
        </div>
    );
  }
}


export default Projects;
