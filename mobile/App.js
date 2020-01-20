import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/Routes';

YellowBox.ignoreWarnings([
  'unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <Statusbar barStyle='light-content' backgroundColor='#7D40E7' />,
      <Routes />
    </>  
  );
}
