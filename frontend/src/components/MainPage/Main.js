import React from 'react';
import './MainStyle.css'
//Redux-react connecter import
import { connect } from 'react-redux'
//Redux actions import
import * as actionCreator from '../../store/actions/action'
// Components exports
import Main from './MainManga'
import Sidebar from './Sidebar'
import MainNews from './MainNews'
import Geners from './MainGenres'

class App extends React.Component {
 
  constructor(){
    super()
    this.takeApi = this.takeApi.bind(this)
  }

  async componentDidMount(){
    await this.takeApi(this.props.apiLinks.manga, this.props.saveManga)
    await this.takeApi(this.props.apiLinks.news, this.props.saveNews)
  }

  async takeApi(link, savingPlace){
    try{
      const response = await fetch(link)
      const data = await response.json()
      if(data.results){
        savingPlace(data.results)
      }
      else{
        await savingPlace(data)
      }
    }
    catch(err){
      console.log(err)
    }
  }

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
              <Geners mainColor={this.props.mainColor} api={this.props.apiManga} />
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
    apiLinks: state.apiLinks
  }
}
const mapDispachToProps = (dispach) => {
  return {
    changeColor: (status) => dispach(actionCreator.changeColor(status)),
    saveManga: (api) => dispach(actionCreator.saveManga(api)),
    saveNews: (api) => dispach(actionCreator.saveNews(api))
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);