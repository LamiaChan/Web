import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainStyle.css'

const sortByLikes = (arr) =>{
  const sortedArr = arr.sort((a,b)=>{
    if(a.likes > b.likes){
      return -1
    }
    if(a.likes < b.likes){
      return 1;
    }
    return 0
  })
  return sortedArr
}

const MangaCardGenres = (props) =>{
  const mangaCards = [];
  const sortedApi = sortByLikes(props.api)
  console.log(sortedApi)
  for (let i = 0; i < sortedApi.slice(0, 6).length; i++) {
    mangaCards.push(
      <div key={sortedApi[i].id} className="col-lg-2 centered">
        <div className="mangaCard genreCard">
          <img src={sortedApi[i].preview_image_url} className="mangaCard__img genreCard__img" alt="manga"></img>
          <div className="likes">
            <h4 className="likes__text"><i class="fa fa-heart"></i> {sortedApi[i].likes}</h4>
          </div>
          <div className="middle">
            <div className="mangaName genreCard__img">{sortedApi[i].title} </div>
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
  const tabs = [];
  const tapColor = {backgroundImage: "linear-gradient(to right, "+props.mainColor.color+", "+props.mainColor.color+" 50%, #000 50%)"};
  for (let i = 0; i < props.apiTags.slice(0, 7).length; i++) {
    tabs.push(<li id={props.apiTags[i].id} className="tab" style={tapColor}>{props.apiTags[i].title}</li>)
  }
  return(
    <div className="row mr-0 ">
      <div className="col-lg-8" id="primary">
        <ul className="tabList">
          {tabs}
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
            <CenresTabs mainColor={this.props.mainColor} apiTags={this.props.apiTags} />
            <MangaCardGenres api={this.props.api} />
        </section>
    )
  }
}