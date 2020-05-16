import React from 'react';
import RightArrow from '../../images/RightArrow.png'
import LeftArrow from '../../images/LeftArrow.png'

class ReadingPage extends React.Component{
  constructor(){
    super()
    this.changePg = this.changePg.bind(this)
  }
  //Change page number
  changePg(action){
    var pgChang = this.props.currentPg;
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
    //Scroll top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.props.mainPageChanger(pgChang)
  }
  render(){
    //Hear we create link to our picture
    console.log(this.props.currentPg)
    var currentPg = this.props.mainLink + this.props.chapter.page_set[this.props.currentPg].image;
    return(
      <React.Fragment>
        <div className="col-md-1">
          <div className="buttonContainer left" onClick={()=>this.changePg("back")}>
            <img src={LeftArrow} className="pageButton" alt="arrow"></img>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mainImgContainer">
            <img src={currentPg} className="mainImg" alt="manga pg"></img>
          </div>
        </div>
        <div className="col-md-1">
          <div className="buttonContainer right" onClick={()=>this.changePg("forward")}>
            <img src={RightArrow} className="pageButton" alt="arrow"></img>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ReadingPage