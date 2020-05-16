import React from 'react';
import './Auth.css'
import { NavLink } from "react-router-dom";

export default class Auth extends React.Component{
    render(){
        return(
            <div>
                <h1>kek</h1>
                <NavLink to="/register" className="killMe">switch to register</NavLink>
            </div>
        )
    }
}