import React from 'react';
 
 
 export default class MangaTags extends React.Component{
   constructor(){
     super()
     this.tagsRender = this.tagsRender.bind(this)
   }

  tagsRender = () =>{
    const tags = [];
    var currentTags = this.props.manga.tags
    //First time we recive udefind props, so we have to check it here
    if(currentTags === undefined){
      currentTags = []
    }
    //Compare aur props and all props
    for (let j = 0; j < currentTags.length; j++) {
      for (let i = 0; i < this.props.tags.length; i++) {
        if(currentTags[j] === this.props.tags[i].id){
          tags.push(<li 
            id={this.props.tags[i].id} 
            key={this.props.tags[i].id} 
            className="tagElement" 
            style={{background: this.props.mainColor.color}}>
              {this.props.tags[i].title}</li>
          )
        }
      }
    }
    return tags
  }
  render(){
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="tagsContainer">
            <ul>
              {this.tagsRender()}
            </ul>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    )
  }
}