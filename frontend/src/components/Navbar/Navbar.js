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
import MangaInfo from '../MangaInfo/MangaInfo'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

class LamiaNavbar extends React.Component{
  constructor(){
    super()
    this.changeColor = this.changeColor.bind(this)
  }
  colorChange = createRef();
  changeColor(){
    this.props.changeColor(this.colorChange.current.checked)
  }
  render(){
    return(
      <header>
        <Router>
          <Navbar expand="lg" className="Navbar mx-lg-3" style={{background: this.props.mainColor.color}}>
            <Link to="/" className="logo">
              <img src={Lamia} alt="Lamia"></img>
              Lamia chan
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link">Главаня</NavLink>
              <NavLink to="/catalog" className="nav-link">Каталог</NavLink>
              <NavLink to="/rate" className="nav-link">Рецтинг</NavLink>
              <NavLink to="/community" className="nav-link">Сообщество</NavLink>
                <label className="form-switch nav-link">
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

          {/* Hear we have all routes */}
          <Switch>
            <Route exact strict path="/">
              <Main />
            </Route>
            <Route exact strict path="/catalog">
              <Catalog />
            </Route>
            <Route exact strict path="/info/:mangaId">
              <MangaInfo />
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
    mainColor: state.mainColor
  }
}
const mapDispachToProps = (dispach) => {
  return {
    changeColor: (status) => dispach(actionCreator.changeColor(status)),
  }
}

export default connect(mapStateToProps, mapDispachToProps) (LamiaNavbar);
