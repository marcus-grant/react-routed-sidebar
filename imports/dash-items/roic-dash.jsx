/**
 * The container component for the ROIC tool of the dashboard.
 * 
 * @summary     This is the dashboard component that will contain all views
 * related to site's roic tool. This absolutely will include the D3 display
 * of the various ROIC outputs either in one component or several. Could
 * include input components related to loading data & or filtering & ranging.
 * Future inclusions could be: exports (csv, xslx, png, pdf, etc), validators,
 *
 * @link        ./roic
 * @since       x.x.x
 * @requires    React
 *              Redux
 *              Mongo DataStore Files
 *              D3 itself or React<->D3 wrappers
 * @class
 * @classdesc   TBA
 */

import React from 'react';


export default class ROICDash extends React.Component {
  render() {
    return (
      <div>
        <h3>ROIC Tool</h3>
        <img src="bar-graph1.png" />
      </div>
    );
  }
}
