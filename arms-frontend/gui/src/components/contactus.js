import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
import contactus from './contactus.png'
function Client(props) {

    return (
        <div className="jumbotron">
            <div className="container-fluid">
            <img src={contactus} id="iclient"></img>
            </div>
        </div>

    );
}

    export default Client;