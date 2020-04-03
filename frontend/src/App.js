import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import LamiaNavbar from './components/Navbar'
import * as actionCreator from './store/actions/action'

class App extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <div className="App">
        <LamiaNavbar
          mainColor={this.props.mainColor}
          changeTheme={this.props.changeColor}
        />
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
    changeColor: () => dispach(actionCreator.changeColor())
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
