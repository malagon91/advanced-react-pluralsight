import React from 'react';
import storeProvider from './storeProvider';
//http://localhost:8080/?react_perf
export class TimeStamp extends React.Component {

  timeDisplay = (time) =>
    time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});

  shouldComponentUpdate = (nextProps) => {
    return(this.timeDisplay(this.props.timestamp) !==
      this.timeDisplay(nextProps.timestamp));
  }

  componentWillUpdate() {
    console.log('updating timestamp');
  }
  

  render() {
    return (
      <div>
        {this.timeDisplay(this.props.timestamp)}
      </div>
    );
  }
}


function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(TimeStamp);
