/**
 * The container component for the home view of the dashboard.
 * 
 * @summary This will contain some useful links and at-a-glance info relevant
 * to session. If first time visiting the site, it will provide a 1st time guide.
 * The visible links and info will included would be along the lines of...
 *  - Recent file modifications made by user
 *  - Recent tool used
 *  - Recent messages
 *  - etc.
 * @link        ./home OR ./
 * @since       x.x.x
 * @requires    TBA
 * @class
 * @classdesc   TBA
 */

import React from 'react';


export default class HomeDash extends React.Component {
  render() {
    return (
      <div>
        <img src="http://lorempixel.com/100/100/cats" />
        <h3>Welcome back, Marcus!</h3>
        <p>Would you like to return to your previous project?</p>
      </div>
    );
  }
}
