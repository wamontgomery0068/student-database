import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className = "NavBar">

                <div className = "Home">
                    <h3> Home </h3>
                </div>

                <div className = "DevMountain">
                    <h3> DevMountain Directory </h3>
                </div>

            </div>
        )
    };
};

export default NavBar;