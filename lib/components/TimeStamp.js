import React from 'react';

export class TimeStamp extends React.Component {
  render() {
    return (
      <div>
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

export default TimeStamp;
