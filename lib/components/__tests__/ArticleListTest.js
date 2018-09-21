import React from 'react';
import ArticleList from '../ArticleList';
//import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Article from '../Article';

describe('ArticleList', () => {

  const mockProps = {
    articles: {
      a: { id: 'a'},
      b:{id: 'b'},
    },
    // store: {
    //   lookupAuthor: jest.fn(()=>({})),
    // }
  };
  Article.PropTypes ={};// remove warning with proptypes in test
  it('renders correctly', () => {
    //use enzyme
    const wrapper = shallow(<ArticleList {...mockProps}/>);
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();
    // use renderer
    // const tree  = renderer.create(
    //   <ArticleList {...mockProps}/>
    // ).toJSON();
    // expect(tree.children.length).toBe(2);

    // //Generate a snapshot and always try to compare the new with the original 
    // // to update the snap just press the u in the test
    // expect(tree).toMatchSnapshot();
  });
});

