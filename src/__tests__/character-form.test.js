import React from 'react';
import {mount} from 'enzyme';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '../store';

import CharacterForm from '../components/CharacterForm';

describe('dashboard tests', () => {

  let component = mount(
    <Provider store={store}>
      <BrowserRouter>
        <CharacterForm />
      </BrowserRouter>
    </Provider>
  );

  it('matches snapshot?', () => {
    expect(component).toMatchSnapshot();
  });

});