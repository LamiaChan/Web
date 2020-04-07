import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class MainNews extends React.Component {
  render(){
    return(
      <div>
        <h3 className="componentTitle" style={{color:this.props.mainColor.textColor}}>Последние новости</h3>
        <div className="MainNews" style={{borderColor: this.props.mainColor.color, background: this.props.mainColor.smallBack, color:this.props.mainColor.textColor}}>
          <h1>LOL</h1>
        </div>
      </div>
    )
  }
}