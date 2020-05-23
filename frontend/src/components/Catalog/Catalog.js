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
      mangaFilter: '?likes=more',
      pickedTags: [],
    }
    this.changeFilterPar = this.changeFilterPar.bind(this)
    this.addOneTag = this.addOneTag.bind(this)
    this.renderMangaDependsOnTags = this.renderMangaDependsOnTags.bind(this)
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

  addOneTag(newTag, ref){

    var tagAlreadyPicked = false;
    const pickedTagsArray = this.state.pickedTags
    for (let i = 0; i < pickedTagsArray.length; i++) {
      if(newTag === pickedTagsArray[i]){
        pickedTagsArray.splice(i, 1)
        tagAlreadyPicked = true
        ref.style.background = this.props.mainColor.color
        break
      }
    }
    if(!tagAlreadyPicked){
      pickedTagsArray.push(newTag)
      ref.style.background = 'red'
    }
    this.setState({
      pickedTags : pickedTagsArray
    })
    console.log(this.state.pickedTags)
    this.renderMangaDependsOnTags()
  }

  renderMangaDependsOnTags(){
    const filteredManga = []
    for (let i = 0; i < this.state.manga.length; i++) {
      var repeatStatus = 0
      for (let j = 0; j < this.state.pickedTags.length; j++) {
        for (let k = 0; k < this.state.manga[i].tags.length; k++) {
          if((this.state.pickedTags[j] === this.state.manga[i].tags[k])&&(repeatStatus == 0)){
            repeatStatus = 1
            filteredManga.push(this.state.manga[i])
          } 
        }
      }
    }
    console.log(filteredManga)
    if(filteredManga.length === 0){
      return this.state.manga
    }
    else{
      return filteredManga
    }
  }
  render(){
    return(
    <React.Fragment>
      <div className="container-fluid  pr-0 pl-0">
        <Tags addOneTag={this.addOneTag} mainColor={this.props.mainColor} apiTags={this.state.tags} />
      </div>
      <div className="container-fluid">
        <CatalogFilter changeFilterPar={this.changeFilterPar} />
        <Manga api={this.renderMangaDependsOnTags()} />
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