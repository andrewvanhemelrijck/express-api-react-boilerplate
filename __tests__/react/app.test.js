import React from 'react';
import App from '../../client/src/containers/App';
import { shallow, mount } from 'enzyme';

describe('Index', () => {
  test('shallow render', async (done) => {
    fetch.mockResponseOnce(JSON.stringify({ title: 'Test title.' }));

    let wrapper = mount(<App />);

    return setTimeout(() => {
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      done();
    }, 0);

  })
});