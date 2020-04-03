import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class MainNews extends React.Component {
  render(){
    return(
        <div className="MainNews" style={{borderColor: this.props.mainColor}}>
          <h1>LOL</h1>
        </div>
    )
  }
}