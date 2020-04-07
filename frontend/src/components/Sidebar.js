import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class Main extends React.Component {
  render(){
    return(
    <React.Fragment>
      <nav className="col-md-3 d-none d-md-block">
        <h3 className="sidebarTitle" style={{color:this.props.mainColor.textColor}}>Фильтры</h3>
        <div className="sidebar__content" style={{borderColor: this.props.mainColor.color, background: this.props.mainColor.smallBack, color:this.props.mainColor.textColor}}>

        </div>
      </nav>
    </React.Fragment>
    )
  }
}