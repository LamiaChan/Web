import React from 'react';
import './MangaInfo.css'


//Redux-react connecter import
import { connect } from 'react-redux'

const MangaHeader = (props) =>{
  return(
  <div className="mangaHeader">
    <h1>{props.manga.title}</h1>
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

  componentDidMount(){
    this.getPageUrl()
    console.log(this.props)
    this.getNeededManga()
  }

  //FUNCTION FOR FINDING MANGA WICH WE NEED ON THIS PAGE IN PROPS
  getNeededManga(){
    console.log('MANGALENGTH: ', this.props.apiManga.length)
    for (let i = 0; i < this.props.apiManga.length; i++) {
      if (this.props.apiManga[i].id === this.state.actualMangaId) {
        this.setState({
          actualManga: this.props.apiManga[i]
        })
        console.log(this.state.actualManga)
        break
      }
      
    }
  }
  //GET MANGA ID FROM PAGE URL
  async getPageUrl(){
    var currentUrl = window.location.pathname;
    var params = currentUrl.split('/');
    await this.setState({
      actualMangaId: params[params.length-1]
    })
    console.log(this.state.actualMangaId)
    return params[params.length-1];
  }

  render(){
    return(
    <React.Fragment>
      <div className="container-fluid  pr-0 pl-0">
        <MangaHeader manga={this.state.actualManga} />
      </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    apiManga: state.api.manga,
    apiTags: state.api.tags
  }
}

export default connect(mapStateToProps) (MangaInfo);