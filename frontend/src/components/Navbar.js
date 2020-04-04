import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Lamia from '../images/Lamia.png'

export default class LamiaNavbar extends React.Component{
  constructor(){
    super()
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(){
    this.props.changeTheme(this.refs.colorChange.checked)
  }
  render(){
    return(
      <header>
        <div className="Lamia d-lg-block d-none mx-lg-3">
          <img src={Lamia} alt="Lamia"></img>
        </div>
        <Navbar expand="lg" className="Navbar mx-lg-3" style={{background: this.props.mainColor.color}}>
          <Navbar.Brand href="#home" className="logo">Lamia chan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Главаня</Nav.Link>
              <Nav.Link href="#home">Каталог</Nav.Link>
              <Nav.Link href="#link">Рейтинг</Nav.Link>
              <Nav.Link href="#home">Сообщество</Nav.Link>
              <label class="form-switch">
                <input type="checkbox" ref="colorChange" onClick={this.changeColor} />
                <i></i>
              </label>
              {/* <Button variant="outline-success" onClick={this.props.changeTheme}>Change collor</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
