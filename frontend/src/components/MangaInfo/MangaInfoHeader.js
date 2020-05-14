import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Link } from 'react-router-dom';

export default class MangaHeader extends React.Component{
    constructor(){
      super()
      this.chaptersRender = this.chaptersRender.bind(this)
    }
    //Render chapters for dropdown
    chaptersRender(){
      if(this.props.chapters !== undefined){
      const chapteredDropdown = [];
        for (let i = 0; i < this.props.chapters.length; i++) {
          chapteredDropdown.push(
            <Link className="dropdown-item" to={{
              pathname:`/info/${this.props.actualMangaId}/${this.props.chapters[i].id}`,
              state: {chapters: this.props.chapters}
            }} key={this.props.chapters[i].id}>{this.props.chapters[i].title}</Link>
          )
        }
        return chapteredDropdown
      }
    }
    render(){
      return(
        <div className="row">
          <div className="col-md-12">
            <div className="mangaHeader" style={{background: `linear-gradient(to right, ${this.props.manga.gradient_color1}, ${this.props.manga.gradient_color2})`}}>
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="mangaHeader__title">{this.props.manga.title}</h1>
                  <div className="mangaLinks">
                      <i className="fa fa-heart"></i> {this.props.manga.likes}
                      <span className="mangaLinks__otherLinks">
                        <i className="fa fa-bomb"></i>
                        <i className="fa fa-share-alt"></i>
                      </span>
                  </div>
                  <div className="dropdown chapterDropdown__container">
                    <button className="btn btn-success dropdown-toggle chapterDropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Выберете Главу
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {this.chaptersRender()}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-2">
                  <img src={this.props.manga.preview_image_url} className="mangaHeader__img" alt="mangaPicture"></img>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
          </div>
        </div>
        )
    }
  }