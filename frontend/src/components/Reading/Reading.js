import React from 'react';

import {takeApi} from '../ApiRequest'

//Redux-react connecter import
import { connect } from 'react-redux'

const ReadingPage = (props)=>{
  return(
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8"></div>
      <div className="col-md-2"></div>
    </div>
  )
}

class Reading extends React.Component{
  render(){
    return(
      <div className="readingContainer">
        <div className="container-fluid">
          <ReadingPage />
        </div>
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

export default connect(mapStateToProps) (MangaInfo);