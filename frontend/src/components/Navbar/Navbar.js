import React, {createRef} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import Lamia from '../../images/Lamia.png'
//React-redax import
import { connect } from 'react-redux'
//Redux actions import
import * as actionCreator from '../../store/actions/action'

// COmponents for router

import Main from '../MainPage/Main';
import Catalog from '../Catalog/Catalog'
import Rate from '../Rate/Rate'
import Community from '../Community/Community'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class LamiaNavbar extends React.Component{
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
        <Router>
          <Navbar expand="lg" className="Navbar mx-lg-3 mt-lg-3" style={{background: this.props.mainColor.color}}>
            <Navbar.Brand href="#home" className="logo">
              <img src={Lamia} alt="Lamia"></img>
              Lamia chan
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="#home"><Link to="/">Главаня</Link></Nav.Link>
                  <Nav.Link href="#home"><Link to="/catalog">Каталог</Link></Nav.Link>
                  <Nav.Link href="#link"><Link to="/rate">Рецтинг</Link></Nav.Link>
                  <Nav.Link href="#home"><Link to="/community">Сообщество</Link></Nav.Link>
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

          <Switch>
            <Route exact strict path="/">
              <Main />
            </Route>
            <Route exact strict path="/catalog">
              <Catalog />
            </Route>
            <Route exact strict path="/rate">
              <Rate />
            </Route>
            <Route exact strict path="/community">
              <Community />
            </Route>
          </Switch>

        </Router>
      </header>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    apiManga: state.api.manga,
    apiNews: state.api.news,
    apiLinks: state.apiLinks
  }
}
const mapDispachToProps = (dispach) => {
  return {
    changeColor: (status) => dispach(actionCreator.changeColor(status)),
    saveManga: (api) => dispach(actionCreator.saveManga(api)),
    saveNews: (api) => dispach(actionCreator.saveNews(api))
  }
}

export default connect(mapStateToProps, mapDispachToProps) (LamiaNavbar);
