import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
// bg-yellow-200 text-gray-900 dark:bg-purple-900 dark:text-white
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;0,500;1,300;1,400&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <script async src='https://cdn.splitbee.io/sb.js'></script>
        </Head>
        <body className='bg-yellow-200 text-gray-900 dark:bg-purple-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
