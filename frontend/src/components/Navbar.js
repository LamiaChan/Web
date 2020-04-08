import React, {createRef} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Lamia from '../images/Lamia.png'

export default class LamiaNavbar extends React.Component{
  constructor(){
    super()
    this.changeColor = this.changeColor.bind(this)
  }
  colorChange = createRef();
  changeColor(){
    this.props.changeTheme(this.colorChange.current.checked)
  }
  render(){
    return(
      <header>
        <Navbar expand="lg" className="Navbar mx-lg-3 mt-lg-3" style={{background: this.props.mainColor.color}}>
          <Navbar.Brand href="#home" className="logo">
            <img src={Lamia} alt="Lamia"></img>
            Lamia chan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Главаня</Nav.Link>
              <Nav.Link href="#home">Каталог</Nav.Link>
              <Nav.Link href="#link">Рейтинг</Nav.Link>
              <Nav.Link href="#home">Сообщество</Nav.Link>
              <label className="form-switch">
                <input type="checkbox" ref={this.colorChange} onClick={this.changeColor} />
                <i></i>
              </label>
            </Nav>
            <div className="flexbox">
              <div className="search">
                <div>
                  <input type="text" placeholder="Поиск" required />
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
