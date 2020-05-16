import React from 'react';
import ReadingSettings from './ReadingSettings'
import ReadingPict from './ReadingPict'
import './Reading.css'

//Redux-react connecter import
import { connect } from 'react-redux'



class Reading extends React.Component{
  constructor(){
    super()
    //CURRENT PAGE
    this.state = {
        currentPg: 0
      }
    this.findActualChapter = this.findActualChapter.bind(this)
    this.mainPageChanger = this.mainPageChanger.bind(this)
  }
  findActualChapter(){
    for (let i = 0; i < this.props.location.state.chapters.length; i++) {
      if(this.props.location.state.chapters[i].id === this.props.location.state.chapterNumber){
        return this.props.location.state.chapters[i]
      }
    }
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
              <ReadingSettings currentPg={this.state.currentPg} mainPageChanger={this.mainPageChanger} chapters={this.props.location.state.chapters} chapter={this.findActualChapter()} mangaTitle={this.props.location.state.title} />
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
  }
}

export default connect(mapStateToProps) (Reading);