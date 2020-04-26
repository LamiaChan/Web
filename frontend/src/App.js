
import React from "react";
import LamiaNavbar from './components/Navbar/Navbar'
//Redux-react connecter import
import { connect } from 'react-redux'
//Redux actions import
import * as actionCreator from './store/actions/action'


class App extends React.Component {
  render(){
    return (
      <div className="pt-lg-3" style={{background: this.props.mainColor.mainBack}}>
        <LamiaNavbar />
      </div>
  );
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
  }
}


export default connect(mapStateToProps) (App);