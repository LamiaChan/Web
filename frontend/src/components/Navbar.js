import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default class LamiaNavbar extends React.Component{
  render(){
    return(
      <header>
        <Navbar expand="lg" className="Navbar" style={{background: this.props.mainColor}}>
          <Navbar.Brand href="#home">Lamia chan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Button variant="outline-success" onClick={this.props.changeTheme}>Change collor</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.mainColor}
      </header>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    test: state.test
  }
}