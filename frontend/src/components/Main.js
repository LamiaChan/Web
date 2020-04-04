import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class Main extends React.Component {
  render(){
    return(
        <div className="MainContent" style={{borderColor: this.props.mainColor.color, background: this.props.mainColor.smallBack, color:this.props.mainColor.textColor}}>
          <h1>KEK</h1>
        </div>
    )
  }
}