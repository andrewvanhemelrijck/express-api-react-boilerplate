import React from 'react';
import App from '../../client/src/containers/App';
import renderer from 'react-test-renderer';

describe('Index', () => {
  test('App component renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});