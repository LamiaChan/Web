import React from 'react';

export default function MangaHeader(props){
    return(
    <div className="row">
      <div className="col-md-12">
        <div className="mangaHeader" style={{background: `linear-gradient(to right, ${props.manga.gradient_color1}, ${props.manga.gradient_color2})`}}>
          <div className="row">
            <div className="col-lg-4">
              <h1 className="mangaHeader__title">{props.manga.title}</h1>
            </div>
            <div className="col-lg-1">
              <div className="mangaLinks">
                <h4 className="mangaLinks__like">
                  <i className="fa fa-heart"></i> {props.manga.likes}
  
                  <span className="mangaLinks__otherLinks">
                    <i className="fa fa-bomb"></i>
                    <i className="fa fa-share-alt"></i>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-2">
              <img src={props.manga.preview_image_url} className="mangaHeader__img"></img>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </div>
    )
  }