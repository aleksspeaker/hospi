import React, { Component } from 'react';
// import plusIcon from './../../../static/images/plus-dark.svg';
import { BulletProgress } from './BulletProgress';
import './ControlBullet.scss';

interface IControlBulletProps {
  amount: number;
  category: string;
  isActive?: boolean;
  // FIXME: fix type
  clicked?: any;
  // clicked?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

class ControlBullet extends Component<IControlBulletProps> {
  constructor(props: IControlBulletProps) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  public render() {
    const { amount, category, isActive, clicked } = this.props;
    return (
      <div
        onClick={clicked}
        className={isActive === true ? 'Control-bullet_active' : 'Control-bullet'}
      >
        <div className="Control-bullet__bullet">
          <BulletProgress />
          // FIXME: import this icon
          {/* <img src={plusIcon} alt="control" /> */}
          <img src={''} alt="control" />
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
