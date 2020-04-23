import React from 'react';


//Redux-react connecter import
import { connect } from 'react-redux'

class MangaInfo extends React.Component{
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