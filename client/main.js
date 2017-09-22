import './main.html'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './../imports/app.jsx'

Meteor.startup(function () {
    // Render JSX stuff here...
    let app = <App></App>;
    ReactDOM.render(app, document.getElementById('react-root'));
});
