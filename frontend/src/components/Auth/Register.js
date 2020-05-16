import React from 'react';
import './Auth.css'
import {Worker} from '../Api/Worker'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
// TODO We need to update css on that page 

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
          userCreateArr: [],
          username: '',
          email: '',
          password: '',
          body: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //API calls with Worker function
    async createUser(userName, email, password){
        let body = { username: userName, password: password, email: email }
        await Worker(this.props.createUser, 'post', body).then(response => {this.setState({userCreateArr : response})})
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit(){
        // TODO we need to check user data 
        var userName = this.state.username;
        var email = this.state.email;
        var password = this.state.password;
        this.createUser(userName, email, password);
        //TODO Узнать у жидо-скрипетра что эта хуйня снизу делает а литер заебал блять хуйня ебанная пыль ебанная 
        //this.setState(this.state.body, { username: userName, password: password, email: email })
        //console.log(userName, email, password);
    }

    render(){
        return(
            <div className="container">
            <h3>Registration</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" 
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted" >
                    We'll never share your email with anyone else. heh.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" 
                    onClick={this.handleSubmit}
                >
                    Submit
                </Button>
                
                <Link to="/auth">Уже есть аккаунт</Link>
        </div>
        )
    }
}

//Parce Redux data to React props
const mapStateToProps = (state)=>{
    return {
      createUser: state.apiLinks.userCreate,
    }
  }
  
  export default connect(mapStateToProps) (Register);