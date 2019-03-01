/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';

import Detail from './../Detail';

const __CAR__ = {
  engine: 'T5',
  equipment: ['Leather', 'Seat heating', 'City Safety'],
  make: 'Volvo',
  mileage: 123,
  model: 'XC60',
  year: 2018,
};

describe('Car detail', () => {
  it('renders correct title', () => {
    const detail = shallow(<Detail car={__CAR__} />);
    expect(detail.find('h1').text()).toEqual('Volvo XC60');
  });

  it('renders correct list item', () => {
    const detail = shallow(<Detail car={__CAR__} />);
    expect(detail.childAt(1).text()).toEqual('Engine : T5');
  });

  it('renders correct equipment list item', () => {
    const detail = shallow(<Detail car={__CAR__} />);
    expect(
      detail
        .children()
        .find('ul')
        .childAt(1)
        .text(),
    ).toEqual('Seat heating');
  });
});
