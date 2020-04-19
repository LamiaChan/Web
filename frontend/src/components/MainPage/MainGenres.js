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
  for (let i = 0; i < sortedApi.length; i++) {
    //Check manga tags and current tag
    var findTag = false;
    for (let j = 0; j < sortedApi[i].tags.length; j++) {
      //Check all tags from current Manga
      if (sortedApi[i].tags[j] === props.currentTag){
        findTag = true;
        break
      }
    }
    //Show manga only with founded tag
    // Max show = 6
    if((findTag)&&(mangaCards.length < 6)){
      mangaCards.push(
        <div key={sortedApi[i].id} className="col-lg-2 centered">
          <div className="mangaCard genreCard">
            <img src={sortedApi[i].preview_image_url} className="mangaCard__img genreCard__img" alt="manga"></img>
            <div className="likes">
              <h4 className="likes__text"><i className="fa fa-heart"></i> {sortedApi[i].likes}</h4>
            </div>
            <div className="middle">
              <div className="mangaName genreCard__img">{sortedApi[i].title} </div>
            </div>
          </div>
        </div>
      )
    }
  }
  return(
    <div className="row mr-0">
      {mangaCards}
    </div>
  )
}

class CenresTabs extends React.Component{
  constructor(){
    super()
    this.renderTags = this.renderTags.bind(this);
  }
  renderTags(){
    const tabs = [];
    const tapColor = {backgroundImage: "linear-gradient(to right, "+this.props.mainColor.color+", "+this.props.mainColor.color+" 50%, #000 50%)"};
    for (let i = 0; i < this.props.apiTags.slice(0, 7).length; i++) {
      tabs.push(<li id={this.props.apiTags[i].id} key={this.props.apiTags[i].id} className="tab" style={tapColor} onClick={this.props.changeCurrentTag}>{this.props.apiTags[i].title}</li>)
    }
    return tabs
  }
  render(){
    return(
      <div className="row mr-0 ">
        <div className="col-lg-8" id="primary">
          <ul className="tabList">
            {this.renderTags()}
          </ul>
        </div>
      </div>
    )
  }
}

export default class Genres extends React.Component {
  constructor(){
    super()
    this.state = {
      currentTag: 1
    }
    this.changeCurrentTag = this.changeCurrentTag.bind(this)
  }
  changeCurrentTag(event){
    this.setState({
      currentTag : parseInt(event.target.id)
    })
  }
  render(){
    return(
        <section className="genresSection" style={{background:this.props.mainColor.genres}}>
          <h3 className="componentTitle">Жанры</h3>
            <CenresTabs mainColor={this.props.mainColor} apiTags={this.props.apiTags} changeCurrentTag={this.changeCurrentTag} />
            <MangaCardGenres api={this.props.api} currentTag={this.state.currentTag} />
        </section>
    )
  }
}