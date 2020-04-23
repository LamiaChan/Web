import React from 'react';


//Redux-react connecter import
import { connect } from 'react-redux'

class MangaInfo extends React.Component{
  
  constructor(){
    super()
    this.getPageUrl = this.getPageUrl.bind(this)
  }

  getPageUrl(){
    var currentUrl = window.location.pathname;
    var params = currentUrl.split('/');
    console.log(params[params.length-1])
    return params[params.length-1];
  }

  render(){
    return(
    <React.Fragment>
      kek
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    apiManga: state.api.manga,
    apiTags: state.api.tags,
    apiLinks: state.apiLinks
  }
}

export default connect(mapStateToProps) (MangaInfo);