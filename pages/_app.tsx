import Head from 'next/head'
import '../styles/globals.css'
import '../styles/lol.css'
import React from 'react'

interface _appProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<_appProps> = ({ Component, pageProps }) => {
    return (
      <>
        <Head>
          <title>{"unnamed[tv]"}</title>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <link
          rel="stylesheet"
          
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;