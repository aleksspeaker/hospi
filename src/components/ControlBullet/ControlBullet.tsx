import React, {Component} from 'react';

import {BulletProgress} from './BulletProgress';
import './ControlBullet.scss';

interface IControlBulletProps {
  amount: number;
  category: string;
}

class ControlBullet extends Component<IControlBulletProps> {

  constructor(props: IControlBulletProps) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  public render() {
    const {amount, category} = this.props;
    return (
      <div className="Control-bullet">

        <div className="Control-bullet__bullet">
          <BulletProgress />
          <img src="../../../assets/images/plus-dark.svg" alt="control"/>
        </div>

        <div className="Control-bullet__text-content">
          <small>{String(amount) + '.'}</small>
          <span>{category}</span>
        </div>

      </div>
    );
  }
}

export default ControlBullet;
