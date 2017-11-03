// @flow
import React, { Component } from 'react';
import GetStarted from '../components/GetStarted';

export default class StartPage extends Component {
  constructor() {
    super();
    this.startClick = this.startClick.bind(this);
  }

  startClick() {
    this.props.history.push("/new-alliance");
  }

  render() {
    return (
        <GetStarted startClick={this.startClick}/>
    );
  }
}
