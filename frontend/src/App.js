import React from 'react';
import './App.css';
//Redux-react connecter import
import { connect } from 'react-redux'
//Redux actions import
import * as actionCreator from './store/actions/action'
// Components exports
import LamiaNavbar from './components/Navbar'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import MainNews from './components/MainNews'

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <Main mainColor={this.props.mainColor} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <MainNews mainColor={this.props.mainColor} />
                </div>
              </div>
            </div>
            <Sidebar mainColor={this.props.mainColor} />
          </div>
        </div>
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
