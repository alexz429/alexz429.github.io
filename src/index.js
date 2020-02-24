import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Background from "./Resources/bg.jpg";

const styles = new Map();
styles['bg'] = {
  width: "100%",
  height: "100%",
  backgroundImage: `url("${Background}")`,
  backgroundAttachment: 'fixed',
  backgroundSize: '100% 100%',
};
styles['main'] = {
  width: "100%",
  height: "100%",
};
styles['body'] = {

};
styles['Nav'] = {
  backgroundColor: "Coral",
  width: "100%",
  textAlign: "center",
};
class NavBarElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {hover: false};
  }
  flipHover(){
    this.setState({
      hover: !this.state.hover,
    })
  }
  render() {
    let curStyle = {};
    if (this.state.hover) {
      
    }
    else {
      
    }
    return (
      <div style = {curStyle} onMouseEnter={()=>this.flipHover()} onMouseLeave = {()=>this.flipHover()}>
        {this.props.name}
      </div>
    )
  }
};
class NavBar extends React.Component {
  render() {

    return (
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav" style={{ backgroundColor: "Navy" }}>
          <Nav.Link href="#home" style={styles['Nav']}><NavBarElement name={'home'}/></Nav.Link>
          <Nav.Link href="#link" style={styles['Nav']}><NavBarElement name={'link'}/></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
class Body extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}
class Output extends React.Component {
  render() {
    return (
      <div className="Output" style={styles['main']}>
        <div className="Nav">
          <NavBar />
        </div>
        <div style={styles['bg']}>
          huh
        </div>
        <div style={{ height: '100%' }}>
          hey guys
        </div>
      </div>
    )
  }
}
// ========================================

ReactDOM.render(
  <Output />,
  document.getElementById('root')
);
