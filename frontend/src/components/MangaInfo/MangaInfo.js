import React from 'react';
import './MangaInfo.css'

import {takeApi} from '../ApiRequest'


//Redux-react connecter import
import { connect } from 'react-redux'

const MangaHeader = (props) =>{
  return(
  <div className="row">
    <div className="col-md-12">
      <div className="mangaHeader" style={{background: `linear-gradient(to right, ${props.manga.gradient_color1}, ${props.manga.gradient_color2})`}}>
        <div className="row">
          <div className="col-lg-4">
            <h1 className="mangaHeader__title">{props.manga.title}</h1>
          </div>
          <div className="col-lg-1">
            <div className="mangaLinks">
              <h4 className="mangaLinks__like">
                <i className="fa fa-heart"></i> {props.manga.likes}

                <span className="mangaLinks__otherLinks">
                  <i className="fa fa-bomb"></i>
                  <i className="fa fa-share-alt"></i>
                </span>
              </h4>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-2">
            <img src={props.manga.preview_image_url} className="mangaHeader__img"></img>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

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
      </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    mangaLink: state.apiLinks.manga,
    tagLink: state.apiLinks.tags
  }
}

export default connect(mapStateToProps) (MangaInfo);