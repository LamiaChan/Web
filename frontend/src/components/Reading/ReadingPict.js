import React from 'react';

class ReadingPage extends React.Component{
  render(){
    //Hear we create link to our picture
    var currentPg = this.props.mainLink + this.props.chapter.page_set[0].image;
    return(
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <img src={currentPg} alt="manga pg"></img>
        </div>
        <div className="col-md-2"></div>
      </div>
    )
  }
}

export default ReadingPage