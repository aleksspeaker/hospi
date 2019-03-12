
import Head from 'next/head';
import * as React from 'react';
import Header from './Header/Header';

interface IProps {
  title?: string;
}

const Layout: React.FunctionComponent<IProps> = ({ children, title = 'This is the default title' }) => (
  <div className="header">
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
