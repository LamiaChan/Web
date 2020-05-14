import React from 'react';
import RightArrow from '../../images/RightArrow.png'
import LeftArrow from '../../images/LeftArrow.png'

class ReadingPage extends React.Component{
  constructor(){
    super()
    this.state = {
      currentPg: 0
    }
    this.changePg = this.changePg.bind(this)
  }
  //Change page number
  changePg(action){
    var pgChang = this.state.currentPg;
    //Select action: + or -
    switch (action) {
      case "back":
        if(pgChang !== 0){
          pgChang--;
        }
        break;

      case "forward":
        if((pgChang+1) !== this.props.chapter.page_set.length){
          pgChang++;
        }
        break;
    
      default:
        break;
    }
    this.setState({
      currentPg: pgChang
    })
  }
  render(){
    //Hear we create link to our picture
    var currentPg = this.props.mainLink + this.props.chapter.page_set[this.state.currentPg].image;
    return(
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-1">
          <div className="buttonContainer" onClick={()=>this.changePg("back")}>
            <img src={LeftArrow} className="pageButton" alt="arrow"></img>
          </div>
        </div>
        <div className="col-md-8">
          <img src={currentPg} alt="manga pg"></img>
        </div>
        <div className="col-md-1">
          <div className="buttonContainer" onClick={()=>this.changePg("forward")}>
            <img src={RightArrow} className="pageButton" alt="arrow"></img>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    )
  }
}

export default ReadingPage