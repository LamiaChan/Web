import React from 'react';
import './MangaInfo.css'
import MangaHeader from './MangaInfoHeader'
import MangaDescription from './MangaInfoDescription'

import {takeApi} from '../ApiRequest'


//Redux-react connecter import
import { connect } from 'react-redux'


class MangaInfo extends React.Component{
  
  constructor(){
    super()
    this.state = {
      actualMangaId: 1,
      manga: [],
      tags: []
    }
    this.getPageUrl = this.getPageUrl.bind(this)
  }
  //API calls with takeApi function
  async componentDidMount(){
    await this.getPageUrl()
    const mangaLink = this.props.mangaLink + this.state.actualMangaId + "/"
    await takeApi(mangaLink).then(response => {this.setState({manga : response})})
    await takeApi(this.props.tagLink).then(response => {this.setState({tags : response})})
  }

  //GET MANGA ID FROM PAGE URL
  async getPageUrl(){
    var currentUrl = window.location.pathname;
    var params = currentUrl.split('/');
    await this.setState({
      actualMangaId: parseInt(params[params.length-1])
    })
    return params[params.length-1];
  }

  render(){
    return(
    <React.Fragment>
      <div className="container-fluid">
        <MangaHeader manga={this.state.manga} />
        <MangaDescription manga={this.state.manga} tags={this.state.tags} mainColor={this.props.mainColor} />
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

export default connect(mapStateToProps) (MangaInfo);