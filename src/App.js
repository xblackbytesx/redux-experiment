import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import actions
import { activateMarker, closeMarker } from './redux';

import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.marker.title || 'Hello World!'}</h1>
          <p>{this.props.marker.title || 'Hello World!'}</p>
        </header>
        <p className="App-intro">
        {
          this.props.marker.title
          ? <button onClick={this.props.closeMarker}>
              Exit Marker
            </button>
          : <button onClick={() => this.props.activateMarker({ title: 'I am an active marker' })}>
              Click Me!
            </button>
        }
        </p>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  marker: state.marker,
});

// Maps the dispatch actions from redux.js to props
const mapDispatchToProps = {
  activateMarker,
  closeMarker,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
