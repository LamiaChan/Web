import React from 'react';
import Tags from './Tags'
import Manga from './Manga'
import './Catalog.css'

//Redux-react connecter import
import { connect } from 'react-redux'

class Catalog extends React.Component{
  render(){
    return(
    <React.Fragment>
      <div className="container-fluid  pr-0 pl-0">
        <Tags mainColor={this.props.mainColor} apiTags={this.props.apiTags} />
      </div>
      <div className="container-fluid">
        <Manga api={this.props.apiManga} />
      </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    apiManga: state.api.manga,
    apiTags: state.api.tags,
    apiLinks: state.apiLinks
  }
}

export default connect(mapStateToProps) (Catalog);