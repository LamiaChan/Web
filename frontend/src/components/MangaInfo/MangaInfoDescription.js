import React from 'react';
import MangaTags from './MangaInfoTags'

export default function MangaHeader(props){
  var year = "";
  //Prevent recive props before get the response
  if (props.manga.year_of_publish !== undefined){
    year = props.manga.year_of_publish.slice(0,4)
  }
    return(
    <React.Fragment>
    <div className="row">
      <div className="col-md-12">
        <div className="descriptionBlock">
          <div className="statistics">
            <span><i class="fa fa-eye"></i> 204</span>
            <span>{year} год</span>
          </div>
          <p>
            {props.manga.description}
          </p>
        </div>
      </div>
    </div>
    <MangaTags tags={props.tags} manga={props.manga} mainColor={props.mainColor} />
    </React.Fragment>
    )
  }