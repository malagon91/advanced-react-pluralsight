import React from 'react';
import PropTypes from 'prop-types';


///Example using a function component
// const storeProvider = (Component) => {
//   const WithStore = (props, {store}) =>
//     <Component {...props} store={store} />;
//   WithStore.contextTypes = {
//     store: PropTypes.object,
//   };
//   WithStore.displayName = `${Component.name}Container`;

//   return WithStore;
// };

//example using a class component if it needs a lifecicle in the component
const storeProvider = (extraProps = ()=>({})) => (Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    usedState(){
      return extraProps(this.context.store, this.props);
    }
  state = this.usedState();
    //Make the container as pure component so this component isn't not cliking 
  //need to subscribte it to stata and in each change of the state this component will be rendering 
  onStoreChange = () => {
    if (this.subcriptionId){ //change to minimize the renders in the app 
      //this.forceUpdate(); remove forceupdate 
      this.setState(this.usedState());
    }
  }
  componentDidMount() {
      this.subcriptionId = this.context.store.subscribe(this.onStoreChange);
    }
  componentWillUnmount() {
      this.context.store.unsubscribe(this.subcriptionId);
    }
  
 

  render(){
      return (<Component {...this.props} {...this.usedState()} store={this.context.store} />);
    }
  };
};



export default storeProvider;