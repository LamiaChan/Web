import React from 'react';
import './Auth.css'
import {apiWorker} from '../Api/apiWorker'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class Auth extends React.Component{
    constructor(){
        super()
        this.state = {
          username: '',
          password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async authUser(userName, password){
        let body = { username: userName, password: password }
        await apiWorker(this.props.tokenGetter, 'post', body).then(response => {this.setState({userArr : response})})
        console.log(this.state.userArr);

        let userAnswer = this.state.userArr;

        //TODO we need to render server answer
        //https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
        //and make checks on all pages to understand when user logged

        if ( 'refresh' in userAnswer &&  'access' in userAnswer ){
            window.localStorage.setItem('tokens', JSON.stringify(userAnswer));
        } else {
            console.log('plz check server answer array');
        }
    }

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
                
                <Link to="/registration">Создать аккаунт</Link>
        </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
      tokenGetter: state.apiLinks.tokenGetter,
    }
  }
  
export default connect(mapStateToProps) (Auth);