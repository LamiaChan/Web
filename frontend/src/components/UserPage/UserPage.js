import React from 'react'
//Redux-react connecter import
import { connect } from 'react-redux'
//API function
import {apiWorker} from '../Api/apiWorker'


class UserPage extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <h1>WELCOME!</h1>
      </div>
    )
  }
}

//Parce Redux data to React props
const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    mangaLink: state.apiLinks.manga,
    tagLink: state.apiLinks.tags
  }
}

export default connect(mapStateToProps) (UserPage);