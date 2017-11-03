// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewAlliance extends Component {
  render() {
    return (
      <div data-tid="container">
        <h2>Create a New Alliance</h2>
        <Link to="/">to Getting Started</Link>
      </div>
    );
  }
}
