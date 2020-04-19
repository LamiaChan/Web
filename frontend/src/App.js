
import React from "react";
import LamiaNavbar from './components/Navbar/Navbar'
//Redux-react connecter import
import { connect } from 'react-redux'
//Redux actions import
import * as actionCreator from './store/actions/action'


class App extends React.Component {
  constructor(){
    super()
    this.takeApi = this.takeApi.bind(this)
  }

  async componentDidMount(){
    await this.takeApi(this.props.apiLinks.manga, this.props.saveManga)
    await this.takeApi(this.props.apiLinks.news, this.props.saveNews)
    await this.takeApi(this.props.apiLinks.tags, this.props.saveTags)
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
      <div className="pt-lg-3" style={{background: this.props.mainColor.mainBack}}>
        <LamiaNavbar />
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
const mapDispachToProps = (dispach) => {
  return {
    changeColor: (status) => dispach(actionCreator.changeColor(status)),
    saveManga: (api) => dispach(actionCreator.saveManga(api)),
    saveNews: (api) => dispach(actionCreator.saveNews(api)),
    saveTags: (api) => dispach(actionCreator.saveTags(api))
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);