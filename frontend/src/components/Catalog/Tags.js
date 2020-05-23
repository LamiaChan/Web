import React from 'react';
export default class Tags extends React.Component{
    constructor(){
      super()
      this.renderTags = this.renderTags.bind(this);
      this.kek = this.kek.bind(this)
    }
    kek(){
        // console.log(this.refs['tag'+id])
    }
    renderTags(){
      const tabs = [];
      //Loop for tags rendering
      for (let i = 0; i < this.props.apiTags.length; i++) {
        tabs.push(<li 
          id={this.props.apiTags[i].id} 
          key={this.props.apiTags[i].id} 
          className="tag" 
          style={{background: this.props.mainColor.color}}
          ref={"tag"+this.props.apiTags[i].id}
          onClick={()=>this.props.addOneTag(this.props.apiTags[i].id, this.refs['tag'+this.props.apiTags[i].id])}>{this.props.apiTags[i].title}</li>
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