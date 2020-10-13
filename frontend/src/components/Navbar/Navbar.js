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
import getUser from '../Api/userAPI'

// COmponents for router

import Main from '../MainPage/Main';
import Catalog from '../Catalog/Catalog'
import Rate from '../Rate/Rate'
import Community from '../Community/Community'
import MangaInfo from '../MangaInfo/MangaInfo'
import Reading from '../Reading/Reading'
import Auth from '../Auth/Auth'
import Register from '../Auth/Register'
import UserPage from '../UserPage/UserPage'

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
    this.state = {
      userData: []
    }
    this.changeColor = this.changeColor.bind(this)
    this.checkAuth = this.checkAuth.bind(this)
  }

  colorChange = createRef();

  changeColor(){
    this.props.changeColor(this.colorChange.current.checked)
  }

  async componentDidMount(){
    await getUser(this.props.userLink).then(data =>{
      this.setState({ userData: data })
    })
  }
  //This func check if user is loginned ore not
  checkAuth(){
    //If user isn't loggined we loand button. If u click on it, you'll meet login window
    if(this.state.userData.length === 0){
      return(
        <React.Fragment>
            <a href="" class="btn btn-default btn-rounded login__button" data-toggle="modal" data-target="#modalLoginForm">Вход</a>
          <Auth />
        </React.Fragment>
      )
    }
    else{
      return(
        <NavLink to={'/userpage/'+ this.state.userData.username} className="nav-link">{this.state.userData.username}</NavLink>
      )
    }
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
              <NavLink to="/rate" className="nav-link">Рейтинг</NavLink>
              <NavLink to="/community" className="nav-link">Сообщество</NavLink>
              {this.checkAuth()}
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
            <Route exact strict path="/manga/:mangaId">
              <MangaInfo />
            </Route>
            <Route exact strict path="/manga/:mangaId/:chapterId" component={Reading}>
            </Route>
            <Route exact strict path="/userpage/:userName">
              <UserPage />
            </Route>
            <Route exact strict path="/rate">
              <Rate />
            </Route>
            <Route exact strict path="/community">
              <Community />
            </Route>
            <Route exact strict path="/auth">
              <Auth />
            </Route>
            <Route exact strict path="/registration">
              <Register />
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
    userLink: state.apiLinks.userInfo
  }
}
const mapDispachToProps = (dispach) => {
  return {
    changeColor: (status) => dispach(actionCreator.changeColor(status)),
  }
}

export default connect(mapStateToProps, mapDispachToProps) (LamiaNavbar);
