import React from 'react';
import Tags from './Tags'
import './Catalog.css'

//Redux-react connecter import
import { connect } from 'react-redux'
//Redux actions import
import * as actionCreator from '../../store/actions/action'

class Catalog extends React.Component{
  render(){
    return(
      <div className="container-fluid  pr-0 pl-0">
        <Tags mainColor={this.props.mainColor} apiTags={this.props.apiTags} />
      </div>
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
const mapDispachToProps = (dispach) => {
  return {
    changeColor: (status) => dispach(actionCreator.changeColor(status)),
    saveManga: (api) => dispach(actionCreator.saveManga(api)),
    saveNews: (api) => dispach(actionCreator.saveNews(api)),
    saveTags: (api) => dispach(actionCreator.saveTags(api))
  }
}

export default connect(mapStateToProps, mapDispachToProps) (Catalog);