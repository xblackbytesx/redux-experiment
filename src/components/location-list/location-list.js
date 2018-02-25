import React from 'react';

const LocationList = (props) => {
  return (
    {
      this.props.geod.title
      ? <button onClick={this.props.closeGeod}>
          Exit Geod
        </button>
      : <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
          Click Me!
        </button>
    }
  )
}
