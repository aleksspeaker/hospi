import Link from 'next/link';
import React, { Component } from 'react';

import generateUniqueIndex from '../../helpers/generateUniqueIndex';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import login from '../../../static/images/login.svg';
import logo from '../../../static/images/logo.svg';
import burgerIcon from '../../../static/images/menu-burger-icon.svg';
import liked from '../../../static/images/wishlist.svg';

import './Header.scss';

interface IItem {
  id: string;
  itemName: string;
  slug: string;
}

interface IHeaderState {
  activeOpenMenuItem: number;
  isOpen: boolean;
  headerItems: IItem[];
}

class Header extends Component<null, IHeaderState> {
  constructor(props) {
    super(props);
    this.state = headerState;
  }

  public toggleMenuState = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  public handleMenuItemClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data) => {
    const { isOpen } = this.state;

    e.preventDefault();
    e.cancelBubble = true;

    this.setState({
      activeOpenMenuItem: data.id,
      isOpen: !isOpen,
    });
  }

  public render() {
    const { headerItems } = this.state;
    return (
      <header className="Header">
        <button className="Header__menu-btn" onClick={this.toggleMenuState}>
          <img src={burgerIcon} alt="" />
          <span>Menu</span>
        </button>

        <nav className="Navigation-Logo">
          <div className="Navigation-Logo__logo">
            <Link href="/">
              <img src={logo} alt="Cordie" />
            </Link>
          </div>

          <ul className="Navigation-Logo__items Navigation-items">
            {headerItems.map((item: IItem) => {
              return (
                <li key={item.id} className="Navigation-items__nav-item">
                  <Link href={`/${item.slug}`}>
                    <span>{item.itemName}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <section className="Header__programs-user Program-User">
          <div className="Program-User__programs-btn">
            <span>ALL PROGRAMS</span>
          </div>
          <div className="Program-User__favrts-profile Wishlist-login">
          <button className="Wishlist-login__wishlist">
              <img src={liked} alt="liked" />
            </button>
            <button className="Wishlist-login__login">
              <img src={login} alt="login" />
            </button>
          </div>
        </section>
        <BurgerMenu
          stateObj={this.state}
          clickHandler={this.handleMenuItemClick}
        />
      </header>
    );
  }
}

const headerState = {
  activeOpenMenuItem: 0,
  headerItems: [
    {
      id: generateUniqueIndex(),
      itemName: 'market',
      slug: 'market',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'media',
      slug: 'media',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'consulting',
      slug: 'consulting',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'for companies',
      slug: 'for-companies',
    },
  ],
  isOpen: false,
  openMenuItems: [
    {
      id: 0,
      itemName: 'Home',
      slug: '',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'Programs',
      slug: 'programs',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'Media',
      slug: 'media',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'Store',
      slug: 'store',
    },
  ],
  openMenuLowerItems: [
    {
      id: generateUniqueIndex(),
      itemName: 'Consulting',
      slug: 'consulting',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'For Companies',
      slug: 'for-companies',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'Contacts',
      slug: 'contacts',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'Jobs',
      slug: 'jobs',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'Partnerships',
      slug: 'partnerships',
    },
    {
      id: generateUniqueIndex(),
      itemName: 'Our Story',
      slug: 'our-story',
    },
  ],
};

export default Header;
