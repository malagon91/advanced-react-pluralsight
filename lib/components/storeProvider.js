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
const storeProvider = (extraProps) => (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    render(){
      return (<Component {...this.props} {...extraProps(this.context.store,this.props)} store={this.context.store} />);
    }
  };
};



export default storeProvider;