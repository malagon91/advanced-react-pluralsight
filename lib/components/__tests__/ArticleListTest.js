import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';
describe('ArticleList', () => {

  const mockProps = {
    articles: {
      a: { id: 'a'},
      b:{id: 'b'},
    },
    articleActions: {
      lookupAuthor: jest.fn(()=>({})),
    }
  };

  it('renders correctly', () => {
    const tree  = renderer.create(
      <ArticleList {...mockProps}/>
    ).toJSON();
    expect(tree.children.length).toBe(2);

    //Generate a snapshot and always try to compare the new with the original 
    // to update the snap just press the u in the test
    expect(tree).toMatchSnapshot();
  });
});

