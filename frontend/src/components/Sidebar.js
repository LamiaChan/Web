import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class Main extends React.Component {
  render(){
    return(
    <nav className="col-md-3 d-none d-md-block">
      <div className="sidebar__content" style={{borderColor: this.props.mainColor}}>

      </div>
    </nav>
    )
  }
}