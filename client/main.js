import './main.html'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './../imports/app.jsx'

Meteor.startup(function () {
    // Render JSX stuff here...
    console.log("Before loading sidebar");
    let app = <App></App>;
    ReactDOM.render(app, document.getElementById('react-root'));
});
