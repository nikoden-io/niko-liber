import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import * as React from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nexorigo</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
