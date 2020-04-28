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
            className="tagElement">
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
        <div className="col-md-12">
            <ul className="tagList">
              {this.tagsRender()}
            </ul>
        </div>
      </div>
    )
  }
}