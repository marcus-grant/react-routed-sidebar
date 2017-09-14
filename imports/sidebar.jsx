import React from 'react';
import ReactDOM from 'react-dom'

var Home = React.createClass({
  render: function() {
    return (<h1>Welcome Home!</h1>);
  }
});

ReactDOM.render((
  <Home />
), document.getElementById('react-root'));

ReactDOM.render((
  <Router>
    <Route path="/" component={Home} />
  </Router>
), document.getElementById('react-root'));

ReactDOM.render((
  <Router>
    <Route path="/" component={Home} />
    <Route path="/users/" component={Users} />
    <Route path="/widgets" component={Widgets} />
  </Router>
), document.getElementById('react-root'));
