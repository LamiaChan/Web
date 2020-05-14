import React from 'react';
import ReadingSettings from './ReadingSettings'
import ReadingPict from './ReadingPict'
import './Reading.css'

//Redux-react connecter import
import { connect } from 'react-redux'



class Reading extends React.Component{
  constructor(){
    super()
    this.findActualChapter = this.findActualChapter.bind(this)
  }
  findActualChapter(){
    for (let i = 0; i < this.props.location.state.chapters.length; i++) {
      if(this.props.location.state.chapters[i].id === this.props.location.state.chapterNumber){
        return this.props.location.state.chapters[i]
      }
    }
  }

  render(){
    return(
      <div className="readingContainer">
        <div className="container-fluid">

          <ReadingPict chapter={this.findActualChapter()} mainLink={this.props.mainLink} />
          <ReadingSettings chapters={this.props.location.state.chapters} />
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