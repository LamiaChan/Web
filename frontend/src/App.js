import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.test}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    test: state.test
  }
}
const mapDispachToProps = (dispach) => {
  return {
    onDeliteItem: (id) => dispach({type:'DELITE_ITEM', key:id})
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
