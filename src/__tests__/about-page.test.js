import React from 'react';
import {mount} from 'enzyme';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '../store';

import AboutPage from '../pages/AboutPage';

describe('dashboard tests', () => {

  let component = mount(
    <Provider store={store}>
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    </Provider>
  );

  it('matches snapshot?', () => {
    expect(component).toMatchSnapshot();
  });

});