// @flow
import React, { Component } from 'react';
import GetStarted from '../components/GetStarted';

type Props = {
  history: RouterHistory
};

export default class StartPage extends Component<Props> {

  constructor() {
    super();
    this.startClick = this.startClick.bind(this);
  }

  startClick() {
    this.props.history.push('/new-alliance');
  }

  render() {
    return (
      <GetStarted startClick={this.startClick} />
    );
  }
}
