import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import LamiaNavbar from './components/Navbar'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <LamiaNavbar />
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
