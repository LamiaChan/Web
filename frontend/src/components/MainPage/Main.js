import React from 'react';
import './MainStyle.css'
//Redux-react connecter import
import { connect } from 'react-redux'

// Components exports
import Main from './MainManga'
import Sidebar from './Sidebar'
import MainNews from './MainNews'
import Geners from './MainGenres'

class App extends React.Component {


  render(){
    return (
      <div className="App" style={{background: this.props.mainColor.mainBack}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Main mainColor={this.props.mainColor} api={this.props.apiManga} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 pl-lg-0 pr-lg-0">
              <Geners mainColor={this.props.mainColor} api={this.props.apiManga} apiTags={this.props.apiTags} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <MainNews mainColor={this.props.mainColor} api={this.props.apiNews} />
            </div>
            <div className="col-md-3">
              <Sidebar mainColor={this.props.mainColor} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    apiManga: state.api.manga,
    apiNews: state.api.news,
    apiTags: state.api.tags,
    apiLinks: state.apiLinks
  }
}


export default connect(mapStateToProps) (App);