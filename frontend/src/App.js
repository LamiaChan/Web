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

  async componentDidMount(){
    try{
      const response = await fetch("http://queryberry.ru:8000/api/v1/manga/")
      const data = await response.json();
      console.log(data)
      this.props.takeApi(data.results)
      console.log(this.props.api)
    }
    catch(err){
      console.log(err)
    }
  }

  render(){
    return (
      <div className="App" style={{background: this.props.mainColor.mainBack}}>
        <LamiaNavbar
          mainColor={this.props.mainColor}
          changeTheme={this.props.changeColor}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <Main mainColor={this.props.mainColor} api={this.props.api} />
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
    mainColor: state.mainColor,
    api: state.api
  }
}
const mapDispachToProps = (dispach) => {
  return {
    changeColor: (status) => dispach(actionCreator.changeColor(status)),
    takeApi: (api) => dispach(actionCreator.takeApi(api))
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
