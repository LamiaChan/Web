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
 
  console.log(typeof(props.mainPageChanger))
  const pageDropdown = [];
  if(props.chapter !== undefined){
      for (let i = 0; i < props.chapter.page_set.length; i++) {
        pageDropdown.push(
          <div className="dropdown-item readingSettings__dropdown__item" onClick={()=>props.mainPageChanger(props.chapter.page_set[i].number)} key={props.chapter.page_set[i].number}>{props.chapter.page_set[i].number}</div>
        )
      }
    }
  return(
  <div className="dropdown readingSettings__dropdown" >
    <button className="btn btn-success dropdown-toggle readingSettings__dropdown" style={{border: `2px ${props.mainColor.color} solid`, color: props.mainColor.textColor}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Страница {props.currentPg} из {props.chapter.page_set.length}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {pageDropdown}
    </div>
  </div>
  )}

const ReadingSettings = (props)=>{
  
  return(
    <div className="readingSettings">
      <h3 className="readingSettings__title" style={{border: `2px ${props.mainColor.color} solid`, color: props.mainColor.textColor}} >{props.mangaTitle}</h3>
      <PagesDropdown currentPg={props.currentPg} mainPageChanger={props.mainPageChanger.bind()} mainColor={props.mainColor} chapter={props.chapters[0]} />
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