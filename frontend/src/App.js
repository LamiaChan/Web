
import React from "react";
import LamiaNavbar from './components/Navbar/Navbar'

//React-redax import
import { connect } from 'react-redux'


function App(props) {
  return (
      <div className="pt-lg-3" style={{background: props.mainColor.mainBack}}>
        <LamiaNavbar />
      </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
  }
}


export default connect(mapStateToProps) (App);