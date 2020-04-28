import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Link } from 'react-router-dom';

export default function MangaHeader(props){
    return(
    <div className="row">
      <div className="col-md-12">
        <div className="mangaHeader" style={{background: `linear-gradient(to right, ${props.manga.gradient_color1}, ${props.manga.gradient_color2})`}}>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mangaHeader__title">{props.manga.title}</h1>
              <div className="mangaLinks">
                  <i className="fa fa-heart"></i> {props.manga.likes}
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
                  <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                </div>
              </div>

            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-2">
              <img src={props.manga.preview_image_url} className="mangaHeader__img" alt="mangaPicture"></img>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
    )
  }