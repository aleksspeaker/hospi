/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';

import Overview from './../Overview';

const __CARS__ = [
  {
    engine: 'T5',
    equipment: ['Leather', 'Seat heating', 'City Safety'],
    make: 'Volvo',
    mileage: 123,
    model: 'C30',
    year: 2018,
  },
  {
    engine: 'D5',
    equipment: ['Leather', 'Seat heating', 'City Safety'],
    make: 'Volvo',
    mileage: 456,
    model: 'XC60',
    year: 2018,
  },
  {
    engine: 'T6',
    equipment: ['Leather', 'Seat heating', 'City Safety'],
    make: 'Volvo',
    mileage: 789,
    model: 'XC90',
    year: 2018,
  },
];

describe('Cars overview', () => {
  it('renders the h1 title', () => {
    const overview = shallow(<Overview cars={[]} />);
    expect(overview.find('h1').text()).toEqual('Cars Overview');
  });

  it('renders empty cars list when no cars are provided', () => {
    const overview = shallow(<Overview cars={[]} />);
    expect(
      overview
        .find('.Cars__List')
        .children()
        .find('p')
        .text(),
    ).toEqual('No cars');
  });

  it('renders cars list with 3 items when 3 cars are provided', () => {
    const overview = shallow(<Overview cars={__CARS__} />);
    expect(
      overview
        .find('.Cars__List')
        .children()
        .find('ul')
        .children(),
    ).toHaveLength(3);
  });

  it('renders cars list with the expected item on third place', () => {
    const overview = shallow(<Overview cars={__CARS__} />);
    expect(
      overview
        .find('.Cars__List')
        .children()
        .find('ul')
        .childAt(2)
        .text(),
    ).toEqual('Volvo XC90');
  });

  it('renders car detail after clicking on an item in cars list', () => {
    const overview = shallow(<Overview cars={__CARS__} />);
    overview
      .find('.Cars__List')
      .children()
      .find('ul')
      .childAt(1)
      // tslint:disable-next-line:no-empty
      .simulate('click', { preventDefault() {} });

    expect(
      overview
        .update()
        .find('.CarInfo')
        .find('h2')
        .text(),
    ).toEqual('Volvo XC60');
  });
});
