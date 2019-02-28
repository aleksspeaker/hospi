import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>HOSPITALITY.HUB &#8482;</a></Link> | {' '}
        <Link href='/market'><a>MARKET</a></Link> | {' '}
        <Link href='/media'><a>MEDIA</a></Link> | {' '}
        <Link href='/consulting'><a>CONSULTING</a></Link> | {' '}
        <Link href='/for-companies'><a>FOR COMPANIES</a></Link> | {' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout