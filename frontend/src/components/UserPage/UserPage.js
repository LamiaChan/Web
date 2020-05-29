import React from 'react'
//Redux-react connecter import
import { connect } from 'react-redux'
import './UserPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//API function
import getUser from '../Api/userAPI'
import { Link, Redirect } from 'react-router-dom';


//Component with main user information
class MainInfo extends React.Component{
  constructor(){
    super()
    this.state = {
      redirect: false
    }
    this.userLogout = this.userLogout.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  userLogout(){
    window.localStorage.removeItem('token-access')
    window.localStorage.removeItem('token-refresh')
    console.log("Token delited!")
    this.setState({
      redirect: true
    })
  }
  //Redirect function
  renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to={'/auth'} />
    }
  }
  render(){
  return(
    <div className="col-lg-5">
      <div className="userPageComp" style={{background:this.props.mainColor.genres}}>
        <div className="row">
          <div className="col-xs-4">
            <div className="userImgContainer">
              <img className="userImg" src={this.props.userData.user_image} alt="usrImg"></img>
            </div>
          </div>
          <div className="col-sm-4">
            <h2 className="userName">{this.props.userData.username}</h2>
            <ul className="userPunktsList">
              <li className="userPunkt">Звание: {this.props.userData.rank}</li>
              <li className="userPunkt"><a href="#" className="userPunkt__link">Написать <i className="fa fa-envelope"></i></a></li>
              <li className="userPunkt"><a href="#" className="userPunkt__link">В друзья</a></li>
              <li className="userPunkt"><a href="#" className="userPunkt__link exit" onClick={this.userLogout}>Выйти</a></li>
            </ul>
            {/* This thing will make redirect? don't touch it! */}
            {this.renderRedirect()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const FavoriteTitles = (props)=>{
  const titlesArr = [];
  console.log(props.userData)
  if(props.userData.user_favorite_manga !== undefined){
    for (let i = 0; i < props.userData.user_favorite_manga.length; i++) {
      if(i <= 6){
        titlesArr.push(
          <div className="col-sm-2 favCentered" key={props.userData.user_favorite_manga[i].id}>
            <Link to={'/manga/'+props.userData.user_favorite_manga[i].url_name}>
              <div className="favMangaCard">
                <img src={props.userData.user_favorite_manga[i].preview_image_url} className="favMangaCard__img" alt="manga"></img>
                {/* <div className="middle">
                  <div className="mangaName">{props.userData.user_favorite_manga[i].title}</div>
                </div> */}
              </div>
            </Link>
          </div>
        )
      }
      else{
        titlesArr.push(
        <h1 className="moreManga" key="end"> +{props.userData.user_favorite_manga.length-i}</h1>
        )
        break
      }
    }
  }
  return(
    <div className="col-lg-7">
      <div className="userPageComp" style={{background:props.mainColor.genres}}>
        <h2 className="blockTitle">Любимые тайтлы</h2>
        <div className="row">
          {titlesArr}
        </div>
      </div>
    </div>
  )
}

class UserPage extends React.Component{
  constructor(){
    super()
    this.state = {
      userData: []
    }
  }
  async componentDidMount(){
    await getUser(this.props.userLink).then(data =>{
      this.setState({ userData: data })
    })
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <MainInfo mainColor={this.props.mainColor} userData={this.state.userData} />
          <FavoriteTitles mainColor={this.props.mainColor} userData={this.state.userData} />
        </div>
      </div>
    )
  }
}

//Parce Redux data to React props
const mapStateToProps = (state)=>{
  return {
    mainColor: state.mainColor,
    userLink: state.apiLinks.userInfo
  }
}

export default connect(mapStateToProps) (UserPage);