import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainStyle.css'

const MangaCard = (props) =>{
  const mangaCards = []
  for (let i = 0; i < props.api.slice(0, 6).length; i++) {
    mangaCards.push(
      <div key={props.api[i].id} className="col-lg-2 centered">
        <div className="mangaCard genreCard">
          <img src={props.api[i].preview_image_url} className="mangaCard__img genreCard__img" alt="manga"></img>
          <div className="middle">
            <div className="mangaName">{props.api[i].title}</div>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className="row mr-0">
      {mangaCards}
    </div>
  )
}

const CenresTabs = (props) =>{
  const tapColor = {backgroundImage: "linear-gradient(to right, "+props.mainColor.color+", "+props.mainColor.color+" 50%, #000 50%)"};
  return(
    <div className="row mr-0 ">
      <div className="col-lg-8" id="primary">
        <ul className="tabList">
          <li className="tab" style={tapColor}>Любовь</li>
          <li className="tab" style={tapColor}>Завершенные</li>
          <li className="tab" style={tapColor}>Фентази</li>
          <li className="tab" style={tapColor}>Боевик</li>
          <li className="tab" style={tapColor}>Приключение</li>
          <li className="tab" style={tapColor}>Комедия</li>
          <li className="tab" style={tapColor}>Ужасы</li>
        </ul>
      </div>
    </div>
  )
}

export default class Genres extends React.Component {
  render(){
    return(
        <section className="genresSection" style={{background:this.props.mainColor.genres}}>
          <h3 className="componentTitle">Жанры</h3>
            <CenresTabs mainColor={this.props.mainColor} />
            <MangaCard api={this.props.api} />
        </section>
    )
  }
}