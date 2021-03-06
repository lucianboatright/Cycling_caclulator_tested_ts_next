import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { CounterProvider } from '@src/context/CogsContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading.
  <CounterProvider>
    <Component {...pageProps} />
  </CounterProvider>
);
export default MyApp;