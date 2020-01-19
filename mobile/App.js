import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <Statusbar barStyle='light-content' backgroundColor='#7D40E7' />,
      <Routes />
    </>  
  );
}
