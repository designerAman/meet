import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HomePageComponent extends Component {
    render() {
        return (
            <div className="homePage">
                <h1>Home Page</h1>
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Sign Up</Link>
                
            </div>
        )
    }
}

export default HomePageComponent;