import React from 'react';
import {mount} from 'enzyme';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '../store';

import LandingPage from '../pages/LandingPage';

describe('dashboard tests', () => {

  let component = mount(
    <Provider store={store}>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </Provider>
  );

  it('matches snapshot?', () => {
    expect(component).toMatchSnapshot();
  });

});