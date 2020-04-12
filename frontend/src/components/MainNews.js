import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const NewsCard = (props) =>{
  const newsCards = []
  console.log(props.api)
  // for (let i = 0; i < props.api.length; i++) {
  //   newsCards.push(
  //     <div key={props.api[i].id} className="col-md-3 centered">
  //       <div className="mangaCard">
  //         <img src={props.api[i].image} className="mangaCard__img" alt="manga"></img>
  //         <div className="middle">
  //           <div className="mangaName">{props.api[i].title}</div>
  //         </div>
  //       </div>
  //     </div>
   // )
  //}
  return(
    <div className="row">
      {/* {newsCards} */}
    </div>
  )
}

export default class MainNews extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h3 className="componentTitle" style={{color:this.props.mainColor.textColor}}>Последние новости</h3>
        <div className="MainNews" style={{borderColor: this.props.mainColor.color, background: this.props.mainColor.smallBack, color:this.props.mainColor.textColor}}>
          <NewsCard />
        </div>
      </React.Fragment>
    )
  }
}