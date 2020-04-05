import React, {createRef} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
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
              <label className="form-switch">
                <input type="checkbox" ref={this.colorChange} onClick={this.changeColor} />
                <i></i>
              </label>
            </Nav>
            <Form inline className="nav navbar-nav navbar-right">
              <FormControl type="text" placeholder="Поиск" className="mr-sm-2 NavInput" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
