import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { CogGlobalContext } from '@src/context/CogsContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading.
  <CogGlobalContext>
    <Component {...pageProps} />
  </CogGlobalContext>
);
export default MyApp;