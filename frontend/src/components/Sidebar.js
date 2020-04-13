import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import image from '../images/ads.jpg'

export default class Sidebar extends React.Component {
  render(){
    return(
    <React.Fragment>
      <nav className="col-md-3 d-none d-md-block">
        <h3 className="sidebarTitle" style={{color:this.props.mainColor.textColor}}>Реклалма</h3>
        <div className="sidebar__content" style={{borderColor: this.props.mainColor.color, background: this.props.mainColor.smallBack, color:this.props.mainColor.textColor}}>
          <h1>KEK</h1>
          <img className="ads__img" src={image}></img>
        </div>
      </nav>
    </React.Fragment>
    )
  }
}