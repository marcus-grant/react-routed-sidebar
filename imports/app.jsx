import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Sidebar from './sidebar.jsx'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// These are the routes as they are programmed statically
// In the future, 'main' will be custom components that will
// -- have props passed into them
const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h1>Home</h1>,
    text: 'Home'
  },
  { path: '/toola',
    sidebar: () => <div>Tool A</div>,
    main: () => <h2>Tool A</h2>,
    text: 'Tool A'
  },
  { path: '/toolb',
    sidebar: () => <div>Tool B</div>,
    main: () => <h2>Tool B</h2>,
    text: 'Tool B'
  }
]

/* TODO: Add real GlobalMenu */
/* TODO: Add real MainDashboard */
// Returns a GlobalMenu, Sidebar & Main Render Area
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Instagurm</h1>
        <div>
          <Sidebar />
         </div>
      </div>
    )
  }
}

export default App;
