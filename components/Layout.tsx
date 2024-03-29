import { ReactNode } from 'react';

import Head from 'next/head';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/users">Users List</Link>{' '}
        {/* eslint-disable-line @next/next/no-html-link-for-pages */}| <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&pos;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
