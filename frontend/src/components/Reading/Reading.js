import React from 'react';


//Redux-react connecter import
import { connect } from 'react-redux'

const ReadingPage = (props)=>{
  return(
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8"></div>
      <div className="col-md-2"></div>
    </div>
  )
}

class Reading extends React.Component{
  constructor(){
    super()
    this.kek = this.kek.bind(this)
  }
  kek(){
    console.log(this.props.location.state.chapters)
  }
  render(){
    return(
      <div className="readingContainer">
        <div className="container-fluid">

          <ReadingPage />
        </div>
      </div>
    )
  }
}

//Parce Redux data to React props
const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    mangaLink: state.apiLinks.manga,
    tagLink: state.apiLinks.tags
  }
}

export default connect(mapStateToProps) (Reading);