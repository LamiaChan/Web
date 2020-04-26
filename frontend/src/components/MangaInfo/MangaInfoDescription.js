import React from 'react';

export default function MangaHeader(props){
    return(
    <div className="row">
      <div className="col-md-12">
        <div className="descriptionBlock">
          <p>
            {props.manga.description}
          </p>
        </div>
      </div>
    </div>
    )
  }