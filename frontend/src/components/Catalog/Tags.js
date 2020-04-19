import React from 'react';
export default class Tags extends React.Component{
    constructor(){
      super()
      this.renderTags = this.renderTags.bind(this);
    }
    renderTags(){
      const tabs = [];
      for (let i = 0; i < this.props.apiTags.length; i++) {
        tabs.push(<li 
          id={this.props.apiTags[i].id} 
          key={this.props.apiTags[i].id} 
          className="tag" 
          style={{background: this.props.mainColor.color}} 
          onClick={this.props.changeCurrentTag}>{this.props.apiTags[i].title}</li>
        )
      }
      return tabs
    }
    render(){
      return(
        <section className="tagsBody">
          <div className="row mr-0 ">
            <div className="col-lg-12">
              <ul className="tabList">
                {this.renderTags()}
              </ul>
            </div>
          </div>
        </section>
      )
    }
  }