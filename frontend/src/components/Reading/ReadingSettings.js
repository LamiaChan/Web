import React from 'react';
//Redux-react connecter import
import { connect } from 'react-redux'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Link } from 'react-router-dom';

const ChaptersDropdown = (props)=>{

  const chapteredDropdown = [];
  if(props.allChapters !== undefined){
      for (let i = 0; i < props.allChapters.length; i++) {
        chapteredDropdown.push(
          <Link className="dropdown-item" to={{
            pathname:`/manga/${props.mangaName}/${props.allChapters[i].id}`
          }} key={props.allChapters[i].id}>{props.allChapters[i].title}</Link>
        )
      }
    }
  return(
  <div className="dropdown readingSettings__dropdown" >
    <button className="btn btn-success dropdown-toggle readingSettings__dropdown" style={{border: `2px ${props.mainColor.color} solid`, color: props.mainColor.textColor}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {props.chapterTitle}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {chapteredDropdown}
    </div>
  </div>
  )
}

const PagesDropdown = (props)=>{
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
  
if(props.chapters !== undefined){
  return(
    <div className="readingSettings">
      <h3 className="readingSettings__title" style={{border: `2px ${props.mainColor.color} solid`, color: props.mainColor.textColor}} >{props.manga.title}</h3>
      <PagesDropdown currentPg={props.currentPg} mainPageChanger={props.mainPageChanger.bind()} mainColor={props.mainColor} chapter={props.chapters} />
      <ChaptersDropdown allChapters={props.allChapters} mainColor={props.mainColor} mangaName={props.manga.url_name} chapterTitle={props.chapters.title} />
    </div>
  )
}
else{
  return(<div></div>)
}
}

//Parce Redux data to React props
const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
  }
}

export default connect(mapStateToProps) (ReadingSettings);