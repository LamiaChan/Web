import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalog.css'
import { Link } from 'react-router-dom';

const MangaCard = (props) =>{
  const mangaCards = []
  //Loop for manga rendering
  for (let i = 0; i < props.api.length; i++) {
    mangaCards.push(
      <div key={props.api[i].id} className="col-lg-2 centered">
        <Link to={'/info/'+props.api[i].id}>
          <div className="mangaCard">
            <img src={props.api[i].preview_image_url} className="mangaCard__img" alt="manga"></img>
            <div className="likes">
              <h4 className="likes__text"><i className="fa fa-heart"></i> {props.api[i].likes}</h4>
              <Link to={'#'}><i className="fal fa-heart-circle"></i></Link>
            </div>
            <div className="middle">
              <div className="mangaName">{props.api[i].title}</div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
  return(
    <div className="row">
      {mangaCards}
    </div>
  )
}

export default class Main extends React.Component {
  render(){
    return(
        <React.Fragment>
          <MangaCard api={this.props.api} />
        </React.Fragment>
    )
  }
}