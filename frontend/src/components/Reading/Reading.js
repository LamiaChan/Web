import React from 'react';
import ReadingSettings from './ReadingSettings'
import ReadingPict from './ReadingPict'
import './Reading.css'
import {apiWorker} from '../Api/apiWorker'

//Redux-react connecter import
import { connect } from 'react-redux'



class Reading extends React.Component{
  constructor(){
    super()
    //CURRENT PAGE
    this.state = {
        currentPg: 1,
        chapters: [],
        manga: [],
      }
    this.findActualChapter = this.findActualChapter.bind(this)
    this.mainPageChanger = this.mainPageChanger.bind(this)
    this.getPageUrl = this.getPageUrl.bind(this)
  }
    //GET MANGA ID FROM PAGE URL
  getPageUrl(needed){
    var currentUrl = window.location.pathname;
    var params = currentUrl.split('/');

    if(needed === "chapter"){
      return params[params.length-1];
    }
    if(needed === "manga"){
      return params[params.length-2];
    }
  }
  //API calls with apiWorker function
  async componentDidMount(){
    const mangaLink = this.props.mangaLink + this.getPageUrl("manga") + "/"
    await apiWorker(mangaLink).then(response => {this.setState({manga : response})})
    await apiWorker(this.props.chapterLink).then(response => {this.setState({chapters : response})})
  }
  findActualChapter(){
    if(this.state.chapters !== undefined){
      for (let i = 0; i < this.state.chapters.length; i++) {
        if(this.state.chapters[i].id === parseInt(this.getPageUrl("chapter"))){
          return this.state.chapters[i]
        }
      }
    }
  }


  //Filter chapters
  //This function sort needed chapters from others
  filterChapters(){
    var newChapters = [];
    for (let i = 0; i < this.state.chapters.length; i++) {
      if(this.state.chapters[i].manga === this.state.manga.id ){
        newChapters.push(this.state.chapters[i])
      }
    }
    return newChapters
  }
  //Page changer 
  //We call this function in child components and change page here!
  mainPageChanger(newPage){
    this.setState({
        currentPg: newPage
      })
  }

  render(){
    return(
      <div className="readingContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <ReadingSettings currentPg={this.state.currentPg} mainPageChanger={this.mainPageChanger} chapters={this.findActualChapter()} allChapters={this.filterChapters()} manga={this.state.manga} />
            </div>
              <ReadingPict currentPg={this.state.currentPg} mainPageChanger={this.mainPageChanger} chapter={this.findActualChapter()} mainLink={this.props.mainLink} />
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

//Parce Redux data to React props
const mapStateToProps = (state)=>{
  return {
    mainLink: state.apiLinks.mainLink,
    mangaLink: state.apiLinks.manga,
    chapterLink: state.apiLinks.chapters
  }
}

export default connect(mapStateToProps) (Reading);