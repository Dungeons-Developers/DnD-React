import React from 'react';
import {mount} from 'enzyme';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '../store';

import Dashboard from '../components/Dashboard';

describe('dashboard tests', () => {

  let component = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );

  it('matches snapshot?', () => {
    expect(component).toMatchSnapshot();
  });

});