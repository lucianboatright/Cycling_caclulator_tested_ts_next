import '@styles/globals.css';

import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { CounterProvider } from '@src/context/RearCogContext';
import { FrontCounterProvider } from '@src/context/FrontCogContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading.
  <FrontCounterProvider>
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  </FrontCounterProvider>
);
export default MyApp;