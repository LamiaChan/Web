import React from 'react';
import Tags from './Tags'
import Manga from './Manga'
import './Catalog.css'

//Redux-react connecter import
import { connect } from 'react-redux'

import {apiWorker} from '../Api/apiWorker'

class Catalog extends React.Component{
  constructor(){
    super()
    this.state = {
      manga: [],
      tags: []
    }
  }

  //API calls with Worker function
  async componentDidMount(){
    await apiWorker(this.props.mangaLink).then(response => {this.setState({manga : response})})
    await apiWorker(this.props.tagLink).then(response => {this.setState({tags : response})})
  }

  render(){
    return(
    <React.Fragment>
      <div className="container-fluid  pr-0 pl-0">
        <Tags mainColor={this.props.mainColor} apiTags={this.state.tags} />
      </div>
      <div className="container-fluid">
        <Manga api={this.state.manga} />
      </div>
    </React.Fragment>
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

export default connect(mapStateToProps) (Catalog);