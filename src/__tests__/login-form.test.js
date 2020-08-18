import React from 'react';
import {mount} from 'enzyme';

import {Provider} from 'react-redux';
import store from '../store';

import LoginForm from '../components/LoginForm';

describe('login form tests', () => {

  let component = mount(
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );

  it('contains initial components', () => {
    expect(component.find('.login-form')).toBeDefined();
    expect(component.find('#username')).toBeDefined();
    expect(component.find('#password')).toBeDefined();
    expect(component.find('button')).toBeDefined();
  });

  it('matches snapshot?', () => {
    expect(component).toMatchSnapshot();
  });

});