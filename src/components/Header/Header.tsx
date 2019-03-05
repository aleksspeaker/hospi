import Link from 'next/link';

import './Header.scss';

export default () => (
  <header className="Header">
    <button className="Header__menu-btn">
      <span>Menu</span>
    </button>
    <nav className="Navigation-Logo">
      <div className="Navigation-Logo__logo">
        <Link href="/">
          <a>HOSPITALITY.HUB &#8482;</a>
        </Link>{' '}
        |{' '}
      </div>
      <ul className="Navigation-Logo__items Navigation-items">
        <li className="Navigation-items__nav-item">
          <Link href="/market">
            <a>MARKET</a>
          </Link>{' '}
          |{' '}
        </li>
        <li className="Navigation-items__nav-item">
          <Link href="/media">
            <a>MEDIA</a>
          </Link>{' '}
          |{' '}
        </li>
        <li className="Navigation-items__nav-item">
          <Link href="/consulting">
            <a>CONSULTING</a>
          </Link>{' '}
          |{' '}
        </li>
        <li className="Navigation-items__nav-item">
          <Link href="/for-companies">
            <a>FOR COMPANIES</a>
          </Link>{' '}
          |{' '}
        </li>
      </ul>
    </nav>
    <section className="Header__programs-user Program-User">
      <div className="Program-User__programs-btn">
        <span>ALL PROGRAMS</span>
      </div>
      <div className="Program-User__favrts-profile">
        <button>F</button>
        <button>P</button>
      </div>
    </section>
  </header>
);
