import './main.html'
import React from 'react'
import ReactDOM from 'react-dom'
import SidebarExample from './../imports/app.jsx'

Meteor.startup(function () {
    // Render JSX stuff here...
    console.log("Before loading sidebar");
    let app = <SidebarExample></SidebarExample>;
    ReactDOM.render(app, document.getElementById('react-root'));
});
