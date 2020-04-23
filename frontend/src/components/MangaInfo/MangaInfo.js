import React from 'react';
import './MangaInfo.css'


//Redux-react connecter import
import { connect } from 'react-redux'

const MangaHeader = (props) =>{
  return(
  <div className="mangaHeader">
    <h1>MANGA NAME</h1>
  </div>
  )
}

class MangaInfo extends React.Component{
  
  constructor(){
    super()
    this.state = {
      actualMangaId: 1,
      actualManga: {}
    }
    this.getPageUrl = this.getPageUrl.bind(this)
    this.getNeededManga = this.getNeededManga.bind(this)
  }
  //WE USE THIS CYCLE BEFORE GETTING PROPS, BUT WE CAN USE THEIR WALUE HERE
  componentWillReceiveProps(nextProps){
    this.getNeededManga(nextProps)
  }
  //FUNCTION FOR FINDING MANGA WICH WE NEED ON THIS PAGE IN PROPS
  getNeededManga(nextProps){
    for (let i = 0; i < nextProps.apiManga.length; i++) {
      if (nextProps.apiManga[i].id === this.state.actualMangaId) {
        this.setState({
          actualManga: nextProps.apiManga[i]
        })
        console.log(this.state.actualManga)
        break
      }
      
    }
  }
  //GET MANGA ID FROM PAGE URL
  getPageUrl(){
    var currentUrl = window.location.pathname;
    var params = currentUrl.split('/');
    console.log(params[params.length-1])
    this.setState({
      actualMangaId: params[params.length-1]
    })
    return params[params.length-1];
  }

  render(){
    return(
    <React.Fragment>
      <div className="container-fluid  pr-0 pl-0">
        <MangaHeader  />
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

export default connect(mapStateToProps) (MangaInfo);