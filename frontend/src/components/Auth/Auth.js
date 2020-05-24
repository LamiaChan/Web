import React from 'react';
import './Auth.css'
import {apiWorker} from '../Api/apiWorker'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import getUser from '../Api/userAPI'

class Auth extends React.Component{
    constructor(){
        super()
        this.state = {
          username: '',
          password: '',
          userData: '',
          redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    _isMounted = false;

    async componentDidMount(){
      this._isMounted = true;
      await getUser(this.props.userLink).then(data =>{
        this.setState({ userData: data })
      })
    }

    async authUser(userName, password){
        let body = { username: userName, password: password }
        await apiWorker(this.props.tokenGetter, 'post', body).then(response => {this.setState({userArr : response})})
        console.log(this.state.userArr);

        let userAnswer = this.state.userArr;

        //TODO we need to render server answer
        //https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
        //and make checks on all pages to understand when user logged
        console.log(userAnswer.access)
        if ( 'refresh' in userAnswer &&  'access' in userAnswer ){
            window.localStorage.setItem('token-access', userAnswer.access);
            window.localStorage.setItem('token-refresh', userAnswer.refresh);
            console.log("Token saved successfully!")
            
            //DO redirect
            this.setState({
              redirect: true
            })
        } else {
            console.log('plz check server answer array');
        }
        
    }

    componentWillUnmount() {
      this._isMounted = false;
    }
    
    //Redirect function
    renderRedirect = () => {
      if (this.state.redirect) {
          return <Redirect to={'/userpage/'+ this.state.userData.username} />
      }
    }
    //Need change: We don't need state for this purpose!
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit(){
        // TODO we need to check user data 
        var userName = this.state.username;
        var password = this.state.password;
        this.authUser(userName, password);
    }

    render(){
        return(
            <div className="container">
            <h3>Auth</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" 
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" 
                    onClick={this.handleSubmit}
                >
                    Submit
                </Button>
                {/* This thing will make redirect? don't touch it! */}
                {this.renderRedirect()}
                <button onClick={()=><Redirect to={'/userpage'}/>} >kek </button>
                
                <Link to="/registration">Создать аккаунт</Link>
        </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
      tokenGetter: state.apiLinks.tokenGetter,
      userLink: state.apiLinks.userInfo
    }
  }
  
export default connect(mapStateToProps) (Auth);