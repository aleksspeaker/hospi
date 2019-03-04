import Link from 'next/link';

// import './Header.scss';

export default () => (
  <header className="Header">
    <nav>
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
    <style jsx>{`
      $BORDER_COLOR: red;
      $BG_COLOR: red;
      $FONT_COLOR: red;
      .Header {
        width: 100%;
        height: 46px;
        border-bottom: 1px solid $BORDER_COLOR;
        position: sticky;
        display: flex;
        top: 0;
        left: 0;
        font-size: 11px;
        z-index: 10;
        background: $BG_COLOR;

        .Header__menu-btn {
          width: 160px;
          height: 100%;
          float: left;
          clear: both;
          padding: 0;
          background: transparent;
          border: none;
          position: relative;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          color: $FONT_COLOR;
          outline: none;

          &::after {
            content: '';
            height: 75%;
            width: 1px;
            background: $BORDER_COLOR;
            position: absolute;
            right: 0;
            top: 0;
          }

          @include hoverFade();
        }

        .Header__programs-user.Program-User {
          right: 0;
          height: 100%;
          position: absolute;

          &::before {
            content: '';
            height: 75%;
            width: 1px;
            background: $BORDER_COLOR;
            position: absolute;
            left: 0;
            top: 0;
          }

          .Program-User__programs-btn {
            float: left;
            padding: 10px 20px;
            margin-right: 20px;
            align-items: center;
            position: relative;
            cursor: pointer;
            &::after {
              content: '';
              margin-left: 10px;
              border-radius: 50%;
              width: 26px;
              height: 26px;
              display: inline-block;
              vertical-align: middle;
              background-color: #e6e6e6;
            }

            &::before {
              content: '';
              position: absolute;
              right: 29px;
              top: 22px;
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;

              border-top: 4px solid #646464;
            }
          }

          .Program-User__favrts-profile {
            float: right;
            height: 100%;
            margin-right: 20px;

            & button {
              height: 100%;
              width: 40px;
              border: none;
              padding: 0 10px;
              cursor: pointer;
              background: transparent;
              &:hover {
                opacity: 0.5;
              }
            }
          }
        }
      }

      .Navigation-Logo {
        display: flex;
        justify-content: flex-start;
        width: fit-content;
        float: left;
        margin: 0 100px;

        .Navigation-items {
          display: flex;
          height: 100%;
          margin: 0;
          padding-left: 100px;

          &__nav-item {
            padding: 17px 45px;
            text-align: center;
            cursor: pointer;
            @include hoverFade();
          }
        }
      }
    `}</style>
  </header>
);
