import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import AuthWrapper from '../hocFile/AuthWrapper';
import HomePage from "./Home/HomePage"






const App = ({ Component, pageProps }: AppProps) => {
  const DefaultComponent = Component || HomePage; 
  return (

      <AuthWrapper Component={DefaultComponent} pageProps={pageProps} />
  );
};

export default observer(App);