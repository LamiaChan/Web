import React from 'react';
export default class Tags extends React.Component{
    constructor(){
      super()
      this.renderTags = this.renderTags.bind(this);
    }
    renderTags(){
      const tabs = [];
      const tapColor = {backgroundImage: "linear-gradient(to right, "+this.props.mainColor.color+", "+this.props.mainColor.color+" 50%, #000 50%)"};
      for (let i = 0; i < this.props.apiTags.length; i++) {
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