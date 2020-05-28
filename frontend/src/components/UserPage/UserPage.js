import React from 'react'
//Redux-react connecter import
import { connect } from 'react-redux'
import './UserPage.css'
//API function
import getUser from '../Api/userAPI'

//Component with main user information
const MainInfo = (props) =>{
  return(
  <div className="col-md-5">
    <div className="mainInfo" style={{background:props.mainColor.genres}}>
      <div className="row">
        <div className="col-xs-4">
          <div className="userImgContainer">
            <img className="userImg" src={props.userData.user_image} alt="usrImg"></img>
          </div>
        </div>
        <div className="col-sm-4">
          <h2 className="userName">{props.userData.username}</h2>
          <ul className="userPunktsList">
            <li className="userPunkt">Звание: {props.userData.rank}</li>
          </ul>
        </div>
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
    console.log(this.state.userData)
  }

  render(){
    return(
      <div className="container-fluid">
        <MainInfo mainColor={this.props.mainColor} userData={this.state.userData} />
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