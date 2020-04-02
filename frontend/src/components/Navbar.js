import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default class LamiaNavbar extends React.Component{
  render(){
    return(
      <header>
        <Navbar expand="lg" className="Navbar" style={{background: "#11998E"}}>
          <Navbar.Brand href="#home">Lamia chan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.test}
      </header>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    test: state.test
  }
}