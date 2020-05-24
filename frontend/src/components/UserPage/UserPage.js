import React from 'react'
//Redux-react connecter import
import { connect } from 'react-redux'
//API function
import getUser from '../Api/userAPI'


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
    // this.setState({
    //   userData: response
    // })
    // console.log(this.state.userData)
  }

  render(){
    return(
      <div className="container-fluid">
        <h1>{this.state.userData.username}</h1>
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