import * as React from 'react';

import * as T from './types';

export interface ICarsOverviewProps {
  cars: T.CarList;
}

export interface ICarsOverviewState {
  selectedCar: T.Car;
}

export default class CarsOverview extends React.Component<ICarsOverviewProps, ICarsOverviewState> {
  constructor(props: ICarsOverviewProps) {
    super(props);

    this.state = {
      selectedCar: null,
    };
  }

  public handleSelectCar = (car: T.Car): void => {
    this.setState({ selectedCar: car });
  }

  public renderCarsList = (cars: T.CarList): JSX.Element => {
    if (!cars || cars.length === 0) {
      return <p>No cars</p>;
    }

    return (
      <ul>
        {cars.map(
          (car: T.Car, index: number): JSX.Element => (
            <li key={index} onClick={() => this.handleSelectCar(car)}>
              {car.make} {car.model}
            </li>
          ),
        )}
      </ul>
    );
  }

  public renderCarInfo = (car: T.Car): JSX.Element => {
    if (!car) {
      return null;
    }

    return (
      <div className="CarInfo">
        <h2>{`${car.make} ${car.model}`}</h2>
        <section>Engine: {car.engine}</section>
        <section>Year: {car.year}</section>
        <section>Equipment: {car.equipment.join(', ')}</section>
      </div>
    );
  }

  public render() {
    return (
      <div>
        <h1>Cars Overview</h1>

        <div className="Cars__List">{this.renderCarsList(this.props.cars)}</div>

        {this.renderCarInfo(this.state.selectedCar)}
      </div>
    );
  }
}
