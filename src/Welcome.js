import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return(
      <p>Welcome {this.props.myname}</p>
    );
  }
}

export default Welcome
