import React from 'react';
//Redux-react connecter import
import { connect } from 'react-redux'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const ChaptersDropdown = (props)=>{
  return(
  <div className="dropdown readingSettings__dropdown" >
    <button className="btn btn-success dropdown-toggle readingSettings__dropdown" style={{border: `2px ${props.mainColor.color} solid`, color: props.mainColor.textColor}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Выберете страницу
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {/* {this.chaptersRender()} */}
    </div>
  </div>
  )
}

const PagesDropdown = (props)=>{
  console.log(props.chapter)
  const pageDropdown = [];
  if(props.chapter !== undefined){
      for (let i = 0; i < props.chapter.page_set.length; i++) {
        pageDropdown.push(
          <a className="dropdown-item" key={props.chapter.page_set[i].id}>{props.chapter.page_set[i].id}</a>
        )
      }
    }
  return(
  <div className="dropdown readingSettings__dropdown" >
    <button className="btn btn-success dropdown-toggle readingSettings__dropdown" style={{border: `2px ${props.mainColor.color} solid`, color: props.mainColor.textColor}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Выберете страницу
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {pageDropdown}
    </div>
  </div>
  )
}

const ReadingSettings = (props)=>{
  console.log(props.chapters)
  return(
    <div className="readingSettings">
      <h3 className="readingSettings__title" style={{border: `2px ${props.mainColor.color} solid`, color: props.mainColor.textColor}} >{props.mangaTitle}</h3>
      <PagesDropdown mainColor={props.mainColor} chapter={props.chapters[0]} />
    </div>
  )
}

//Parce Redux data to React props
const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
  }
}

export default connect(mapStateToProps) (ReadingSettings);