import React from 'react';
import './MainStyle.css'
//Redux-react connecter import
import { connect } from 'react-redux'

// Components exports
import MainManga from './MainManga'
import Sidebar from './Sidebar'
import MainNews from './MainNews'
import Geners from './MainGenres'

import {Worker} from '../Api/Worker'

class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      manga: [],
      news: [],
      tags: []
    }
  }

  async componentDidMount(){
    await Worker(this.props.mangaLink).then(response => {this.setState({manga : response})})
    await Worker(this.props.newsLink).then(response => {this.setState({news : response})})
    await Worker(this.props.tagLink).then(response => {this.setState({tags : response})})
  }

  render(){
    return (
      <div className="App" style={{background: this.props.mainColor.mainBack}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <MainManga mainColor={this.props.mainColor} manga={this.state.manga} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 pl-lg-0 pr-lg-0">
              <Geners mainColor={this.props.mainColor} manga={this.state.manga} tags={this.state.tags} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <MainNews mainColor={this.props.mainColor} news={this.state.news}/>
            </div>
            <div className="col-md-3">
              <Sidebar mainColor={this.props.mainColor} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Parce Redax data into React props
const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    mangaLink: state.apiLinks.manga,
    tagLink: state.apiLinks.tags,
    newsLink: state.apiLinks.news,
  }
}


export default connect(mapStateToProps) (Main);