import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import LamiaNavbar from './components/Navbar'

class App extends React.Component {

  constructor(){
    super()
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme(){
    this.props.changeColor()
    console.log("done")
  }

  render(){
    return (
      <div className="App">
        <LamiaNavbar
          mainColor={this.props.mainColor}
          changeTheme={this.changeTheme}
        />
        <button onClick={this.changeTheme}>KEK</button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor
  }
}
const mapDispachToProps = (dispach) => {
  return {
    changeColor: () => dispach({type:'CHANGE_COLOR'})
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
