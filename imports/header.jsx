import React from 'react';

// TODO: Add Icon prop for rendering icon image
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
