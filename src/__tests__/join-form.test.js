import React from 'react';
import {mount} from 'enzyme';

import {Provider} from 'react-redux';
import store from '../store';

import JoinForm from '../components/JoinForm';

describe('testing join form', () => {
  let component = mount(
    <Provider store={store}>
      <JoinForm />
    </Provider>
  );

  it('contains proper components', () => {

    expect(component.find('.join-form')).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});