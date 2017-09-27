import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomeDash from './dash-items/home-dash';
import ROICDash from './dash-items/roic-dash';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/',
    exact: true,
    main: () => <HomeDash />,
    text: 'Home'
  },
  { path: '/roic',
    main: () => <ROICDash />,
    text: 'ROIC Tool'
  },
  { path: '/toolb',
    main: () => <h2>Tool B</h2>,
    text: 'Tool B'
  },
  { path: '/hello',
    main: () => (
      <div>
        <h2>Hello</h2>
      <img src="http://lorempixel.com/400/400/cats" />
      {/*<img src="http://lorempixel.com/g/400/400/cats" />*/}
      </div>
    ),
    text: 'Hello'
  }
]

const Sidebar = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>

      { /* TODO: Render these as a seperate component */}

      <ul style={{ listStyleType: 'none', padding: 0}}>
       {/*<li><Link to='/'>Home!</Link></li>*/}
       <SidebarItem to="/" text="Home!" />
       <SidebarItem to="/hello" text="Hello!"/>
       <li><Link to="/roic">ROIC Tool</Link></li>
       <li><Link to="/toolb">Tool B</Link></li>
      </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)
const SidebarItem = ({text, to}) => (
  <li><Link to={to}>{text}</Link></li>
);
/*
*/
export default Sidebar
