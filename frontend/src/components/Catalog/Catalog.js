import React from 'react';
import Tags from './Tags'
import Manga from './Manga'
import CatalogFilter from './CatalogFilter'
import './Catalog.css'

//Redux-react connecter import
import { connect } from 'react-redux'

import {apiWorker} from '../Api/apiWorker'

class Catalog extends React.Component{
  constructor(){
    super()
    this.state = {
      manga: [],
      tags: [],
      mangaFilter: '?likes=more'
    }
    this.changeFilterPar = this.changeFilterPar.bind(this)
  }

  //API calls with Worker function
  async componentDidMount(){
    console.log("Component rerendered")
    //Add filter parameter to api link
    await apiWorker(this.props.mangaLink + this.state.mangaFilter).then(response => {this.setState({manga : response})})
    await apiWorker(this.props.tagLink).then(response => {this.setState({tags : response})})
  }
  //Change filter parameters
  async changeFilterPar(newPar){
    await this.setState({
      mangaFilter : newPar
    })
    await apiWorker(this.props.mangaLink + this.state.mangaFilter).then(response => {this.setState({manga : response})})
  }

  render(){
    return(
    <React.Fragment>
      <div className="container-fluid  pr-0 pl-0">
        <Tags mainColor={this.props.mainColor} apiTags={this.state.tags} />
      </div>
      <div className="container-fluid">
        <CatalogFilter changeFilterPar={this.changeFilterPar} />
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