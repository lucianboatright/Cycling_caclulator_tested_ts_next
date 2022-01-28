import '@styles/globals.css';

import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { CounterProvider } from '@src/context/rearCogContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading.
  <CounterProvider>
    <Component {...pageProps} />
  </CounterProvider>
);
export default MyApp;