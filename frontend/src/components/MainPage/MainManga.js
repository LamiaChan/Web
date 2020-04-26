import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainStyle.css'

const MangaCard = (props) =>{
  const mangaCards = []
  for (let i = 0; i < props.manga.slice(0, 6).length; i++) {
    mangaCards.push(
      <div key={props.manga[i].id} className="col-lg-2 centered">
        <div className="mangaCard">
          <img src={props.manga[i].preview_image_url} className="mangaCard__img" alt="manga"></img>
          <div className="likes">
            <h4 className="likes__text"><i className="fa fa-heart"></i> {props.manga[i].likes}</h4>
          </div>
          <div className="middle">
            <div className="mangaName">{props.manga[i].title}</div>
          </div>
        </div>
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
          <h3 className="componentTitle" style={{color:this.props.mainColor.textColor}}>Обновления популярной манги</h3>
          <div className="MainContent" style={{borderColor: this.props.mainColor.color, background: this.props.mainColor.smallBack, color:this.props.mainColor.textColor}}>
            <MangaCard manga={this.props.manga} />
          </div>
        </React.Fragment>
    )
  }
}
